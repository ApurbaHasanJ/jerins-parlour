import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import makeup from "/src/assets/makeup.png";
import hairDye from "/src/assets/hair-dye.png";
import facialTreatment from "/src/assets/facial-treatment.png";

const Services = () => {
  return (
    <section className="lg:pt-20 pt-16 text-center container">
      <h2 className="text-4xl font-bold">
        Our Awesome <span className="text-prime">Services</span>
      </h2>
      <div className="mt-12 grid lg:grid-cols-3 grid-cols-1 items-center justify-between lg:gap-20 gap-6">
        {/* card 1 */}
        <Card>
          <CardHeader>
            <div className="bg-[#F63E7B]/20 mb-2 w-fit mx-auto text-center rounded-full">
              <Image
                width={42}
                height={42}
                src={makeup}
                className=" m-3"
                alt="hero.png"
              />
            </div>
            <CardTitle>Anti Age Face Treatment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-prime font-medium text-xl">$199</div>
          </CardContent>
          <CardDescription>
            We craft stunning and amazing web UI, using a well drrafted UX to
            fit your product.
          </CardDescription>
        </Card>
        {/* card 2 */}
        <Card>
          <CardHeader>
            <div className="bg-[#F63E7B]/20 mb-2 w-fit mx-auto text-center rounded-full">
              <Image
                width={42}
                height={42}
                src={hairDye}
                className=" m-3"
                alt="hero.png"
              />
            </div>
            <CardTitle>Anti Age Face Treatment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-prime font-medium text-xl">$199</div>
          </CardContent>
          <CardDescription>
            Amazing flyers, social media posts and brand representations that
            would make your brand stand out.
          </CardDescription>
        </Card>
        {/* card 3 */}
        <Card>
          <CardHeader>
            <div className="bg-[#F63E7B]/20 mb-2 w-fit mx-auto text-center rounded-full">
              <Image
                width={42}
                height={42}
                src={facialTreatment}
                className=" m-3"
                alt="hero.png"
              />
            </div>
            <CardTitle>Anti Age Face Treatment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-prime font-medium text-xl">$199</div>
          </CardContent>
          <CardDescription>
            With well written codes, we build amazing apps for all platforms,
            mobile and web apps in general.
          </CardDescription>
        </Card>
      </div>
      <Button className="mt-12">Explore more</Button>
    </section>
  );
};

export default Services;
