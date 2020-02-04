import * as React from 'react';
import { memberAPI } from '../../api';
import { MemberDetailsVM, createEmptyMemberDetails } from '../../model';
import { mapMemberDetailsFromDomainToViewModel } from '../../mappers';

interface MemberDetailsProps {
  memberLogin: string;
}

export const MemberDetailsComponent: React.FunctionComponent<MemberDetailsProps> = (props: MemberDetailsProps) => {
  const { memberLogin } = props;
  const [memberDetails, setMemberDetails] = React.useState<MemberDetailsVM>(createEmptyMemberDetails());

  React.useEffect(() => {
    memberAPI.getMemberDetails(memberLogin).then(memberDetails => {
      setMemberDetails(mapMemberDetailsFromDomainToViewModel(memberDetails));
    });
  }, []);

  return <h1>Details component {memberDetails.login}</h1>;
};
