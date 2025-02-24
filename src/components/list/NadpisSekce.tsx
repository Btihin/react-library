import { Typography } from '@mui/material';
import { JSX } from 'react';

export const NadpisSekce: React.FC<{ title: string }> = (
  props,
): JSX.Element => {
  return (
    <Typography sx={{ pt: 2, pl: 2 }} variant='h5' component={'div'}>
      {props.title}
    </Typography>
  );
};
