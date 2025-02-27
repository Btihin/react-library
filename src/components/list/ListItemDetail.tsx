import { List, ListItem, ListItemText, Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React, { useId } from 'react';
import { DataType } from '../../utils/functions';
import { SkeletonText } from '../SkeletonText';

export interface IListItemDetailProps {
  children?: React.ReactNode;
  nacitani: boolean;
  sirka: number;
  text: unknown;
  popisek: string;
  typ: DataType;
}

export const ListItemDetail = (props: IListItemDetailProps) => {
  const { children, nacitani, sirka, text, popisek, typ } = props;
  const idKey = useId();
  return (
    <ListItem key={idKey} secondaryAction={children || undefined}>
      <ListItemText
        primary={
          <SkeletonText
            nacitani={nacitani}
            text={text}
            sirka={sirka}
            typ={typ}
          />
        }
        secondary={popisek}
      />
    </ListItem>
  );
};

export interface IListWrapperDetailProps {
  children: any;
}

export const ListWrapperDetail = (props: IListWrapperDetailProps) => {
  return (
    <Grid size={{ lg: 4, xs: 12 }}>
      <Paper elevation={2} square>
        <List dense>{props.children}</List>
      </Paper>
    </Grid>
  );
};
