"use client"

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
import { useGetBackgrounds } from '@/app/(back-end)/features/student-background/api/use-get-backgrounds';


type Student = {
  id: string,
  firstName: string;
  lastName: string;
  graduationStatus: string;
  employmentStatus: string,
  startTerm: string,
  endTerm: string
  level: string;
  satisfaction: string;
  salary: string,
  gender: string,
  race: string,
  campus: string
};


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
    accessorKey: 'graduationStatus',
    header: 'Graduation Status',
    size: 120,
  },
  {
    accessorKey: 'level',
    header: 'Degree',
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
    accessorKey: 'employmentStatus',
    header: 'Employment',
    size: 120,
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
  {
    accessorKey: 'campus',
    header: 'Campus',
    size: 120,
  },
];

export const StudentTable = () => {
  const { data: submittedBackgrounds } = useGetBackgrounds();

  const data: Student[] = submittedBackgrounds ?
    submittedBackgrounds.map((item) => (
      {
        id: item.studentId || '000000',
        firstName: item.firstName,
        lastName: item.lastName,
        graduationStatus: 'graduated',
        startTerm: item.startTerm,
        endTerm: item.endTerm || 'N/A',
        employmentStatus: 'working',
        level: 'Bachelor',
        satisfaction: '4.6',
        salary: "$100,000",
        gender: item.gender,
        race: item.race,
        campus: item.campus
      }
    ))
    : [];

  //nested data is ok, see accessorKeys in ColumnDef below
  const dataTemp: Student[] = [
    {
      id: "12345678",
      firstName: 'Zachary',
      lastName: 'Davis',
      graduationStatus: 'graduated',
      startTerm: 'Fall 2023',
      endTerm: 'Fall 2024',
      employmentStatus: 'working',
      level: 'Bachelor',
      satisfaction: '4.6',
      salary: "$100,000",
      gender: "male",
      race: "white",
      campus: 'Desmoinces'
    },

  ];
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

