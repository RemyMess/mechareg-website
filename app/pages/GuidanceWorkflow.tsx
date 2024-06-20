"use client";

import Link from "next/link";
import ButtonSignin from "@/components/ButtonSignin";
import Stepper from "@/components/Stepper"
import RegulatoryInfoPage from "./RegulatoryInfoPage";
import { useState, useEffect } from "react";



const currentFlow = (step: number) => {
    if(step==1){
        return (
            <></>
        )
    }

    if(step==2){
        return (
                <RegulatoryInfoPage countryCode="US"/>
        )
    }

    if(step==3){
        return (
            <></>
        )
    }
}


export default function GuidanceWorkflow() {
  const [step, setStep] = useState<number>(2);

  const stepperWithButtons = () => {
    return (
        <>
        <div className="flex items-center justify-between w-full mb-8 py-12">
            {/* {!(step == 1) && ( */}
                <button
                className={"btn mr-20 bg-black text-white px-10 py-2"}
                onClick={()=>{setStep(Math.max(1, step-1))}}
                disabled={step == 1}
                >
                    {"Back"}
                </button>
            {/* )} */}
                {Stepper(step)}
            <button
                className={`btn ml-20 bg-black text-white px-10 py-2`}
                onClick={()=>{setStep(Math.min(step+1, 3))}}
                >
                {"Next"}
            </button>
        </div>
        <hr></hr>
        </>
    )

    }

  return (
    <>
      {/* <header className="">
        <ButtonSignin text="Login" />
      </header> */}
      <main>
        {stepperWithButtons()}

        <section className="flex flex-col items-center justify-center text-center gap-12 px-8 py-12 full-height">
            <div className="mt-8">
                {currentFlow(step)}
            </div>
          {/* <h1 className="text-3xl font-extrabold">Ship Fast ⚡️</h1>

          <p className="text-lg opacity-80">
            The start of your new startup... What are you gonna build?
          </p>

          <a
            className="btn btn-primary"
            href="https://shipfa.st/docs"
            target="_blank"
          >
            Documentation & tutorials{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <Link href="/blog" className="link link-hover text-sm">
            Fancy a blog?
          </Link> */}
        </section>
      </main>
    </>
  );
}
