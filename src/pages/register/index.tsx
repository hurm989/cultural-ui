import styles from "../../styles/Home.module.css"
import { useTranslation } from "react-i18next";
import {
    MainContainer,
    LoginHeading
} from "../../styles/registerStyle";
import CustomButton from "@/components/button";
import i18n from "@/lib/i18n";
import HorizontalLinearStepper from "@/components/stepper";
import { Box } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import PhoneNumber from "@/components/numberField";
import OutlinedInput from "@/components/input";
import GenderToggle from "@/components/toggle";
import CustomToggle from "@/components/toggle";
const RegisterScreen = () => {
    const { t } = useTranslation();
    console.log(i18n, "HEREEE")
    const router = useRouter()
    // const [error, setError] = useState("")
    // const [mobileNo, setMobileNumber] = useState<string | null>()
    // const steps = ['Step One', 'Step Two', 'Step Three'];

    // const handleStepChange = (currentStep: number) => {
    //     console.log('Current step:', currentStep);
    // };
    const steps = ['Step 1', 'Step 2', 'Step 3']; // Define your steps

    const [activeStep, setActiveStep] = useState(0); // Manage activeStep in parent

    // Function to handle step change (called from HorizontalLinearStepper)
    const handleStepChange = (newStep: number) => {
        setActiveStep(newStep);
    };

    // Function to handle the "Next" button click
    // const handleNext = () => {
    //     setActiveStep((prevStep: number) => Math.min(prevStep + 1, steps.length - 1)); // Ensure it doesn't go past last step
    // };
    // const handleLogin = () => {
    //     if (!mobileNo?.length) {
    //         setError("الرجاء إدخال رقم الجوال")
    //     } else {

    //         router.push("/user/info")
    //         handleNext()
    //     }
    // }
    // const handleChange = (e: string) => {
    //     console.log(e, "PHONENU<BER")
    //     setError("")
    //     setMobileNumber(e)
    // }

    const [selectedGender, setSelectedGender] = useState<string>('male'); // Default value


    const handleGenderChange = (newGender: string) => {
        setSelectedGender(newGender); // Update the selected gender in parent state
        console.log('Selected Gender:', newGender); // Optional: log or use the selected value
    };

    const options = [
        { value: 'male', label: 'ذكـــــر' },
        { value: 'female', label: 'أنثـــــى' },
    ];
    const [selectedValue1, setSelectedValue1] = useState<string>("citizen");

    // const [name, setName] = useState('');

    // const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setName(event.target.value);
    // };
    return (
        <MainContainer className={styles.heading}>
            <img src="/logo.svg" width="300px" />
            <HorizontalLinearStepper
                steps={steps}  // Pass the list of steps
                activeStep={activeStep}  // Pass the current active step
                onStepChange={handleStepChange}  // Pass callback to change active step
            />
            <LoginHeading sx={{ margin: "3rem 0 !important" }}>{t("newRegistration")}</LoginHeading>

            <Box sx={{ width: "550px" }}>
                <form>
                    <Box sx={{ mb: 2 }}>
                        <Box sx={{ mb: 1, fontSize: "1.3rem" }}>نوع الزّائر</Box>

                        {/* <OutlinedInput
                            id="name"
                            // label="أدخل رقم الجوال"
                            // value={name}
                            // onChange={handleNameChange}
                            placeholder="ادخل رقم الهوية"
                            fullWidth
                            required
                            type="text"
                        /> */}
                        <CustomToggle
                            options={[
                                { value: "citizen", label: "مواطـــــن" },
                                { value: "resident", label: "مقيـــــم" },
                                { value: "tourist", label: "سائـــــح" },
                            ]}
                            selectedValue={selectedValue1}
                            onChange={setSelectedValue1}
                        />
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <Box sx={{ mb: 1, fontSize: "1.3rem" }}>الاسم الكامل</Box>
                        <OutlinedInput
                            id="name"
                            // label="أدخل رقم الجوال"
                            // value={name}
                            // onChange={handleNameChange}
                            placeholder="ادخل رقم الهوية"
                            fullWidth
                            required
                            type="text"
                        />
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <Box sx={{ mb: 1, fontSize: "1.3rem" }}>رقم الهوية</Box>
                        <OutlinedInput
                            id="name"
                            // label="أدخل رقم الجوال"
                            // value={name}
                            // onChange={handleNameChange}
                            placeholder="ادخل رقم الهوية"
                            fullWidth
                            required
                            type="text"
                        />
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <Box sx={{ mb: 1, fontSize: "1.3rem" }}>رقم الجوال</Box>
                        <PhoneNumber
                        // onChange={(e) => setModel((prev) => ({ ...prev, phone: e }))}
                        // onChange={(e) => handleChange(e)}
                        // value={user?.phone_no}
                        // defaultErrorMessage={error}
                        />
                        {/* <OutlinedInput
                            id="name"
                            // label="أدخل رقم الجوال"
                            // value={name}
                            // onChange={handleNameChange}
                            placeholder="966xxxxxxxxx"
                            fullWidth
                            required
                            type="text"
                        /> */}
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <Box sx={{ mb: 1, fontSize: "1.3rem" }}>الجنس</Box>
                        <GenderToggle
                            options={options} // Passing options to the child component
                            selectedValue={selectedGender} // Passing the selected value
                            onChange={handleGenderChange} // Callback to update the parent state
                        />

                    </Box>
                </form>

                {/* <PhoneNumber
                    // onChange={(e) => setModel((prev) => ({ ...prev, phone: e }))}
                    onChange={(e) => handleChange(e)}
                    // value={user?.phone_no}
                    defaultErrorMessage={error}
                /> */}
            </Box>

            <Box sx={{ mt: "3rem" }}>
                <CustomButton onClick={() => router.push("/details")}
                    backgroundColor="#272B3A"
                    sx={{ fontSize: "1.5rem", padding: "0.4rem 2.5rem" }} label={`${t('continuetologin')}`} fullWidth={true}
                />
            </Box>
            {/* <Box sx={{ mt: "3rem" }}>
                <CustomButton
                    onClick={
                        handleLogin
                    }
                    sx={{ fontSize: "1.8rem", padding: "0.6rem 3rem" }} label={`${t('login')}`} fullWidth={true}
                    startIcon={<LoginOutlined sx={{
                        minWidth: "2rem",
                        minHeight: "2rem",
                        marginLeft: "1.2rem",
                        fontWeight: 400
                    }} />} />
            </Box> */}
            {/* </ImageContainer> */}
        </MainContainer>

    );
}

export default RegisterScreen