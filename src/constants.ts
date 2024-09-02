export type Company = "cv" | "cm";

export interface Portfolio {
  company: Company;
  name: string;
  desc?: string;
  thumbnail: string;
  screenshots: string[];
  url?: string;
  iOSUrl?: string;
  androidUrl?: string;
}

export const portfolioes: Portfolio[] = [
  {
    company: "cm",
    name: "Hrzoft App",
    thumbnail: "/app-hrzoft/thumbnail.png",
    screenshots: ["/app-hrzoft/screen1.png", "/app-hrzoft/screen2.png", "/app-hrzoft/screen3.png", "/app-hrzoft/screen4.png", "/app-hrzoft/screen5.png"],
    androidUrl: "https://play.google.com/store/apps/details?id=com.codemobiles.hrzoft",
    iOSUrl: "https://apps.apple.com/th/app/hrzoft-human-resource/id1661499822",
  },
  {
    company: "cm",
    name: "Hrzoft",
    thumbnail: "/hrzoft/thumbnail.png",
    screenshots: ["/hrzoft/screen1.png", "/hrzoft/screen2.png", "/hrzoft/screen3.png"],
    url: "https://hrzoft.com/th",
  },
  {
    company: "cm",
    name: "POSPOSCO",
    thumbnail: "/posposco/thumbnail.png",
    screenshots: ["/posposco/screen1.png", "/posposco/screen2.png", "/posposco/screen3.png", "/posposco/screen4.png"],
    url: "https://pospos.co",
  },
  {
    company: "cm",
    name: "React Stock Material UI",
    thumbnail: "/react-stock-mui/thumbnail.png",
    screenshots: [
      "/react-stock-mui/screen1.png",
      "/react-stock-mui/screen2.png",
      "/react-stock-mui/screen3.png",
      "/react-stock-mui/screen4.png",
      "/react-stock-mui/screen5.png",
      "/react-stock-mui/screen6.png",
      "/react-stock-mui/screen7.png",
      "/react-stock-mui/screen8.png",
      "/react-stock-mui/screen9.png",
    ],
  },
  {
    company: "cm",
    name: "React (Typescript) Stock Material UI",
    thumbnail: "/react-ts-stock-mui/thumbnail.png",
    screenshots: [
      "/react-ts-stock-mui/screen1.png",
      "/react-ts-stock-mui/screen2.png",
      "/react-ts-stock-mui/screen3.png",
      "/react-ts-stock-mui/screen4.png",
      "/react-ts-stock-mui/screen5.png",
      "/react-ts-stock-mui/screen6.png",
      "/react-ts-stock-mui/screen7.png",
      "/react-ts-stock-mui/screen8.png",
      "/react-ts-stock-mui/screen9.png",
    ],
  },
  {
    company: "cm",
    name: "Science Week Information System",
    thumbnail: "/science-week/thumbnail.png",
    screenshots: ["/science-week/screen1.png", "/science-week/screen2.png", "/science-week/screen3.png", "/science-week/screen4.png", "/science-week/screen5.png"],
  },
  {
    company: "cm",
    name: "PHP-Stock",
    thumbnail: "/php-stock/thumbnail.png",
    screenshots: [
      "/php-stock/screen1.png",
      "/php-stock/screen2.png",
      "/php-stock/screen3.png",
      "/php-stock/screen4.png",
      "/php-stock/screen5.png",
      "/php-stock/screen6.png",
      "/php-stock/screen7.png",
      "/php-stock/screen8.png",
      "/php-stock/screen9.png",
    ],
  },
];
