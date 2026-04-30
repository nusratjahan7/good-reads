import Marquee from "react-fast-marquee";
import { IoSparklesSharp } from "react-icons/io5";

const marqueeData = [
    { id: 1, title:  "New Arrivals: 'The Great Gatsby' | Special Discount on Memberships!" },
  { id: 2, title: "Get 'Learning React' Now at 20% Off!" },
  { id: 3, title: "Exclusive Offer: Buy 2 Books, Get 1 Free on All Fiction Titles!" },
  { id: 4, title: "New Book: 'Artificial Intelligence' Now Available!" },
  { id: 5, title:  "Check out our latest release: 'The Space Odyssey' - A Sci-Fi Classic!" },
  { id: 6, title:  "Special Discount on all Science Books - 30% Off!" }
];

const Stats = () => {
    return (
        <div className="!mt-9 md:!mt-4 !py-5 bg-(--gold) ">
            <Marquee pauseOnHover={true}>
                 {
                    marqueeData.map((marquee) => 
                      <div key={marquee.id} className="flex gap-3 items-center text-[#5e2006]">
                       <IoSparklesSharp />
                        <p className="!mr-10 font-medium text-[#5e2006]">{marquee.title}</p>
                      </div>
                    )
                }
            </Marquee>
        </div>
    );
};

export default Stats;