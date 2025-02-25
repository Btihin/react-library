import { Remove } from '@mui/icons-material';
import { Box, Skeleton, Tooltip, Typography } from '@mui/material';
import { DataType, getValueFromApi, NEVYPLNENO } from '../utils/functions';
import { useMemo } from 'react';

//#region Text ___________________________________________________________________________________
export interface ISkeletonTextProps {
  nacitani: boolean | undefined;
  text: unknown;
  sirka?: number;
  typ: DataType;
}

export const SkeletonText = (props: ISkeletonTextProps) => {
  const { nacitani = false, sirka = 100, text, typ } = props;
  //po načtení ulož hodnotu
  const value = useMemo(() => {
    return !nacitani && getValueFromApi(text, typ);
  }, [nacitani, text, typ]);
  return (
    <Typography variant='body1' key='body1' sx={{ fontWeight: 'bold' }}>
      {nacitani ? (
        <Skeleton variant='text' animation='wave' width={sirka} />
      ) : value === NEVYPLNENO ? (
        <Tooltip title='Nevyplněno'>
          <Remove />
        </Tooltip>
      ) : (
        value
      )}
    </Typography>
  );
};
//#endregion Text ___________________________________________________________________________________

export interface ISkeletonNadpisProps {
  nacitani: boolean | undefined;
  sirka?: number;
  text: string | number | undefined | null;
  velikost: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

//#region Nadpis ___________________________________________________________________________________

export const SkeletonNadpis = (props: ISkeletonNadpisProps) => {
  const { nacitani = false, velikost = 'h4' } = props;
  return (
    <Typography align='center' variant={velikost} key={velikost}>
      {nacitani ? (
        <Skeleton variant='text' animation='wave' width={props.sirka} />
      ) : props.text ? (
        props.text
      ) : (
        'Nedefinováno'
      )}
    </Typography>
  );
};
//#endregion Nadpis ___________________________________________________________________________________

//#region Velké číslo ___________________________________________________________________________________
export const SkeletonVelkeCislo = (props: ISkeletonNadpisProps) => {
  const { nacitani = false, velikost = 'h4' } = props;
  return (
    <Typography variant={velikost} key={props.velikost} align='right'>
      {nacitani ? (
        <Skeleton variant='text' animation='wave' width={props.sirka} />
      ) : props.text ? (
        props.text
      ) : (
        <Tooltip title='Nedefinováno'>
          <Remove color='error' />
        </Tooltip>
      )}
    </Typography>
  );
};
//#endregion Velké číslo ___________________________________________________________________________________

//#region Skeleton pro velký Chip ___________________________________________________________________________________
export const SkeletonChipBig = (props: { width: number }) => {
  const { width = 91 } = props;
  return (
    <Skeleton
      variant='rectangular'
      sx={{ borderRadius: '20px' }}
      width={width}
      height={32}
    ></Skeleton>
  );
};
//#endregion Skeleton pro velký Chip ___________________________________________________________________________________

export interface SkeletonItemText {
  nacitani?: boolean;
  titulek: string;
  text: string | number | undefined | null;
  typ: DataType;
}
//#region Item do seznamu ___________________________________________________________________________________
export const SkeletonItemText = (props: SkeletonItemText) => {
  const { nacitani = false } = props;
  return (
    <Box sx={{ p: 1 }}>
      <SkeletonText nacitani={nacitani} text={props.text} typ={props.typ} />
      <Typography variant={'caption'} color='text.secondary'>
        {props.titulek}
      </Typography>
    </Box>
  );
};
//#endregion Item do seznamu ___________________________________________________________________________________
