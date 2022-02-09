import { Grid } from '@mui/material';
import { SingleTrack } from '../SingleTrack/SingleTrack';

export const TracksContainer = () => {
    return (
        <Grid container item xs={8} style={{ 'backgroundColor': 'pink' }}>
            <SingleTrack />
            <SingleTrack />
            <SingleTrack />
        </Grid>
    );
};
