// import React from 'react';
// import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

// interface GenderToggleProps {
//     options: { value: string, label: string }[]; // Dynamic options passed from the parent
//     selectedValue: string; // Currently selected value
//     onChange: (newValue: string) => void; // Callback to notify parent about selection change
// }

// const GenderToggle: React.FC<GenderToggleProps> = ({ options, selectedValue, onChange }) => {
//     const handleAlignment = (
//         event: React.MouseEvent<HTMLElement>,
//         newAlignment: string
//     ) => {
//         if (newAlignment !== null) {
//             onChange(newAlignment); // Notify the parent with the selected value
//         }
//     };

//     return (
//         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: "100%", }}>
//             <ToggleButtonGroup
//                 value={selectedValue}
//                 exclusive
//                 onChange={handleAlignment}
//                 aria-label="gender"
//                 sx={{
//                     display: 'flex',
//                     justifyContent: 'space-between',
//                     // Adjust width as needed
//                     width: "100%",
//                     border: '1px solid #ddd',
//                     height: "39px",
//                     // margin:"0"

//                     // borderRadius: '20px',
//                 }}
//             >
//                 {options.map((option) => (
//                     <ToggleButton
//                         style={{ padding: "0.4rem 1rem !important", }}
//                         key={option.value}
//                         value={option.value}
//                         aria-label={option.value}
//                         sx={{
//                             minWidth: '50%',
//                             textAlign: 'center',
//                             // backgroundColor: selectedValue === option.value ? '#36E39B' : '#f0f0f0',
//                             backgroundColor: '#36E39B',
//                             // color: selectedValue === option.value ? '#fff' : '#000',
//                             // "& .MuiToggleButton-root ":{
//                             //     padding: "0.5rem 1rem !important",
//                             // }
//                             "& .MuiButtonBase-root-MuiToggleButton-root": {
//                                 padding: "0 !important"
//                             }
//                         }}
//                     >
//                         <Typography variant="body2">{option.label}</Typography>
//                     </ToggleButton>
//                 ))}
//             </ToggleButtonGroup>
//         </div>
//     );
// };

// export default GenderToggle;
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

// Define types for the component props
interface Option {
    value: string;
    label: string;
}

interface CustomToggleProps {
    options: Option[];
    selectedValue: string;
    onChange: (value: string) => void;
}

const CustomToggle: React.FC<CustomToggleProps> = ({
    options,
    selectedValue,
    onChange,
}) => {
    return (
        <ToggleButtonGroup
            value={selectedValue}
            exclusive
            onChange={(_, newValue) => {
                if (newValue !== null) onChange(newValue); // Prevent deselecting all options
            }}
            sx={{
                display: "flex",
                backgroundColor: "#d3d3d3", // Light gray background
                borderRadius: "6px",
                overflow: "hidden",
            }}
        >
            {options.map((option) => (
                <ToggleButton
                    key={option.value}
                    value={option.value}
                    sx={{
                        flex: 1,
                        color: selectedValue === option.value ? "#000" : "#fff",
                        backgroundColor:
                            selectedValue === option.value ? "#36E39B" : "#36E39B", // Green for selected, gray for unselected
                        "&:hover": {
                            backgroundColor:
                                selectedValue === option.value ? "#16a085" : "#c0c0c0",
                        },
                        fontSize: "16px",
                        fontWeight:400,
                        // fontWeight: "bold",
                        border: "none",
                        padding: " 0.4rem 0"
                    }}
                >
                    {option.label}
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    );
};

export default CustomToggle