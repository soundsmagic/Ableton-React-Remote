import { Grid } from '@mui/material';

export const TracksContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <Grid container style={{ 'border': '4px solid red' }}>
            {children}
        </Grid>
    );
};
