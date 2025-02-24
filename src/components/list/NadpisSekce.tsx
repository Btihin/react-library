import { Typography } from '@mui/material';

export const NadpisSekce: React.FC<{ title: string }> = (
  props,
): JSX.Element => {
  return (
    <Typography sx={{ pt: 2, pl: 2 }} variant='h5' component={'div'}>
      {props.title}
    </Typography>
  );
};
