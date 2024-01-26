import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around mt-16">
      <div className="sm:mt-10 ml-3">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-8">
          Grow your<br/> subscription<br/> business
        </h1>
        <p className="text-sm sm:text-md text-gray-800 mb-4 sm:mb-8">
          Outcome-centered products that reduce churn,<br/>
          optimize pricing, and grow your subscription<br/>
          business end-to-end
        </p>
        <div className="mb-4 flex items-start sm:items-center">
          <Link href="/get-started" className="mb-2 mr-3 sm:mb-0 sm:mr-6 border px-4 py-2 bg-[#5454d4] rounded-md font-medium border-white text-white">
            Get Started
          </Link>
          <Image 
            src="/image/arrow.svg"
            width={30}
            height={30}
            alt="arrow"
            className={"cursor-pointer mt-1"}
          />
        </div>
      </div>
      <div className="sm:ml-8 ml-2">
        <Image 
          src="/image/hero.svg"
          width={400}
          height={400}
          alt="Image"
        />
      </div>
    </div>
  );
}

export default Header;
