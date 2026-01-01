import { PIN_TYPE } from "@/app/constants";

export const siteConfig = {
  common: {
    numCountries: 13,
    initials: "VC",
    homeTimeZone: "America/New_York",
    homeCity: "New York City",
  },
  colors: {
    accent: "#c09bd8",
    secondary: "#87b38d",
    tertiary: "#5e9bbeff",
  },
  pins: [
    {
      lat: 40.7128,
      lng: -74.006,
      label: "New York City",
      countryCode: "US",
      description:
        "is where I was born and raised! I still currently work and live here in brooklyn.",
      type: PIN_TYPE.CITY,
    },
    {
      label: "Japan",
      countryCode: "JP",
      description:
        "I visited tokyo in 2024 when I was traveling asia. Unfortunately, I got food poisoning from eating too much raw fish but I still had the best matcha of my life.",
      type: PIN_TYPE.COUNTRY,
    },
    {
      lat: 48.8566,
      lng: 2.3522,
      label: "Paris",
      countryCode: "FR",
      description:
        "is where I studied abroad during my undergrad! I learned that though I am not a fan of french food, I love a good french pastry.",
      type: PIN_TYPE.CITY,
    },
    {
      label: "Yunnan",
      type: PIN_TYPE.STATE,
      countryCode: "CN",
      description:
        "is where I traveled to for Spring break during my last semester of college! I learned a lot about Yunnan through my chinese language textbooks so coming here was always a goal of mine.",
    },
    {
      label: "Taipei",
      countryCode: "TW",
      description:
        "is my favorite city in the world. Some of my family lives here and I try to visit every year or so. I fell in love with biking and braised pork rice.",
    },
    {
      label: "San Francisco",
      countryCode: "US",
      description:
        "is where I studied abroad during my undergrad! i learned that though i am not a fan of french food, i love a good french pastry.",
    },
    {
      label: "Ciudad de México",
      countryCode: "MX",
      description:
        "is where i studied abroad during my undergrad! i learned that though i am not a fan of french food, i love a good french pastry.",
    },
    {
      label: "London",
      countryCode: "GB",
      description:
        "is where i studied abroad during my undergrad! i learned that though i am not a fan of french food, i love a good french pastry.",
    },
    {
      label: "South Korea",
      countryCode: "KR",
      type: PIN_TYPE.COUNTRY,
      description:
        "is where i studied abroad during my undergrad! i learned that though i am not a fan of french food, i love a good french pastry.",
    },
    {
      label: "Puerto Rico",
      countryCode: "PR",
      type: PIN_TYPE.COUNTRY,
      description:
        "is where i studied abroad during my undergrad! i learned that though i am not a fan of french food, i love a good french pastry.",
    },
    {
      label: "Switzerland",
      countryCode: "CH",
      type: PIN_TYPE.COUNTRY,
      description:
        "is where i studied abroad during my undergrad! i learned that though i am not a fan of french food, i love a good french pastry.",
    },
    {
      label: "Italy",
      countryCode: "IT",
      type: PIN_TYPE.COUNTRY,
      description:
        "is where i studied abroad during my undergrad! i learned that though i am not a fan of french food, i love a good french pastry.",
    },
  ],
};
