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
    labels: ["1", "2", "3", "4", "5", "6", "8"],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };

  return (
    <>
      <Modal opened={isDialogOpen} onClose={() => setIsDialogOpen(false)} title="Authentication" centered size="auto" radius={20}
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