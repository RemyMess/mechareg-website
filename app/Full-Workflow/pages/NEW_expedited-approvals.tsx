import React from 'react';
import ALL_REGULATORY_INFOS from "../data/NEW_all-regulatory-infos";
import ButtonsRegulatorySteps from "../components/ButtonsRegulatorySteps"

const ExpeditedApprovals: React.FC<{ countryCode: string }> = ({ countryCode }) => {
    const RegulatoryInfo = ALL_REGULATORY_INFOS[countryCode];

    return (
        <div className="text-center full-width align-content-center">
            <h1 className="font-bold text-3xl mb-10 flex justify-center">
                <img className="mx-2 pb-2" src={`https://catamphetamine.gitlab.io/country-flag-icons/3x2/${countryCode}.svg`} style={{height: "50px"}} alt={`${RegulatoryInfo.fullName} flag`} />
                {RegulatoryInfo.fullName}: Optimised steps for fast approval
            </h1>
            <ButtonsRegulatorySteps countryCode={countryCode}/>
        </div>
    );
};

export default ExpeditedApprovals;
