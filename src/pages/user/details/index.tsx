import { Add, Circle, Person2Outlined, } from "@mui/icons-material";
import styles from "../../../styles/Home.module.css"
import { useTranslation } from "react-i18next";
import {
    MainContainer,
    LoginHeading,
    SelectCompanionHeding,
    SelectorAddCompanionHeding,
    DetailsContent,
    DetailsHeading,
    DetailsPara
} from "../../../styles/loginDetailstyle";
import CustomButton from "@/components/button";
import i18n from "@/lib/i18n";
import HorizontalLinearStepper from "@/components/stepper";
import { Box, Checkbox, Divider, Grid } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import OutlinedInput from "@/components/input";
import ResponsiveDialog from "@/components/modal";
import Counter from "@/components/counter";
import GenderToggle from "@/components/toggle";
// import AlertDialogSlide from "@/components/modal";
interface Detail {
    id: number;
    name: string;
    gender: string;
    age: string;
}
const LoginDetailsScreen = () => {
    const { t } = useTranslation();
    console.log(i18n, "HEREEE")
    const router = useRouter()
    // const steps = ['Step One', 'Step Two', 'Step Three'];

    // const handleStepChange = (currentStep: number) => {
    //     console.log('Current step:', currentStep);
    // };
    const steps = ['Step 1', 'Step 2', 'Step 3']; // Define your steps

    const [activeStep, setActiveStep] = useState(2); // Manage activeStep in parent

    // Function to handle step change (called from HorizontalLinearStepper)
    const handleStepChange = (newStep: number) => {
        setActiveStep(newStep);
        router.push("/details")
    };

    // Function to handle the "Next" button click
    // const handleNext = () => {
    //     setActiveStep((prevStep: number) => Math.min(prevStep + 1, steps.length - 1)); // Ensure it doesn't go past last step
    // };
    // const handleLogin = () => {
    //     router.push("/details")
    //     handleNext()
    // }
    const [name, setName] = useState('');

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleOpen = () => setDialogOpen(true);
    const handleClose = () => setDialogOpen(false);

    const handleAgree = () => {
        console.log("Agreed!");
    };

    const handleDisagree = () => {
        console.log("Disagreed!");
    };

    const [counterValue, setCounterValue] = useState<number>(0);

    const handleCounterChange = (newValue: number) => {
        setCounterValue(newValue); // Update the parent's state
        console.log('Counter Value:', newValue); // Log the new value
    };


    const [selectedGender, setSelectedGender] = useState<string>('male'); // Default value

    const handleGenderChange = (newGender: string) => {
        setSelectedGender(newGender); // Update the selected gender in parent state
        console.log('Selected Gender:', newGender); // Optional: log or use the selected value
    };

    const options = [
        { value: 'male', label: 'ذكر' },
        { value: 'female', label: 'أنثى' },
    ];

    return (
        <>
            <MainContainer className={styles.heading}>
                <img src="/logo.svg" width="300px" />
                <HorizontalLinearStepper
                    steps={steps}  // Pass the list of steps
                    activeStep={activeStep}  // Pass the current active step
                    onStepChange={handleStepChange}  // Pass callback to change active step
                />
                <LoginHeading sx={{ margin: "3rem 0 !important" }}>{t("loggedin")}</LoginHeading>

                <Grid container alignItems="center" sx={{ maxWidth: "900px" }}>
                    <Grid item xs={8}>
                        <SelectCompanionHeding>{t("selectCompanions")}</SelectCompanionHeding>
                        <SelectorAddCompanionHeding>{t("Selectthecompanionscurrentlywithyouoraddanewcompanion")}</SelectorAddCompanionHeding>
                    </Grid>
                    <Grid item xs={4}>
                        <Box >
                            <CustomButton onClick={() => handleOpen()} border="1px solid #272B3A" sx={{ fontSize: "1.5rem" }} label={`${t('Addcompanion')}`} fullWidth={true}
                                startIcon={<Add sx={{
                                    minWidth: "2.6rem",
                                    minHeight: "2.6rem",
                                    marginLeft: "1.2rem",
                                    fontWeight: 400
                                }} />} />

                        </Box>
                    </Grid>

                    <Box sx={{ width: "100%", my: 2 }}>
                        <Divider />
                    </Box>
                </Grid>

                <Grid container alignItems="center" sx={{ maxWidth: "900px" }} spacing={3}>
                    {detailsArray.map((detail: Detail) => (
                        <Grid item xs={4} key={detail.id}>
                            <Box
                                sx={{
                                    border: "1px solid black",
                                    padding: "1rem",
                                    borderRadius: "16px",
                                    backgroundColor: "white",
                                }}
                            >
                                <DetailsContent>

                                    <Person2Outlined
                                        sx={{
                                            minWidth: "2.3rem",
                                            minHeight: "2.3rem",
                                            marginLeft: "1.2rem",
                                            fontWeight: 400,
                                        }}
                                    />
                                    <DetailsHeading>{detail.name}</DetailsHeading>
                                    <Checkbox icon={<Circle />} checkedIcon={<Circle />} />
                                </DetailsContent>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        py: 1,
                                    }}
                                >
                                    <DetailsContent>
                                        <DetailsHeading>الجنس</DetailsHeading>
                                        <DetailsPara>{detail.gender}</DetailsPara>
                                    </DetailsContent>
                                    <DetailsContent>
                                        <DetailsHeading>العٌمر</DetailsHeading>
                                        <DetailsPara>{detail.age}</DetailsPara>
                                    </DetailsContent>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{ mt: "3rem" }}>
                    <CustomButton onClick={() => router.push("/user/welcome")}
                        backgroundColor="#272B3A"
                        sx={{ fontSize: "1.5rem", padding: "0.4rem 2.5rem" }} label={`${t('continuetologin')}`} fullWidth={true}
                    />
                </Box>

            </MainContainer>



            <ResponsiveDialog
                open={dialogOpen}
                onClose={handleClose}
                title={t('Addcompanion')}
                // contentText="This dialog is controlled by the parent component."
                // agreeButtonText="Accept"
                // disagreeButtonText="Decline"
                onAgree={handleAgree}
                onDisagree={handleDisagree}

            >
                <Grid container rowSpacing={3} spacing={3}>
                    <Grid item xs={8}>
                        <Box sx={{ m: 1 }}>
                            <OutlinedInput
                                id="name"
                                // label="أدخل رقم الجوال"
                                value={name}
                                onChange={handleNameChange}
                                // placeholder="أدخل رقم الجوال"
                                fullWidth
                                required
                                type="text"
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        {/* <Box sx={{ py: 2 }}> */}

                        <Counter value={counterValue} onChange={handleCounterChange} />
                        {/* </Box> */}

                    </Grid>
                    <Grid item xs={12}>

                        <GenderToggle
                            options={options} // Passing options to the child component
                            selectedValue={selectedGender} // Passing the selected value
                            onChange={handleGenderChange} // Callback to update the parent state
                        />

                    </Grid>
                </Grid>
            </ResponsiveDialog >
        </>
    );
}


export const detailsArray: Detail[] = [
    {
        id: 1,
        name: "وتين الوابل",
        gender: "أُنثى",
        age: "11 سنة",
    },
    {
        id: 2,
        name: "وتين الوابل",
        gender: "ذكر",
        age: "9 سنوات",
    },
    {
        id: 3,
        name: "وتين الوابل",
        gender: "ذكر",
        age: "17 سنة",
    },
];

export default LoginDetailsScreen