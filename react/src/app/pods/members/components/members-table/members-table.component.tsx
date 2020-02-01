import * as React from 'react';
import { MemberEntity } from '../../model';
import Paper from '@material-ui/core/Paper';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { membersTableStyles } from './members-table.component.styles';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

interface MembersTableProps extends WithStyles {
  members: MemberEntity[];
}

const membersTableColumns = [
  { id: 'avatar_url', label: 'Avatar' },
  { id: 'id', label: 'Id' },
  { id: 'login', label: 'Name' },
];

const MembersTableComponentInner: React.FunctionComponent<MembersTableProps> = (props: MembersTableProps) => {
  const { members, classes } = props;
  return (
    <>
      <Paper>
        <TableContainer className={classes.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                {membersTableColumns.map(column => (
                  <TableCell key={column.id}>{column.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {members.map(member => {
                return (
                  <TableRow key={member.id}>
                    {membersTableColumns.map(column => (
                      <TableCell key={column.id}>{member[column.id]}</TableCell>
                    ))}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export const MembersTableComponent = withStyles(membersTableStyles)(MembersTableComponentInner);
