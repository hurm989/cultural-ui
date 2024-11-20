import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

interface CounterProps {
    value?: number; // Initial value of the counter
    onChange?: (newValue: number) => void; // Callback to notify parent about value changes
}

const Counter: React.FC<CounterProps> = ({ value = 0, onChange }) => {
    const [count, setCount] = useState<number>(value);

    const handleIncrement = () => {
        const newCount = count + 1;
        setCount(newCount);
        if (onChange) onChange(newCount); // Notify the parent
    };

    const handleDecrement = () => {
        const newCount = count > 0 ? count - 1 : 0;
        setCount(newCount);
        if (onChange) onChange(newCount); // Notify the parent
    };

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
                py: 2,
                maxWidth: '200px',
                margin: 'auto',
                padding: 0,
                m: 0,
                // backgroundColor: "red"
            }}
        >
            <Button
                variant="contained"
                onClick={handleIncrement}
                sx={{
                    minWidth: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    // fontSize: "1.5rem",
                    backgroundColor: '#2C2E3E',
                    color: '#fff',
                    boxShadow: "none",
                    '&:hover': {
                        backgroundColor: '#1c1e2e',
                    },
                }}
            >
                +
            </Button>
            <TextField
                value={String(count).padStart(2, '0')}
                InputProps={{
                    readOnly: true,
                    style: {
                        textAlign: 'center',
                        fontSize: '1.2rem',
                    },
                }}
                sx={{
                    width: '90px',
                    '& .MuiInputBase-root': {
                        textAlign: 'center',
                        border: "2px solid black",
                        padding: 0
                    },

                }}
            />
            <Button
                variant="contained"
                onClick={handleDecrement}
                sx={{
                    minWidth: '40px',
                    boxShadow: "none",
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#2C2E3E',
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#1c1e2e',
                    },
                }}
            >
                -
            </Button>
        </Box>
    );
};

export default Counter;
