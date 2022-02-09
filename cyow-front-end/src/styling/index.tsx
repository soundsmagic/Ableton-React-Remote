import { ReactNode } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';

export const defaultTheme: DefaultTheme = {
    colors: {
        mainBackground: '#222',
        mainBorder: '#999',
        mainBoxShadow: '#666'
    },
    boundaries: {
        mainBorder: '0.05em solid',
        mainBorderRadius: '0.3em',
        mainBoxShadow: '0.1em 0.1em 0.15em'
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
