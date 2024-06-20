import React from 'react';
import ALL_REGULATORY_INFOS from "@/app/pages/ExpeditedApprovals/AllRegulatoryInfos"
// Functional component to display regulatory information
const ExpeditedApprovals: React.FC<{ countryCode: string }> = ({ countryCode }) => {

  return (
    <>
    <div className="text-left full-width">
      <h1 className="font-bold text-3xl mb-10 flex"><img className="mx-2 pb-2" src={"https://catamphetamine.gitlab.io/country-flag-icons/3x2/" + countryCode +".svg"} style={{height: "50px"}}/> {ALL_REGULATORY_INFOS["GB"].fullName} {": Follow these steps to accelerate your approval process"}</h1>

        <p>Below is an optimised list of questions & tasks we'll ask you to complete to obtain approval. For some steps, we provide tailored tools to make completion even faster.</p>

      {/* <h1 className="font-bold text-xl mb-4 flex">Core information</h1> */}
        <h2 className="font-bold mt-4 mb-2">Step 1: Identify your risk class.</h2>
            <p className="mb-2">{"Determine the classification of your medical device. Medical devices are classified into different classes (Class I, IIa, IIb, and III) based on their risk. What you will need to do will depend on your class."}</p>

        <h2 className="font-bold mt-4 mb-2">Step 2. Verify your device satisfies the UK regulation</h2>
          <p className="mb-2">{"Your device must comply with the UK Medical Device Regulations (UK MDR 2002), which were derived from the EU Medical Device Directives and adapted post-Brexit."}</p>

        <h2 className="font-bold font-bold mt-4 mb-2">Step 3. Conduct some clinical Trials (if necessary)</h2>
          <p className="mb-2">{"If your surgical device is new or has a novel application, you may need to conduct clinical trials in the UK. This requires approval from the MHRA and adherence to the Good Clinical Practice (GCP) guidelines."}</p>

        <h2 className="font-bold font-bold mt-4 mb-2">Step 4. Write Technical Documentation</h2>
          <p className="mb-2">{"Prepare comprehensive technical documentation demonstrating the safety and performance of your surgical robot. This includes:"}</p>
          <ol className="list-decimal ml-6">
            <li>Device description and specifications</li>
            <li>Design and manufacturing information</li>
            <li>Risk management files</li>
            <li>Clinical evaluation reports</li>
            <li>Post-market surveillance plan</li>
            <li>Instructions for use and labelling</li>
          </ol>

        <h2 className="font-bold font-bold mt-4 mb-2">Step 5. Send documents for conformity assessment</h2>
          <ol className="list-decimal ml-6">
            Conduct a conformity assessment to demonstrate that your device meets the essential requirements of the UK MDR. For Class IIb and Class III devices, this typically involves an audit by a Notified Body or Approved Body.
          </ol>


        <h2 className="font-bold font-bold mt-4 mb-2">Step 6. Affix your UKCA Marking</h2>
          <p className="mb-2">{"Affix the UK Conformity Assessed (UKCA) marking to your device. The UKCA marking replaces the CE marking in the UK. For medical devices, this indicates that the device conforms to the relevant regulations."}</p>


        <h2 className="font-bold font-bold mt-4 mb-2">Step 7. Register the Device with MHRA</h2>
            <p className="mb-2">Register your medical device with the MHRA before placing it on the market. This involves submitting information about the device, the manufacturer, and the UK Responsible Person.</p>


        <h2 className="font-bold font-bold mt-4 mb-2">Step 8. Post-Market Surveillance & Reporting</h2>
            <p className="mb-2">Implement a post-market surveillance plan to monitor the performance of your medical device robot once it is on the market. You must report any adverse events or incidents to the MHRA.</p>
      
    </div>


    </>
  );
}

export default ExpeditedApprovals;