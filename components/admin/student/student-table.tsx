"use client"

import styles from './styles.module.css'
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css'; //if using mantine date picker features
import 'mantine-react-table/styles.css'; //make sure MRT styles were imported in your app root (once)
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
  type MRT_Row,
} from 'mantine-react-table';
import { Box, Button } from '@mantine/core';
import { IconDownload } from '@tabler/icons-react';
import { jsPDF } from 'jspdf'; //or use your library of choice here
import autoTable from 'jspdf-autotable';
import { MantineProvider } from '@mantine/core';


type Student = {
  id: string,
  firstName: string;
  lastName: string;
  year: string;
  level: string;
  satisfaction: string;
  salary: string
};

//nested data is ok, see accessorKeys in ColumnDef below
const data: Student[] = [
  {
    id: "12345678",
    firstName: 'Zachary',
    lastName: 'Davis',
    year: '2019',
    level: 'Bachelor',
    satisfaction: '4.6',
    salary: "$100,000"
  },
  {
    id: "12345678",
    firstName: 'Long',
    lastName: 'la',
    year: '2019',
    level: 'Master',
    satisfaction: '4.6',
    salary: "$100,000"
  },
  {
    id: "456546456",
    firstName: 'Thang',
    lastName: 'Le',
    year: '2019',
    level: 'Bachelor',
    satisfaction: '4.6',
    salary: "$100,000"
  },
  {
    id: "23423432",
    firstName: 'Huzing',
    lastName: 'Davis',
    year: '2019',
    level: 'Bachelor',
    satisfaction: '4.6',
    salary: "$100,000"
  },
  {
    id: "345346345",
    firstName: 'Son',
    lastName: 'Davis',
    year: '2019',
    level: 'Bachelor',
    satisfaction: '4.6',
    salary: "$100,000"
  },
  {
    id: "12345678",
    firstName: 'Travis',
    lastName: 'Davis',
    year: '2019',
    level: 'Bachelor',
    satisfaction: '2.3',
    salary: "$100,000"
  },
  {
    id: "12345678",
    firstName: 'Zachary',
    lastName: 'Davis',
    year: '2019',
    level: 'Bachelor',
    satisfaction: '3.5',
    salary: "$100,000"
  },
  {
    id: "12345678",
    firstName: 'Zachary',
    lastName: 'Davis',
    year: '2019',
    level: 'Bachelor',
    satisfaction: '1.6',
    salary: "$100,000"
  },
  {
    id: "12345678",
    firstName: 'Zachary',
    lastName: 'Davis',
    year: '2019',
    level: 'Bachelor',
    satisfaction: '4.6',
    salary: "$100,000"
  },
  {
    id: "12345678",
    firstName: 'Zachary',
    lastName: 'Davis',
    year: '2019',
    level: 'Bachelor',
    satisfaction: '4.6',
    salary: "$100,000"
  },
  {
    id: "12345678",
    firstName: 'Zachary',
    lastName: 'Davis',
    year: '2019',
    level: 'Bachelor',
    satisfaction: '4.6',
    salary: "$100,000"
  },
];

const columns: MRT_ColumnDef<Student>[] = [
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
    accessorKey: 'year',
    header: 'Start Year',
    size: 120,
  },
  {
    accessorKey: 'level',
    header: 'Level',
    size: 120,
  },
  {
    accessorKey: 'satisfaction',
    header: 'Satisfaction',
    size: 120,
  },
  {
    accessorKey: 'salary',
    header: 'Salary',
    size: 120,
  },
];

export const StudentTable = () => {
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

