import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import NavLogo from "../../../public/photo/navLogo.png";
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#C1A45D] text-white">
      <div className="container flex items-center justify-between flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-400">
         <div className="flex items-center justify-between  my-6 w-full sm:w-[100%]">
                 <Link className="flex" href="/">
                    <Image
                      src={NavLogo}
                      alt="/"
                      width="200"
                      height="70"
                      className=" cursor-pointer"
                    />    
                </Link>
                
                
              </div>
              <div className="">
                  <ul className='flex space-x-6 uppercase'>
                    <li>Maharani</li>
                    <li>Maskharor </li>
                    <li>AUFA</li>
                    <li>Andini</li>
                  </ul>
              </div>
      </div>
    </footer>
  );
};

export default Footer;
