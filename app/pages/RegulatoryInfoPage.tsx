import React from 'react';
import RegulatoryInfo from 
import AllRegularyInfos from "@/app/pages/AllRegulatoryInfos";

// Functional component to display regulatory information
const RegulatoryInfoPage: React.FC<{ country: string }> = ({ country }) => {
  const RegulatoryInfo = AllRegularyInfos[country]

  return (
    <div>
      <h1>Regulatory Information for Medical Devices - {country}</h1>

      <h2>Regulatory Authorities:</h2>
      <ul>
        {RegulatoryInfo.regulatoryAuthorities.map(authority => (
          <li key={authority.name}>
            <a href={authority.url} target="_blank" rel="noopener noreferrer">{authority.name}</a>
          </li>
        ))}
      </ul>

      <h2>Requirements to Sell Device:</h2>
      <ul>
        {RegulatoryInfo.requirements.map(requirement => (
          <li key={requirement.description}>
            {requirement.description} - {' '}
            <a href={requirement.url} target="_blank" rel="noopener noreferrer">More Info</a>
          </li>
        ))}
      </ul>

      <h2>Legislative Document:</h2>
      <p>
        <a href={RegulatoryInfo.legislativeDocument.url} target="_blank" rel="noopener noreferrer">
          {RegulatoryInfo.legislativeDocument.name}
        </a>
      </p>

      <h2>Acceptance of International Standards:</h2>
      {RegulatoryInfo.internationalStandards.acceptance ? (
        <ul>
          {RegulatoryInfo.internationalStandards.standards.map(standard => (
            <li key={standard.name}>
              {standard.name} - {' '}
              <a href={standard.url} target="_blank" rel="noopener noreferrer">Details</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>International standards not accepted.</p>
      )}
    </div>
  );
}

export default RegulatoryInfoPage;