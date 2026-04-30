'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import banner from '@/assets/banner.jpg';


const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay, ease: 'easeOut' }
    })
};

const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1, delay: 0.5, ease: 'easeOut' }
    }
};

const pulse = {
    animate: {
        opacity: [1, 0.3, 1],
        transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
    }
};

const scrollDown = {
    animate: {
        scaleY: [0, 1, 1],
        opacity: [1, 1, 0],
        transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
    }
};

const Banner = () => {
    return (
        <div className="w-11/12 !mx-auto  min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-10">
            <div >

                {/* Badge */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    custom={0}
                    className="!mt-16 md:!mt-0 inline-flex items-center gap-2  border border-(--rust) rounded-full !px-4 !py-2 text-sm text-(--rust) font-['Space_Mono',monospace]"
                >
                    <motion.span
                        variants={pulse}
                        animate="animate"
                        className="w-1.5 h-1.5 rounded-full bg-(--rust) shadow-[0_12px_30px_rgba(0,0,0,0.5)]"
                    />
                    Your next great reading is waiting
                    
                </motion.div>

                {/* Heading */}
                <motion.h1
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.1}
                    className="font1 !mt-8  leading-none tracking-tighter "
                    style={{ fontSize: 'clamp(52px, 8vw, 62px)' }}
                >
                    The world's largest<br />
                    book community
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.2}
                    className="!mt-4 text-[17px] text-(--muted) max-w-lg leading-relaxed font-light"
                >
                    With a staggering selection of over<strong className="font-semibold "> 500 million</strong> books at your disposal there's an excellent chance that you'll unciver a literary perfectly tailored to your taste and preference.
                </motion.p>

                {/* Actions */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.3}
                    className="!mt-8 x flex flex-wrap gap-4 items-center"
                >
                    <Link
                        href="/login"
                        className="btn outline-none border-none !px-9 !py-6 bg-(--rust) text-white rounded-full "
                    >
                        Join for free
                        
                    </Link>
                    <Link
                        href="/allBooks"
                        className="btn btn-outline  rounded-full !px-9 !py-6 text-(--rust) hover:bg-(--rust)/30  hover:border hover:border-(--rust)/20"
                    >
                        Browse books
                    </Link>
                </motion.div>
            </div>

            <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    
                        <Image src={banner} alt='banner image' height={300} width={500} className='rounded-2xl' />

                   

                    <div className="absolute -bottom-12 -right-5 w-30 h-30 rounded-full bg-(--gold)/40 border border-(--rust)/40 flex items-center justify-center text-[12px] font-mono text-[#5f1f03] text-center leading-[1.4] backdrop-blur-sm animate-bounce-slow">
                        World's <br /> largest<br /> Book community<br />✦
                    </div>
                </motion.div>

        </div>
    );
};

export default Banner;