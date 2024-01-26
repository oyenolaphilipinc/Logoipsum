"use client"
import Image from 'next/image';
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const renderDesktopNav = () => (
    <div className="flex justify-around mt-4">
      <div>
        <Link href="/">
          <Image 
            src="/image/logoipsum.svg"
            width={150}
            height={150}
            alt="Logoipsum"
          />
        </Link>
      </div>
      <div className="mt-2">
        <Link href="/" className="mr-8 border-b-2 border-[#5454d4]">Home</Link>
        <Link href="/" className="mr-8 hover:border-b-4 hover:border-[#5454d4]">Features</Link>
        <Link href="/" className="mr-8 hover:border-b-4 hover:border-[#5454d4]">Pricing</Link>
        <Link href="/" className="hover:border-b-4 hover:border-[#5454d4]">Blog</Link>
      </div>
      <div className="mt-2">
        <Link href="/get-started" className="font-medium border border-white px-5 py-2 rounded-md bg-[#ff7143] text-white">Get Started</Link>
      </div>
    </div>
  );

  const renderMobileNav = () => (
    <div className="flex justify-between items-center mt-4">
      <div className={"ml-3"}>
        <Image 
          src="/image/logoipsum.svg"
          width={150}
          height={150}
          alt="Logoipsum"
        />
      </div>
      <div className="mr-4 cursor-pointer" onClick={toggleLinks}>
        {showLinks ? (
          <IoMdClose className="w-5 h-6" />
        ) : (
          <GiHamburgerMenu className="w-5 h-6" />
        )}
      </div>
      {showLinks && (
        <div className="border border-black py-5 px-2 bg-black text-white flex flex-col w-full mr-2 rounded-md absolute top-16">
          <Link href="/" className="mb-2 text-center">Home</Link>
          <Link href="/" className="mb-2 text-center">Features</Link>
          <Link href="/" className="mb-2 text-center">Pricing</Link>
          <Link href="/" className="mb-2 text-center">Blog</Link>
          <Link href="/get-started" className="mt-2 font-medium border-black text-white bg-[#ff7143] text-center border px-1 py-2 rounded-md">Get Started</Link>
        </div>
      )}
    </div>
  );

  return (
    <>
      {isMobile ? renderMobileNav() : renderDesktopNav()}
    </>
  );
}

export default Navbar;
