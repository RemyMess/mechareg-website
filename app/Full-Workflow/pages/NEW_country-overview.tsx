import React from 'react';
import ALL_REGULATORY_INFOS from "../data/NEW_all-regulatory-infos";

interface RegulatoryInfoPageProps {
    countryCode: string;
}

const RegulatoryInfoPage: React.FC<RegulatoryInfoPageProps> = ({ countryCode }) => {
    const RegulatoryInfo = ALL_REGULATORY_INFOS[countryCode];

    return (
        <div className="text-left full-width">
            <h1 className="font-bold text-3xl mb-10 flex">
                <img
                    className="mx-2 pb-2"
                    src={`https://catamphetamine.gitlab.io/country-flag-icons/3x2/${countryCode}.svg`}
                    style={{ height: "50px" }}
                />
                {RegulatoryInfo.fullName}: How are Medical Devices approved?
            </h1>
            <h2 className="font-bold mt-4 mb-2">A. Who are the relevant local authorities?</h2>
            <p>{RegulatoryInfo.regulatoryAuthoritiesDescription}</p>
            <ol className="list-disc ml-6">
                {RegulatoryInfo.regulatoryAuthorities.map(authority => (
                    <li key={authority.name}>
                        <a
                            className="text-blue-500 hover:text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                            href={authority.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {authority.name}
                        </a>
                    </li>
                ))}
            </ol>
            <h2 className="font-bold mt-4 mb-2">B. What needs to be done before selling in this country?</h2>
            <p className="mb-2">{RegulatoryInfo.highLevelRequirement}</p>
            <ol className="list-decimal ml-6">
                {RegulatoryInfo.tradingRequirements.map(tradingRequirement => (
                    <li key={tradingRequirement.description}>
                        <b>{tradingRequirement.title}</b>: {' '}
                        {tradingRequirement.description} - {' '}
                        <a
                            className="text-blue-500 hover:text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                            href={tradingRequirement.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            More Info
                        </a>
                    </li>
                ))}
            </ol>
            <h2 className="font-bold font-bold mt-4 mb-2">C. Where do I need to submit these documents?</h2>
            <p className="mb-2">{RegulatoryInfo.documentSubmissionProcess}</p>
            <h2 className="font-bold font-bold mt-4 mb-2">D. What are the documents I should be aware of?</h2>
            <ol className="list-decimal ml-6">
                {RegulatoryInfo.legislativeDocuments.map(legislativeDocument => (
                    <li key={legislativeDocument.name}>
                        <a
                            className="text-blue-500 hover:text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                            href={legislativeDocument.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {legislativeDocument.name}
                        </a>
                    </li>
                ))}
            </ol>
            <h2 className="font-bold font-bold mt-4 mb-2">E. If this country accepts international standards, which ones?</h2>
            {RegulatoryInfo.internationalStandards.acceptance ? (
                <ul className="list-disc ml-6">
                    {RegulatoryInfo.internationalStandards.standards.map(standard => (
                        <li key={standard.name}>
                            <a
                                className="text-blue-500 hover:text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                                href={standard.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {standard.name}
                            </a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>International standards not accepted.</p>
            )}
        </div>
    );
};

export default RegulatoryInfoPage;
