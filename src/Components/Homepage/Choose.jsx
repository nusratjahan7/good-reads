'use client';
import { motion } from 'framer-motion';
import { FaSearch, FaUsers, FaStar } from 'react-icons/fa';

const features = [
    {
        id: 1,
        icon: <FaSearch className='h-5 w-5' />,  // Book Discovery icon (Search)
        title: "Book Discovery",
        description: "Discover new books to read based on your interests, reading history, and the recommendations of other users."
    },
    {
        id: 2,
        icon: <FaUsers className='h-6 w-6' />,  // Friends and Community icon (Group of people)
        title: "Friends and Community",
        description: "You can connect with friends, family members, and other people who share your love of reading."
    },
    {
        id: 3,
        icon: <FaStar className='h-5 w-5' />,  // Book Reviews icon (Star)
        title: "Book Reviews",
        description: "You can write reviews of books that you've read and share your thoughts with other Goodreads users."
    }
];


const pulse = {
    animate: {
        opacity: [1, 0.3, 1],
        transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
    }
};

const Choose = () => {
    return (
        <div className=" bg-white">
            <div className="w-11/12 !mx-auto !py-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                    viewport={{ once: true }}
                    className=" inline-flex items-center gap-2  border border-(--rust) rounded-full !px-4 !py-2 text-sm text-(--rust) font-['Space_Mono',monospace] bg-(--gold2)/10"
                >
                    <motion.span
                        variants={pulse}
                        animate="animate"
                        className="w-1.5 h-1.5 rounded-full bg-(--rust) shadow-[0_12px_30px_rgba(0,0,0,0.5)]"
                    />
                    Why choose good reads

                </motion.div>
                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="font1 !mt-8  leading-none tracking-tighter "
                    style={{ fontSize: 'clamp(52px, 8vw, 62px)' }}
                >
                    Best way to manage your<br />
                    reading life
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="!mt-4 text-[17px] text-(--muted) max-w-lg leading-relaxed font-light"
                >
                    Keep tract of what you're reading. Set reading goals and connect with friends to share your book reviews.
                </motion.p>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 !mt-8'>
                    {
                        features.map(feature => <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.2 }}
                            viewport={{ once: true }}
                            key={feature.id}
                            className='flex flex-col items-center  gap-2.5 justify-center text-center bg-(--gold2)/12 !px-4 !py-6'
                        >
                            <p className='text-(--rust)'>{feature.icon}</p>
                            <h3 className='text-(--rust) font-semibold'>{feature.title}</h3>
                            <p className='text-(--muted)'>{feature.description}</p>
                        </motion.div>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Choose;