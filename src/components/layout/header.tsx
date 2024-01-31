"use client";

import React, { Fragment, useEffect, useState } from "react";
import {
  FaRegEnvelope,
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaPhoneAlt,
  FaLinkedinIn,
  FaAngleDown,
  FaChevronDown,
} from "react-icons/fa";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
//import Logo from "../../../public/img/logo-header.png";
import { usePathname } from "next/navigation";
import { Link as Scroll } from "react-scroll";

declare const window: any;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  }, []);

  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  return (
    <>
      <header>
        <nav
          className={
            navbar
              ? "bg-brand-300 shadow-lg fixed w-full z-50 px-5 top-0 animate-slideInDown"
              : "bg-brand-300 shadow-lg fixed w-full z-50 px-5 "
          }
        >
          <div className="row ">
            <div className="flex items-center h-20 w-full">
              <div className="flex items-center w-full text-center place-content-center justify-center">
                {/*<div className="flex justify-center items-center flex-shrink-0 max-w-[240px] md:max-w-[300px]">
                  <Link
                    href="/"
                    className="cursor-pointer max-w-[8rem] md:max-w-[12rem]"
                  >
                   <Image
                      src={Logo}
                      width={600}
                      height={189}
                      className="cursor-pointer"
                      title={data.logoAlt}
                      alt={data.logoAlt}
                    />
                 </Link> 
                </div>*/}
                <div className="hidden lg:block ">
                  <div className=" mr-5 sm:flex flex-nowrap items-center">
                    <Scroll
                      to="home"
                      smooth
                      offset={-100}
                      className="text-white text-lg px-5 py-5 cursor-pointer"
                    >
                      Home
                    </Scroll>
                    <Scroll
                      to="Sobre"
                      smooth
                      offset={-100}
                      className="text-white text-lg px-5 py-5 cursor-pointer"
                    >
                      Sobre
                    </Scroll>
                    <Scroll
                      to="nossos-sabores"
                      smooth
                      offset={-100}
                      className="text-white text-lg px-5 py-5 cursor-pointer"
                    >
                      Nossos sabores
                    </Scroll>
                    <Scroll
                      to="quem-faz"
                      smooth
                      offset={-100}
                      className="text-white text-lg px-5 py-5 cursor-pointer"
                    >
                      Quem faz
                    </Scroll>
                    <Scroll
                      to="galeria"
                      smooth
                      offset={-100}
                      className="text-white text-lg px-5 py-5 cursor-pointer"
                    >
                      Galeria
                    </Scroll>
                    <Scroll
                      to="contato"
                      smooth
                      offset={-100}
                      className="text-white text-lg px-5 py-5 cursor-pointer"
                    >
                      Contato
                    </Scroll>
                  </div>
                </div>
              </div>
              <div className=" flex lg:hidden ">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className=" inline-flex items-center justify-center p-2 rounded-md text-white bg-brand-400 outline-none shadow-md"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="lg:hidden" id="mobile-menu">
                <div
                  ref={ref}
                  className="bg-brand-100/20 -mx-5 px-2 space-y-1 sm:px-3 py-10"
                >
                  <div className="col-span-2 flex flex-col px-5 md:grid md:grid-cols-2 gap-x-20 gap-y-4 md:gap-y-10">
                  <Scroll
                      to="home"
                      smooth
                      offset={-100}
                      className="text-white text-lg px-5 py-5 cursor-pointer"
                    >
                      Home
                    </Scroll>
                    <Scroll
                      to="Sobre"
                      smooth
                      offset={-100}
                      className="text-white text-lg px-5 py-5 cursor-pointer"
                    >
                      Sobre
                    </Scroll>
                    <Scroll
                      to="nossos-sabores"
                      smooth
                      offset={-100}
                      className="text-white text-lg px-5 py-5 cursor-pointer"
                    >
                      Nossos sabores
                    </Scroll>
                    <Scroll
                      to="quem-faz"
                      smooth
                      offset={-100}
                      className="text-white  text-lg px-5 py-5 cursor-pointer"
                    >
                      Quem faz
                    </Scroll>
                    <Scroll
                      to="galeria"
                      smooth
                      offset={-100}
                      className="text-white text-lg px-5 py-5 cursor-pointer"
                    >
                      Galeria
                    </Scroll>
                    <Scroll
                      to="contato"
                      smooth
                      offset={-100}
                      className="text-white  text-lg px-5 py-5 cursor-pointer"
                    >
                      Contato
                    </Scroll>
                  </div>
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </header>
    </>
  );
}