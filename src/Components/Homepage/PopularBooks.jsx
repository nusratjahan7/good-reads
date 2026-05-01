
import { getBooks } from "@/lib/getBooks";
import Popular from "./Popular";


export default function Home() {
  const books = getBooks();
  const popularBooks = books.slice(0, 8);

  return (
    <main>
      <Popular books={popularBooks} />
    </main>
  );
}