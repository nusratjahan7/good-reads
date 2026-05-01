"use client"
import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';
import BookCard from './BookCard';

const BestSellersBooks = ({ books }) => {
    const bestSellers = [...books]
        .sort((a, b) => a.available_quantity - b.available_quantity)
        .slice(0, 4);

    return (
        <section className="!py-10">
            <div className="w-11/12 !mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 !mb-8"
                >
                    <FaTrophy className="text-(--rust) text-2xl" />
                    <h2 className="text-3xl font-serif text-(--rust)">Best Sellers</h2>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {bestSellers.map((book, index) => (
                        <BookCard key={book.id} book={book} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BestSellersBooks;