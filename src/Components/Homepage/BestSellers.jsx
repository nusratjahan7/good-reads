import { getBooks } from "@/lib/getBooks";
import BestSellersBooks from "./BestSellersBooks";


const BestSellers = () => {
    const books = getBooks();
    return (
        <div>
            <BestSellersBooks books={books} />
        </div>
    );
};

export default BestSellers;