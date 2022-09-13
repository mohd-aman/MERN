import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core';
export default function Notes() {
    const useStyles = makeStyles({
        size: {
            height: "10vh",
            backgroundColor: "lightgray"
        }
    })
    const classes = useStyles();
    // xs sm md lg xl
    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.size}>1</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.size}>2</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.size}>3</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.size}>4</Paper>
                </Grid>
            </Grid>
        </Container>
    )
}