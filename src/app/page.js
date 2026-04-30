import Banner from "@/Components/Homepage/Banner";
import BestSellers from "@/Components/Homepage/BestSellers";
import Choose from "@/Components/Homepage/Choose";
import DiscoverPage from "@/Components/Homepage/DiscoverPage";
import JoinNow from "@/Components/Homepage/JoinNow";
import PopularBooks from "@/Components/Homepage/PopularBooks";
import Reviews from "@/Components/Homepage/Reviews";
import Stats from "@/Components/Homepage/Stats";

export default function Home() {
  return (
    <div >
      <Banner />
      <Stats />
      <Choose />
      <JoinNow />
      <PopularBooks />
      <BestSellers />
      <Reviews />
      <DiscoverPage />
    </div>
  );
}
