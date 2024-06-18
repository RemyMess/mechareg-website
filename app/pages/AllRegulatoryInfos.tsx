// Interface for defining the structure of regulatory information
interface RegulatoryInfo {
    [key: string]: {
        fullName: string,
        regulatoryAuthorities: { name: string, url: string }[];
        tradingRequirements: { title: string, description: string, url: string }[];
        legislativeDocument: [{ name: string, url: string }];
        internationalStandards: { acceptance: boolean, standards: { name: string, url: string }[] };
    }
  }

const AllRegularyInfos: RegulatoryInfo = 
    {
    "US": {
        fullName: "United States",
        regulatoryAuthorities:
            [
                { name: "Food and Drug Administration (FDA)", url: "https://www.fda.gov/" },
            ]
        ,
        tradingRequirements: [
            { title: "", description: "Pre-market approval (PMA) or 510(k) clearance required depending on device classification.", url: "https://www.fda.gov/medical-devices/premarket-notification-510k" },
            { title: "", description: "Quality System Regulation (QSR) compliance for manufacturing processes.", url: "https://www.fda.gov/medical-devices/premarket-submissions/quality-system-qs-regulationmedical-device-current-good-manufacturing-practicescgmps" },
            { title: "", description: "Labeling requirements to include proper device identification and safety information.", url: "https://www.fda.gov/medical-devices/device-regulation-and-guidance/guidance-documents-medical-devices-and-radiation-emitting-products" },
        ],
        legislativeDocument: [{
            name: "Food, Drug, and Cosmetic Act (FD&C Act)",
            url: "https://www.fda.gov/regulatory-information/laws-enforced-fda/federal-food-drug-and-cosmetic-act-fdc-act",
        }],
        internationalStandards: {
            acceptance: true,
            standards: [
            { name: "ISO 13485:2016", url: "https://www.iso.org/standard/59752.html" },
            { name: "ISO 14971:2019", url: "https://www.iso.org/standard/72704.html" },
            ],
        }
    }


};



export default AllRegularyInfos