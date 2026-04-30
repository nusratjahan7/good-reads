import React from 'react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer w-11/12 !mx-auto !py-9 flex flex-col sm:flex-row items-center sm:items-start justify-between  p-10">
            <nav>
                <a href="#" className='roboto text-4xl text-(--deep)/50 tracking-tighter '>
                    good<span className='text-(--rust) '>reads</span>
                </a>
                <p className='max-w-sm text-(--muted)'>A modern library for the curious. Borrow widely, read deeply, and let great ideas keep good company.</p>
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
                <h6 className="footer-title text-(--rust)">Social</h6>
                <div className="grid grid-flow-col gap-4">
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
    );
};

export default Footer;