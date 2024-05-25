"use client"

import { useState } from 'react';
import { ComboboxItem, Select } from '@mantine/core';
import { useMainChart } from '@/hooks/use-main-chart';
import { AreaChart, BarChart3 } from 'lucide-react';

export function ChartSelect() {
  const { chartType, setChartType } = useMainChart()

  return (
    <Select
      data={["Area chart", "Bar chart"]}
      value={chartType}
      onChange={setChartType}
      allowDeselect={false}
      leftSection={chartType === "Area chart" ? <AreaChart /> : <BarChart3 />}
      w={140}
      mr={20}
    />
  );
}