import React, { useEffect, useState } from "react";

import Post from "./Post";
import { Company } from "../utils/constants";
import { useParams } from "react-router-dom";

const PortfolioPage: React.FC = () => {
  const { project } = useParams();
  const [company, setCompany] = useState<Company>("cv");

  useEffect(() => {
    setCompany(project as Company);
  }, [project]);

  return (
    <div className="bg-[#f2f4f7] px-4 sm:px-2 pt-4 pb-2 h-screen">
      <div className="w-full max-w-3xl mx-auto">
        {/* Tabs */}
        <Post company={company} />
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default PortfolioPage;
