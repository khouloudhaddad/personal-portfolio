import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container mx-auto p-12 flex justify-between">
        <Link
          href={"/"}
          className="flex items-end text-[#808080] text-lg md:text-3xl text-white font-semibold"
        >
          <Image src="/images/mainLogo.png" width={50} height={50} alt="Logo" />
          ouloud
        </Link>
        <p className="text-wjite">All rights reserved &copy;2024</p>
      </div>
    </footer>
  );
}

export default Footer