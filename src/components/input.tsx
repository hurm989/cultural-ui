import React from 'react';
import TextField from '@mui/material/TextField';

interface OutlinedInputProps {
    id: string;
    label?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string; // Optional: Default is 'text'
    placeholder?: string; // Optional: Default is ''
    fullWidth?: boolean; // Optional: Default is false
    required?: boolean; // Optional: Default is false
    error?: boolean; // Optional: Default is false
    helperText?: string; // Optional: For validation messages
}

const OutlinedInput: React.FC<OutlinedInputProps> = ({
    id,
    label,
    value,
    onChange,
    type = 'text',
    placeholder = '',
    fullWidth = false,
    required = false,
    error = false,
    helperText = '',
}) => {
    return (
        <TextField
            id={id}
            label={label}
            value={value}
            onChange={onChange}
            variant="outlined"
            type={type}
            placeholder={placeholder}
            fullWidth={fullWidth}
            required={required}
            error={error}
            helperText={helperText}
            sx={{
                "& .MuiInputBase-root": {
                    borderRadius: "6px",
                    backgroundColor: "white",
                    borderColor: "#272B3A",
                    padding: "0"
                },
                "& .MuiInputBase-input": {
                    padding: "0.5rem 1rem !important",
                    borderColor:"black"
                }
               
            }}
        />
    );
};

export default OutlinedInput;
