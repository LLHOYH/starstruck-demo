import CompaniesCarousel from "./companies-carousel";

const OtherMarketplaceList = () => {
    return ( 
    <section
        id="other_marketplace_list"
        className="flex flex-col w-full gap-3 border-2 border-zinc-500 rounded-2xl p-7 h-min"
      >
        <div>
          <p className="text-lg font-bold">
            Where companies on this marketplace also list
          </p>
          <p className="font-light">Based on the most popular companies</p>
        </div>
        <CompaniesCarousel/>

      </section> );
}
 
export default OtherMarketplaceList;