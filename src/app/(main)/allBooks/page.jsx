import AllBooksShows from '@/Components/Books/AllBooksShows';
import { getBooks } from '@/lib/getBooks';

export const metadata = {
    title: "All Books | Good Reads",
};

async function getAllBooks() {
    await new Promise((resolve) => setTimeout(resolve, 500)); 
    return getBooks();
}

const AllBooks = async () => {
     const books = await getAllBooks();

    return (
        <div>
           <AllBooksShows books={books} />
        </div>
    );
};

export default AllBooks;