import React from 'react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaBookReader, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer className="footer w-11/12 !mx-auto !py-9 flex flex-col sm:flex-row items-center sm:items-start justify-between  p-10">
                <nav className='flex flex-col items-center md:items-start'>
                    <h3 href="#" className='roboto text-4xl text-(--deep)/50 tracking-tighter text-center md:text-left flex gap-2 items-center'>
                    <FaBookReader className='text-(--rust)' />
                       <span>good<span className='text-(--rust) '>reads</span></span>
                    </h3>
                    <p className='max-w-sm text-(--muted) text-center md:text-left'>A modern library for the curious. Borrow widely, read deeply, and let great ideas keep good company.</p>
                </nav>
                <nav>
                    <h6 className="footer-title text-(--rust)">Services</h6>
                    <a className="link link-hover text-(--muted)">Branding</a>
                    <a className="link link-hover text-(--muted)">Design</a>
                    <a className="link link-hover text-(--muted)">Marketing</a>
                    <a className="link link-hover text-(--muted)">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-(--rust)">Company</h6>
                    <a className="link link-hover text-(--muted)">About us</a>
                    <a className="link link-hover text-(--muted)">Contact</a>
                    <a className="link link-hover text-(--muted)">Jobs</a>
                    <a className="link link-hover text-(--muted) ">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title !ml-3 text-(--rust)">Social</h6>
                    <div className="grid grid-flow-col !ml-3 gap-4 items-center">
                        <a>
                            <BsTwitter className='h-6 w-6' />
                        </a>
                        <a>
                            <FaFacebook className='h-6 w-6' />
                        </a>
                        <a>
                            <BsInstagram className='h-6 w-6' />
                        </a>
                    </div>
                </nav>

            </footer>
            <footer className="footer sm:footer-horizontal footer-center b text-(--rust) !pb-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Goodreads</p>
                </aside>
            </footer>

        </>
    );
};

export default Footer;