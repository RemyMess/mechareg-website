const STEPS_NAMES = [
    "Select Country",
    "Get up to speed",
    "Speedrun approval"
]

const _renderMultipleWordsOnLine = (stepName: string) => {
    var WordsList = [];
    if(stepName.includes(" ")){
        WordsList = stepName.split(" ")
    }else{
        WordsList = [stepName]
    }

    return (
        <>
            {WordsList[0]}
            {WordsList.length > 1 && (WordsList.slice(1).map((word,i) => (
                    <span className="hidden sm:inline-flex sm:ms-2 inline">{word}</span>
                ))
            )}
        </>
    )
}

const DoneStepRender = (stepName: string, stepNumber?: number) => {
    return (
        <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 dark:text-green-300 text-green-300">
        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
        </svg>
            {_renderMultipleWordsOnLine(stepName)}
        </span>
    )
}


const NotDoneStepRender = (stepName: string, stepNumber: number) => {
    return (
        <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 dark:text-gray-300 text-gray-300">
                <span className="me-2">{stepNumber}.</span>
            {_renderMultipleWordsOnLine(stepName)}
        </span>
    )
}

const currentStepRender = (stepName: string, stepNumber: number) => {
    return (
        <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 dark:text-black-400 text-black-400 font-bold">
                <span className="me-2">{stepNumber}.</span>
            {_renderMultipleWordsOnLine(stepName)}
        </span>
    )
}


const Stepper = (currentStep: number) => {
    const totalSteps = STEPS_NAMES.length
    console.log(STEPS_NAMES[0])
    return (
        <ol className="flex items-center w-full text-sm font-medium text-center sm:text-base">
            <li className="flex md:w-full items-center sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-4 xl:after:mx-6 dark:after:border-gray-700">
                { (currentStep == 1)
                    ? currentStepRender(STEPS_NAMES[0], 1)
                    : (
                        (currentStep > 1)
                            ? DoneStepRender(STEPS_NAMES[0], 1)
                            : NotDoneStepRender(STEPS_NAMES[0], 1)
                    )
                }

            </li>
            <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-4 xl:after:mx-6 dark:after:border-gray-700">
                <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2">
                { (currentStep == 2)
                    ? currentStepRender(STEPS_NAMES[1], 2)
                    : (
                        (currentStep > 2)
                            ? DoneStepRender(STEPS_NAMES[1], 2)
                            : NotDoneStepRender(STEPS_NAMES[1], 2)
                    )
                }
                </span>
            </li>
            <li className="flex items-center">
                { (currentStep == 3)
                    ? currentStepRender(STEPS_NAMES[2], 3)
                    : (
                        (currentStep > 3)
                            ? DoneStepRender(STEPS_NAMES[2], 3)
                            : NotDoneStepRender(STEPS_NAMES[2], 3)
                    )
                }
            </li>
        </ol>
    )
}

export default Stepper;