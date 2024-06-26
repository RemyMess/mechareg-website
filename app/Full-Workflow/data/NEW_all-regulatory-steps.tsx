import { CtaOption } from "../components/ButtonPopover"

// Interface for defining the structure of regulatory steps



interface RegulatorySteps {
    [key: string]: 
        {
            stepName: string,
            stepDescription: string,
            stepTools: 
                CtaOption[]
        }[]
    }
    
const ALL_REGULATORY_STEPS: RegulatorySteps =
    {
        "US": [
            {
              stepName: "Identify Your Device Classification",
              stepDescription: "Determine the appropriate classification of your device under the FDA's Medical Device Classification system. This will dictate the regulatory pathway (Class I, II, or III) your device will follow.",
              stepTools: []
            },
            {
              stepName: "Establish Device Compliance",
              stepDescription: "Ensure your device design, manufacturing processes, and safety testing meet the FDA's Quality System Regulation (QSR) and other relevant guidelines.",
              stepTools: []
            },
            {
              stepName: "Conduct Preclinical and Clinical Trials",
              stepDescription: "Depending on the device classification, conduct necessary preclinical (laboratory) and clinical (human) trials to gather evidence of safety and efficacy.",
              stepTools: []
            },
            {
              stepName: "Prepare Premarket Submission",
              stepDescription: "Prepare and compile your premarket submission, which could be a 510(k) if your device is substantially equivalent to an existing device, or a PMA if your device is high-risk.",
              stepTools: []
            },
            {
              stepName: "Submit Application to FDA",
              stepDescription: "Submit your 510(k) or PMA application to the FDA for review. This includes providing comprehensive data on device design, manufacturing processes, and clinical trial results.",
              stepTools: []
            },
            {
              stepName: "Respond to FDA Requests",
              stepDescription: "Respond promptly to any FDA requests for additional information or clarification during the review process.",
              stepTools: []
            },
            {
              stepName: "Achieve Regulatory Clearance or Approval",
              stepDescription: "Once the FDA review is complete, receive your 510(k) clearance or PMA approval, authorizing you to market your device in the United States.",
              stepTools: []
            },
            {
              stepName: "Implement Post-market Surveillance",
              stepDescription: "After market entry, establish and maintain a post-market surveillance system to monitor device performance and report adverse events to the FDA as required.",
              stepTools: []
            }
          ],
        "GB": [
                {
                stepName: "Identify Your Risk Class",
                stepDescription: "In the UK, the regulations and process you will need to follow will depend on the risk class of your device (Class I, IIa, IIb, III).",
                stepTools: [{title: "Do it now", description: "We built an optimal tree of questions to narrow down your risk class as fast as possible.", url: "https://remymessadene.notion.site/UK-Risk-Classifier-774d31775601403a8744285d0181f321?pvs=4"}]
                },
                {
                stepName: "Verify Device Compliance",
                stepDescription: "Ensure that your device design, manufacturing processes, and safety testing meet the requirements of the UK Medical Device Regulations (MDR) 2002.",
                stepTools: []
                },
                {
                stepName: "Conduct Preclinical and Clinical Trials",
                stepDescription: "Conduct necessary preclinical (laboratory) and clinical (human) trials to gather evidence of safety and efficacy for your device.",
                stepTools: []
                },
                {
                stepName: "Produce Required Documentation",
                stepDescription: "Prepare the necessary technical documentation, including a description of the device, design and manufacturing information, and clinical data.",
                stepTools: []
                },
                {
                stepName: "Schedule a Conformity Assessment",
                stepDescription: "Arrange a conformity assessment with a UK Approved Body for higher-risk devices (Class IIa, IIb, and III) to verify that your device meets regulatory requirements.",
                stepTools: []
                },
                {
                stepName: "Comply with UKCA Marking",
                stepDescription: "Ensure your device meets the essential requirements of the UK MDR and affix the UKCA mark to your device.",
                stepTools: []
                },
                {
                stepName: "Register Your Device with MHRA",
                stepDescription: "Submit your device registration to the Medicines and Healthcare products Regulatory Agency (MHRA) through their online portal.",
                stepTools: []
                },
                {
                stepName: "Implement Post-market Surveillance",
                stepDescription: "After market entry, establish and maintain a post-market surveillance system to monitor device performance and report adverse events to the MHRA as required.",
                stepTools: []
            }
            ],
        "CN":
        [
                {
                stepName: "Identify Device Classification",
                stepDescription: "Determine the appropriate classification of your device under the NMPA's Medical Device Classification system. This will dictate the regulatory pathway (Class I, II, or III) your device will follow.",
                stepTools: []
                },
                {
                stepName: "Establish Device Compliance",
                stepDescription: "Ensure that your device design, manufacturing processes, and safety testing meet the requirements of the NMPA's regulations and standards.",
                stepTools: []
                },
                {
                stepName: "Conduct Preclinical and Clinical Trials",
                stepDescription: "Conduct necessary preclinical (laboratory) and clinical (human) trials in China to gather evidence of safety and efficacy for your device.",
                stepTools: []
                },
                {
                stepName: "Prepare Registration Documentation",
                stepDescription: "Prepare the necessary registration documentation, including technical specifications, risk analysis, clinical trial data, and quality management system information.",
                stepTools: []
                },
                {
                stepName: "Submit Registration Application",
                stepDescription: "Submit your device registration application to the NMPA, including all required documentation and evidence of compliance with Chinese regulations.",
                stepTools: []
                },
                {
                stepName: "Respond to NMPA Requests",
                stepDescription: "Respond promptly to any NMPA requests for additional information or clarification during the review process.",
                stepTools: []
                },
                {
                stepName: "Receive Registration Certificate",
                stepDescription: "Once the NMPA review is complete, receive your registration certificate, authorizing you to market your device in China.",
                stepTools: []
                },
                {
                stepName: "Implement Post-market Surveillance",
                stepDescription: "After market entry, establish and maintain a post-market surveillance system to monitor device performance and report adverse events to the NMPA as required.",
                stepTools: []
                }
        ],



        "DE":       
            [
            {
            stepName: "Identify Device Classification",
            stepDescription: "Determine the appropriate classification of your device under the EU Medical Device Regulation (MDR). This will dictate the regulatory pathway (Class I, IIa, IIb, or III) your device will follow.",
            stepTools: []
            },
            {
            stepName: "Establish Device Compliance",
            stepDescription: "Ensure that your device design, manufacturing processes, and safety testing meet the requirements of the EU MDR and relevant harmonized standards.",
            stepTools: []
            },
            {
            stepName: "Conduct Preclinical and Clinical Trials",
            stepDescription: "Conduct necessary preclinical (laboratory) and clinical (human) trials to gather evidence of safety and efficacy for your device.",
            stepTools: []
            },
            {
            stepName: "Prepare Technical Documentation",
            stepDescription: "Prepare the necessary technical documentation, including a description of the device, design and manufacturing information, and clinical data.",
            stepTools: []
            },
            {
            stepName: "Schedule a Conformity Assessment",
            stepDescription: "Arrange a conformity assessment with a Notified Body for higher-risk devices (Class IIa, IIb, and III) to verify that your device meets regulatory requirements.",
            stepTools: []
            },
            {
            stepName: "Comply with CE Marking",
            stepDescription: "Ensure your device meets the essential requirements of the EU MDR and affix the CE mark to your device.",
            stepTools: []
            },
            {
            stepName: "Register Your Device with DIMDI",
            stepDescription: "Submit your device registration to the German Institute for Medical Documentation and Information (DIMDI) through their online portal.",
            stepTools: []
            },
            {
            stepName: "Implement Post-market Surveillance",
            stepDescription: "After market entry, establish and maintain a post-market surveillance system to monitor device performance and report adverse events to the relevant authorities as required.",
            stepTools: []
            }
        ],

        "FR": [
            {
            stepName: "Identify Device Classification",
            stepDescription: "Determine the appropriate classification of your device under the EU Medical Device Regulation (MDR). This will dictate the regulatory pathway (Class I, IIa, IIb, or III) your device will follow.",
            stepTools: []
            },
            {
            stepName: "Establish Device Compliance",
            stepDescription: "Ensure that your device design, manufacturing processes, and safety testing meet the requirements of the EU MDR and relevant harmonized standards.",
            stepTools: []
            },
            {
            stepName: "Conduct Preclinical and Clinical Trials",
            stepDescription: "Conduct necessary preclinical (laboratory) and clinical (human) trials to gather evidence of safety and efficacy for your device.",
            stepTools: []
            },
            {
            stepName: "Prepare Technical Documentation",
            stepDescription: "Prepare the necessary technical documentation, including a description of the device, design and manufacturing information, and clinical data.",
            stepTools: []
            },
            {
            stepName: "Schedule a Conformity Assessment",
            stepDescription: "Arrange a conformity assessment with a Notified Body for higher-risk devices (Class IIa, IIb, and III) to verify that your device meets regulatory requirements.",
            stepTools: []
            },
            {
            stepName: "Comply with CE Marking",
            stepDescription: "Ensure your device meets the essential requirements of the EU MDR and affix the CE mark to your device.",
            stepTools: []
            },
            {
            stepName: "Register Your Device with ANSM",
            stepDescription: "Submit your device registration to the National Agency for the Safety of Medicines and Health Products (ANSM) through their online portal.",
            stepTools: []
            },
            {
            stepName: "Implement Post-market Surveillance",
            stepDescription: "After market entry, establish and maintain a post-market surveillance system to monitor device performance and report adverse events to the relevant authorities as required.",
            stepTools: []
            }
        ],

        "JP": [
            {
            stepName: "Identify Device Classification",
            stepDescription: "Determine the appropriate classification of your device under the Pharmaceuticals and Medical Devices Agency (PMDA) system. This will dictate the regulatory pathway (Class I, II, III, or IV) your device will follow.",
            stepTools: []
            },
            {
            stepName: "Establish Device Compliance",
            stepDescription: "Ensure that your device design, manufacturing processes, and safety testing meet the requirements of the Japanese regulations and standards.",
            stepTools: []
            },
            {
            stepName: "Conduct Preclinical and Clinical Trials",
            stepDescription: "Conduct necessary preclinical (laboratory) and clinical (human) trials to gather evidence of safety and efficacy for your device. Clinical trials must often be conducted in Japan.",
            stepTools: []
            },
            {
            stepName: "Prepare Registration Documentation",
            stepDescription: "Prepare the necessary registration documentation, including technical specifications, risk analysis, clinical trial data, and quality management system information.",
            stepTools: []
            },
            {
            stepName: "Submit Application for Pre-market Approval (PMA)",
            stepDescription: "Submit your application for Pre-market Approval (PMA) to the PMDA, including all required documentation and evidence of compliance with Japanese regulations.",
            stepTools: []
            },
            {
            stepName: "Respond to PMDA Requests",
            stepDescription: "Respond promptly to any PMDA requests for additional information or clarification during the review process.",
            stepTools: []
            },
            {
            stepName: "Receive PMDA Approval",
            stepDescription: "Once the PMDA review is complete, receive your PMA approval, authorizing you to market your device in Japan.",
            stepTools: []
            },
            {
            stepName: "Register Your Device",
            stepDescription: "Register your approved device with the Ministry of Health, Labour and Welfare (MHLW) through the PMDA.",
            stepTools: []
            },
            {
            stepName: "Implement Post-market Surveillance",
            stepDescription: "After market entry, establish and maintain a post-market surveillance system to monitor device performance and report adverse events to the PMDA as required.",
            stepTools: []
            }
        ],
        
        

        "IN": [
            {
            stepName: "Identify Device Classification",
            stepDescription: "Determine the appropriate classification of your device under the Central Drugs Standard Control Organization (CDSCO) Medical Device Rules, 2017. This will dictate the regulatory pathway (Class A, B, C, or D) your device will follow.",
            stepTools: []
            },
            {
            stepName: "Establish Device Compliance",
            stepDescription: "Ensure that your device design, manufacturing processes, and safety testing meet the requirements of the CDSCO regulations and standards.",
            stepTools: []
            },
            {
            stepName: "Conduct Preclinical and Clinical Trials",
            stepDescription: "Conduct necessary preclinical (laboratory) and clinical (human) trials in India to gather evidence of safety and efficacy for your device.",
            stepTools: []
            },
            {
            stepName: "Prepare Registration Documentation",
            stepDescription: "Prepare the necessary registration documentation, including technical specifications, risk analysis, clinical trial data, and quality management system information.",
            stepTools: []
            },
            {
            stepName: "Submit Application for Registration",
            stepDescription: "Submit your device registration application to the CDSCO, including all required documentation and evidence of compliance with Indian regulations.",
            stepTools: []
            },
            {
            stepName: "Respond to CDSCO Requests",
            stepDescription: "Respond promptly to any CDSCO requests for additional information or clarification during the review process.",
            stepTools: []
            },
            {
            stepName: "Receive Registration Certificate",
            stepDescription: "Once the CDSCO review is complete, receive your registration certificate, authorizing you to market your device in India.",
            stepTools: []
            },
            {
            stepName: "Implement Post-market Surveillance",
            stepDescription: "After market entry, establish and maintain a post-market surveillance system to monitor device performance and report adverse events to the CDSCO as required.",
            stepTools: []
            }
    ],


    "BR": [
        {
          stepName: "Identify Device Classification",
          stepDescription: "Determine the appropriate classification of your device under the Brazilian Health Regulatory Agency (ANVISA) Medical Device Regulations. This will dictate the regulatory pathway (Class I, II, III, or IV) your device will follow.",
          stepTools: []
        },
        {
          stepName: "Establish Device Compliance",
          stepDescription: "Ensure that your device design, manufacturing processes, and safety testing meet the requirements of ANVISA regulations and standards.",
          stepTools: []
        },
        {
          stepName: "Conduct Preclinical and Clinical Trials",
          stepDescription: "Conduct necessary preclinical (laboratory) and clinical (human) trials to gather evidence of safety and efficacy for your device.",
          stepTools: []
        },
        {
          stepName: "Prepare Registration Documentation",
          stepDescription: "Prepare the necessary registration documentation, including technical specifications, risk analysis, clinical trial data, and quality management system information.",
          stepTools: []
        },
        {
          stepName: "Submit Application for Registration",
          stepDescription: "Submit your device registration application to ANVISA, including all required documentation and evidence of compliance with Brazilian regulations.",
          stepTools: []
        },
        {
          stepName: "Respond to ANVISA Requests",
          stepDescription: "Respond promptly to any ANVISA requests for additional information or clarification during the review process.",
          stepTools: []
        },
        {
          stepName: "Receive Registration Certificate",
          stepDescription: "Once the ANVISA review is complete, receive your registration certificate, authorizing you to market your device in Brazil.",
          stepTools: []
        },
        {
          stepName: "Implement Post-market Surveillance",
          stepDescription: "After market entry, establish and maintain a post-market surveillance system to monitor device performance and report adverse events to ANVISA as required.",
          stepTools: []
        }
      ],

      
"KR": [
    {
      stepName: "Identify Device Classification",
      stepDescription: "Determine the appropriate classification of your device under the Ministry of Food and Drug Safety (MFDS) Medical Device Classification system. This will dictate the regulatory pathway (Class I, II, III, or IV) your device will follow.",
      stepTools: []
    },
    {
      stepName: "Establish Device Compliance",
      stepDescription: "Ensure that your device design, manufacturing processes, and safety testing meet the requirements of MFDS regulations and standards.",
      stepTools: []
    },
    {
      stepName: "Conduct Preclinical and Clinical Trials",
      stepDescription: "Conduct necessary preclinical (laboratory) and clinical (human) trials in South Korea to gather evidence of safety and efficacy for your device.",
      stepTools: []
    },
    {
      stepName: "Prepare Registration Documentation",
      stepDescription: "Prepare the necessary registration documentation, including technical specifications, risk analysis, clinical trial data, and quality management system information.",
      stepTools: []
    },
    {
      stepName: "Submit Application for Registration",
      stepDescription: "Submit your device registration application to the MFDS, including all required documentation and evidence of compliance with South Korean regulations.",
      stepTools: []
    },
    {
      stepName: "Respond to MFDS Requests",
      stepDescription: "Respond promptly to any MFDS requests for additional information or clarification during the review process.",
      stepTools: []
    },
    {
      stepName: "Receive Registration Certificate",
      stepDescription: "Once the MFDS review is complete, receive your registration certificate, authorizing you to market your device in South Korea.",
      stepTools: []
    },
    {
      stepName: "Implement Post-market Surveillance",
      stepDescription: "After market entry, establish and maintain a post-market surveillance system to monitor device performance and report adverse events to the MFDS as required.",
      stepTools: []
    }
  ],


  "CA": [
    {
      stepName: "Identify Device Classification",
      stepDescription: "Determine the appropriate classification of your device under Health Canada's Medical Device Classification system. This will dictate the regulatory pathway (Class I, II, III, or IV) your device will follow.",
      stepTools: []
    },
    {
      stepName: "Establish Device Compliance",
      stepDescription: "Ensure that your device design, manufacturing processes, and safety testing meet the requirements of Health Canada's regulations and standards.",
      stepTools: []
    },
    {
      stepName: "Conduct Preclinical and Clinical Trials",
      stepDescription: "Conduct necessary preclinical (laboratory) and clinical (human) trials to gather evidence of safety and efficacy for your device.",
      stepTools: []
    },
    {
      stepName: "Prepare Device License Application",
      stepDescription: "Prepare the necessary application documentation, including technical specifications, risk analysis, clinical trial data, and quality management system information.",
      stepTools: []
    },
    {
      stepName: "Submit Device License Application",
      stepDescription: "Submit your device license application to Health Canada, including all required documentation and evidence of compliance with Canadian regulations.",
      stepTools: []
    },
    {
      stepName: "Respond to Health Canada Requests",
      stepDescription: "Respond promptly to any Health Canada requests for additional information or clarification during the review process.",
      stepTools: []
    },
    {
      stepName: "Receive Device License",
      stepDescription: "Once the Health Canada review is complete, receive your device license, authorizing you to market your device in Canada.",
      stepTools: []
    },
    {
      stepName: "Implement Post-market Surveillance",
      stepDescription: "After market entry, establish and maintain a post-market surveillance system to monitor device performance and report adverse events to Health Canada as required.",
      stepTools: []
    }
  ],



    "IT": [
      {
        stepName: "Identify Device Classification",
        stepDescription: "Determine the appropriate classification of your device under the EU Medical Device Regulation (MDR). This will dictate the regulatory pathway (Class I, IIa, IIb, or III) your device will follow.",
        stepTools: []
      },
      {
        stepName: "Establish Device Compliance",
        stepDescription: "Ensure that your device design, manufacturing processes, and safety testing meet the requirements of the EU MDR and relevant harmonized standards.",
        stepTools: []
      },
      {
        stepName: "Conduct Preclinical and Clinical Trials",
        stepDescription: "Conduct necessary preclinical (laboratory) and clinical (human) trials to gather evidence of safety and efficacy for your device.",
        stepTools: []
      },
      {
        stepName: "Prepare Technical Documentation",
        stepDescription: "Prepare the necessary technical documentation, including a description of the device, design and manufacturing information, and clinical data.",
        stepTools: []
      },
      {
        stepName: "Schedule a Conformity Assessment",
        stepDescription: "Arrange a conformity assessment with a Notified Body for higher-risk devices (Class IIa, IIb, and III) to verify that your device meets regulatory requirements.",
        stepTools: []
      },
      {
        stepName: "Comply with CE Marking",
        stepDescription: "Ensure your device meets the essential requirements of the EU MDR and affix the CE mark to your device.",
        stepTools: []
      },
      {
        stepName: "Register Your Device with the Italian Ministry of Health",
        stepDescription: "Submit your device registration to the Italian Ministry of Health through their online portal.",
        stepTools: []
      },
      {
        stepName: "Implement Post-market Surveillance",
        stepDescription: "After market entry, establish and maintain a post-market surveillance system to monitor device performance and report adverse events to the relevant authorities as required.",
        stepTools: []
      }
    ],

      "AU": [
        {
          stepName: "Identify Device Classification",
          stepDescription: "Determine the appropriate classification of your device under the Therapeutic Goods Administration (TGA) Medical Device Classification system. This will dictate the regulatory pathway (Class I, IIa, IIb, or III) your device will follow.",
          stepTools: []
        },
        {
          stepName: "Establish Device Compliance",
          stepDescription: "Ensure that your device design, manufacturing processes, and safety testing meet the requirements of the TGA regulations and relevant standards.",
          stepTools: []
        },
        {
          stepName: "Conduct Preclinical and Clinical Trials",
          stepDescription: "Conduct necessary preclinical (laboratory) and clinical (human) trials to gather evidence of safety and efficacy for your device.",
          stepTools: []
        },
        {
          stepName: "Prepare Technical Documentation",
          stepDescription: "Prepare the necessary technical documentation, including a description of the device, design and manufacturing information, and clinical data.",
          stepTools: []
        },
        {
          stepName: "Schedule a Conformity Assessment",
          stepDescription: "Arrange a conformity assessment with the TGA or a recognized conformity assessment body for higher-risk devices (Class IIa, IIb, and III) to verify that your device meets regulatory requirements.",
          stepTools: []
        },
        {
          stepName: "Include Your Device in the ARTG",
          stepDescription: "Ensure your device is included in the Australian Register of Therapeutic Goods (ARTG) by submitting an application to the TGA along with the required documentation.",
          stepTools: []
        },
        {
          stepName: "Comply with Australian Regulatory Requirements",
          stepDescription: "Ensure ongoing compliance with Australian regulatory requirements, including maintaining up-to-date technical documentation and implementing a quality management system.",
          stepTools: []
        },
        {
          stepName: "Implement Post-market Surveillance",
          stepDescription: "After market entry, establish and maintain a post-market surveillance system to monitor device performance and report adverse events to the TGA as required.",
          stepTools: []
        }
      ],

      "RU": [
        {
          stepName: "Identify Device Classification",
          stepDescription: "Determine the appropriate classification of your device under the Roszdravnadzor Medical Device Classification system. This will dictate the regulatory pathway (Class I, IIa, IIb, or III) your device will follow.",
          stepTools: []
        },
        {
          stepName: "Establish Device Compliance",
          stepDescription: "Ensure that your device design, manufacturing processes, and safety testing meet the requirements of Roszdravnadzor regulations and relevant standards.",
          stepTools: []
        },
        {
          stepName: "Conduct Preclinical and Clinical Trials",
          stepDescription: "Conduct necessary preclinical (laboratory) and clinical (human) trials in Russia to gather evidence of safety and efficacy for your device.",
          stepTools: []
        },
        {
          stepName: "Prepare Registration Dossier",
          stepDescription: "Prepare the necessary registration dossier, including technical specifications, risk analysis, clinical trial data, and quality management system information.",
          stepTools: []
        },
        {
          stepName: "Submit Application for Registration",
          stepDescription: "Submit your device registration application to Roszdravnadzor, including all required documentation and evidence of compliance with Russian regulations.",
          stepTools: []
        },
        {
          stepName: "Undergo Technical and Clinical Evaluation",
          stepDescription: "Your device will undergo technical and clinical evaluation by expert organizations designated by Roszdravnadzor to ensure compliance with safety and performance standards.",
          stepTools: []
        },
        {
          stepName: "Respond to Roszdravnadzor Requests",
          stepDescription: "Respond promptly to any Roszdravnadzor requests for additional information or clarification during the review process.",
          stepTools: []
        },
        {
          stepName: "Receive Registration Certificate",
          stepDescription: "Once the Roszdravnadzor review is complete and your device meets all regulatory requirements, receive your registration certificate, authorizing you to market your device in Russia.",
          stepTools: []
        },
        {
          stepName: "Implement Post-market Surveillance",
          stepDescription: "After market entry, establish and maintain a post-market surveillance system to monitor device performance and report adverse events to Roszdravnadzor as required.",
          stepTools: []
        }
      ],

      "ES": [
        {
          stepName: "Identify Device Classification",
          stepDescription: "Determine the appropriate classification of your device under the EU Medical Device Regulation (MDR). This will dictate the regulatory pathway (Class I, IIa, IIb, or III) your device will follow.",
          stepTools: []
        },
        {
          stepName: "Establish Device Compliance",
          stepDescription: "Ensure that your device design, manufacturing processes, and safety testing meet the requirements of the EU MDR and relevant harmonized standards.",
          stepTools: []
        },
        {
          stepName: "Conduct Preclinical and Clinical Trials",
          stepDescription: "Conduct necessary preclinical (laboratory) and clinical (human) trials to gather evidence of safety and efficacy for your device.",
          stepTools: []
        },
        {
          stepName: "Prepare Technical Documentation",
          stepDescription: "Prepare the necessary technical documentation, including a description of the device, design and manufacturing information, and clinical data.",
          stepTools: []
        },
        {
          stepName: "Schedule a Conformity Assessment",
          stepDescription: "Arrange a conformity assessment with a Notified Body for higher-risk devices (Class IIa, IIb, and III) to verify that your device meets regulatory requirements.",
          stepTools: []
        },
        {
          stepName: "Comply with CE Marking",
          stepDescription: "Ensure your device meets the essential requirements of the EU MDR and affix the CE mark to your device.",
          stepTools: []
        },
        {
          stepName: "Register Your Device with AEMPS",
          stepDescription: "Submit your device registration to the Spanish Agency of Medicines and Medical Devices (AEMPS) through their online portal.",
          stepTools: []
        },
        {
          stepName: "Implement Post-market Surveillance",
          stepDescription: "After market entry, establish and maintain a post-market surveillance system to monitor device performance and report adverse events to AEMPS as required.",
          stepTools: []
        }
      ],

      "MX": [
        {
          stepName: "Identify Device Classification",
          stepDescription: "Determine the appropriate classification of your device under the Federal Commission for Protection against Sanitary Risks (COFEPRIS) Medical Device Classification system. This will dictate the regulatory pathway (Class I, II, or III) your device will follow.",
          stepTools: []
        },
        {
          stepName: "Establish Device Compliance",
          stepDescription: "Ensure that your device design, manufacturing processes, and safety testing meet the requirements of COFEPRIS regulations and relevant standards.",
          stepTools: []
        },
        {
          stepName: "Conduct Preclinical and Clinical Trials",
          stepDescription: "Conduct necessary preclinical (laboratory) and clinical (human) trials to gather evidence of safety and efficacy for your device.",
          stepTools: []
        },
        {
          stepName: "Prepare Registration Dossier",
          stepDescription: "Prepare the necessary registration dossier, including technical specifications, risk analysis, clinical trial data, and quality management system information.",
          stepTools: []
        },
        {
          stepName: "Submit Application for Registration",
          stepDescription: "Submit your device registration application to COFEPRIS, including all required documentation and evidence of compliance with Mexican regulations.",
          stepTools: []
        },
        {
          stepName: "Undergo Technical and Clinical Evaluation",
          stepDescription: "Your device will undergo technical and clinical evaluation by expert organizations designated by COFEPRIS to ensure compliance with safety and performance standards.",
          stepTools: []
        },
        {
          stepName: "Respond to COFEPRIS Requests",
          stepDescription: "Respond promptly to any COFEPRIS requests for additional information or clarification during the review process.",
          stepTools: []
        },
        {
          stepName: "Receive Sanitary Registration",
          stepDescription: "Once the COFEPRIS review is complete and your device meets all regulatory requirements, receive your sanitary registration, authorizing you to market your device in Mexico.",
          stepTools: []
        },
        {
          stepName: "Implement Post-market Surveillance",
          stepDescription: "After market entry, establish and maintain a post-market surveillance system to monitor device performance and report adverse events to COFEPRIS as required.",
          stepTools: []
        }
      ],

    "CH": [
        {
        stepName: "Identify Device Classification",
        stepDescription: "Determine the appropriate classification of your device under the Swiss Medical Device Ordinance (MedDO). This will dictate the regulatory pathway (Class I, IIa, IIb, or III) your device will follow.",
        stepTools: []
        },
        {
        stepName: "Establish Device Compliance",
        stepDescription: "Ensure that your device design, manufacturing processes, and safety testing meet the requirements of the MedDO and relevant harmonized standards.",
        stepTools: []
        },
        {
        stepName: "Conduct Preclinical and Clinical Trials",
        stepDescription: "Conduct necessary preclinical (laboratory) and clinical (human) trials to gather evidence of safety and efficacy for your device.",
        stepTools: []
        },
        {
        stepName: "Prepare Technical Documentation",
        stepDescription: "Prepare the necessary technical documentation, including a description of the device, design and manufacturing information, and clinical data.",
        stepTools: []
        },
        {
        stepName: "Schedule a Conformity Assessment",
        stepDescription: "Arrange a conformity assessment with a Notified Body for higher-risk devices (Class IIa, IIb, and III) to verify that your device meets regulatory requirements.",
        stepTools: []
        },
        {
        stepName: "Comply with CE Marking or Swiss Authorized Representative",
        stepDescription: "For devices already CE marked in the EU, notify Swissmedic. For other devices, appoint a Swiss Authorized Representative and comply with local requirements.",
        stepTools: []
        },
        {
        stepName: "Register Your Device with Swissmedic",
        stepDescription: "Submit your device registration to Swissmedic through their online portal, including the necessary documentation.",
        stepTools: []
        },
        {
        stepName: "Implement Post-market Surveillance",
        stepDescription: "After market entry, establish and maintain a post-market surveillance system to monitor device performance and report adverse events to Swissmedic as required.",
        stepTools: []
        }
    ],


    "TR": [
        {
          stepName: "Identify Device Classification",
          stepDescription: "Determine the appropriate classification of your device under the Turkish Medicines and Medical Devices Agency (TMMDA) Medical Device Regulation. This will dictate the regulatory pathway (Class I, IIa, IIb, or III) your device will follow.",
          stepTools: []
        },
        {
          stepName: "Establish Device Compliance",
          stepDescription: "Ensure that your device design, manufacturing processes, and safety testing meet the requirements of TMMDA regulations and relevant standards.",
          stepTools: []
        },
        {
          stepName: "Conduct Preclinical and Clinical Trials",
          stepDescription: "Conduct necessary preclinical (laboratory) and clinical (human) trials to gather evidence of safety and efficacy for your device.",
          stepTools: []
        },
        {
          stepName: "Prepare Technical Documentation",
          stepDescription: "Prepare the necessary technical documentation, including a description of the device, design and manufacturing information, and clinical data.",
          stepTools: []
        },
        {
          stepName: "Schedule a Conformity Assessment",
          stepDescription: "Arrange a conformity assessment with a Notified Body for higher-risk devices (Class IIa, IIb, and III) to verify that your device meets regulatory requirements.",
          stepTools: []
        },
        {
          stepName: "Comply with CE Marking",
          stepDescription: "Ensure your device meets the essential requirements of the EU MDR and affix the CE mark to your device. Turkey follows the EU MDR framework.",
          stepTools: []
        },
        {
          stepName: "Register Your Device with TMMDA",
          stepDescription: "Submit your device registration to the Turkish Medicines and Medical Devices Agency (TMMDA) through their online portal, including the necessary documentation.",
          stepTools: []
        },
        {
          stepName: "Implement Post-market Surveillance",
          stepDescription: "After market entry, establish and maintain a post-market surveillance system to monitor device performance and report adverse events to TMMDA as required.",
          stepTools: []
        }
      ],
      "SE": [],
      "BE": [],
      "PL": [],
      "TH": [],
      "ZA": [],
      "AT": [],
      "MY": [],
      "SG": [],
      "IL": [],
      "NO": [],
      "FI": [],
      "DK": [],
      "IE": [],
      "PT": [],
      "GR": [],
      "AE": [],
      "CL": [],
      "NZ": [],
      "CO": [],
      "CZ": [],
      "PH": [],
      "VN": [],
      "EG": [],
      "PK": [],
      "RO": [],
      "HU": [],
      "QA": [],
      "UA": [],
      "PE": [],
      "KW": []
    };



export default ALL_REGULATORY_STEPS