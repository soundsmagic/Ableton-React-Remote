import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            mainBackground: string;
            mainBorder: string;
            mainBoxShadow: string;
        };
        boundaries: {
            mainBorder: string;
            mainBoxShadow: string;
            mainBorderRadius: string;
        };
    }
}