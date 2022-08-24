import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from '@mui/material';
const MovieCard = () => {
  return (
    <>
      <Card>
        <CardMedia
          component='img'
          height={250}
          src='https://wegotthiscovered.com/wp-content/uploads/2020/07/159492946620314633-11.jpeg'
        />

        <CardContent>
          <Stack spacing={1}>
            <Typography fontSize='1.2rem' fontWeight={600}>
              Movie Name
            </Typography>
            <Stack direction='row' alignItems='center' spacing={1}>
              <Rating value={Number(4)} readOnly precision={0.5} size='small' />
              <Typography color='text.secondary'>(4.4)</Typography>
            </Stack>
          </Stack>
          <Stack spacing={1} mt={2}>
            <Button variant='outlined' endIcon={<FavoriteIcon />}>
              Add list
            </Button>
            <Button variant='contained' fullWidth endIcon={<VisibilityIcon />}>
              Watch now
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

export default MovieCard;
