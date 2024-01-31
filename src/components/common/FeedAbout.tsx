"use client";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import {
  FaInstagram,
  FaRegEnvelope,
  FaUser,
  FaRegUser
} from "react-icons/fa";
import {  BsArrowRight } from "react-icons/bs";

const FeedAbout = () => {
  const { ref, inView, entry } = useInView();

  return (
    <section
        ref={ref}
        id="Sobre"
        className="bg-brand-100/50 relative overflow-hidden py-24"
    >
      <div className="row relative">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div
                className={`"mx-auto max-w-2xl ${
                  inView && "animate-fade-right animate-duration-700"
                }`}
              >
                <h1 className="text-center font-semibold text-2xl justify-center"> 
                    COM CHOCOLATE
                </h1>
                <h2 className="text-center font-semibold text-xl justify-center"> E COM AFETO</h2>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="mt-3 flex flex-col gap-y-3 text-justify font-medium text-lg">
                <p className={inView ? "animate-fade-left text-black" : ""}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <p className={inView ? "animate-fade-left text-black" : ""}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedAbout;
