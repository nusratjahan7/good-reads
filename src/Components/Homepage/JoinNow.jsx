'use client';
import { motion } from 'framer-motion';
import Image from "next/image";
import banner from '@/assets/joinus.jpg';
import Link from 'next/link';



const pulse = {
    animate: {
        opacity: [1, 0.3, 1],
        transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
    }
};

const JoinNow = () => {
    return (
        <div className="hero bg-white min-h-[80vh] ">
            <div className="hero-content w-11/12 mx-auto flex-col lg:flex-row items-center  gap-10 md:gap-20 !py-10">
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <Image src={banner} alt="reading books" height={400} width={500} className='rounded-2xl' />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.2 }} >

                    {/* Badge */}
                    <div

                        className="!mt-12 md:!mt-0 inline-flex items-center gap-2  border border-(--rust) rounded-full !px-4 !py-2 text-sm text-(--rust) font-['Space_Mono',monospace]"
                    >
                        <motion.span
                            variants={pulse}
                            animate="animate"
                            className="w-1.5 h-1.5 rounded-full bg-(--rust) shadow-[0_12px_30px_rgba(0,0,0,0.5)]"
                        />
                        Nothing else come close

                    </div>

                    {/* Heading */}
                    <h1

                        className="font1 !mt-8  leading-none tracking-tighter "
                        style={{ fontSize: 'clamp(48px, 8vw, 45px)' }}
                    >
                        The best way to discover, track and<br />
                        share your reading life
                    </h1>

                    {/* Subtitle */}
                    <p

                        className="!mt-4 text-[17px] text-(--muted)  max-w-xl leading-relaxed font-light"
                    >
                       From discovering new books to tracking your reading progress to connecting with other readers. Goodreads has everything you need to manage your reading life. Books to tracking your reading progress.
                    </p>

                    {/* Actions */}
       
                        <Link
                            href="/login"
                            className="btn outline-none border-none !px-9 !py-6 bg-(--rust) text-white rounded-full !mt-5 "
                        >
                            Join for free

                        </Link>
                    
                </motion.div>
            </div>
        </div>
    );
};

export default JoinNow;