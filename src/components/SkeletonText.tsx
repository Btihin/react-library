// import { Remove } from '@mui/icons-material';
// import { Box, Skeleton, Tooltip, Typography } from '@mui/material';

import { Button } from '@mui/material';

// import { alignProperty } from '@mui/material/styles/cssUtils';
export const ZelenejButton = () => {
  return (
    <Button variant='contained' color='success'>
      Zelené tlačítko
    </Button>
  );
};
// //#region Text ___________________________________________________________________________________
// export interface ISkeletonTextProps {
//   nacitani: boolean | undefined;
//   text: string | number | undefined | null;
//   sirka?: number;
// }

// export const SkeletonText = (props: ISkeletonTextProps) => {
//   const { nacitani = false } = props;
//   return (
//     <Typography variant='body1' key='body1' sx={{ fontWeight: 'bold' }}>
//       {nacitani ? (
//         <Skeleton variant='text' animation='wave' width={props.sirka} />
//       ) : props.text === undefined ||
//         props.text === '-' ||
//         props.text === null ? (
//         <Tooltip title='Nedefinováno'>
//           <Remove />
//         </Tooltip>
//       ) : (
//         props.text
//       )}
//     </Typography>
//   );
// };
// //#endregion Text ___________________________________________________________________________________

// export interface ISkeletonNadpisProps {
//   nacitani: boolean | undefined;
//   sirka?: number;
//   text: string | number | undefined | null;
//   velikost: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
// }

// //#region Nadpis ___________________________________________________________________________________

// export const SkeletonNadpis = (props: ISkeletonNadpisProps) => {
//   const { nacitani = false, velikost = 'h4' } = props;
//   return (
//     <Typography align='center' variant={props.velikost} key={props.velikost}>
//       {nacitani ? (
//         <Skeleton variant='text' animation='wave' width={props.sirka} />
//       ) : props.text ? (
//         props.text
//       ) : (
//         'Nedefinováno'
//       )}
//     </Typography>
//   );
// };
// //#endregion Nadpis ___________________________________________________________________________________

// //#region Velké číslo ___________________________________________________________________________________
// export const SkeletonVelkeCislo = (props: ISkeletonNadpisProps) => {
//   const { nacitani = false, velikost = 'h4' } = props;
//   return (
//     <Typography variant={velikost} key={props.velikost} align='right'>
//       {nacitani ? (
//         <Skeleton variant='text' animation='wave' width={props.sirka} />
//       ) : props.text ? (
//         props.text
//       ) : (
//         <Tooltip title='Nedefinováno'>
//           <Remove color='error' />
//         </Tooltip>
//       )}
//     </Typography>
//   );
// };
// //#endregion Velké číslo ___________________________________________________________________________________

// //#region Skeleton pro velký Chip ___________________________________________________________________________________
// export const SkeletonChipBig = (props: { width: number }) => {
//   const { width = 91 } = props;
//   return (
//     <Skeleton
//       variant='rectangular'
//       sx={{ borderRadius: '20px' }}
//       width={width}
//       height={32}
//     ></Skeleton>
//   );
// };
// //#endregion Skeleton pro velký Chip ___________________________________________________________________________________

// export interface SkeletonItemText {
//   nacitani?: boolean;
//   titulek: string;
//   text: string | number | undefined | null;
// }
// //#region Item do seznamu ___________________________________________________________________________________
// export const SkeletonItemText = (props: SkeletonItemText) => {
//   const { nacitani = false } = props;
//   return (
//     <Box sx={{ p: 1 }}>
//       <SkeletonText nacitani={nacitani} text={props.text} />
//       <Typography variant={'caption'} color='text.secondary'>
//         {props.titulek}
//       </Typography>
//     </Box>
//   );
// };
// //#endregion Item do seznamu ___________________________________________________________________________________
