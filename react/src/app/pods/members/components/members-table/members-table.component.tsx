import * as React from 'react';
import { MemberEntity, MemberColumn } from '../../model';
import Paper from '@material-ui/core/Paper';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { membersTableStyles } from './members-table.component.styles';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import { MembersTableBody } from './members-table-body.component';
import { MembersTableHead } from './members-table-head.component';

interface MembersTableProps extends WithStyles {
  members: MemberEntity[];
}

const membersTableColumns: MemberColumn[] = [
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
          <Table stickyHeader>
            <MembersTableHead columns={membersTableColumns} />
            <MembersTableBody members={members} columns={membersTableColumns} />
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export const MembersTableComponent = withStyles(membersTableStyles)(MembersTableComponentInner);
