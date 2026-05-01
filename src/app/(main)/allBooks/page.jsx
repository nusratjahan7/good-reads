import AllBooksShows from '@/Components/Books/AllBooksShows';
import { getBooks } from '@/lib/getBooks';

export const metadata = {
    title: "All Books | Good Reads",
};

const AllBooks = () => {
     const books = getBooks();

    return (
        <div>
           <AllBooksShows books={books} />
        </div>
    );
};

export default AllBooks;