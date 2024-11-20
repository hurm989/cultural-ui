// // import * as React from 'react';
// // import Box from '@mui/material/Box';
// // import Stepper from '@mui/material/Stepper';
// // import Step from '@mui/material/Step';
// // import StepLabel from '@mui/material/StepLabel';
// // import Button from '@mui/material/Button';
// // import Typography from '@mui/material/Typography';

// // interface HorizontalLinearStepperProps {
// //     steps: string[];
// //     onStepChange?: (currentStep: number) => void;
// // }

// // export default function HorizontalLinearStepper({
// //     steps,
// //     onStepChange,
// // }: HorizontalLinearStepperProps) {
// //     const [activeStep, setActiveStep] = React.useState(0);
// //     const [skipped, setSkipped] = React.useState(new Set<number>());

// //     const isStepOptional = (step: number) => {
// //         // Define your logic for optional steps, or pass it as a prop for further customization
// //         return step === 1;
// //     };

// //     const isStepSkipped = (step: number) => {
// //         return skipped.has(step);
// //     };

// //     const handleNext = () => {
// //         let newSkipped = skipped;
// //         if (isStepSkipped(activeStep)) {
// //             newSkipped = new Set(newSkipped.values());
// //             newSkipped.delete(activeStep);
// //         }

// //         const newStep = activeStep + 1;
// //         setActiveStep(newStep);
// //         setSkipped(newSkipped);
// //         if (onStepChange) onStepChange(newStep);
// //     };

// //     const handleBack = () => {
// //         const newStep = activeStep - 1;
// //         setActiveStep(newStep);
// //         if (onStepChange) onStepChange(newStep);
// //     };

// //     const handleSkip = () => {
// //         if (!isStepOptional(activeStep)) {
// //             throw new Error("You can't skip a step that isn't optional.");
// //         }

// //         const newStep = activeStep + 1;
// //         setActiveStep(newStep);
// //         setSkipped((prevSkipped) => {
// //             const newSkipped = new Set(prevSkipped.values());
// //             newSkipped.add(activeStep);
// //             return newSkipped;
// //         });
// //         if (onStepChange) onStepChange(newStep);
// //     };

// //     const handleReset = () => {
// //         setActiveStep(0);
// //         if (onStepChange) onStepChange(0);
// //     };

// //     return (
// //         <Box sx={{ width: '100%' }}>
// //             <Stepper activeStep={activeStep}>
// //                 {steps.map((label, index) => {
// //                     const stepProps: { completed?: boolean } = {};
// //                     const labelProps: { optional?: React.ReactNode } = {};
// //                     // if (isStepOptional(index)) {
// //                     //     labelProps.optional = (
// //                     //         <Typography variant="caption">Optional</Typography>
// //                     //     );
// //                     // }
// //                     if (isStepSkipped(index)) {
// //                         stepProps.completed = false;
// //                     }
// //                     return (
// //                         <Step key={label} {...stepProps}>
// //                             <StepLabel {...labelProps}></StepLabel>
// //                         </Step>
// //                     );
// //                 })}
// //             </Stepper>
// //             {activeStep === steps.length ? (
// //                 <React.Fragment>
// //                     {/* <Typography sx={{ mt: 2, mb: 1 }}>
// //                         All steps completed - you're finished
// //                     </Typography> */}
// //                     <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
// //                         <Box sx={{ flex: '1 1 auto' }} />
// //                         <Button onClick={handleReset}>Reset</Button>
// //                     </Box>
// //                 </React.Fragment>
// //             ) : (
// //                 <React.Fragment>
// //                     {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
// //                     <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
// //                         <Button
// //                             color="inherit"
// //                             disabled={activeStep === 0}
// //                             onClick={handleBack}
// //                             sx={{ mr: 1 }}
// //                         >
// //                             Back
// //                         </Button>
// //                         <Box sx={{ flex: '1 1 auto' }} />
// //                         {isStepOptional(activeStep) && (
// //                             <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
// //                                 Skip
// //                             </Button>
// //                         )}
// //                         <Button onClick={handleNext}>
// //                             {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
// //                         </Button>
// //                     </Box>
// //                 </React.Fragment>
// //             )}
// //         </Box>
// //     );
// // }
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import StepIcon, { StepIconProps } from '@mui/material/StepIcon';
// import Button from '@mui/material/Button';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// interface HorizontalLinearStepperProps {
//     steps: string[];
//     onStepChange?: (currentStep: number) => void;
// }

