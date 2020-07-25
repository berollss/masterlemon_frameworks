import * as React from 'react';
import { MembersTableComponent } from '../members-table';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { membersPageStyles } from './members.component.styles';
import { useHistory } from 'react-router-dom';
import { useMembers } from '../../hooks';

interface MembersPageProps extends WithStyles {}

export const MembersComponentInner: React.FunctionComponent<MembersPageProps> = (props) => {
  const { classes } = props;
  const history = useHistory();

  const { loadMembers, members } = useMembers();
  const [organization, setOrganization] = React.useState<string>('lemoncode');

  const handleOrganizationChange = React.useCallback((event) => {
    setOrganization(event.target.value);
  }, []);

  const handleSelectMember = (memberLogin: string) => history.push(`/details/${memberLogin}`);

  return (
    <>
      <Typography variant="h2" className={classes.title}>
        Members page
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
          Load
        </Button>
      </div>

      <MembersTableComponent members={members} onSelectMember={handleSelectMember} />
    </>
  );
};

export const MembersComponent = withStyles(membersPageStyles)(MembersComponentInner);
