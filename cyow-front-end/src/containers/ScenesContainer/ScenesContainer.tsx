import { Grid } from '@mui/material';

export const ScenesContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <Grid container style={{ 'border': '4px solid blue' }}>
            {children}
        </Grid>
    );
};
