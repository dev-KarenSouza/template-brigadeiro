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

const FeedQuemFaz = () => {
  const { ref, inView, entry } = useInView();

  return (
    <section
        ref={ref}
        id="quem-faz"
        className="bg-brand-100/50 relative overflow-hidden"
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
                <Image
                    src="/img/confeiteira.webp"
                    width={900}
                    height={900}
                    alt="Confeiteira"
                />
              </div>
            </div>
            <div className="flex flex-col ">
              <div className=" flex flex-col gap-y-3 text-justify font-medium text-lg">
                <p className={inView ? "animate-fade-left text-black" : ""}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
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

export default FeedQuemFaz;
