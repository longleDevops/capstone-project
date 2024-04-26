"use client"

import styles from "./menu.module.css"
import { Menu, Button, Text, rem } from '@mantine/core';
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from '@tabler/icons-react';
import { Ellipsis } from 'lucide-react';
import { useState } from 'react';
import { useDialog } from "@/hooks/use-dialog";

export function CareerMenu() {

  const { isMenuOpen2, setIsDialogOpen2, setIsMenuOpen2 } = useDialog()
  return (
    <Menu shadow="md" width={150} opened={isMenuOpen2} onChange={setIsMenuOpen2}>
      <Menu.Target>
        <Ellipsis size={30} className={styles.menu_icon} />
      </Menu.Target>

      <Menu.Dropdown>

        <Menu.Item
          leftSection={<IconSearch style={{ width: rem(14), height: rem(14) }} />}
        >
          Search
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item

          leftSection={<IconArrowsLeftRight style={{ width: rem(14), height: rem(14) }} />}
          onClick={() => setIsDialogOpen2(true)}
        >
          View Career
        </Menu.Item>

      </Menu.Dropdown>
    </Menu>
  );
}