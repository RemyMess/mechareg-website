
"use client";

import { useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
//import Layout from "@/components/common/layout/layout";
import CountrySelector, { SelectMenuOption, COUNTRIES } from "../components/NEW_country-selector"
import CountryOverview from "./NEW_country-overview";
import ExpeditedApprovals from "./NEW_expedited-approvals";
import Stepper from "../components/NEW_stepper";

const GuidanceWorkflow: React.FC = () => {
    const [step, setStep] = useState<number>(1);
    const [selectedCountry, setSelectedCountry] = useState<SelectMenuOption>({ title: '', value: '' });

    const handleSelectCountry = (country: string) => {
        const selectedCountry = COUNTRIES.find(c => c.value === country);
        if (selectedCountry) {
            setSelectedCountry(selectedCountry);
            setStep(2);
        }
    };

    const currentFlow = (step: number) => {
        switch(step) {
            case 1:
                return (
                    <Box>
                        {/* <Heading>Select a Country</Heading> */}
                        <CountrySelector
                            id="country-selector"
                            open={true}
                            disabled={false}
                            onToggle={() => {}}
                            onChange={handleSelectCountry}
                            selectedValue={selectedCountry}
                        />
                    </Box>
                );
            case 2:
                return <CountryOverview countryCode={selectedCountry.value} />;
            case 3:
                return <ExpeditedApprovals countryCode={selectedCountry.value} />;
            default:
                return null;
        }
    };

    return (

        <Box display="flex" height="100vh">
            <Box flex="1" padding="4">

                <div className="flex items-center justify-between w-full mb-8 py-12">
                    <button
                        className={`btn mr-20 bg-black text-white px-10 py-2 ${((step === 1) || (step === 1 && selectedCountry.value === '')) ? 'opacity-0 pointer-events-none' : ''}`}
                        onClick={() => setStep(Math.max(1, step - 1))}
                        disabled={step === 1}
                    >
                        Back
                    </button>
                    {Stepper(step)}
                    <button
                        className={`btn ml-20 bg-black text-white px-10 py-2 ${((step === 3 || step === 1) || (step === 1 && selectedCountry.value === '')) ? 'opacity-0 pointer-events-none' : ''}`}
                        onClick={() => setStep(Math.min(step + 1, 3))}
                        disabled={(step === 3 || step == 1) || (step === 1 && selectedCountry.value === '')}
                        // hidden={(step === 3 || step == 1) || (step === 1 && selectedCountry.value === '')}
                    >
                        Next
                    </button>
                </div>
                <hr />
                <section className="flex flex-col justify-left gap-12 px-8 py-12 full-height">
                    <div className="mt-8">
                        {currentFlow(step)}
                    </div>
                </section>

            </Box>
        </Box>
    );
};

export default GuidanceWorkflow;
