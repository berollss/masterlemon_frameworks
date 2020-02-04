import * as React from 'react';
import { MemberDetailsComponent } from '../pods/members/components/member-details/member-details.component';
import { RouteComponentProps } from 'react-router-dom';

export const MemberDetailsView: React.FunctionComponent<RouteComponentProps> = props => {
  return <MemberDetailsComponent memberLogin={props.match.params.memberLogin} />;
};
