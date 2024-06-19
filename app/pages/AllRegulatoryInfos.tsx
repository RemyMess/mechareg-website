// Interface for defining the structure of regulatory information
interface RegulatoryInfo {
    [key: string]: {
        fullName: string,
        isSupported: boolean,
        regulatoryAuthoritiesDescription: string,
        regulatoryAuthorities: { name: string, url: string }[];
        highLevelRequirement: string,
        tradingRequirements: { title: string, description: string, url: string }[];
        legislativeDocuments: { name: string, url: string }[];
        internationalStandards: { acceptance: boolean, standards: { name: string, url: string }[] };
        documentSubmissionProcess: string
    }
  }

const AllRegularyInfos: RegulatoryInfo = 
    {
    "US": {
            fullName: "United States of America",
            isSupported: true,
            regulatoryAuthoritiesDescription: "The regulatory body for medical devices in the United States is the Food and Drug Administration (FDA). The FDA oversees the safety and effectiveness of medical devices through a comprehensive review process.",
            regulatoryAuthorities: [
                {
                    name: "FDA (Food and Drug Administration)",
                    url: "https://www.fda.gov"
                }
            ],
            highLevelRequirement: "To legally sell your medical device in the United States, you must adhere to FDA regulations, which may involve premarket notification (510(k)) or premarket approval (PMA), depending on the device classification.",
            tradingRequirements: [
                {
                    title: "Device Classification",
                    description: "Determine the appropriate classification of your device under the FDA's Medical Device Classification system. This will dictate the regulatory pathway (e.g., Class II devices typically require a 510(k) clearance).",
                    url: "https://www.fda.gov/medical-devices/classify-your-medical-device"
                },
                {
                    title: "Premarket Notification (510(k)) or Premarket Approval (PMA)",
                    description: "Prepare and submit a 510(k) premarket notification if your device is substantially equivalent to a legally marketed predicate device, or a PMA application if it is a high-risk device.",
                    url: "https://www.fda.gov/medical-devices/premarket-submissions/premarket-approval-pma"
                },
                {
                    title: "Quality System Regulation (QSR)",
                    description: "Implement and adhere to FDA's Quality System Regulation, which includes requirements for design controls, production controls, and quality assurance.",
                    url: "https://www.fda.gov/medical-devices/postmarket-requirements-devices/quality-system-regulations"
                },
                {
                    title: "Labeling and Advertising",
                    description: "Ensure compliance with FDA regulations on labeling and advertising your medical device.",
                    url: "https://www.fda.gov/medical-devices/device-advice-comprehensive-regulatory-assistance/labeling-medical-devices"
                }
            ],
            legislativeDocuments: [
                {
                    name: "FDA Regulations",
                    url: "https://www.fda.gov/medical-devices/overview-device-regulation"
                }
            ],
            internationalStandards: {
                acceptance: true,
                standards: [
                    {
                        name: "ISO 13485",
                        url: "https://www.iso.org/standard/59752.html"
                    }
                ]
            },
            documentSubmissionProcess: "Submission details, including forms and guidance documents, are available on the FDA's website. For specific submission processes like 510(k) or PMA, refer to the FDA's guidance documents."
        },
    "CN": {
        fullName: "China",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "JP": {
        fullName: "Japan",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "DE": {
        fullName: "Germany",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "FR": {
        fullName: "France",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "GB": {
        fullName: "United Kingdom",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "IN": {
        fullName: "India",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "BR": {
        fullName: "Brazil",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "CA": {
        fullName: "Canada",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "KR": {
        fullName: "South Korea",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "IT": {
        fullName: "Italy",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "AU": {
        fullName: "Australia",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "RU": {
        fullName: "Russia",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "ES": {
        fullName: "Spain",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "MX": {
        fullName: "Mexico",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "NL": {
        fullName: "Netherlands",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "SA": {
        fullName: "Saudi Arabia",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "CH": {
        fullName: "Switzerland",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "TR": {
        fullName: "Turkey",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "AR": {
        fullName: "Argentina",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "SE": {
        fullName: "Sweden",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "BE": {
        fullName: "Belgium",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "PL": {
        fullName: "Poland",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "TH": {
        fullName: "Thailand",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "ZA": {
        fullName: "South Africa",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "AT": {
        fullName: "Austria",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "MY": {
        fullName: "Malaysia",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "SG": {
        fullName: "Singapore",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "IL": {
        fullName: "Israel",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "NO": {
        fullName: "Norway",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "FI": {
        fullName: "Finland",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "DK": {
        fullName: "Denmark",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "IE": {
        fullName: "Ireland",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "PT": {
        fullName: "Portugal",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "GR": {
        fullName: "Greece",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "AE": {
        fullName: "United Arab Emirates",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "CL": {
        fullName: "Chile",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "NZ": {
        fullName: "New Zealand",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "CO": {
        fullName: "Colombia",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "CZ": {
        fullName: "Czech Republic",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "PH": {
        fullName: "Philippines",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "VN": {
        fullName: "Vietnam",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "EG": {
        fullName: "Egypt",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "PK": {
        fullName: "Pakistan",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "RO": {
        fullName: "Romania",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "HU": {
        fullName: "Hungary",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "QA": {
        fullName: "Qatar",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "UA": {
        fullName: "Ukraine",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "PE": {
        fullName: "Peru",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    },
    "KW": {
        fullName: "Kuwait",
        isSupported: false,
        regulatoryAuthoritiesDescription: "",
        regulatoryAuthorities: [],
        highLevelRequirement: "",
        tradingRequirements: [],
        legislativeDocuments: [],
        internationalStandards: { acceptance: false, standards: [] },
        documentSubmissionProcess: ""
    }
};



export default AllRegularyInfos