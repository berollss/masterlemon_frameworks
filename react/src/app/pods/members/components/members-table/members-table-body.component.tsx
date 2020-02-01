import * as React from 'react';
import TableBody from '@material-ui/core/TableBody';
import { MemberEntity, MemberColumn } from '../../model';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

interface MembersTableBodyProps {
  members: MemberEntity[];
  columns: MemberColumn[];
}

export const MembersTableBody: React.FunctionComponent<MembersTableBodyProps> = (props: MembersTableBodyProps) => {
  const { members, columns } = props;
  return (
    <TableBody>
      {members.map(member => {
        return (
          <TableRow key={member.id}>
            {columns.map(column => (
              <TableCell key={column.id}>
                {column.id !== 'avatar_url' ? (
                  member[column.id]
                ) : (
                  <img src={member.avatar_url} style={{ maxWidth: '10rem' }} />
                )}
              </TableCell>
            ))}
          </TableRow>
        );
      })}
    </TableBody>
  );
};
