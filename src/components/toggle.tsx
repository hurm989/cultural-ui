import React from 'react';
import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

interface GenderToggleProps {
    options: { value: string, label: string }[]; // Dynamic options passed from the parent
    selectedValue: string; // Currently selected value
    onChange: (newValue: string) => void; // Callback to notify parent about selection change
}

const GenderToggle: React.FC<GenderToggleProps> = ({ options, selectedValue, onChange }) => {
    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string
    ) => {
        if (newAlignment !== null) {
            onChange(newAlignment); // Notify the parent with the selected value
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', width: "100%", }}>
            <ToggleButtonGroup
                value={selectedValue}
                exclusive
                onChange={handleAlignment}
                aria-label="gender"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    // Adjust width as needed
                    width: "100%",
                    border: '1px solid #ddd',
                    // borderRadius: '20px',
                }}
            >
                {options.map((option) => (
                    <ToggleButton
                        key={option.value}
                        value={option.value}
                        aria-label={option.value}
                        sx={{
                            minWidth: '50%',
                            textAlign: 'center',
                            // backgroundColor: selectedValue === option.value ? '#36E39B' : '#f0f0f0',
                            backgroundColor: '#36E39B',
                            // color: selectedValue === option.value ? '#fff' : '#000',

                        }}
                    >
                        <Typography variant="body2">{option.label}</Typography>
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </div>
    );
};

export default GenderToggle;
