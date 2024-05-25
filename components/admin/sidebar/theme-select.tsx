"use client"

import { useState } from 'react';
import { ComboboxItem, Select } from '@mantine/core';
import { useMainChart } from '@/hooks/use-main-chart';
import { AreaChart, BarChart3, ChevronDown, Square } from 'lucide-react';
import { useSettings } from '@/hooks/use-settings';

export function ThemeSelect() {
  const { theme, setTheme, tempTheme, setTempTheme } = useSettings()

  return (
    <Select
      data={["Cwu", "Classic"]}
      value={tempTheme}
      onChange={setTempTheme}
      allowDeselect={false}
      leftSection={tempTheme === "Cwu" ? <Square fill='#cd4440' /> : <Square fill='white' />}
      w={140}
      mr={20}
    />
  );
}