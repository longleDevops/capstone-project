"use client"

import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';

export function BurgerMenu() {
  const [opened, { toggle }] = useDisclosure();
  return <Burger opened={!opened} aria-label="Toggle navigation" color='white' />;
}