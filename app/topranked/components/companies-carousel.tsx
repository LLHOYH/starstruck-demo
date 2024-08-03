"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

interface Company {
  id: number;
  name: string;
  img: string;
  companyType: "Affiliate" | "App & Integration";
}

const companies: Company[] = [
  {
    id: 1,
    name: "Braze Integration Marketplace",
    img: "/companyD.jpeg",
    companyType: "Affiliate",
  },
  {
    id: 2,
    name: "HubSpot App Marketplace",
    img: "/companyE.png",
    companyType: "App & Integration",
  },
  {
    id: 3,
    name: "ABC Company",
    img: "/companyF.png",
    companyType: "App & Integration",
  },
];

const CompaniesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((i) => 
      i + 1 >= companies.length ? 0 : i + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((i) => 
      i - 1 < 0 ? companies.length - 1 : i - 1
    );
  };

  const visibleCompanies = [
    companies[currentIndex],
    companies[(currentIndex + 1) % companies.length],
  ];

  return (
    <>
      <div className="flex items-center self-end justify-center flex-grow">
        <button 
          onClick={handlePrevious}
          className="flex items-center justify-center p-3 rounded-lg w-30 h-7 active:bg-zinc-200"
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            size="2xs"
            className="w-4 h-4"
          />
          Previous
        </button>
        <button 
          onClick={handleNext}
          className="flex items-center justify-center w-24 p-3 rounded-lg h-7 active:bg-zinc-200"
        >
          Next
          <FontAwesomeIcon
            icon={faChevronRight}
            size="2xs"
            className="w-4 h-4"
          />
        </button>
      </div>
      <hr className="border-t-[1px] border-t-zinc-300"></hr>

      <div className="grid grid-cols-2 gap-7 h-min">
        {visibleCompanies.map((comp) => (
          <div key={comp.id} className="grid grid-rows-[70px,70px,1fr,20px,3fr] sm:flex sm:flex-col w-full gap-3">
            <Image src={comp.img} alt={comp.name} width={70} height={70} />
            <p className="font-bold">{comp.name}</p>
            <div className="flex items-center justify-start gap-3">
              <FontAwesomeIcon icon={faStore} size="2xs" className="w-4 h-4 " />
              <p className="text-xs font-light">
                {comp.companyType}
              </p>
            </div>
            <hr className="w-1/2 h-5 border-0 border-b-[1px] border-b-zinc-300"></hr>
            <p className="text-sm font-light">
              Show companies like you who list here
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CompaniesCarousel;