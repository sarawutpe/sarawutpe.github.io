import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FsLightbox from "fslightbox-react";
import { portfolioes, Company } from "../utils/constants";

interface AppBarProps {
  pageNumber: number;
  title: string;
  onChangePage: (page: number) => void;
}

const AppBar: React.FC<AppBarProps> = ({ pageNumber, title, onChangePage }) => {
  return (
    <div className="flex justify-between w-full pt-2 pb-4">
      
      <div>
        <button onClick={() => onChangePage(1)} className="flex justify-center items-center w-10 h-10 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
      </div>
      <div className="text-zinc-800 font-medium text-lg">{title}</div>
      <div>
        <button
          onClick={() => onChangePage(2)}
          className="flex justify-center items-center w-10 h-10 rounded-full text-gray-500 hover:text-gray-700 disabled:opacity-25 focus:outline-none"
          disabled={pageNumber === 2}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

interface ContentProps {
  content: Company;
  onOpenLightbox: (screenshots: string[]) => void;
}

const Content: React.FC<ContentProps> = ({ content, onOpenLightbox }) => {
  return (
    <div className="p-2 sm:p-4">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-6">
        {portfolioes
          .filter((portfolio) => portfolio.company === content)
          .map((data, index) => (
            <div key={index} onClick={() => onOpenLightbox(data.screenshots)} className="group p-2">
              <img src={data.thumbnail} alt="screenshot" className="w-full mb-2 rounded-xl overflow-hidden cursor-pointer transition hover:scale-105" />
              <p className="text-xs sm:text-lg text-center font-medium mb-1">{data.name}</p>
              <div className="flex justify-center gap-4">
                {data.url && (
                  <a href={data.url} target="_blank">
                    <img src="/icon-world-wide-web.png" alt="world wide web" className="max-w-14 max-h-5" />
                  </a>
                )}
                {data.androidUrl && (
                  <a href={data.androidUrl} target="_blank">
                    <img src="/icon-google-playstore.webp" alt="playstore" className="max-w-20 max-h-5" />
                  </a>
                )}
                {data.iOSUrl && (
                  <a href={data.iOSUrl} target="_blank">
                    <img src="/icon-ios-appstore.webp" alt="appstore" className="max-w-20 max-h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

const PortfolioPage: React.FC = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [screenshots, setScreenshots] = useState<string[]>([]);
  const [isOpenLightbox, setIsOpenLightbox] = useState<boolean>(false);
  const [isOpenOnMount, setIsOpenOnMount] = useState<boolean>(false);

  const navigate = useNavigate();
  const { project } = useParams<{ project: Company }>();

  function navigatePage(page: number) {
    if (pageNumber == page) {
      navigate("/");
    } else {
      setPageNumber(page);
    }
  }

  function onOpenLightbox(screenshots: string[]) {
    setIsOpenOnMount(true);
    setScreenshots(screenshots);
    setIsOpenLightbox((prev) => !prev);
  }

  function onCloseLightbox() {
    console.log("close");
    setIsOpenOnMount(false);
    setScreenshots([]);
  }

  return (
    <div className="block w-full max-w-7xl lg:px-8 mx-auto">
      {project === "cm" && pageNumber == 1 && (
        <div>
          <AppBar title="Codemobiles" pageNumber={pageNumber} onChangePage={navigatePage} />
          <Content content="cm" onOpenLightbox={onOpenLightbox} />
        </div>
      )}
      {project === "cm" && pageNumber == 2 && (
        <div>
          <AppBar title="Cityvariety" pageNumber={pageNumber} onChangePage={navigatePage} />
          <Content content="cv" onOpenLightbox={onOpenLightbox} />
        </div>
      )}
      {screenshots.length > 0 && <FsLightbox toggler={isOpenLightbox} sources={screenshots} openOnMount={isOpenOnMount} onClose={onCloseLightbox} />}
    </div>
  );
};

export default PortfolioPage;
