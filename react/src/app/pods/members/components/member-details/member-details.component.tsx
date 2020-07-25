import * as React from 'react';
import { memberAPI } from '../../api';
import { MemberDetailsVM, createEmptyMemberDetails } from '../../model';
import { mapMemberDetailsFromDomainToViewModel } from '../../mappers';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { memberDetailsStyles } from './member-details.component.styles';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

interface MemberDetailsProps extends WithStyles {
  memberLogin: string;
}

export const MemberDetailsComponentInner: React.FunctionComponent<MemberDetailsProps> = (props: MemberDetailsProps) => {
  const { memberLogin, classes } = props;
  const [memberDetails, setMemberDetails] = React.useState<MemberDetailsVM>(createEmptyMemberDetails());

  React.useEffect(() => {
    memberAPI.getMemberDetails(memberLogin).then((memberDetails) => {
      setMemberDetails(mapMemberDetailsFromDomainToViewModel(memberDetails));
    });
  }, []);

  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.cardMedia}>
            <Avatar className={classes.avatar} src={memberDetails.avatar_url} />
            <Typography variant="h6"> {memberDetails.name} </Typography>
          </CardMedia>
          <Divider />
          <CardContent>
            <Typography variant="button"> Company: </Typography><Typography variant="body1">{memberDetails.company} </Typography>
            <Typography variant="button"> Blog: </Typography><Typography variant="body1">{memberDetails.blog} </Typography>
            <Typography variant="button"> e-mail: </Typography><Typography variant="body1">{memberDetails.email} </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export const MemberDetailsComponent = withStyles(memberDetailsStyles)(MemberDetailsComponentInner);
