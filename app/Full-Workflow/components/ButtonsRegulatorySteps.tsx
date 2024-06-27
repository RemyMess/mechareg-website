import ButtonPopover from "./ButtonPopover";
import Arrow1 from '@/app/assets/arrow-top-bottom-left.png';
import Arrow2 from '@/app/assets/arrow-top-bottom-right.png';
import Image from 'next/image';
import ALL_REGULATORY_STEPS from "../data/NEW_all-regulatory-steps";

const ButtonsRegulatorySteps: React.FC<{ countryCode: string }> = ({ countryCode }) => {

    const stepList = ALL_REGULATORY_STEPS[countryCode];

    return (
        <div className="relative flex flex-col items-center p-4">
        {/* <div className="absolute h-full border-l-2 border-gray-300" style={{ left: '50%' }}></div> */}

                {stepList.map((stepInfo, index) => (
                <>
                    <ButtonPopover buttonText={"Step " + (index+1) + ": " + stepInfo.stepName} menuDescription={stepInfo.stepDescription} options={stepInfo.stepTools} />
                    {/* Alternating arrows (but not showing for last element) */}
                    {!(index == stepList.length - 1) ?
                            (index % 2 === 0) ? (
                                <Image src={Arrow1} alt="Arrow 1" width={150} height={150} style={{ marginTop: '5px', marginBottom: '5px' }} />
                            ) : (
                                <Image src={Arrow2} alt="Arrow 2" width={150} height={150} style={{ marginTop: '5px', marginBottom: '5px' }} />
                            )
                            : ""
                    }
                </>
            ))}
        </div>
    )
}

export default ButtonsRegulatorySteps;