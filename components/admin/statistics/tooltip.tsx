import { Tooltip, Button } from '@mantine/core';
import { CircleHelp } from 'lucide-react';

export const TooltipComponent = ({ label }: { label: string }) => {
  return (
    <Tooltip
      multiline
      w={220}
      withArrow
      transitionProps={{ duration: 200 }}
      label="Avg Income from only working students"
      color='indigo'
    >
      <CircleHelp size={18} color='white' fill="blue" />
    </Tooltip>
  );
}