"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MarketplaceInfo } from "../interfaces/MarketplaceInfo";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

const MarketplaceBox = ({ marketplace }: { marketplace: MarketplaceInfo }) => {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  return (
    <div
      className={`w-full p-3  grid grid-cols-[70px,auto] grid-rows-[70px, 30px] gap-3 cursor-pointer group ${
        params.id == marketplace.id.toString()
          ? "border-l-2 border-l-border border-l-green-500 border-y-[1px] border-y-zinc-200 bg-zinc-100"
          : ""
      }`}
      onClick={() => router.push(`/topranked/${marketplace.id}`)}
    >
      <Image
        width={70}
        height={70}
        src={marketplace.img}
        alt={marketplace.name}
      />
      <div className="flex flex-col items-start justify-around">
        <p className="font-bold text-struck group-hover:underline">
          {marketplace.name}
        </p>
        <div className="flex items-center justify-start gap-1">
          <FontAwesomeIcon icon={faStore} size="2xs" className="w-4 h-4 " />
          <p className="text-xs font-light text-nowrap">App & Integration</p>
        </div>
        <p className="text-xs font-light text-nowrap">160,000 active buyers</p>
      </div>
      <div className="h-5 col-start-2 col-end-3 text-xs font-light text-nowrap">
        Show companies like you who list here
      </div>
    </div>
  );
};

export default MarketplaceBox;
