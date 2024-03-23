import Image from "next/image";
import React from "react";
import skinImg from "/src/assets/skin.png";

const Promotion = () => {
  return (
    <section className=" bg-orange-50/60 dark:bg-slate-950 shadow-sm lg:py-20 py-16 lg:mt-20 mt-16 ">
      <div className="container flex lg:flex-row flex-col lg:gap-24 gap-10 items-center justify-center">
        <Image src={skinImg} width={580} height={381} alt="skin.img" />

        {/* description */}
        <div>
          <h3 className="sec-title">
            Let us handle your <br /> skin{" "}
            <span className="text-prime">Professionally</span>.
          </h3>
          <p className="sec-desc mt-6">
            With well written codes, we build amazing apps for all <br />{" "}
            platforms, mobile and web apps in general ipsum. <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing <br />
            elit. Purus commodo ipsum.
          </p>
          <div className="lg:mt-16 mt-10 flex gap-8">
            <div>
              <span className="text-prime md:text-5xl sm:text-4xl text-3xl font-bold">
                500+
              </span>
              <p className="text-sm mt-5">Happy Customer</p>
            </div>
            <div>
              <span className="text-prime md:text-5xl sm:text-4xl text-3xl font-bold">
                16+
              </span>
              <p className="text-sm mt-5">Total Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
