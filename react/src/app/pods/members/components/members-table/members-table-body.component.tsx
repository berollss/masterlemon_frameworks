import * as React from 'react';
import TableBody from '@material-ui/core/TableBody';
import { MemberEntity, MemberColumn } from '../../model';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Avatar from '@material-ui/core/Avatar';

interface MembersTableBodyProps {
  members: MemberEntity[];
  columns: MemberColumn[];
  onSelectMember: (memberLogin: string) => void;
}

export const MembersTableBody: React.FunctionComponent<MembersTableBodyProps> = (props: MembersTableBodyProps) => {
  const { members, columns, onSelectMember } = props;

  const handleSelectMember = (memberLogin: string) => event => onSelectMember(memberLogin);

  return (
    <TableBody>
      {members.map(member => {
        return (
          <TableRow key={member.id} onClick={handleSelectMember(member.login)}>
            {columns.map(column => (
              <TableCell key={column.id}>
                {column.id !== 'avatar_url' ? (
                  member[column.id]
                ) : (
                  <Avatar src={member.avatar_url} />
                  // <img src={member.avatar_url} style={{ maxWidth: '10rem' }} />
                )}
              </TableCell>
            ))}
          </TableRow>
        );
      })}
    </TableBody>
  );
};
