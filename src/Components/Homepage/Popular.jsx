"use client"
import { motion } from 'framer-motion';
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import BookCard from "./BookCard";

const Popular = ({ books }) => {
    return (
        <section className="bg-white !py-9">
            <div className="w-11/12 !mx-auto">
                <div className="flex items-center justify-between !mb-6">
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-3xl font-serif"
                    >
                        Popular Books
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <Link href="/allBooks" className="flex items-center gap-2 text-sm hover:text-(--rust) transition-colors">
                            View All <FaArrowRightLong />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {books.map((book, index) => (
                        <BookCard key={book.id} book={book} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Popular;