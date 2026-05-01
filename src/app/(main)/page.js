import Banner from "@/Components/Homepage/Banner";
import BestSellers from "@/Components/Homepage/BestSellers";
import Choose from "@/Components/Homepage/Choose";
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
      <PopularBooks />
      <BestSellers />
      <JoinNow />
      <Reviews />
      
    </div>
  );
}
