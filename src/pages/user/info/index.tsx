import styles from "../../../styles/Home.module.css"
import { useTranslation } from "react-i18next";
import {
    MainContainer,
    LoginHeading,
    DetailsContent,
    DetailsHeading,
    DetailsPara,
} from "../../../styles/loginInfoStyle";
import i18n from "@/lib/i18n";
import HorizontalLinearStepper from "@/components/stepper";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Grid } from "@mui/material";
import CustomButton from "@/components/button";
const LoginDetails = () => {
    const { t } = useTranslation();
    console.log(i18n, "HEREEE")
    const router = useRouter()
    const steps = ['Step 1', 'Step 2', 'Step 3']; // Define your steps

    const [activeStep, setActiveStep] = useState(1); // Manage activeStep in parent

    // Function to handle step change (called from HorizontalLinearStepper)
    const handleStepChange = (newStep: number) => {
        setActiveStep(newStep);
        router.push("/login")
    };

    // Function to handle the "Next" button click
    const handleNext = () => {
        setActiveStep((prevStep) => Math.min(prevStep + 1, steps.length - 1)); // Ensure it doesn't go past last step
    };

    const handleLogin = () => {
        router.push("/user/details")
        handleNext()
    }

    return (
        <MainContainer className={styles.heading}>
            <img src="/logo.svg" width="300px" />
            <HorizontalLinearStepper
                steps={steps}
                activeStep={activeStep}
                onStepChange={handleStepChange}
            />
            {/* <ImageContainer> */}

            <LoginHeading sx={{ margin: "3rem 0 !important" }}>{t("loggedin")}</LoginHeading>
            <Grid container>
                <Grid item xs={6}></Grid>
                <Grid item xs={6}>
                    <DetailsContent>
                        <DetailsHeading>نوع الزّائر:</DetailsHeading>
                        <DetailsPara></DetailsPara>
                    </DetailsContent>
                    <DetailsContent>
                        <DetailsHeading>رقم الجوّال:</DetailsHeading>
                        <DetailsPara>+966 331 766 152</DetailsPara>
                    </DetailsContent>
                    <DetailsContent>
                        <DetailsHeading>الجنسيّة:</DetailsHeading>
                        <DetailsPara>سعودي</DetailsPara>
                    </DetailsContent>

                </Grid>
            </Grid>
            <Box sx={{ mt: "2rem" }}>
                <CustomButton
                    onClick={
                        handleLogin
                    }
                    backgroundColor="#272B3A"
                    sx={{ fontSize: "1.5rem", padding: "0.3rem 2.4rem" }} label={`${t('continuetologin')}`} fullWidth={true}
                />
            </Box>
            {/* </ImageContainer> */}
        </MainContainer >

    );
}

export default LoginDetails