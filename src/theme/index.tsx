import { createTheme } from '@mui/material/styles';
import { Arabic } from '@/lib/font';

const theme = createTheme({
    palette: {
        primary: {
            main: '#36E39B',
        },
        secondary: {
            main: "#272B3A",
        },
    },
    typography: {
        fontFamily: Arabic.style.fontFamily,
    },
    components: {
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: '#272B3A',
                },
            },
        },
    },
    direction: 'rtl',
});

export default theme;
