import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faEllipsis,
  faListUl,
  faPlus,
  faShare,
  faShieldHalved,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import {MarketplaceInfo} from "../interfaces/MarketplaceInfo";

const MarketplaceBasicInfo = ({
  marketplace,
}: {
  marketplace: MarketplaceInfo;
}) => {
  return (
    <section id="marketplace_basic_info" className="flex flex-col w-full gap-4">
      <div className="flex items-center justify-end gap-3 translate-y-2">
        <p className="flex-grow justify-self-start text-struck">Rank 89</p>
        <FontAwesomeIcon icon={faShare} width={20} height={20} className="cursor-pointer" />
        <FontAwesomeIcon icon={faEllipsis} width={20} height={20} className="cursor-pointer"  />
      </div>
      <div className="flex items-center justify-start gap-5">
        <Image
          src={marketplace.img}
          alt={marketplace.name}
          width={100}
          height={100}
        />
        <p className="text-2xl">{marketplace.name}</p>
        <FontAwesomeIcon
          icon={faShieldHalved}
          size="xl"
          width={20}
          height={20}
        />
      </div>
      <div className="flex items-center justify-start gap-3">
        <p>
          160,000 users · prev 135K ·{" "}
          <span className="text-green-500">+5.63%</span>
        </p>
      </div>
      <div className="flex items-center justify-start gap-3">
        <FontAwesomeIcon icon={faStore} size="2xs" className="w-4 h-4 " />
        <p className="text-xs font-light text-nowrap">App & Integration</p>
      </div>
      <div className="flex items-center justify-start gap-3">
        <FontAwesomeIcon icon={faStar} size="2xs" className="w-4 h-4 " />
        <p className="text-xs font-light text-nowrap">138 Listings · 2 new</p>
      </div>
      <div className="flex items-center justify-start gap-3">
        <FontAwesomeIcon icon={faListUl} size="2xs" className="w-4 h-4 " />
        <p className="text-xs font-light text-nowrap">
          Features: categories, sponsored listings, +5 more
        </p>
      </div>
      <div className="flex items-center justify-start gap-3">
        <button className="flex items-center justify-center h-10 gap-3 p-4 bg-green-300 w-36 rounded-3xl hover:bg-green-400">
          <FontAwesomeIcon icon={faPlus} size="2xs" className="w-4 h-4 " />
          Track
        </button>
        <button className="flex items-center justify-center h-10 gap-3 p-4 bg-transparent border-2 text-struck border-struck w-36 rounded-3xl hover:bg-zinc-400">
          List Now
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            size="2xs"
            className="w-4 h-4 "
          />
        </button>
      </div>
    </section>
  );
};

export default MarketplaceBasicInfo;
