import { Metadata } from "next";
import MarketplaceList from "./components/marketplace-list";

export const metadata: Metadata = {
  title: "Top Rank",
  description: "Top ranking marketplaces",
};

const TopRankedLayout = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  return (
    <section className="grid grid-rows-auto gap-3 lg:gap-[1px] lg:grid-rows-none lg:grid-cols-[4fr,5fr] lg:px-11 min-h-screen mt-[2px]">
      <MarketplaceList />
      {children}
    </section>
  );
};

export default TopRankedLayout;
