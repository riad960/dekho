import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardHeader,
  Stack,
  Rating,
  CardActions,
  Button,
  CardContent,
} from '@mui/material';

import Slider from './Slider';
import MovieCard from './MovieCard';
const Container = () => {
  return (
    <Box minHeight='80vh'>
      <Slider />
      <Typography>Movies</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6} md={2}>
          <MovieCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Container;
