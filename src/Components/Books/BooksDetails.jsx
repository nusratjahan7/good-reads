"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BiArrowBack, BiBookOpen, BiUser, BiTag } from 'react-icons/bi';
import { FaCheckCircle } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

const BookDetails = ({ book }) => {
    const [borrowed, setBorrowed] = useState(false);

    const handleBorrow = () => {
        if (book.available_quantity === 0) {
            toast.error("Sorry, this book is not available right now.");
            return;
        }
        setBorrowed(true);
        toast.success(`"${book.title}" borrowed successfully!`);
    };

    return (
        <section className="!py-10">
            <Toaster position="top-right" />
            <div className="w-11/12 !mx-auto">

                {/* Back button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <Link
                        href="/allBooks"
                        className="inline-flex items-center gap-2 text-sm text-(--rust) hover:opacity-70 transition-all !mb-8"
                    >
                        <BiArrowBack /> Back to All Books
                    </Link>
                </motion.div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                    {/* Left — Cover Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative w-full max-w-sm !mx-auto"
                    >
                        <div className="relative h-[420px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src={book.image_url}
                                alt={book.title}
                                fill
                                className="object-cover"
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>

                        {/* Available badge */}
                        <div className={`absolute top-4 right-4 flex items-center gap-1.5 !px-3 !py-1.5 rounded-full text-xs font-medium
                            ${book.available_quantity > 0
                                ? "bg-green-500/90 text-white"
                                : "bg-red-500/90 text-white"
                            }`}>
                            <FaCheckCircle className="text-xs" />
                            {book.available_quantity > 0 ? "Available" : "Unavailable"}
                        </div>
                    </motion.div>

                    {/* Right — Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="flex flex-col gap-5"
                    >
                        {/* Category */}
                        <span className="text-xs font-mono uppercase tracking-widest text-(--rust) bg-(--rust)/10 w-fit !px-3 !py-1 rounded-full">
                            {book.category}
                        </span>

                        {/* Title */}
                        <h1 className="font-serif text-4xl leading-tight">
                            {book.title}
                        </h1>

                        {/* Author */}
                        <div className="flex items-center gap-2 text-(--rust)">
                            <BiUser className="text-lg" />
                            <span className="text-sm font-medium">{book.author}</span>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-(--rust)/20 w-full" />

                        {/* Description */}
                        <div>
                            <div className="flex items-center gap-2 !mb-2">
                                <BiBookOpen className="text-(--rust)" />
                                <p className="text-xs font-mono uppercase tracking-widest text-(--rust)">Description</p>
                            </div>
                            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                                {book.description}
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-(--rust)/20 w-full" />

                        {/* Availability */}
                        <div className="flex items-center gap-2">
                            <BiTag className="text-(--rust)" />
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                Available Copies:
                            </span>
                            <span className={`text-sm font-semibold
                                ${book.available_quantity > 0 ? "text-green-500" : "text-red-500"}`}>
                                {book.available_quantity > 0
                                    ? `${book.available_quantity} copies left`
                                    : "Out of stock"}
                            </span>
                        </div>

                        {/* Borrow Button */}
                        <motion.button
                            whileTap={{ scale: 0.97 }}
                            onClick={handleBorrow}
                            disabled={borrowed || book.available_quantity === 0}
                            className={`w-full !py-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all
                                ${borrowed
                                    ? "bg-green-500 text-white cursor-not-allowed"
                                    : book.available_quantity === 0
                                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                        : "bg-(--rust) text-white hover:opacity-90"
                                }`}
                        >
                            {borrowed ? "✓ Borrowed Successfully!" : "Borrow This Book"}
                        </motion.button>

                        {/* Back to all books */}
                        <Link
                            href="/allBooks"
                            className="text-center text-sm text-(--rust) hover:opacity-70 transition-all underline underline-offset-4"
                        >
                            Browse more books
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BookDetails;