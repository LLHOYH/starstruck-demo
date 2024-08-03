import marketplaces from "../../utils/marketplaces.json";
import MarketplaceBasicInfo from "../components/marketplace-basic-info";
import OtherMarketplaceList from "../components/othermarket-place-list";
import AssociatedCompany from "../components/associated-company";
import { MarketplaceInfo } from "../interfaces/MarketplaceInfo";

const MarketplaceInfoPage = ({ params }: { params: { id: string } }) => {
  const result = marketplaces.find(
    (m: MarketplaceInfo) => m.id.toString() === params.id
  );
  const marketplace: MarketplaceInfo = {
    id: result!.id,
    name: result!.name,
    img: result!.img,
  };
  return (
    <section className="flex flex-col items-center justify-center w-full p-8 pt-1 bg-white shadow h-min gap-7">
      <MarketplaceBasicInfo marketplace={marketplace} />
      <OtherMarketplaceList />
      <AssociatedCompany marketplace={marketplace} />
    </section>
  );
};

export default MarketplaceInfoPage;

export async function generateStaticParams() {
  return marketplaces.map((m) => m.id);
}
