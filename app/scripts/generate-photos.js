import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

const accountId = process.env.CF_ACCOUNT_ID;
const accessKeyId = process.env.CF_R2_ACCESS_KEY_ID;
const secretAccessKey = process.env.CF_R2_SECRET_ACCESS_KEY;

const bucketName = "photography-globe"; // your bucket
const prefix = "taipei/"; // folder prefix
const baseUrl = `https://pub-300b60d7f10641be89a909834ea4a645.r2.dev/${prefix}`;
const outputDir = "./data";

const s3 = new S3Client({
  region: "auto",
  endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

async function generateJSON() {
  let continuationToken;
  let images = [];

  do {
    const response = await s3.send(
      new ListObjectsV2Command({
        Bucket: bucketName,
        Prefix: prefix,
        ContinuationToken: continuationToken,
      })
    );

    const files =
      response.Contents?.filter((obj) =>
        /\.(jpg|jpeg|png|webp)$/i.test(obj.Key || "")
      ).map((obj) => obj.Key) || [];

    images = images.concat(files);

    continuationToken = response.IsTruncated
      ? response.NextContinuationToken
      : undefined;
  } while (continuationToken);

  const jsonArray = images.map((file) => ({
    src: `${baseUrl}${file.replace(prefix, "")}`,
  }));

  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);
  fs.writeFileSync(
    `${outputDir}/taipei.json`,
    JSON.stringify(jsonArray, null, 2)
  );
  console.log(`Generated taipei.json with ${images.length} images.`);
}

generateJSON().catch(console.error);
