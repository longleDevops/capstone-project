import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
  type MRT_Row,
} from 'mantine-react-table';

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
    size: 160,
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
    size: 160,
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
