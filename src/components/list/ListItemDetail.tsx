import {
  Grid,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
} from '@mui/material';
import { useId } from 'react';
import { DataType } from '../../utils/functions';
import { SkeletonText } from '../SkeletonText';

export interface IListItemDetailProps {
  children?: any;
  nacitani: boolean;
  sirka: number;
  text: unknown;
  popisek: string;
  typ: DataType;
}

export const ListItemDetail = (props: IListItemDetailProps) => {
  const idKey = useId();
  return (
    <ListItem key={idKey}>
      <ListItemText
        primary={
          <SkeletonText
            nacitani={props.nacitani}
            text={props.text}
            sirka={props.sirka}
            typ={props.typ}
          />
        }
        secondary={props.popisek}
      />
      <ListItemSecondaryAction>{props.children}</ListItemSecondaryAction>
    </ListItem>
  );
};

export interface IListWrapperDetailProps {
  children: any;
}

export const ListWrapperDetail = (props: IListWrapperDetailProps) => {
  return (
    <Grid item lg={4} xs={12}>
      <Paper elevation={2} square>
        <List dense>{props.children}</List>
      </Paper>
    </Grid>
  );
};
