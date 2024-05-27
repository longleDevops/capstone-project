"use client"

import { Button, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Menu } from 'lucide-react';
import { Sidebar } from '../sidebar';

export const HamburgerSidebar = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      <Drawer opened={opened} onClose={close} withCloseButton={false} size={250}>
        <Sidebar />
      </Drawer>

      <Button onClick={open} variant='filled' color='black' w={70} h={50}>
        <Menu />
      </Button>
    </div>
  );
}