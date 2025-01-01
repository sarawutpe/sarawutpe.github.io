import React, { useState } from "react";
import { Company, Portfolio, portfolioes } from "../utils/constants";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "../App.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../swiper-custom.css";
import Lightbox from "../components/Lightbox";

interface PostProps {
  company: Company;
}

export const Post: React.FC<PostProps> = ({ company }) => {
  const [isOpenLightbox, setIsOpenLightbox] = useState<boolean>(false);
  const [lightboxLoadImgId, setLightboxLoadImgId] = useState("");
  const [lightboxTitle, setLightboxTitle] = useState("");
  const [screenshots, setScreenshots] = useState<string[]>([]);

  const handleOpenLightbox = (data: Portfolio) => {
    if (!data) return;
    setLightboxTitle(data.name);
    setScreenshots(data.screenshots);
    setIsOpenLightbox(true);
  };

  const handleCloseLightbox = () => {
    setIsOpenLightbox(false);
    setLightboxTitle("");
    setScreenshots([]);
    setLightboxLoadImgId("");
  };

  const handleSlideChange = (swiper: SwiperClass) => {
    if (swiper.realIndex == 0) return;
    setLightboxLoadImgId(`#preview${swiper.realIndex + 1}`);
  };
  return (
    <>
      {/* Posts */}
      {portfolioes
        .filter((data) => data.company === company)
        .map((portfolio, portfolioIndex) => (
          <div key={portfolioIndex} className="block bg-white shadow-md rounded-lg p-3 mb-4">
            <div className="py-2">
              <span className="block text-lg font-bold">{portfolio.name}</span>
              <span className="block text-base" style={{ fontFamily: "Kanit" }}>
                {portfolio.desc}
              </span>
            </div>
            <div className="p-2 relative">
              {/* slide */}
              <Swiper
                style={{ width: "100%", height: "100%" }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Pagination, Navigation]}
                loop={true}
                onSlideChange={handleSlideChange}
              >
                {portfolio.screenshots.map((screenshot, screenshotIndex) => (
                  <SwiperSlide key={screenshotIndex} onClick={() => handleOpenLightbox(portfolio)}>
                    <div className="flex justify-center cursor-pointer">
                      <div className={screenshotIndex > 0 ? "max-h-[300px]" : ""}>
                        <img src={screenshot} className="w-full h-auto object-contain" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* zoom */}
              <div
                onClick={() => handleOpenLightbox(portfolio)}
                className="absolute top-0 right-0 z-10 cursor-pointer"
              >
                <img src="/icon-scaleup.png" className="w-6 h-6" />
              </div>
            </div>
            <div className="p-2 flex gap-4">
              {portfolio.url && (
                <a href={portfolio.url} target="_blank">
                  <div className="flex items-center gap-1 p-1 rounded-md bg-white hover:bg-gray-100 transition-all w-[90x]">
                    <img
                      src="/icon-world-wide-web.png"
                      alt="world wide web"
                      className="max-w-14 max-h-5"
                    />
                    <span className="text-gray-600 text-sm">Website</span>
                  </div>
                </a>
              )}
              {portfolio.androidUrl && (
                <a href={portfolio.androidUrl} target="_blank">
                  <div className="flex items-center gap-1 p-1 rounded-md bg-white hover:bg-gray-100 transition-all w-[90x]">
                    <img
                      src="/icon-playstore.png"
                      alt="world wide web"
                      className="max-w-14 max-h-5"
                    />
                    <span className="text-gray-600 text-sm">Google Play</span>
                  </div>
                </a>
              )}
              {portfolio.iOSUrl && (
                <a href={portfolio.iOSUrl} target="_blank">
                  <div className="flex items-center gap-1 p-1 rounded-md bg-white hover:bg-gray-100 transition-all w-[90x]">
                    <img src="/icon-apple.png" alt="world wide web" className="max-w-14 max-h-5" />
                    <span className="text-gray-600 text-sm">App Store</span>
                  </div>
                </a>
              )}
            </div>
          </div>
        ))}

      <Lightbox
        isOpen={isOpenLightbox}
        onClose={handleCloseLightbox}
        onLoadimgId={lightboxLoadImgId}
        title={lightboxTitle}
        imgs={screenshots}
      />
    </>
  );
};

export default Post;
