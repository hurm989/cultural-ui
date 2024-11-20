import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CustomButton from './button';
import { useTranslation } from "react-i18next";
import { Box, Grid } from '@mui/material';

interface ResponsiveDialogProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    // contentText?: string;
    // agreeButtonText?: string;
    // disagreeButtonText?: string;
    onAgree?: () => void;
    onDisagree?: () => void;
    fullScreenBreakpoint?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    children?: React.ReactNode
}

const ResponsiveDialog: React.FC<ResponsiveDialogProps> = ({
    open,
    onClose,
    title = "Default Title",
    // contentText = "Default content goes here.",
    // agreeButtonText = "Agree",
    // disagreeButtonText = "Disagree",
    onAgree,
    onDisagree,
    children,
    fullScreenBreakpoint = 'sm',
}) => {
    const { t } = useTranslation();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down(fullScreenBreakpoint));

    const handleAgree = () => {
        if (onAgree) onAgree();
        onClose();
    };

    const handleDisagree = () => {
        if (onDisagree) onDisagree();
        onClose();
    };

    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={onClose}
            aria-labelledby="responsive-dialog-title"
            sx={{
                '& .MuiDialog-paper': {
                    width: '600px',
                    maxWidth: '100%',
                    padding: "1rem"
                },
            }}

        >
            <DialogTitle sx={{ fontSize: "2rem" }} id="responsive-dialog-title">{title}</DialogTitle>
            <DialogContent sx={{ mt: 5, mb: 3 }}>
                <DialogContentText>{children}</DialogContentText>
            </DialogContent>
            <DialogActions sx={{ mt: 2, mb: 3, mx: 1 }}>

                <Grid container>
                    <Grid item xs={6}><Box sx={{ mx: 1 }}>
                        <CustomButton onClick={() => handleDisagree()}
                            border='1px solid #272B3A'
                            backgroundColor="#272B3A"
                            sx={{ fontSize: "1rem", padding: "0.5rem 0rem" }} label={`${t('add')}`} fullWidth={true}
                        /></Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{ mx: 1 }}> <CustomButton
                            onClick={() => handleAgree()}
                            border='1px solid #272B3A'
                            backgroundColor="#FFFF"

                            sx={{ fontSize: "1rem", padding: "0.5rem 0rem" }} label={`${t('cancel')}`} fullWidth={true}
                        />
                        </Box>                    </Grid>
                </Grid>
            </DialogActions>

        </Dialog >
    );
};

export default ResponsiveDialog;
