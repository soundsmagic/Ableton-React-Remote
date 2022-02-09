import { ReactNode } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';

export const defaultTheme: DefaultTheme = {
    colors: {
        mainBackground: '#222',
        mainBorder: '#999',
        mainBoxShadow: '#666',
        grey1: '#aaa'
    },
    boundaries: {
        mainBorder: '1.5px solid',
        mainBorderRadius: '4px',
        mainBoxShadow: '2px 2px 2px'
    }
}

export const ThemeWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    );
};
