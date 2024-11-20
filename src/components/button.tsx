// import React from 'react';
// import Button, { ButtonProps } from '@mui/material/Button';

// interface CustomButtonProps extends ButtonProps {
//     label?: string;
//     startIcon?: React.ReactNode;
//     endIcon?: React.ReactNode;
//     onClick?: () => void;
//     fullWidth?: boolean;
// }

// const CustomButton: React.FC<CustomButtonProps> = ({
//     label = 'Button',
//     variant = 'contained',
//     startIcon = null,
//     endIcon = null,
//     fullWidth,
//     onClick = () => { },
//     ...props
// }) => {
//     return (
//         <Button
//             fullWidth={fullWidth}
//             variant={variant}
//             startIcon={startIcon}
//             endIcon={endIcon}
//             onClick={onClick}
//             sx={{
//                 "& .MuiButton-root": {
//                     boxShadow: 'none !important'
//                 },
//                 '&:hover': {
//                     boxShadow: 'none', // Remove hover box shadow
//                 },
//                 '&:active': {
//                     boxShadow: 'none', // Remove active box shadow
//                 },
//                 '&:focus': {
//                     boxShadow: 'none', // Remove focus box shadow
//                 },
//             }}
//             {...props}
//         >
//             {label}
//         </Button>
//     );
// };

// export default CustomButton;
import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

interface CustomButtonProps extends ButtonProps {
    label?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    onClick?: () => void;
    fullWidth?: boolean;
    backgroundColor?: string,
    border?: string
}

const CustomButton: React.FC<CustomButtonProps> = ({
    label = 'Button',
    variant = 'contained',
    startIcon = null,
    endIcon = null,
    fullWidth, backgroundColor,

    onClick = () => { },
    border,
    ...props
}) => {
    return (
        <Button
            style={{
                boxShadow: "none",
                borderRadius: "10px",
                backgroundColor: backgroundColor ?? '#36E39B',
                color: backgroundColor == "#272B3A" ? "white" : backgroundColor == "FFFF" ? "#272B3A" : "#272B3A",
                border: border ?? "none"

            }}
            fullWidth={fullWidth}
            variant={variant}
            startIcon={startIcon}
            endIcon={endIcon}
            onClick={onClick}
            disableRipple
            sx={{
                padding: "0",
                "&.MuiButtonBase-root": {
                    borderRadius: "18px !important", // Apply to MuiButtonBase-root
                },
                "&.MuiButton-root": {
                    borderRadius: "18px !important", // Apply to MuiButton-root
                },
            }}
            {...props}
        >
            {label}
        </Button >
    );
};

export default CustomButton;
