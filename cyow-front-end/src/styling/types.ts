import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            mainBackground: string;
            mainBorder: string;
            mainBoxShadow: string;
            grey1: string;
        };
        boundaries: {
            mainBorder: string;
            mainBoxShadow: string;
            mainBorderRadius: string;
        };
    }
}