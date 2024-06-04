"use client"

import { Box, Button, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css'; //if using mantine date picker features
import { IconDownload } from '@tabler/icons-react';
import { jsPDF } from 'jspdf'; //or use your library of choice here
import autoTable from 'jspdf-autotable';
import { Star } from 'lucide-react';
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
  type MRT_Row
} from 'mantine-react-table';
import 'mantine-react-table/styles.css'; //make sure MRT styles were imported in your app root (once)
//import { Student, columns } from './columns';


export type Student = {
  id: string,
  firstName: string | null;
  lastName: string | null;
  degree: string,
  major: string,
  startTerm: string,
  endTerm: string
  campus: string
  employmentStatus: string,
  satisfaction: number,
  gender: string,
  race: string,
};


export const columns: MRT_ColumnDef<Student>[] = [
  {
    accessorKey: 'id',
    header: 'SID',
    size: 120,
  },
  {
    accessorKey: 'firstName',
    header: 'First Name',
    size: 120,
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
    size: 120,
  },
  {
    accessorKey: 'degree',
    header: 'Degree',
    size: 200,
    Cell: ({ cell, table }) => <div style={
      {
        color: 'white',
        border: cell.getValue() as string === 'Doctoral Degree' ? '#0046fd 1px solid' : cell.getValue() as string === "Master's Degree" ? '#3c14a3 1px solid' : '#8405af 1px solid',
        backgroundColor: cell.getValue() as string === 'Doctoral Degree' ? 'rgba(23,54,247,.6)' : cell.getValue() as string === "Master's Degree" ? 'rgba(58,0,159,.6)' : 'rgba(126,0,171,.6)',
        fontWeight: '700',
        fontSize: '12px',
        width: '135px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '30px',
        gap: '5px',
        padding: '5px 0'
      }
    }>{cell.getValue() as string}</div >

  },
  {
    accessorKey: 'major',
    header: 'Major',
    size: 120,
  },
  {
    accessorKey: 'startTerm',
    header: 'Start Term',
    size: 120,
  },
  {
    accessorKey: 'endTerm',
    header: 'End Term',
    size: 120,
  },
  {
    accessorKey: 'campus',
    header: 'Campus',
    size: 120,
  },
  {
    accessorKey: 'employmentStatus',
    header: 'Status',
    size: 120,
  },
  {
    header: 'Satisfaction',
    accessorKey: 'satisfaction',
    Cell: ({ cell, table }) => <div style={
      {
        color: 'white',
        backgroundColor: cell.getValue() as number > 2.5 ? '#36d92f' : '#d9150e',
        fontWeight: '700',
        width: '70px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
        margin: 'auto',
        gap: '5px',
      }
    }>{cell.getValue() as string} <Star color='#f4d50d' fill='#f4d50d' size={14} /></div >

  },
  {
    accessorKey: 'gender',
    header: 'Gender',
    size: 120,
  },
  {
    accessorKey: 'race',
    header: 'Race',
    size: 120,
  },
  // {
  //   accessorKey: 'satisfaction',
  //   header: 'Satisfaction',
  //   size: 120,
  // },
];


export const StudentTable = ({ data }: { data: Student[] }) => {

  const handleExportRows = (rows: MRT_Row<Student>[]) => {
    const doc = new jsPDF();
    const tableData = rows.map((row) => Object.values(row.original));
    const tableHeaders = columns.map((c) => c.header);

    autoTable(doc, {
      head: [tableHeaders],
      body: tableData
    });

    doc.save('students.pdf');
  };

  const table = useMantineReactTable({
    columns,
    data,
    initialState: { density: 'xs' },
    enableRowSelection: true,
    columnFilterDisplayMode: 'popover',
    enableColumnFilterModes: true,
    paginationDisplayMode: 'pages',
    positionToolbarAlertBanner: 'bottom',
    mantinePaperProps: {
      style: {
        '--mrt-base-background-color': 'white',
      },
    },

    mantineTableProps: { striped: 'even' },
    renderTopToolbarCustomActions: ({ table }) => (
      <Box
        style={{
          display: 'flex',
          gap: '16px',
          padding: '8px',
          flexWrap: 'wrap',
        }}
      >
        <Button
          disabled={table.getPrePaginationRowModel().rows.length === 0}
          //export all rows, including from the next page, (still respects filtering and sorting)
          onClick={() =>
            handleExportRows(table.getPrePaginationRowModel().rows)
          }
          leftSection={<IconDownload />}
          variant="filled"
        >
          All Rows
        </Button>
        <Button
          disabled={table.getRowModel().rows.length === 0}
          //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
          onClick={() => handleExportRows(table.getRowModel().rows)}
          leftSection={<IconDownload />}
          variant="filled"
        >
          Page Rows
        </Button>
        <Button
          disabled={
            !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
          }
          //only export selected rows
          onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
          leftSection={<IconDownload />}
          variant="filled"
        >
          Selected Rows
        </Button>
      </Box>
    ),
  });

  return (
    <MantineProvider
      theme={{
        primaryColor: 'orange',

      }}
    >
      <MantineReactTable
        table={table}
      />
    </MantineProvider>
  )
};