// export default function HorizontalLinearStepper({
//     steps,
//     onStepChange,
// }: HorizontalLinearStepperProps) {
//     const [activeStep, setActiveStep] = React.useState(0);

//     const handleNext = () => {
//         const newStep = activeStep + 1;
//         setActiveStep(newStep);
//         if (onStepChange) onStepChange(newStep);
//     };

//     const handleBack = () => {
//         const newStep = activeStep - 1;
//         setActiveStep(newStep);
//         if (onStepChange) onStepChange(newStep);
//     };

//     const handleReset = () => {
//         setActiveStep(0);
//         if (onStepChange) onStepChange(0);
//     };

//     return (
//         <Box sx={{ width: '100%', marginTop: "4rem" }}>
//             <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                 <Box sx={{ width: "300px" }}>
//                     <Stepper activeStep={activeStep} >
//                         {steps.map((_, index) => (
//                             <Step key={index}>
//                                 <StepLabel
//                                     StepIconComponent={(props) => (
//                                         <CustomStepIcon {...props} isActive={index === activeStep} />
//                                     )}
//                                 />
//                             </Step>
//                         ))}
//                     </Stepper>
//                 </Box>
//             </Box>
//             {activeStep === steps.length ? (
//                 <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
//                     <Button onClick={handleReset}>Reset</Button>
//                 </Box>
//             ) : (
//                 <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, position: "absolute" }}>
//                     <Button
//                         color="inherit"
//                         disabled={activeStep === 0}
//                         onClick={handleBack}
//                         sx={{ mr: 1 }}
//                     >
//                         <ArrowForwardIosIcon sx={{ fontSize: "2rem" }} />
//                     </Button>
//                     <Box sx={{ flex: '1 1 auto' }} />
//                     {/* <Button onClick={handleNext}>
//                         {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//                     </Button> */}
//                 </Box>
//             )}
//         </Box>
//     );
// }

// interface CustomStepIconProps extends StepIconProps {
//     isActive: boolean;
// }

// function CustomStepIcon({ isActive, ...props }: CustomStepIconProps) {
//     return (
//         <Box
//             sx={{
//                 width: 40,
//                 height: 40,
//                 borderRadius: '50%',
//                 backgroundColor: isActive ? 'primary.main' : 'black',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 color: 'white',
//                 fontSize: '16px',
//                 fontWeight: 'bold',
//             }}
//         >
//             {/* Optionally, you could show something inside the circle */}
//             {props.completed && '✔'}
//         </Box>
//     );
// }
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { StepIconProps } from '@mui/material/StepIcon';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface HorizontalLinearStepperProps {
    steps: string[];
    activeStep: number;
    onStepChange?: (currentStep: number) => void;
}

export default function HorizontalLinearStepper({
    steps,
    activeStep,
    onStepChange,
}: HorizontalLinearStepperProps) {
    // const handleNext = () => {
    //     const newStep = activeStep + 1;
    //     if (onStepChange) onStepChange(newStep);
    // };

    const handleBack = () => {
        const newStep = activeStep - 1;
        if (onStepChange) onStepChange(newStep);
    };

    const handleReset = () => {
        const newStep = activeStep - 1;
        if (onStepChange) onStepChange(newStep);
        // if (onStepChange) onStepChange(0);
    };

    return (
        <Box sx={{ width: '100%', marginTop: "2.5rem" }}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ width: "300px" }}>
                    <Stepper activeStep={activeStep}>
                        {steps.map((_, index) => (
                            <Step key={index}>
                                <StepLabel
                                    StepIconComponent={(props) => (
                                        <CustomStepIcon {...props} isActive={index === activeStep} />
                                    )}
                                />
                            </Step>
                        ))}
                    </Stepper>
                </Box>
            </Box>
            {activeStep === steps.length ? (
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button onClick={handleReset}>Reset</Button>
                </Box>
            ) : (
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, position: "absolute" }}>
                    <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                    >
                        <ArrowForwardIosIcon sx={{ fontSize: "2rem" }} />
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />
                    {/* "Next" button will be controlled by the parent */}
                </Box>
            )}
        </Box>
    );
}

interface CustomStepIconProps extends StepIconProps {
    isActive: boolean;
}

function CustomStepIcon({ isActive, ...props }: CustomStepIconProps) {
    return (
        <Box
            sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                backgroundColor: isActive ? 'primary.main' : 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '16px',
                fontWeight: 'bold',
            }}
        >
            {props.completed && '✔'}
        </Box>
    );
}
