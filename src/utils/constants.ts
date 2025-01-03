export interface Devicons {
  iconName: string;
  name: string;
}

export const programingLanguageStacks: Devicons[] = [
  { iconName: "devicon-html5-plain", name: "HTML" },
  { iconName: "devicon-css3-plain", name: "CSS" },
  { iconName: "devicon-javascript-plain", name: "JavaScript" },
  { iconName: "devicon-typescript-plain", name: "TypeScript" },
  { iconName: "devicon-php-plain", name: "PHP" },
  { iconName: "devicon-dart-plain", name: "Dart" },
  { iconName: "devicon-go-plain", name: "Golang" },
  { iconName: "devicon-csharp-plain", name: "c#" },
  { iconName: "devicon-python-plain", name: "Python" },
];

export const frameworkStacks: Devicons[] = [
  { iconName: "devicon-react-original", name: "React" },
  { iconName: "devicon-angular-plain", name: "Angular" },
  { iconName: "devicon-flutter-plain", name: "Flutter" },
  { iconName: "devicon-laravel-original", name: "Laravel" },
  { iconName: "devicon-express-original", name: "Express" },
  { iconName: "devicon-nextjs-original-wordmark", name: "Next.js" },
  { iconName: "devicon-nestjs-original", name: "NestJS" },
  { iconName: "devicon-codeigniter-plain", name: "CodeIgniter" },
  { iconName: "devicon-tailwindcss-original", name: "Tailwind CSS" },
  { iconName: "devicon-bootstrap-plain", name: "Bootstrap" },
  { iconName: "", name: "" },
  { iconName: "", name: "" },
  { iconName: "", name: "" },
];

export const databaseStacks: Devicons[] = [
  { iconName: "devicon-mysql-original", name: "MySQL" },
  { iconName: "devicon-postgresql-plain", name: "PostgreSQL" },
  { iconName: "devicon-sqlite-plain", name: "SQLite" },
  { iconName: "devicon-mongodb-plain", name: "MongoDB" },
];

export const toolStacks: Devicons[] = [
  { iconName: "devicon-git-plain", name: "Git" },
  { iconName: "devicon-postman-plain", name: "Postman" },
];

export type Company = "cv" | "cm";
export const companyList = ["cv", "cm"];
export interface Portfolio {
  company: Company;
  name: string;
  desc: string;
  screenshots: string[];
  url?: string;
  iOSUrl?: string;
  androidUrl?: string;
}

export const portfolioes: Portfolio[] = [
  {
    company: "cm",
    name: "Hrzoft App",
    desc: "ระบบบริหารพนักงาน android และ ios",
    screenshots: [
      "/app-hrzoft/thumbnail.png",
      "/app-hrzoft/screen1.png",
      "/app-hrzoft/screen2.png",
      "/app-hrzoft/screen3.png",
      "/app-hrzoft/screen4.png",
      "/app-hrzoft/screen5.png",
    ],
    androidUrl: "https://play.google.com/store/apps/details?id=com.codemobiles.hrzoft",
    iOSUrl: "https://apps.apple.com/th/app/hrzoft-human-resource/id1661499822",
  },
  {
    company: "cm",
    name: "Hrzoft",
    desc: "ระบบบริหารพนักงานแพลตฟอร์มเว็บไซต์",
    screenshots: [
      "/hrzoft/thumbnail.png",
      "/hrzoft/screen1.png",
      "/hrzoft/screen2.png",
      "/hrzoft/screen3.png",
    ],
    url: "https://hrzoft.com/th",
  },
  {
    company: "cm",
    name: "POSPOSCO",
    desc: "โปรแกรมขายหน้าร้าน POS",
    screenshots: [
      "/posposco/thumbnail.png",
      "/posposco/screen1.png",
      "/posposco/screen2.png",
      "/posposco/screen3.png",
      "/posposco/screen4.png",
    ],
    url: "https://pospos.co",
  },
  {
    company: "cm",
    name: "React Stock Material UI (JS)",
    desc: "โปรแกรมสต๊อกสินค้า",
    screenshots: [
      "/react-stock-mui/thumbnail.png",
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
    desc: "โปรแกรมสต๊อกสินค้า (TS)",
    screenshots: [
      "/react-ts-stock-mui/thumbnail.png",
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
    desc: "ระบบสารสนเทศกิจกรรมสัปดาห์วิทยาศาสตร์แห่งชาติ",
    screenshots: [
      "/science-week/thumbnail.png",
      "/science-week/screen1.png",
      "/science-week/screen2.png",
      "/science-week/screen3.png",
      "/science-week/screen4.png",
      "/science-week/screen5.png",
    ],
  },
];

export interface Shareds {
  [key: string]: string;
}

export const shareds = {
  resumeImg: "https://drive.google.com/file/d/1UAN3RP112t_pdIR8DNZSBFv0MXzQTHzQ/view?usp=sharing",
  resumePDF: "https://drive.google.com/file/d/1IzVbGfTfmQq2g2rMY0-tUT4z6D688xS6/view?usp=sharing",
};
