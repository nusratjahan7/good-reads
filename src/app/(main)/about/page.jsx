import React from 'react';

export const metadata = {
  title: "About | Good Reads",
};

const AboutPage = () => {
    return (
        <div className="bg-(--surface) text-(--ivory)">
            {/* Header Section */}
            <section className="bg-(--obsidian)/20 text-(--ivory) !py-16 !px-6 ">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl font1 font-bold !mb-4 ">About Us</h1>
                    <p className="text-lg">Explore our journey and mission to make a difference</p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="!py-16 !px-6 ">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font1 font-semibold text-center text-(--gold) !mb-6 ">Our Story</h2>
                    <p className="text-lg text-(--muted)">
                        We started with a simple goal: to bring the world closer through our shared love of knowledge. 
                        Over time, we’ve become more than just a platform — we’ve become a community where readers 
                        and thinkers converge.
                    </p>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="bg-(--card) !py-16 !px-6 ">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font1 font-semibold text-(--gold2) !mb-6 ">Our Mission</h2>
                    <p className="text-lg text-(--muted)">
                        Our mission is to foster a love for reading, inspire creativity, and encourage learning. 
                        We aim to create an inclusive space for book lovers, authors, and curious minds alike to explore 
                        and engage with new ideas.
                    </p>
                </div>
            </section>

            {/* Contact Information Section */}
            <section className="!py-16 !px-6 ">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-(--gold3) font1 !mb-6 ">Contact Us</h2>
                    <p className="text-lg text-(--muted2)">
                        Have questions or want to connect with us? We’d love to hear from you.
                    </p>
                    <div className="mt-6">
                        <a href="mailto:contact@yourcompany.com" className="text-(--rust) hover:text-(--gold) text-xl ">
                            contact@yourcompany.com
                        </a>
                    </div>
                </div>
            </section>

            
        </div>
    );
};

export default AboutPage;