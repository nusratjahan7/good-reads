"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import BookCard from '../Homepage/BookCard';


const categories = ["All", "Story", "Tech", "Science"];

const AllBooksShows = ({ books }) => {
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const filtered = books.filter((book) => {
        const matchCategory = activeCategory === "All" || book.category === activeCategory;
        const matchSearch = book.title.toLowerCase().includes(search.toLowerCase());
        return matchCategory && matchSearch;
    });

    return (
        <section className="!py-10">
            <div className="w-11/12 !mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="!mb-8"
                >
                    <h1 className="text-4xl font-serif !mb-1">All Books</h1>
                    <p className="text-sm text-gray-400">{filtered.length} books found</p>
                </motion.div>

                {/* Search */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="relative !mb-6 max-w-lg"
                >
                    <svg
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-(--rust)"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search by book title..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full !pl-11 !pr-4 !py-3 rounded-xl bg-(--rust)/30  text-sm outline-none focus:border-(--rust) transition-all placeholder:text-(--rust)"
                    />
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-3 !mb-8"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`!px-5 !py-2 rounded-full text-sm font-medium border transition-all
                                ${activeCategory === cat
                                    ? "bg-(--rust) text-white border-(--rust)"
                                    : "bg-(--gold) border-(--gold) font-medium text-(--rust) hover:border-(--rust) hover:text-(--rust)"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Books Grid */}
                {filtered.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {filtered.map((book, index) => (
                            <BookCard key={book.id} book={book} index={index} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center !py-20 text-gray-400">
                        <p className="text-5xl !mb-4">📚</p>
                        <p className="text-lg font-serif">No books found</p>
                        <p className="text-sm !mt-1">Try a different search or category</p>
                    </div>
                )}

            </div>
        </section>
    );
};

export default AllBooksShows;