import * as React from 'react';
import { MembersTableComponent } from '../members-table';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { membersPageStyles } from './members-page.component.styles';
import { memberAPI } from '../../api';
import { MemberEntity } from '../../model';

interface MembersPageProps extends WithStyles {}

export const MembersPageComponentInner: React.FunctionComponent<MembersPageProps> = props => {
  const { classes } = props;
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [organization, setOrganization] = React.useState<string>('lemoncode');

  const loadMembers = React.useCallback(
    (organizationName: string) => () => {
      memberAPI.getAllMembers(organizationName).then(members => setMembers(members));
    },
    [],
  );

  const handleOrganizationChange = React.useCallback(event => {
    console.log(event.target.value);
    setOrganization(event.target.value);
  }, []);

  return (
    <>
      <Typography variant="h2" className={classes.title}>
        {' '}
        Members page{' '}
      </Typography>
      <div className={classes.searcherContainer}>
        <TextField
          variant="outlined"
          label="Organization"
          size="small"
          className={classes.textField}
          onChange={handleOrganizationChange}
        ></TextField>
        <Button startIcon={<SearchIcon />} variant="contained" color="primary" onClick={loadMembers(organization)}>
          {' '}
          Load{' '}
        </Button>
      </div>

      <MembersTableComponent members={members} />
    </>
  );
};

export const MembersPageComponent = withStyles(membersPageStyles)(MembersPageComponentInner);
