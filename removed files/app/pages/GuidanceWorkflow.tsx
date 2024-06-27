"use client";

import Stepper from "@/components/Stepper"
import CountryOverview from "./ExpeditedApprovals/CountryOverview";
import ExpeditedApprovals from "./ExpeditedApprovals/ExpeditedApprovals";
import { useState, useEffect } from "react";



const currentFlow = (step: number) => {
    if(step==1){
        return (
            <></>
        )
    }
    if(step==2){
        return (
            <CountryOverview countryCode="GB"/>
        )
    }
    if(step==3){
        return (
            <ExpeditedApprovals countryCode="GB"/>
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
                className={"btn mr-20 bg-black text-white px-5 py-2"}
                onClick={()=>{setStep(Math.max(1, step-1))}}
                disabled={step == 1}
                >
                    {"Back"}
                </button>
            {/* )} */}
                {Stepper(step)}
            <button
                className={`btn ml-20 bg-black text-white px-5 py-2`}
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
      {/* <main> */}
        {stepperWithButtons()}

        <section className="flex flex-col justify-left gap-12 px-8 py-12 full-height">
            <div className="mt-8">
                {currentFlow(step)}
            </div>
        </section>
      {/* </main> */}
    </>
  );
}
