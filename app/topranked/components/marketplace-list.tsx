import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons/faStore";
import Image from "next/image";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import marketplaces from "../../utils/marketplaces.json";
import { redirect } from "next/dist/server/api-utils";
import { MarketplaceInfo } from "../interfaces/MarketplaceInfo";
import MarketplaceBox from "./marketplace-box";

const MarketplaceList = () => {
  return (
    <section className="flex flex-col items-center w-full bg-white shadow h-min">
      <div className="flex flex-col w-full p-5 text-white bg-struck">
        <p className="text-xl font-bold">Top Ranked</p>
        <p className="text-sm">The STARSTRUCK Hot100</p>
        <p className="text-xs font-light">3 results</p>
      </div>

      <div className="w-full p-3 grid grid-cols-[70px,auto] grid-rows-[70px, 30px] gap-3">
        <div className="w-[70px] h-[70px]">
          <Image width={70} height={70} src="/merchant.png" alt="merchant" />
        </div>
        <div className="flex flex-col items-start justify-around">
          <p className="font-bold text-struck">
            Show the marketplace where you&apos;d be a top seller
          </p>
          <button className="w-50 lg:w-80 text-xs lg:text-sm bg-transparent rounded-3xl border-2 border-struck py-1 px-4 text-struck flex items-center justify-around hover:bg-zinc-200 hover:border-indigo-800 hover:border-[3px] hover:text-indigo-800 hover:font-medium">
            Sign in to show top picks for you
            <FontAwesomeIcon icon={faStar} size="2xs" className="w-4 h-4" />
          </button>
        </div>
      </div>

      {marketplaces.map((m) => (
        <MarketplaceBox key={m.id} marketplace={m} />
      ))}
    </section>
  );
};

export default MarketplaceList;
