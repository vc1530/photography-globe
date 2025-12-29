import { PIN_TYPE } from "@/app/constants";

export const siteConfig = {
  common: {
    numCountries: 13,
    initials: "VC",
    homeTimeZone: "America/New_York",
    homeCity: "new york city",
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
      label: "new york city",
      countryCode: "US",
      description:
        "is where i was born and raised! i still currently work and live here in brooklyn.",
      type: PIN_TYPE.CITY,
    },
    {
      label: "japan",
      countryCode: "JP",
      description:
        "i visited tokyo in 2024 when i was traveling asia. unfortunately, i got food poisoning from eating too much raw fish but i still had the best matcha of my life.",
      type: PIN_TYPE.COUNTRY,
    },
    {
      lat: 48.8566,
      lng: 2.3522,
      label: "paris",
      countryCode: "FR",
      description:
        "is where i studied abroad during my undergrad! i learned that though i am not a fan of french food, i love a good french pastry.",
      type: PIN_TYPE.CITY,
    },
    {
      label: "yunnan",
      type: PIN_TYPE.STATE,
      countryCode: "CN",
      description:
        "is where i traveled to for spring break during my last semester of college! i learned a lot about yunnan through my chinese language textbooks so coming here was always a goal of mine.",
    },
    {
      label: "taipei",
      countryCode: "TW",
      description:
        "is my favorite city in the world. some of my family lives here and i try to visit every year or so. i fell in love with biking and braised pork rice.",
    },
    {
      label: "san francisco",
      countryCode: "US",
      description:
        "is where i studied abroad during my undergrad! i learned that though i am not a fan of french food, i love a good french pastry.",
    },
    {
      label: "ciudad de méxico",
      countryCode: "MX",
      description:
        "is where i studied abroad during my undergrad! i learned that though i am not a fan of french food, i love a good french pastry.",
    },
    {
      label: "london",
      countryCode: "GB",
      description:
        "is where i studied abroad during my undergrad! i learned that though i am not a fan of french food, i love a good french pastry.",
    },
    {
      label: "south korea",
      countryCode: "KR",
      type: PIN_TYPE.COUNTRY,
      description:
        "is where i studied abroad during my undergrad! i learned that though i am not a fan of french food, i love a good french pastry.",
    },
    {
      label: "puerto rico",
      countryCode: "PR",
      type: PIN_TYPE.COUNTRY,
      description:
        "is where i studied abroad during my undergrad! i learned that though i am not a fan of french food, i love a good french pastry.",
    },
    {
      label: "switzerland",
      countryCode: "CH",
      type: PIN_TYPE.COUNTRY,
      description:
        "is where i studied abroad during my undergrad! i learned that though i am not a fan of french food, i love a good french pastry.",
    },
    {
      label: "italy",
      countryCode: "IT",
      type: PIN_TYPE.COUNTRY,
      description:
        "is where i studied abroad during my undergrad! i learned that though i am not a fan of french food, i love a good french pastry.",
    },
  ],
};
