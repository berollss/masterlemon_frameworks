import { createStyles, Theme } from '@material-ui/core/styles';

export const memberDetailsStyles = (theme: Theme) =>
  createStyles({
    card: {
      width: '33%',
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    },
    avatar: {
      marginTop: 24,
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
    cardMedia: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
  });
