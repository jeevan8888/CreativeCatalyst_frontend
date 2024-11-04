// import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="homePage text-center">
      <div className="py-10 h-full flex flex-col justify-between items-center">
        <div>
          <h1>
            <span className="text-white text-7xl font-bold ">
              Creative Catalyst<br />Dive into the </span>
            <span className="text-[#de1d60] text-[88px] font-bold ">Future</span>
          </h1>
          <p className="text-white text-4xl font-normal">Experience art like never before</p>
        </div>
        <div className="flex gap-5">
          <Button variant={'outline'} className="rounded-full text-pink-700 font-bold text-4xl p-8">
            EXPLORE
          </Button>
          <Button variant={'outline'} className="rounded-full text-pink-700 font-bold text-4xl p-8">
            INVEST
          </Button>
        </div>
      </div>
    </section>
  );
}
