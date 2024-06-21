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

const ALL_REGULATORY_INFOS: RegulatoryInfo =
    {
        "US": {
            fullName: "United States",
            isSupported: true,
            regulatoryAuthoritiesDescription: "The Food and Drug Administration (FDA) is the primary regulatory authority for medical devices in the United States.",
            regulatoryAuthorities: [
                {
                    "name": "FDA (Food and Drug Administration)",
                    "url": "https://www.fda.gov"
                }
            ],
            highLevelRequirement: "To legally sell a surgical robot in the United States, it must comply with FDA regulations, including classification, premarket submission (510(k) or PMA), Quality System Regulation (QSR), and labeling requirements. Files must be submitted to the FDA through their Electronic Submissions Gateway.",
            tradingRequirements: [
                {
                    "title": "Device Classification",
                    "description": "Determine the appropriate classification of your device under the FDA's Medical Device Classification system.",
                    "url": "https://www.fda.gov/medical-devices/classify-your-medical-device"
                },
                {
                    "title": "Premarket Notification (510(k)) or Premarket Approval (PMA)",
                    "description": "Prepare and submit a 510(k) premarket notification if your device is substantially equivalent to a legally marketed predicate device, or a PMA application if it is a high-risk device.",
                    "url": "https://www.fda.gov/medical-devices/premarket-submissions/premarket-approval-pma"
                },
                {
                    "title": "Quality System Regulation (QSR)",
                    "description": "Implement and adhere to FDA's Quality System Regulation, which includes requirements for design controls, production controls, and quality assurance.",
                    "url": "https://www.fda.gov/medical-devices/postmarket-requirements-devices/quality-system-regulations"
                },
                {
                    "title": "Labeling and Advertising",
                    "description": "Ensure compliance with FDA regulations on labeling and advertising your medical device.",
                    "url": "https://www.fda.gov/medical-devices/device-advice-comprehensive-regulatory-assistance/labeling-medical-devices"
                }
            ],
            legislativeDocuments: [
                {
                    "name": "FDA Regulations",
                    "url": "https://www.fda.gov/medical-devices/overview-device-regulation"
                }
            ],
            internationalStandards: {
                "acceptance": true,
                "standards": [
                    {
                        "name": "ISO 13485",
                        "url": "https://www.iso.org/standard/59752.html"
                    },
                    {
                        "name": "IEC 60601",
                        "url": "https://www.iec.ch/standards/60446"
                    }
                ]
            },
            documentSubmissionProcess: "Submission details for FDA premarket notifications (510(k)) and premarket approvals (PMA) are provided in the specific guidance documents available on the FDA website."
        },
        "CN": {
            fullName: "China",
            "isSupported": true,
            regulatoryAuthoritiesDescription: "The National Medical Products Administration (NMPA) is the primary regulatory authority for medical devices in China.",
            regulatoryAuthorities: [
                {
                    "name": "NMPA (National Medical Products Administration)",
                    "url": "https://www.nmpa.gov.cn"
                }
            ],
            highLevelRequirement: "To legally sell a surgical robot in China, the device must comply with NMPA regulations, including device classification, registration, and approval. Files need to be submitted to the NMPA for review and approval.",
            tradingRequirements: [
                {
                    "title": "Device Classification",
                    "description": "Determine the appropriate classification of your device under the NMPA's Medical Device Classification system.",
                    "url": "https://www.nmpa.gov.cn/WS04/CL2042/"
                },
                {
                    "title": "Device Registration and Approval",
                    "description": "Prepare and submit registration documents including clinical data and technical specifications to the NMPA.",
                    "url": "https://www.nmpa.gov.cn/WS04/CL2090/"
                },
                {
                    "title": "Quality Management System (QMS)",
                    "description": "Implement and adhere to NMPA's Quality Management System requirements.",
                    "url": "https://www.nmpa.gov.cn/WS04/CL2050/"
                },
                {
                    "title": "Labeling and Instructions",
                    "description": "Ensure compliance with NMPA regulations on labeling and instructions for use.",
                    "url": "https://www.nmpa.gov.cn/WS04/CL2100/"
                }
            ],
            legislativeDocuments: [
                {
                    "name": "Regulations for the Supervision and Administration of Medical Devices",
                    "url": "https://www.nmpa.gov.cn/WS04/CL2132/"
                }
            ],
            internationalStandards: {
                "acceptance": true,
                "standards": [
                    {
                        "name": "ISO 13485",
                        "url": "https://www.iso.org/standard/59752.html"
                    }
                ]
            },
            documentSubmissionProcess: "Submission details for device registration and approval are provided on the NMPA website. Documents must be submitted in Chinese."
        },
        "JP": {
            fullName: "Japan",
            "isSupported": true,
            regulatoryAuthoritiesDescription: "The Pharmaceuticals and Medical Devices Agency (PMDA) is the primary regulatory authority for medical devices in Japan.",
            regulatoryAuthorities: [
                {
                    "name": "PMDA (Pharmaceuticals and Medical Devices Agency)",
                    "url": "https://www.pmda.go.jp"
                }
            ],
            highLevelRequirement: "To legally sell a surgical robot in Japan, it must comply with PMDA regulations, including device classification, premarket submission, and quality management system compliance. Files must be submitted to the PMDA for review and approval.",
            tradingRequirements: [
                {
                    "title": "Device Classification",
                    "description": "Determine the appropriate classification of your device under the PMDA's Medical Device Classification system.",
                    "url": "https://www.pmda.go.jp/eng/md/md-resources/0003.html"
                },
                {
                    "title": "Premarket Submission",
                    "description": "Prepare and submit a premarket notification or approval application depending on the device classification.",
                    "url": "https://www.pmda.go.jp/eng/regulatory/system/0004.html"
                },
                {
                    "title": "Quality Management System (QMS)",
                    "description": "Implement and adhere to PMDA's Quality Management System requirements.",
                    "url": "https://www.pmda.go.jp/eng/regulatory/system/0005.html"
                },
                {
                    "title": "Labeling and Instructions",
                    "description": "Ensure compliance with PMDA regulations on labeling and instructions for use.",
                    "url": "https://www.pmda.go.jp/eng/regulatory/system/0006.html"
                }
            ],
            legislativeDocuments: [
                {
                    "name": "Pharmaceutical and Medical Device Act",
                    "url": "https://www.pmda.go.jp/eng/regulatory/system/0007.html"
                }
            ],
            internationalStandards: {
                "acceptance": true,
                "standards": [
                    {
                        "name": "ISO 13485",
                        "url": "https://www.iso.org/standard/59752.html"
                    }
                ]
            },
            documentSubmissionProcess: "Submission details for premarket notifications and approvals are provided on the PMDA website."
        },
        "DE": {
            fullName: "Germany",
            "isSupported": true,
            regulatoryAuthoritiesDescription: "The Federal Institute for Drugs and Medical Devices (BfArM) and the German Institute for Standardization (DIN) are the primary regulatory authorities for medical devices in Germany.",
            regulatoryAuthorities: [
                {
                    "name": "BfArM (Federal Institute for Drugs and Medical Devices)",
                    "url": "https://www.bfarm.de"
                },
                {
                    "name": "DIN (German Institute for Standardization)",
                    "url": "https://www.din.de"
                }
            ],
            highLevelRequirement: "To legally sell a surgical robot in Germany, it must comply with the EU Medical Device Regulation (MDR), including device classification, conformity assessment, and CE marking. Files must be submitted to a Notified Body for review and approval.",
            tradingRequirements: [
                {
                    "title": "Device Classification",
                    "description": "Determine the appropriate classification of your device under the EU MDR.",
                    "url": "https://ec.europa.eu/health/md_sector/new_regulations/classification_en"
                },
                {
                    "title": "Conformity Assessment",
                    "description": "Undergo conformity assessment procedures based on the device classification, which may include clinical evaluations and quality management system audits.",
                    "url": "https://ec.europa.eu/health/md_sector/new_regulations/assessment_en"
                },
                {
                    "title": "CE Marking",
                    "description": "Ensure your device meets the essential requirements of the EU MDR and affix the CE mark.",
                    "url": "https://ec.europa.eu/health/md_sector/new_regulations/ce_marking_en"
                },
                {
                    "title": "Labeling and Instructions",
                    "description": "Ensure compliance with EU MDR regulations on labeling and instructions for use.",
                    "url": "https://ec.europa.eu/health/md_sector/new_regulations/labelling_en"
                }
            ],
            legislativeDocuments: [
                {
                    "name": "EU Medical Device Regulation (MDR)",
                    "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32017R0745"
                }
            ],
            internationalStandards: {
                "acceptance": true,
                "standards": [
                    {
                        "name": "ISO 13485",
                        "url": "https://www.iso.org/standard/59752.html"
                    },
                    {
                        "name": "IEC 60601",
                        "url": "https://www.iec.ch/standards/60446"
                    }
                ]
            },
            documentSubmissionProcess: "Submission details for conformity assessment and CE marking are provided by the Notified Bodies designated by the EU."
        },
        "FR": {
            fullName: "France",
            "isSupported": true,
            regulatoryAuthoritiesDescription: "The National Agency for the Safety of Medicines and Health Products (ANSM) is the primary regulatory authority for medical devices in France.",
            regulatoryAuthorities: [
                {
                    "name": "ANSM (National Agency for the Safety of Medicines and Health Products)",
                    "url": "https://www.ansm.sante.fr"
                }
            ],
            highLevelRequirement: "To legally sell a surgical robot in France, it must comply with the EU Medical Device Regulation (MDR), including device classification, conformity assessment, and CE marking. Files must be submitted to a Notified Body for review and approval.",
            tradingRequirements: [
                {
                    "title": "Device Classification",
                    "description": "Determine the appropriate classification of your device under the EU MDR.",
                    "url": "https://ec.europa.eu/health/md_sector/new_regulations/classification_en"
                },
                {
                    "title": "Conformity Assessment",
                    "description": "Undergo conformity assessment procedures based on the device classification, which may include clinical evaluations and quality management system audits.",
                    "url": "https://ec.europa.eu/health/md_sector/new_regulations/assessment_en"
                },
                {
                    "title": "CE Marking",
                    "description": "Ensure your device meets the essential requirements of the EU MDR and affix the CE mark.",
                    "url": "https://ec.europa.eu/health/md_sector/new_regulations/ce_marking_en"
                },
                {
                    "title": "Labeling and Instructions",
                    "description": "Ensure compliance with EU MDR regulations on labeling and instructions for use.",
                    "url": "https://ec.europa.eu/health/md_sector/new_regulations/labelling_en"
                }
            ],
            legislativeDocuments: [
                {
                    "name": "EU Medical Device Regulation (MDR)",
                    "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32017R0745"
                }
            ],
            internationalStandards: {
                "acceptance": true,
                "standards": [
                    {
                        "name": "ISO 13485",
                        "url": "https://www.iso.org/standard/59752.html"
                    },
                    {
                        "name": "IEC 60601",
                        "url": "https://www.iec.ch/standards/60446"
                    }
                ]
            },
            documentSubmissionProcess: "Submission details for conformity assessment and CE marking are provided by the Notified Bodies designated by the EU."
        },
        "GB": {
            fullName: "United Kingdom",
            "isSupported": true,
            regulatoryAuthoritiesDescription: "The Medicines and Healthcare products Regulatory Agency (MHRA) is the primary regulatory authority for medical devices in the United Kingdom.",
            regulatoryAuthorities: [
                {
                    "name": "MHRA (Medicines and Healthcare products Regulatory Agency)",
                    "url": "https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency"
                }
            ],
            highLevelRequirement: "To legally sell a surgical robot in the United Kingdom, it must comply with UK MDR 2002 regulations, including device classification, conformity assessment, and UKCA marking. Files must be submitted to a UK Approved Body for review and approval.",
            tradingRequirements: [
                {
                    "title": "Device Classification",
                    "description": "Determine the appropriate classification of your device under the UK MDR 2002.",
                    "url": "https://www.gov.uk/guidance/medical-devices-conformity-assessment-and-the-ukca-mark"
                },
                {
                    "title": "Conformity Assessment",
                    "description": "Undergo conformity assessment procedures based on the device classification, which may include clinical evaluations and quality management system audits.",
                    "url": "https://www.gov.uk/guidance/medical-devices-conformity-assessment-and-the-ukca-mark"
                },
                {
                    "title": "UKCA Marking",
                    "description": "Ensure your device meets the essential requirements of the UK MDR 2002 and affix the UKCA mark.",
                    "url": "https://www.gov.uk/guidance/medical-devices-conformity-assessment-and-the-ukca-mark"
                },
                {
                    "title": "Labeling and Instructions",
                    "description": "Ensure compliance with UK MDR 2002 regulations on labeling and instructions for use.",
                    "url": "https://www.gov.uk/guidance/medical-devices-conformity-assessment-and-the-ukca-mark"
                }
            ],
            legislativeDocuments: [
                {
                    "name": "UK Medical Device Regulations (MDR) 2002",
                    "url": "https://www.legislation.gov.uk/uksi/2002/618/contents/made"
                }
            ],
            internationalStandards: {
                "acceptance": true,
                "standards": [
                    {
                        "name": "ISO 13485",
                        "url": "https://www.iso.org/standard/59752.html"
                    },
                    {
                        "name": "IEC 60601",
                        "url": "https://www.iec.ch/standards/60446"
                    }
                ]
            },
            documentSubmissionProcess: "Submission details for conformity assessment and UKCA marking are provided by the UK Approved Bodies."
        },
        "IN": {
            fullName: "India",
            "isSupported": true,
            regulatoryAuthoritiesDescription: "The Central Drugs Standard Control Organization (CDSCO) is the primary regulatory authority for medical devices in India.",
            regulatoryAuthorities: [
                {
                    "name": "CDSCO (Central Drugs Standard Control Organization)",
                    "url": "https://cdsco.gov.in"
                }
            ],
            highLevelRequirement: "To legally sell a surgical robot in India, it must comply with CDSCO regulations, including device classification, registration, and quality management system compliance. Files need to be submitted to the CDSCO for review and approval.",
            tradingRequirements: [
                {
                    "title": "Device Classification",
                    "description": "Determine the appropriate classification of your device under the CDSCO's Medical Device Rules.",
                    "url": "https://cdsco.gov.in/opencms/opencms/en/Medical-Device-Diagnostics/"
                },
                {
                    "title": "Device Registration",
                    "description": "Prepare and submit registration documents including clinical data and technical specifications to the CDSCO.",
                    "url": "https://cdsco.gov.in/opencms/opencms/en/Medical-Device-Diagnostics/"
                },
                {
                    "title": "Quality Management System (QMS)",
                    "description": "Implement and adhere to CDSCO's Quality Management System requirements.",
                    "url": "https://cdsco.gov.in/opencms/opencms/en/Medical-Device-Diagnostics/"
                },
                {
                    "title": "Labeling and Instructions",
                    "description": "Ensure compliance with CDSCO regulations on labeling and instructions for use.",
                    "url": "https://cdsco.gov.in/opencms/opencms/en/Medical-Device-Diagnostics/"
                }
            ],
            legislativeDocuments: [
                {
                    "name": "Medical Device Rules, 2017",
                    "url": "https://cdsco.gov.in/opencms/opencms/en/Medical-Device-Diagnostics/"
                }
            ],
            internationalStandards: {
                "acceptance": true,
                "standards": [
                    {
                        "name": "ISO 13485",
                        "url": "https://www.iso.org/standard/59752.html"
                    }
                ]
            },
            documentSubmissionProcess: "Submission details for device registration and approval are provided on the CDSCO website."
        },
        "BR": {
            fullName: "Brazil",
            "isSupported": true,
            regulatoryAuthoritiesDescription: "The National Health Surveillance Agency (ANVISA) is the primary regulatory authority for medical devices in Brazil.",
            regulatoryAuthorities: [
                {
                    "name": "ANVISA (National Health Surveillance Agency)",
                    "url": "https://www.gov.br/anvisa"
                }
            ],
            highLevelRequirement: "To legally sell a surgical robot in Brazil, it must comply with ANVISA regulations, including device classification, registration, and Good Manufacturing Practices (GMP) compliance. Files need to be submitted to ANVISA for review and approval.",
            tradingRequirements: [
                {
                    "title": "Device Classification",
                    "description": "Determine the appropriate classification of your device under ANVISA's Medical Device Classification system.",
                    "url": "https://www.gov.br/anvisa/pt-br/assuntos/produtos-para-saude"
                },
                {
                    "title": "Device Registration",
                    "description": "Prepare and submit registration documents including clinical data and technical specifications to ANVISA.",
                    "url": "https://www.gov.br/anvisa/pt-br/assuntos/produtos-para-saude"
                },
                {
                    "title": "Good Manufacturing Practices (GMP)",
                    "description": "Implement and adhere to ANVISA's Good Manufacturing Practices requirements.",
                    "url": "https://www.gov.br/anvisa/pt-br/assuntos/produtos-para-saude"
                },
                {
                    "title": "Labeling and Instructions",
                    "description": "Ensure compliance with ANVISA regulations on labeling and instructions for use.",
                    "url": "https://www.gov.br/anvisa/pt-br/assuntos/produtos-para-saude"
                }
            ],
            legislativeDocuments: [
                {
                    "name": "RDC 16/2013",
                    "url": "https://www.in.gov.br/en/web/dou/-/resolucao-rdc-n-16-de-28-de-marco-de-2013-2990174"
                }
            ],
            internationalStandards: {
                "acceptance": true,
                "standards": [
                    {
                        "name": "ISO 13485",
                        "url": "https://www.iso.org/standard/59752.html"
                    }
                ]
            },
            documentSubmissionProcess: "Submission details for device registration and approval are provided on the ANVISA website."
        },
        "CA": {
            fullName: "Canada",
            "isSupported": true,
            regulatoryAuthoritiesDescription: "Health Canada is the primary regulatory authority for medical devices in Canada.",
            regulatoryAuthorities: [
                {
                    "name": "Health Canada",
                    "url": "https://www.canada.ca/en/health-canada.html"
                }
            ],
            highLevelRequirement: "To legally sell a surgical robot in Canada, it must comply with Health Canada regulations, including device classification, licensing, and quality management system compliance. Files need to be submitted to Health Canada for review and approval.",
            tradingRequirements: [
                {
                    "title": "Device Classification",
                    "description": "Determine the appropriate classification of your device under Health Canada's Medical Device Classification system.",
                    "url": "https://www.canada.ca/en/health-canada/services/medical-devices/device-licensing.html"
                },
                {
                    "title": "Device Licensing",
                    "description": "Prepare and submit licensing documents including clinical data and technical specifications to Health Canada.",
                    "url": "https://www.canada.ca/en/health-canada/services/medical-devices/device-licensing.html"
                },
                {
                    "title": "Quality Management System (QMS)",
                    "description": "Implement and adhere to Health Canada's Quality Management System requirements.",
                    "url": "https://www.canada.ca/en/health-canada/services/medical-devices/device-licensing.html"
                },
                {
                    "title": "Labeling and Instructions",
                    "description": "Ensure compliance with Health Canada regulations on labeling and instructions for use.",
                    "url": "https://www.canada.ca/en/health-canada/services/medical-devices/device-licensing.html"
                }
            ],
            legislativeDocuments: [
                {
                    "name": "Medical Devices Regulations (SOR/98-282)",
                    "url": "https://laws-lois.justice.gc.ca/eng/regulations/SOR-98-282/"
                }
            ],
            internationalStandards: {
                "acceptance": true,
                "standards": [
                    {
                        "name": "ISO 13485",
                        "url": "https://www.iso.org/standard/59752.html"
                    }
                ]
            },
            documentSubmissionProcess: "Submission details for device licensing are provided on the Health Canada website."
        },
        "KR": {
            fullName: "South Korea",
            "isSupported": true,
            regulatoryAuthoritiesDescription: "The Ministry of Food and Drug Safety (MFDS) is the primary regulatory authority for medical devices in South Korea.",
            regulatoryAuthorities: [
                {
                    "name": "MFDS (Ministry of Food and Drug Safety)",
                    "url": "https://www.mfds.go.kr"
                }
            ],
            highLevelRequirement: "To legally sell a surgical robot in South Korea, it must comply with MFDS regulations, including device classification, registration, and quality management system compliance. Files need to be submitted to the MFDS for review and approval.",
            tradingRequirements: [
                {
                    "title": "Device Classification",
                    "description": "Determine the appropriate classification of your device under the MFDS's Medical Device Classification system.",
                    "url": "https://www.mfds.go.kr/eng/index.do?nMenuCode=73"
                },
                {
                    "title": "Device Registration",
                    "description": "Prepare and submit registration documents including clinical data and technical specifications to the MFDS.",
                    "url": "https://www.mfds.go.kr/eng/index.do?nMenuCode=73"
                },
                {
                    "title": "Quality Management System (QMS)",
                    "description": "Implement and adhere to MFDS's Quality Management System requirements.",
                    "url": "https://www.mfds.go.kr/eng/index.do?nMenuCode=73"
                },
                {
                    "title": "Labeling and Instructions",
                    "description": "Ensure compliance with MFDS regulations on labeling and instructions for use.",
                    "url": "https://www.mfds.go.kr/eng/index.do?nMenuCode=73"
                }
            ],
            legislativeDocuments: [
                {
                    "name": "Medical Devices Act",
                    "url": "https://www.mfds.go.kr/eng/index.do?nMenuCode=73"
                }
            ],
            internationalStandards: {
                "acceptance": true,
                "standards": [
                    {
                        "name": "ISO 13485",
                        "url": "https://www.iso.org/standard/59752.html"
                    }
                ]
            },
            documentSubmissionProcess: "Submission details for device registration and approval are provided on the MFDS website."
        },
        "IT": {
            fullName: "Italy",
            "isSupported": true,
            regulatoryAuthoritiesDescription: "The Ministry of Health (Ministero della Salute) and the Italian Medicines Agency (AIFA) are the primary regulatory authorities for medical devices in Italy.",
            regulatoryAuthorities: [
                {
                    "name": "Ministero della Salute (Ministry of Health)",
                    "url": "https://www.salute.gov.it"
                },
                {
                    "name": "AIFA (Italian Medicines Agency)",
                    "url": "https://www.aifa.gov.it"
                }
            ],
            highLevelRequirement: "To legally sell a surgical robot in Italy, it must comply with the EU Medical Device Regulation (MDR), including device classification, conformity assessment, and CE marking. Files must be submitted to a Notified Body for review and approval.",
            tradingRequirements: [
                {
                    "title": "Device Classification",
                    "description": "Determine the appropriate classification of your device under the EU MDR.",
                    "url": "https://ec.europa.eu/health/md_sector/new_regulations/classification_en"
                },
                {
                    "title": "Conformity Assessment",
                    "description": "Undergo conformity assessment procedures based on the device classification, which may include clinical evaluations and quality management system audits.",
                    "url": "https://ec.europa.eu/health/md_sector/new_regulations/assessment_en"
                },
                {
                    "title": "CE Marking",
                    "description": "Ensure your device meets the essential requirements of the EU MDR and affix the CE mark.",
                    "url": "https://ec.europa.eu/health/md_sector/new_regulations/ce_marking_en"
                },
                {
                    "title": "Labeling and Instructions",
                    "description": "Ensure compliance with EU MDR regulations on labeling and instructions for use.",
                    "url": "https://ec.europa.eu/health/md_sector/new_regulations/labelling_en"
                }
            ],
            legislativeDocuments: [
                {
                    "name": "EU Medical Device Regulation (MDR)",
                    "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32017R0745"
                }
            ],
            internationalStandards: {
                "acceptance": true,
                "standards": [
                    {
                        "name": "ISO 13485",
                        "url": "https://www.iso.org/standard/59752.html"
                    },
                    {
                        "name": "IEC 60601",
                        "url": "https://www.iec.ch/standards/60446"
                    }
                ]
            },
            documentSubmissionProcess: "Submission details for conformity assessment and CE marking are provided by the Notified Bodies designated by the EU."
        },
        "AU": {
            fullName: "Australia",
            "isSupported": true,
            regulatoryAuthoritiesDescription: "The Therapeutic Goods Administration (TGA) is the primary regulatory authority for medical devices in Australia.",
            regulatoryAuthorities: [
                {
                    "name": "TGA (Therapeutic Goods Administration)",
                    "url": "https://www.tga.gov.au"
                }
            ],
            highLevelRequirement: "To legally sell a surgical robot in Australia, it must comply with TGA regulations, including device classification, inclusion in the Australian Register of Therapeutic Goods (ARTG), and conformity assessment. Files need to be submitted to the TGA for review and approval.",
            tradingRequirements: [
                {
                    "title": "Device Classification",
                    "description": "Determine the appropriate classification of your device under the TGA's Medical Device Classification system.",
                    "url": "https://www.tga.gov.au/classification-medical-devices"
                },
                {
                    "title": "Inclusion in ARTG",
                    "description": "Prepare and submit inclusion documents including clinical data and technical specifications to the TGA.",
                    "url": "https://www.tga.gov.au/australian-register-therapeutic-goods"
                },
                {
                    "title": "Conformity Assessment",
                    "description": "Undergo conformity assessment procedures based on the device classification, which may include clinical evaluations and quality management system audits.",
                    "url": "https://www.tga.gov.au/conformity-assessment-procedures-medical-devices"
                },
                {
                    "title": "Labeling and Instructions",
                    "description": "Ensure compliance with TGA regulations on labeling and instructions for use.",
                    "url": "https://www.tga.gov.au/medical-device-labels"
                }
            ],
            legislativeDocuments: [
                {
                    "name": "Therapeutic Goods (Medical Devices) Regulations 2002",
                    "url": "https://www.legislation.gov.au/Details/F2019C00184"
                }
            ],
            internationalStandards: {
                "acceptance": true,
                "standards": [
                    {
                        "name": "ISO 13485",
                        "url": "https://www.iso.org/standard/59752.html"
                    }
                ]
            },
            documentSubmissionProcess: "Submission details for inclusion in ARTG and conformity assessment are provided on the TGA website."
        },
        "RU": {
            fullName: "Russia",
            "isSupported": true,
            regulatoryAuthoritiesDescription: "The Federal Service for Surveillance in Healthcare (Roszdravnadzor) is the primary regulatory authority for medical devices in Russia.",
            regulatoryAuthorities: [
                {
                    "name": "Roszdravnadzor (Federal Service for Surveillance in Healthcare)",
                    "url": "https://www.roszdravnadzor.ru"
                }
            ],
            highLevelRequirement: "To legally sell a surgical robot in Russia, it must comply with Roszdravnadzor regulations, including device classification, registration, and quality management system compliance. Files need to be submitted to Roszdravnadzor for review and approval.",
            tradingRequirements: [
                {
                    "title": "Device Classification",
                    "description": "Determine the appropriate classification of your device under Roszdravnadzor's Medical Device Classification system.",
                    "url": "https://www.roszdravnadzor.ru"
                },
                {
                    "title": "Device Registration",
                    "description": "Prepare and submit registration documents including clinical data and technical specifications to Roszdravnadzor.",
                    "url": "https://www.roszdravnadzor.ru"
                },
                {
                    "title": "Quality Management System (QMS)",
                    "description": "Implement and adhere to Roszdravnadzor's Quality Management System requirements.",
                    "url": "https://www.roszdravnadzor.ru"
                },
                {
                    "title": "Labeling and Instructions",
                    "description": "Ensure compliance with Roszdravnadzor regulations on labeling and instructions for use.",
                    "url": "https://www.roszdravnadzor.ru"
                }
            ],
            legislativeDocuments: [
                {
                    "name": "Federal Law No. 323-FZ on the Basics of Health Protection of Citizens in the Russian Federation",
                    "url": "https://www.roszdravnadzor.ru"
                }
            ],
            internationalStandards: {
                "acceptance": true,
                "standards": [
                    {
                        "name": "ISO 13485",
                        "url": "https://www.iso.org/standard/59752.html"
                    }
                ]
            },
            documentSubmissionProcess: "Submission details for device registration and approval are provided on the Roszdravnadzor website."
        },
        "ES": {
            fullName: "Spain",
            "isSupported": true,
            regulatoryAuthoritiesDescription: "The Spanish Agency of Medicines and Medical Devices (AEMPS) is the primary regulatory authority for medical devices in Spain.",
            regulatoryAuthorities: [
                {
                    "name": "AEMPS (Spanish Agency of Medicines and Medical Devices)",
                    "url": "https://www.aemps.gob.es"
                }
            ],
            highLevelRequirement: "To legally sell a surgical robot in Spain, it must comply with the EU Medical Device Regulation (MDR), including device classification, conformity assessment, and CE marking. Files must be submitted to a Notified Body for review and approval.",
            tradingRequirements: [
                {
                    "title": "Device Classification",
                    "description": "Determine the appropriate classification of your device under the EU MDR.",
                    "url": "https://ec.europa.eu/health/md_sector/new_regulations/classification_en"
                },
                {
                    "title": "Conformity Assessment",
                    "description": "Undergo conformity assessment procedures based on the device classification, which may include clinical evaluations and quality management system audits.",
                    "url": "https://ec.europa.eu/health/md_sector/new_regulations/assessment_en"
                },
                {
                    "title": "CE Marking",
                    "description": "Ensure your device meets the essential requirements of the EU MDR and affix the CE mark.",
                    "url": "https://ec.europa.eu/health/md_sector/new_regulations/ce_marking_en"
                },
                {
                    "title": "Labeling and Instructions",
                    "description": "Ensure compliance with EU MDR regulations on labeling and instructions for use.",
                    "url": "https://ec.europa.eu/health/md_sector/new_regulations/labelling_en"
                }
            ],
            legislativeDocuments: [
                {
                    "name": "EU Medical Device Regulation (MDR)",
                    "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32017R0745"
                }
            ],
            internationalStandards: {
                "acceptance": true,
                "standards": [
                    {
                        "name": "ISO 13485",
                        "url": "https://www.iso.org/standard/59752.html"
                    },
                    {
                        "name": "IEC 60601",
                        "url": "https://www.iec.ch/standards/60446"
                    }
                ]
            },
            documentSubmissionProcess: "Submission details for conformity assessment and CE marking are provided by the Notified Bodies designated by the EU."
        },
        "MX": {
            fullName: "Mexico",
            "isSupported": true,
            regulatoryAuthoritiesDescription: "The Federal Commission for Protection against Sanitary Risks (COFEPRIS) is the primary regulatory authority for medical devices in Mexico.",
            regulatoryAuthorities: [
                {
                    "name": "COFEPRIS (Federal Commission for Protection against Sanitary Risks)",
                    "url": "https://www.gob.mx/cofepris"
                }
            ],
            highLevelRequirement: "To legally sell a surgical robot in Mexico, it must comply with COFEPRIS regulations, including device classification, registration, and good manufacturing practices compliance. Files need to be submitted to COFEPRIS for review and approval.",
            tradingRequirements: [
                {
                    "title": "Device Classification",
                    "description": "Determine the appropriate classification of your device under COFEPRIS's Medical Device Classification system.",
                    "url": "https://www.gob.mx/cofepris"
                },
                {
                    "title": "Device Registration",
                    "description": "Prepare and submit registration documents including clinical data and technical specifications to COFEPRIS.",
                    "url": "https://www.gob.mx/cofepris"
                },
                {
                    "title": "Good Manufacturing Practices (GMP)",
                    "description": "Implement and adhere to COFEPRIS's Good Manufacturing Practices requirements.",
                    "url": "https://www.gob.mx/cofepris"
                },
                {
                    "title": "Labeling and Instructions",
                    "description": "Ensure compliance with COFEPRIS regulations on labeling and instructions for use.",
                    "url": "https://www.gob.mx/cofepris"
                }
            ],
            legislativeDocuments: [
                {
                    "name": "Health Supplies Regulation",
                    "url": "https://www.dof.gob.mx/nota_detalle.php?codigo=5202899&fecha=04/02/2011"
                }
            ],
            internationalStandards: {
                "acceptance": true,
                "standards": [
                    {
                        "name": "ISO 13485",
                        "url": "https://www.iso.org/standard/59752.html"
                    }
                ]
            },
            documentSubmissionProcess: "Submission details for device registration and approval are provided on the COFEPRIS website."
        },
        "NL": {
            fullName: "Netherlands",
            "isSupported": true,
            regulatoryAuthoritiesDescription: "The Dutch Health and Youth Care Inspectorate (IGJ) is the primary regulatory authority for medical devices in the Netherlands.",
            regulatoryAuthorities: [
                {
                    "name": "IGJ (Dutch Health and Youth Care Inspectorate)",
                    "url": "https://english.igj.nl"
                }
            ],
            highLevelRequirement: "To legally sell a surgical robot in the Netherlands, it must comply with the EU Medical Device Regulation (MDR), including device classification, conformity assessment, and CE marking. Files must be submitted to a Notified Body for review and approval.",
            tradingRequirements: [
                {
                    "title": "Device Classification",
                    "description": "Determine the appropriate classification of your device under the EU MDR.",
                    "url": "https://ec.europa.eu/health/md_sector/new_regulations/classification_en"
                },
                {
                    "title": "Conformity Assessment",
                    "description": "Undergo conformity assessment procedures based on the device classification, which may include clinical evaluations and quality management system audits.",
                    "url": "https://ec.europa.eu/health/md_sector/new_regulations/assessment_en"
                },
                {
                    "title": "CE Marking",
                    "description": "Ensure your device meets the essential requirements of the EU MDR and affix the CE mark.",
                    "url": "https://ec.europa.eu/health/md_sector/new_regulations/ce_marking_en"
                },
                {
                    "title": "Labeling and Instructions",
                    "description": "Ensure compliance with EU MDR regulations on labeling and instructions for use.",
                    "url": "https://ec.europa.eu/health/md_sector/new_regulations/labelling_en"
                }
            ],
            legislativeDocuments: [
                {
                    "name": "EU Medical Device Regulation (MDR)",
                    "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32017R0745"
                }
            ],
            internationalStandards: {
                "acceptance": true,
                "standards": [
                    {
                        "name": "ISO 13485",
                        "url": "https://www.iso.org/standard/59752.html"
                    },
                    {
                        "name": "IEC 60601",
                        "url": "https://www.iec.ch/standards/60446"
                    }
                ]
            },
            documentSubmissionProcess: "Submission details for conformity assessment and CE marking are provided by the Notified Bodies designated by the EU."
        },
        "SA": {
            fullName: "Saudi Arabia",
            "isSupported": true,
            regulatoryAuthoritiesDescription: "The Saudi Food and Drug Authority (SFDA) is the primary regulatory authority for medical devices in Saudi Arabia.",
            regulatoryAuthorities: [
                {
                    "name": "SFDA (Saudi Food and Drug Authority)",
                    "url": "https://www.sfda.gov.sa"
                }
            ],
            highLevelRequirement: "To legally sell a surgical robot in Saudi Arabia, it must comply with SFDA regulations, including device classification, registration, and quality management system compliance. Files need to be submitted to the SFDA for review and approval.",
            tradingRequirements: [
                {
                    "title": "Device Classification",
                    "description": "Determine the appropriate classification of your device under the SFDA's Medical Device Classification system.",
                    "url": "https://www.sfda.gov.sa/en/regulations"
                },
                {
                    "title": "Device Registration",
                    "description": "Prepare and submit registration documents including clinical data and technical specifications to the SFDA.",
                    "url": "https://www.sfda.gov.sa/en/regulations"
                },
                {
                    "title": "Quality Management System (QMS)",
                    "description": "Implement and adhere to SFDA's Quality Management System requirements.",
                    "url": "https://www.sfda.gov.sa/en/regulations"
                },
                {
                    "title": "Labeling and Instructions",
                    "description": "Ensure compliance with SFDA regulations on labeling and instructions for use.",
                    "url": "https://www.sfda.gov.sa/en/regulations"
                }
            ],
            legislativeDocuments: [
                {
                    "name": "Medical Devices Interim Regulation",
                    "url": "https://www.sfda.gov.sa/en/regulations"
                }
            ],
            internationalStandards: {
                "acceptance": true,
                "standards": [
                    {
                        "name": "ISO 13485",
                        "url": "https://www.iso.org/standard/59752.html"
                    }
                ]
            },
            documentSubmissionProcess: "Submission details for device registration and approval are provided on the SFDA website."
        },
        "CH": {
            fullName: "Switzerland",
            "isSupported": true,
            regulatoryAuthoritiesDescription: "Swissmedic is the primary regulatory authority for medical devices in Switzerland.",
            regulatoryAuthorities: [
                {
                    "name": "Swissmedic",
                    "url": "https://www.swissmedic.ch"
                }
            ],
            highLevelRequirement: "To legally sell a surgical robot in Switzerland, it must comply with the Swiss Medical Device Ordinance (MedDO), including device classification, conformity assessment, and CE marking. Files must be submitted to a Notified Body for review and approval.",
            tradingRequirements: [
                {
                    "title": "Device Classification",
                    "description": "Determine the appropriate classification of your device under the MedDO.",
                    "url": "https://www.swissmedic.ch/swissmedic/en/home/medical-devices/market-access/classification-and-registration.html"
                },
                {
                    "title": "Conformity Assessment",
                    "description": "Undergo conformity assessment procedures based on the device classification, which may include clinical evaluations and quality management system audits.",
                    "url": "https://www.swissmedic.ch/swissmedic/en/home/medical-devices/market-access/conformity-assessment-procedures.html"
                },
                {
                    "title": "CE Marking",
                    "description": "Ensure your device meets the essential requirements of the MedDO and affix the CE mark.",
                    "url": "https://www.swissmedic.ch/swissmedic/en/home/medical-devices/market-access/ce-marking.html"
                },
                {
                    "title": "Labeling and Instructions",
                    "description": "Ensure compliance with MedDO regulations on labeling and instructions for use.",
                    "url": "https://www.swissmedic.ch/swissmedic/en/home/medical-devices/market-access/labelling.html"
                }
            ],
            legislativeDocuments: [
                {
                    "name": "Swiss Medical Device Ordinance (MedDO)",
                    "url": "https://www.admin.ch/opc/en/classified-compilation/20201716/index.html"
                }
            ],
            internationalStandards: {
                "acceptance": true,
                "standards": [
                    {
                        "name": "ISO 13485",
                        "url": "https://www.iso.org/standard/59752.html"
                    },
                    {
                        "name": "IEC 60601",
                        "url": "https://www.iec.ch/standards/60446"
                    }
                ]
            },
            documentSubmissionProcess: "Submission details for conformity assessment and CE marking are provided by the Notified Bodies designated by the Swiss authorities."
        },
        "TR": {
            fullName: "Turkey",
            "isSupported": true,
            regulatoryAuthoritiesDescription: "The Turkish Medicines and Medical Devices Agency (TMMDA) is the primary regulatory authority for medical devices in Turkey.",
            regulatoryAuthorities: [
                {
                    "name": "TMMDA (Turkish Medicines and Medical Devices Agency)",
                    "url": "https://www.titck.gov.tr"
                }
            ],
            highLevelRequirement: "To legally sell a surgical robot in Turkey, it must comply with TMMDA regulations, including device classification, registration, and quality management system compliance. Files need to be submitted to the TMMDA for review and approval.",
            tradingRequirements: [
                {
                    "title": "Device Classification",
                    "description": "Determine the appropriate classification of your device under the TMMDA's Medical Device Classification system.",
                    "url": "https://www.titck.gov.tr/en"
                },
                {
                    "title": "Device Registration",
                    "description": "Prepare and submit registration documents including clinical data and technical specifications to the TMMDA.",
                    "url": "https://www.titck.gov.tr/en"
                },
                {
                    "title": "Quality Management System (QMS)",
                    "description": "Implement and adhere to TMMDA's Quality Management System requirements.",
                    "url": "https://www.titck.gov.tr/en"
                },
                {
                    "title": "Labeling and Instructions",
                    "description": "Ensure compliance with TMMDA regulations on labeling and instructions for use.",
                    "url": "https://www.titck.gov.tr/en"
                }
            ],
            legislativeDocuments: [
                {
                    "name": "Medical Device Regulation",
                    "url": "https://www.titck.gov.tr/mevzuat/cihaz"
                }
            ],
            internationalStandards: {
                "acceptance": true,
                "standards": [
                    {
                        "name": "ISO 13485",
                        "url": "https://www.iso.org/standard/59752.html"
                    }
                ]
            },
            documentSubmissionProcess: "Submission details for device registration and approval are provided on the TMMDA website."
        },
        "AR": {
            fullName: "Argentina",
            "isSupported": true,
            regulatoryAuthoritiesDescription: "The National Administration of Drugs, Food and Medical Technology (ANMAT) is the primary regulatory authority for medical devices in Argentina.",
            regulatoryAuthorities: [
                {
                    "name": "ANMAT (National Administration of Drugs, Food and Medical Technology)",
                    "url": "https://www.argentina.gob.ar/anmat"
                }
            ],
            highLevelRequirement: "To legally sell a surgical robot in Argentina, it must comply with ANMAT regulations, including device classification, registration, and quality management system compliance. Files need to be submitted to ANMAT for review and approval.",
            tradingRequirements: [
                {
                    "title": "Device Classification",
                    "description": "Determine the appropriate classification of your device under ANMAT's Medical Device Classification system.",
                    "url": "https://www.argentina.gob.ar/anmat"
                },
                {
                    "title": "Device Registration",
                    "description": "Prepare and submit registration documents including clinical data and technical specifications to ANMAT.",
                    "url": "https://www.argentina.gob.ar/anmat"
                },
                {
                    "title": "Quality Management System (QMS)",
                    "description": "Implement and adhere to ANMAT's Quality Management System requirements.",
                    "url": "https://www.argentina.gob.ar/anmat"
                },
                {
                    "title": "Labeling and Instructions",
                    "description": "Ensure compliance with ANMAT regulations on labeling and instructions for use.",
                    "url": "https://www.argentina.gob.ar/anmat"
                }
            ],
            legislativeDocuments: [
                {
                    "name": "Disposición 2318/2002",
                    "url": "https://www.anmat.gov.ar/webanmat/Legislacion/Medicamentos/Disposicion_ANMAT_2318-2002.pdf"
                }
            ],
            internationalStandards: {
                "acceptance": true,
                "standards": [
                    {
                        "name": "ISO 13485",
                        "url": "https://www.iso.org/standard/59752.html"
                    }
                ]
            },
            documentSubmissionProcess: "Submission details for device registration and approval are provided on the ANMAT website."
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



export default ALL_REGULATORY_INFOS