import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { MarketplaceInfo } from "../interfaces/MarketplaceInfo";

const AssociatedCompany = ({
  marketplace,
}: {
  marketplace: MarketplaceInfo;
}) => {
  return (
    <section
      id="associated_company"
      className="flex flex-col w-full gap-3 pb-3 border-2 border-zinc-500 rounded-2xl p-7 h-min"
    >
      <p className="font-bold">Associated Company</p>
      <div className="grid grid-cols-[80px,auto] grid-rows-2">
        <Image
          src={marketplace.img}
          alt={marketplace.name}
          width={70}
          height={70}
          className="row-span-2"
        />
        <p className="self-center font-bold">{marketplace.name}</p>
        <p className="self-start font-light">57 marketplaces</p>
      </div>
      <p>
        Website
        <br />
        <span className="text-sm font-bold hover:underline">
          <Link className="text-struck" href="https://apollo.io">
            https://apollo.io
          </Link>
        </span>
      </p>
      <p>
        Industry <br />
        <span className="text-xs font-light">Sales Intelligence Software</span>
      </p>
      <p>
        Company Size <br />
        <span className="text-xs font-light">501-1000</span>
      </p>
      <p>
        About
        <br />
        <span className="text-xs font-light">
          {marketplace.name} is a market sales platform that helps accelerate
          the growth of an organization.
        </span>
      </p>

      <hr className="border-t-[1px] border-zinc-300"></hr>
      <button className="flex items-center self-center justify-center px-4 text-struck">
        Show All Details
        <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
      </button>
    </section>
  );
};

export default AssociatedCompany;
