import * as React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { MemberColumn } from '../../model';

interface MembersTableHeadProps {
  columns: MemberColumn[];
}

export const MembersTableHead: React.FunctionComponent<MembersTableHeadProps> = (props: MembersTableHeadProps) => {
  const { columns } = props;
  return (
    <TableHead>
      <TableRow>
        {columns.map(column => (
          <TableCell key={column.id}>{column.label}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
