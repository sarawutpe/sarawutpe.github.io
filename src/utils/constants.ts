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
      "/cm/app-hrzoft/thumbnail.webp",
      "/cm/app-hrzoft/screenshot1.webp",
      "/cm/app-hrzoft/screenshot2.webp",
      "/cm/app-hrzoft/screenshot3.webp",
      "/cm/app-hrzoft/screenshot4.webp",
      "/cm/app-hrzoft/screenshot5.webp",
    ],
    androidUrl: "https://play.google.com/store/apps/details?id=com.codemobiles.hrzoft",
    iOSUrl: "https://apps.apple.com/th/app/hrzoft-human-resource/id1661499822",
  },
  {
    company: "cm",
    name: "Hrzoft",
    desc: "ระบบบริหารพนักงานแพลตฟอร์มเว็บไซต์",
    screenshots: [
      "/cm/hrzoft/thumbnail.webp",
      "/cm/hrzoft/screenshot1.webp",
      "/cm/hrzoft/screenshot2.webp",
      "/cm/hrzoft/screenshot3.webp",
    ],
    url: "https://hrzoft.com/th",
  },
  {
    company: "cm",
    name: "POSPOSCO",
    desc: "โปรแกรมขายหน้าร้าน POS",
    screenshots: [
      "/cm/posposco/thumbnail.webp",
      "/cm/posposco/screenshot1.webp",
      "/cm/posposco/screenshot2.webp",
      "/cm/posposco/screenshot3.webp",
      "/cm/posposco/screenshot4.webp",
    ],
    url: "https://pospos.co",
  },
  {
    company: "cm",
    name: "React Stock Material UI (JS)",
    desc: "โปรแกรมสต๊อกสินค้า",
    screenshots: [
      "/cm/react-stock-mui/thumbnail.webp",
      "/cm/react-stock-mui/screenshot1.webp",
      "/cm/react-stock-mui/screenshot2.webp",
      "/cm/react-stock-mui/screenshot3.webp",
      "/cm/react-stock-mui/screenshot4.webp",
      "/cm/react-stock-mui/screenshot5.webp",
      "/cm/react-stock-mui/screenshot6.webp",
      "/cm/react-stock-mui/screenshot7.webp",
      "/cm/react-stock-mui/screenshot8.webp",
      "/cm/react-stock-mui/screenshot9.webp",
    ],
  },
  {
    company: "cm",
    name: "React (Typescript) Stock Material UI",
    desc: "โปรแกรมสต๊อกสินค้า (TS)",
    screenshots: [
      "/cm/react-ts-stock-mui/thumbnail.webp",
      "/cm/react-ts-stock-mui/screenshot1.webp",
      "/cm/react-ts-stock-mui/screenshot2.webp",
      "/cm/react-ts-stock-mui/screenshot3.webp",
      "/cm/react-ts-stock-mui/screenshot4.webp",
      "/cm/react-ts-stock-mui/screenshot5.webp",
      "/cm/react-ts-stock-mui/screenshot6.webp",
      "/cm/react-ts-stock-mui/screenshot7.webp",
      "/cm/react-ts-stock-mui/screenshot8.webp",
      "/cm/react-ts-stock-mui/screenshot9.webp",
    ],
  },
  {
    company: "cm",
    name: "Science Week Information System",
    desc: "ระบบสารสนเทศกิจกรรมสัปดาห์วิทยาศาสตร์แห่งชาติ",
    screenshots: [
      "/cm/science-week/thumbnail.webp",
      "/cm/science-week/screenshot1.webp",
      "/cm/science-week/screenshot2.webp",
      "/cm/science-week/screenshot3.webp",
      "/cm/science-week/screenshot4.webp",
      "/cm/science-week/screenshot5.webp",
    ],
  },
  {
    company: "cm",
    name: "PressMart UI Clone",
    desc: "Landing page",
    screenshots: ["/cm/pressmart-ui/thumbnail.webp", "/cm/pressmart-ui/screenshot1.webp"],
  },
  {
    company: "cv",
    name: "Cityvariety",
    desc: "Landing page เว็บหลัก",
    screenshots: [
      "/cv/cityvariety-landingpage/thumbnail.webp",
      "/cv/cityvariety-landingpage/screenshot1.webp",
    ],
    url: "https://www.cityvariety.co.th/",
  },
  {
    company: "cv",
    name: "เทศบาลตําบลเขตรอุดมศักดิ์ (Khetudomsak Subdistrict Municipality)",
    desc: "แอปเทศบาลตําบลเขตรอุดมศักดิ์",
    screenshots: [
      "/cv/khetudomsak.go.th/thumbnail.webp",
      "/cv/khetudomsak.go.th/screenshot1.webp",
      "/cv/khetudomsak.go.th/screenshot2.webp",
      "/cv/khetudomsak.go.th/screenshot3.webp",
    ],
    androidUrl: "https://play.google.com/store/apps/details?id=th.go.khetudomsak.app",
    iOSUrl: "https://apps.apple.com/th/app/เทศบาลตำบลเขตรอ-ดมศ-กด/id6503336624?l=th",
  },
  {
    company: "cv",
    name: "เทศบาลเมืองกะทู้ (ทม.กะทู้) จังหวัดภูเก็ต",
    desc: "เว็บไซต์ เทศบาลเมืองกะทู้ (ทม.กะทู้) จังหวัดภูเก็ต",
    screenshots: ["/cv/kathucity.go.th/thumbnail.webp", "/cv/kathucity.go.th/screenshot1.webp"],
    url: "https://kathucity.go.th",
  },
  {
    company: "cv",
    name: "องค์การบริหารส่วนจังหวัดเชียงราย",
    desc: "เว็บไซต์องค์การบริหารส่วนจังหวัดเชียงราย",
    screenshots: ["/cv/chiangraipao.go.th/thumbnail.webp", "/cv/chiangraipao.go.th/screenshot1.webp"],
    url: "https://www.chiangraipao.go.th/",
  },
  {
    company: "cv",
    name: "เทศบาลเมืองคลองแห จังหวัดสงขลา (ทม.คลองแห)",
    desc: "เว็บไซต์ เทศบาลเมืองคลองแห จังหวัดสงขลา (ทม.คลองแห)",
    screenshots: [
      "/cv/www.klonghaecity.go.th/thumbnail.webp",
      "/cv/www.klonghaecity.go.th/screenshot1.webp",
    ],
    url: "https://www.klonghaecity.go.th/demo",
  },
  {
    company: "cv",
    name: "สำนักงานจังหวัดสมุทรสงคราม",
    desc: "เว็บไซต์สำนักงานจังหวัดสมุทรสงคราม",
    screenshots: [
      "/cv/samutsongkhram.go.th/thumbnail.webp",
      "/cv/samutsongkhram.go.th/screenshot1.webp",
    ],
    url: "https://ww2.samutsongkhram.go.th/",
  },
  {
    company: "cv",
    name: "สถานีขนส่งเทศบาลนครหาดใหญ่",
    desc: "เว็บไซต์สถานีขนส่งเทศบาลนครหาดใหญ่",
    screenshots: [
      "/cv/hatyaicity.go.th/transport/thumbnail.webp",
      "/cv/hatyaicity.go.th/transport/screenshot1.webp",
    ],
    url: "https://www.hatyaicity.go.th/transport/",
  },
  {
    company: "cv",
    name: "ที่ทำการปกครองจังหวัดสงขลา",
    desc: "เว็บไซต์ที่ทำการปกครองจังหวัดสงขลา",
    screenshots: ["/cv/songkhladopa.go.th/thumbnail.webp", "/cv/songkhladopa.go.th/screenshot1.webp"],
    url: "https://www.songkhladopa.go.th/",
  },
  {
    company: "cv",
    name: "องค์การบริหารส่วนตำบลนิคมกระเสียว",
    desc: "เว็บไซต์องค์การบริหารส่วนตำบลนิคมกระเสียว",
    screenshots: ["/cv/nikomkraseaw.go.th/thumbnail.webp", "/cv/nikomkraseaw.go.th/screenshot1.webp"],
    url: "https://www.nikomkraseaw.go.th/",
  },
  {
    company: "cv",
    name: "Islamicschoolsandbox ศูนย์วิจัยวิทยาการอิสลามและมุสลิมศึกษา",
    desc: "เว็บไซต์ ศูนย์วิจัยวิทยาการอิสลามและมุสลิมศึกษา",
    screenshots: [
      "/cv/islamicschoolsandbox.org/thumbnail.webp",
      "/cv/islamicschoolsandbox.org/screenshot1.webp",
    ],
    url: "https://islamicschoolsandbox.org",
  },
  {
    company: "cv",
    name: "เทศบาลเมืองแก่งคอย จังหวัดสระบุรี (ทม.แก่งคอย)",
    desc: "เว็บไซต์ eService เทศบาลเมืองแก่งคอย จังหวัดสระบุรี (ทม.แก่งคอย)",
    screenshots: [
      "/cv/kaengkhoi.go.th/eservice/thumbnail.webp",
      "/cv/kaengkhoi.go.th/eservice/screenshot1.webp",
    ],
    url: "https://www.kaengkhoi.go.th/eservice",
  },
  {
    company: "cv",
    name: "เทศบาลเมืองไทรม้า",
    desc: "เว็บไซต์ eService เทศบาลเมืองไทรม้า",
    screenshots: [
      "/cv/saima.go.th/eservice/thumbnail.webp",
      "/cv/saima.go.th/eservice/screenshot1.webp",
    ],
    url: "https://saima.go.th/eservice",
  },
  {
    company: "cv",
    name: "เทศบาลตำบลเนินพระ (ทต.เนินพระ) จังหวัดระยอง",
    desc: "เว็บไซต์ เทศบาลตำบลเนินพระ (ทต.เนินพระ) จังหวัดระยอง",
    screenshots: ["/cv/noenphracity.go.th/thumbnail.webp", "/cv/noenphracity.go.th/screenshot1.webp"],
    url: "https://www.noenphracity.go.th",
  },
  {
    company: "cv",
    name: "สำนักงานส่งเสริมการปกครองท้องถิ่นจังหวัดสุโขทัย (สถ.จ.สุโขทัย)",
    desc: "เว็บไซต์ สำนักงานส่งเสริมการปกครองท้องถิ่นจังหวัดสุโขทัย (สถ.จ.สุโขทัย)",
    screenshots: [
      "/cv/sukhothailocal.go.th/thumbnail.webp",
      "/cv/sukhothailocal.go.th/screenshot1.webp",
    ],
    url: "https://www.sukhothailocal.go.th/demo",
  },
  {
    company: "cv",
    name: "สำนักงานส่งเสริมการปกครองท้องถิ่นจังหวัดสิงห์บุรี (สถ.จ.สิงห์บุรี) จ.สิงห์บุรี",
    desc: "เว็บไซต์ สำนักงานส่งเสริมการปกครองท้องถิ่นจังหวัดสิงห์บุรี (สถ.จ.สิงห์บุรี) จ.สิงห์บุรี",
    screenshots: [
      "/cv/singburi-local.go.th/thumbnail.webp",
      "/cv/singburi-local.go.th/screenshot1.webp",
    ],
    url: "https://singburi-local.go.th",
  },
  {
    company: "cv",
    name: "องค์การบริหารส่วนตำบลสักงาม (อบต.สักงาม) จังหวัด กำแพงเพชร",
    desc: "เว็บไซต์ องค์การบริหารส่วนตำบลสักงาม (อบต.สักงาม) จังหวัด กำแพงเพชร",
    screenshots: ["/cv/sakngam.go.th/thumbnail.webp", "/cv/sakngam.go.th/screenshot1.webp"],
    url: "https://www.sakngam.go.th",
  },
  {
    company: "cv",
    name: "เทศบาลตำบลตากฟ้า (ทต.ตากฟ้า) จังหวัดนครสวรรค์",
    desc: "เว็บไซต์ เทศบาลตำบลตากฟ้า (ทต.ตากฟ้า) จังหวัดนครสวรรค์",
    screenshots: ["/cv/takfacity.go.th/thumbnail.webp", "/cv/takfacity.go.th/screenshot1.webp"],
    url: "https://www.takfacity.go.th",
  },
  {
    company: "cv",
    name: "องค์การบริหารส่วนตำบลสามร้อยยอด",
    desc: "เว็บไซต์ องค์การบริหารส่วนตำบลสามร้อยยอด",
    screenshots: ["/cv/samroiyot.go.th/thumbnail.webp", "/cv/samroiyot.go.th/screenshot1.webp"],
    url: "https://samroiyot.go.th",
  },
  {
    company: "cv",
    name: "เทศบาลตำบลจันดี (ทต.จันดี) จังหวัดนครศรีธรรมราช",
    desc: "เว็บไซต์ เทศบาลตำบลจันดี (ทต.จันดี) จังหวัดนครศรีธรรมราช",
    screenshots: ["/cv/chandeecity.go.th/thumbnail.webp", "/cv/chandeecity.go.th/screenshot1.webp"],
    url: "https://chandeecity.go.th",
  },
  {
    company: "cv",
    name: "สหกรณ์ออมทรัพย์ องค์การบริหารส่วนจังหวัดเลย จำกัด (อบจ.เลย)",
    desc: "เว็บไซต์ สหกรณ์ออมทรัพย์ องค์การบริหารส่วนจังหวัดเลย จำกัด (อบจ.เลย)",
    screenshots: [
      "/cv/loeipaosavingcoop.com/thumbnail.webp",
      "/cv/loeipaosavingcoop.com/screenshot1.webp",
    ],
    url: "https://loeipaosavingcoop.com",
  },
  {
    company: "cv",
    name: "เทศบาลตำบลไร่ใหม่ (ทต.ไร่ใหม่) จังหวัด ประจวบคีรีขันธ์",
    desc: "เว็บไซต์ เทศบาลตำบลไร่ใหม่ (ทต.ไร่ใหม่) จังหวัด ประจวบคีรีขันธ์",
    screenshots: ["/cv/raimai.go.th/thumbnail.webp", "/cv/raimai.go.th/screenshot1.webp"],
    url: "https://raimai.go.th",
  },
  {
    company: "cv",
    name: "เทศบาลตำบลทุ่งกระบือ",
    desc: "เว็บไซต์ เทศบาลตำบลทุ่งกระบือ จังหวัดตรัง",
    screenshots: ["/cv/thungkrabue.go.th/thumbnail.webp", "/cv/thungkrabue.go.th/screenshot1.webp"],
    url: "https://www.thungkrabue.go.th",
  },
  {
    company: "cv",
    name: "องค์การบริหารส่วนตำบลทำนบ จ.นครสวรรค์ (อบต.ทำนบ)",
    desc: "เว็บไซต์ องค์การบริหารส่วนตำบลทำนบ จ.นครสวรรค์ (อบต.ทำนบ)",
    screenshots: ["/cv/tamnob.go.th/thumbnail.webp", "/cv/tamnob.go.th/screenshot1.webp"],
    url: "https://tamnob.go.th",
  },

  {
    company: "cv",
    name: "องค์การบริหารส่วนตำบลทุ่งขมิ้น จังหวัดสงขลา",
    desc: "เว็บไซต์ องค์การบริหารส่วนตำบลทุ่งขมิ้น จังหวัดสงขลา",
    screenshots: ["/cv/thungkhamin.go.th/thumbnail.webp", "/cv/thungkhamin.go.th/screenshot1.webp"],
    url: "https://thungkhamin.go.th/new",
  },
  {
    company: "cv",
    name: "องค์การบริหารส่วนตำบลลำทับ จังหวัดกระบี่",
    desc: "เว็บไซต์ องค์การบริหารส่วนตำบลลำทับ จังหวัดกระบี่",
    screenshots: ["/cv/lamthap.go.th/thumbnail.webp", "/cv/lamthap.go.th/screenshot1.webp"],
    url: "https://www.lamthap.go.th",
  },
  {
    company: "cv",
    name: "องค์การบริหารส่วนตำบลทุ่งไทรทอง (อบต.ทุ่งไทรทอง)",
    desc: "เว็บไซต์ องค์การบริหารส่วนตำบลทุ่งไทรทอง (อบต.ทุ่งไทรทอง)",
    screenshots: [
      "/cv/thungsaithong.go.th/thumbnail.webp",
      "/cv/thungsaithong.go.th/screenshot1.webp",
    ],
    url: "https://www.thungsaithong.go.th",
  },
  {
    company: "cv",
    name: "เทศบาลตำบลพะวง (ทต.พะวง) จังหวัดสงขลา",
    desc: "เว็บไซต์ เทศบาลตำบลพะวง (ทต.พะวง) จังหวัดสงขลา",
    screenshots: ["/cv/pawong.go.th/thumbnail.webp", "/cv/pawong.go.th/screenshot1.webp"],
    url: "https://www.pawong.go.th",
  },
  {
    company: "cv",
    name: "อบต.หนองแสน",
    desc: "เว็บไซต์ อบต.หนองแสน จ. มหาสารคาม",
    screenshots: [
      "/cv/nongsaen-wapi.go.th/thumbnail.webp",
      "/cv/nongsaen-wapi.go.th/screenshot1.webp",
    ],
    url: "https://nongsaen-wapi.go.th",
  },
  {
    company: "cv",
    name: "องค์การบริหารส่วนตำบลปากบาง อ.เทพา จ.สงขลา",
    desc: "เว็บไซต์ องค์การบริหารส่วนตำบลปากบาง อ.เทพา จ.สงขลา",
    screenshots: ["/cv/pakbang.go.th/thumbnail.webp", "/cv/pakbang.go.th/screenshot1.webp"],
    url: "https://www.pakbang.go.th",
  },

  {
    company: "cv",
    name: "องค์การบริหารส่วนตำบลคลองรี อำเภอสทิงพระ จังหวัดสงขลา",
    desc: "เว็บไซต์ องค์การบริหารส่วนตำบลคลองรี อำเภอสทิงพระ จังหวัดสงขลา",
    screenshots: ["/cv/khlongree.go.th/thumbnail.webp", "/cv/khlongree.go.th/screenshot1.webp"],
    url: "https://www.khlongree.go.th",
  },

  {
    company: "cv",
    name: "เทศบาลตำบลแสลงพัน จังหวัดสระบุรี",
    desc: "เว็บไซต์ เทศบาลตำบลแสลงพัน จังหวัดสระบุรี",
    screenshots: ["/cv/salaengphan.go.th/thumbnail.webp", "/cv/salaengphan.go.th/screenshot1.webp"],
    url: "https://salaengphan.go.th",
  },
  {
    company: "cv",
    name: "เทศบาลตำบลเขาพนม จังหวัดกระบี่ (ทต.เขาพนม)",
    desc: "เทศบาลตำบลเขาพนม จังหวัดกระบี่ (ทต.เขาพนม)",
    screenshots: [
      "/cv/khaophanomcity.go.th/thumbnail.webp",
      "/cv/khaophanomcity.go.th/screenshot1.webp",
    ],
    url: "https://www.khaophanomcity.go.th/",
  },
];

export interface Shareds {
  [key: string]: string;
}

export const shareds = {
  resumeImg: "/my/cv-sarawut c.jpg",
  resumePDF: "/my/cv-sarawut c.pdf",
};
