import React from 'react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
function AppGrid() {

    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6, xl:8}}>
                <Button variant='contained' style={{ backgroundColor: "#21b6ae", }} fullWidth>1</Button>
            </Grid>
            <Grid size={{ xs: 12, md: 6, xl:4}}>
                <Button variant='contained' color="secondary" fullWidth>1</Button>
            </Grid>
            <Grid size={{ xs: 12, md: 6, xl:4 }}>
                <Button variant='contained' color="secondary" fullWidth>1</Button>
            </Grid>
            <Grid size={{ xs: 12, md: 6, xl:8 }}>
                <Button variant='contained' style={{ backgroundColor: "#21b6ae", }} fullWidth>1</Button>
            </Grid>
        </Grid>
    )
}
export default AppGrid