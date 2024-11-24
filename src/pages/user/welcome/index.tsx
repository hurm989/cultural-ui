
import styles from "../../../styles/Home.module.css"
import { useTranslation } from "react-i18next";
import {
    MainContainer, LoginHeading,
    SuccessHeading
} from "./style";
import i18n from "@/lib/i18n";
import { useRouter } from "next/navigation";
import { Box, Grid } from "@mui/material";
import CustomButton from "@/components/button";
export default function LoginScreen() {
    const { t } = useTranslation();
    console.log(i18n, "HEREEE")
    const router = useRouter()

    return (
        <MainContainer className={styles.heading}>
            <img src="/logo.svg" width="300px" />
            <LoginHeading sx={{ margin: "3rem 0 !important" }}>{t("loginSuccessful")}</LoginHeading>
            <Grid container sx={{ maxWidth: "900px", mt: 3, mb: 5, px: 2 }} alignItems="center" spacing={3}>

                <Grid item xs={7}>
                    <SuccessHeading>{t("YouhavesuccessfullyloggedinWelcometotheHouseofCulture")}</SuccessHeading>
                </Grid>
                <Grid item xs={5}>
                    <img src="/success.svg" width="300px" />
                </Grid>
            </Grid>
            <Box sx={{ mt: "3rem" }}>
                <CustomButton onClick={() => router.push("/")}
                    backgroundColor="#272B3A"
                    sx={{ fontSize: "1.5rem", padding: "0.4rem 2.5rem" }} label={`${t('returnToHome')}`} fullWidth={true}
                />
            </Box>
        </MainContainer>

    );
}