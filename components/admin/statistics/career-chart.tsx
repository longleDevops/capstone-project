"use client"

import styles from "./styles.module.css"

import { Progress } from '@mantine/core';

export const CareerChart = () => {
  const majors = [
    {
      img: "img",
      title: 'Computer Science',
      value: "20%"
    },
    {
      img: "img",
      title: 'Computer Science',
      value: "20%"
    },
    {
      img: "img",
      title: 'Computer Science',
      value: "20%"
    },
    {
      img: "img",
      title: 'Computer Science',
      value: "20%"
    },
    {
      img: "img",
      title: 'Computer Science',
      value: "20%"
    },
    {
      img: "img",
      title: 'Computer Science',
      value: "20%"
    },
  ]
  return (
    <div>
      <Progress color="orange" size="sm" value={20} animated />
    </div>
  )
}