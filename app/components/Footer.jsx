import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer border-top z-10 border-l-transparent border-r-transparent border-b-transparent text-white">
      <div className="container items-center mx-auto md:p-12 px-4 py-12 flex justify-between">
        <Link
          href={"/"}
          className="flex items-end text-light-gray text-lg md:text-3xl text-white font-semibold"
        >
          <Image src="/images/mainLogo.png" width={45} height={45} alt="Logo" />
          ouloud
        </Link>
        <p className="text-wjite">All rights reserved &copy;2024</p>
      </div>
    </footer>
  );
}

export default Footer