import * as React from 'react';
import { MemberEntity } from '../../model';
import { MemberRow } from './memberRow';
import { MemberHead } from './memberHead';

interface MembersTableProps {
  members: MemberEntity[];
}

export const MembersTableComponent: React.FunctionComponent<MembersTableProps> = (props: MembersTableProps) => {
  const { members } = props;

  return (
    <div className="row">
      <table className="table">
        <thead>
          <MemberHead />
        </thead>
        <tbody>
          {members.map((member: MemberEntity) => (
            <MemberRow key={member.id} member={member} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
