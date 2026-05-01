
import BookDetails from '@/Components/Books/BooksDetails';
import { getBooks } from '@/lib/getBooks';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
    const { id } = await params;
    const books = getBooks();
    const book = books.find((b) => b.id === parseInt(id));
    if (!book) return { title: "Book Not Found" };
    return { title: `${book.title} | Good Reads` };
}

export default async function BookDetailsPage({ params }) {
    const { id } = await params;
    const books = getBooks();
    const book = books.find((b) => b.id === parseInt(id));

    if (!book) return notFound();

    return <BookDetails book={book} />;
}