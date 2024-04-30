"use client"

import styles from "./menu.module.css"
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import { useDialog } from '@/hooks/use-dialog';
import 'chart.js/auto';
import { Bar } from "react-chartjs-2"


export const SalaryDialog = () => {

  const { isDialogOpen, setIsDialogOpen } = useDialog()

  const data = {
    labels: ["Software Engineer", "Graphic Designers", "Nurse", "Lawyer", "Mechanical Engineer", "Chemical Engineer", "Doctor", "Teacher", "9", "10", "11", "12", "13", "14", "15"],
    datasets: [{
      label: "Avg. Job Salary",
      data: [65, 59, 80, 81, 56, 55, 40, 78, 89, 66, 55, 88, 99, 20, 45, 90, 102],
      backgroundColor: '#3a4fde'
    }]
  };

  return (
    <>
      <Modal opened={isDialogOpen} onClose={() => setIsDialogOpen(false)} title="Job Salary" centered size="auto" radius={20}
        transitionProps={{ duration: 50 }}>
        {/* Modal content */}
        <div className={styles.bar_container}>
          <Bar
            data={data}
          />
        </div>
      </Modal>
    </>
  );
}