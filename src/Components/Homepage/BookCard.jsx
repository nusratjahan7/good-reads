"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from "next/link";

const BookCard = ({ book, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative h-80 rounded-xl overflow-hidden group cursor-pointer"
        >
            {/* Background Image */}
            <Image
                src={book.image_url}
                alt={book.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end !p-4 gap-1">
                {/* Category */}
                <span className="text-[10px] font-mono uppercase tracking-widest text-white bg-white/20 backdrop-blur-sm w-fit !px-2 !py-0.5 rounded-full">
                    {book.category}
                </span>

                {/* Title */}
                <h3 className="font-serif text-lg text-white leading-tight line-clamp-1">
                    {book.title}
                </h3>

                {/* Author */}
                <p className="text-xs text-white/60">{book.author}</p>

                {/* Button */}
                <Link
                    href={`/allBooks/details/${book.id}`}
                    className="!mt-2 text-center !py-2 !px-4 bg-(--rust) text-white text-xs rounded-lg hover:opacity-90 transition-all"
                >
                    View Details
                </Link>
            </div>
        </motion.div>
    );
};

export default BookCard;