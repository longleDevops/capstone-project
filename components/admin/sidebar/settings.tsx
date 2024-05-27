"use client"

import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';
import { Settings } from 'lucide-react';
import { useSettings } from "@/hooks/use-settings"
import styles from './styles.module.css'
import { ThemeSelect } from './theme-select';
import { useRouter } from 'next/navigation';

export function SettingsComponent() {
  const router = useRouter()
  const [opened, { open, close }] = useDisclosure(false);
  const { isClosed, setIsClosed, tempTheme, setTheme, theme } = useSettings()

  const handleSaved = () => {

    setTheme(tempTheme)
    close()
  }

  return (
    <>
      <Drawer.Root opened={opened} onClose={close} size={'sm'} position='right'>
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Settings</Drawer.Title>
            <Drawer.CloseButton />
          </Drawer.Header>
          <Drawer.Body>
            <div className={styles.holder}>
              <p>Choose theme</p>
              <ThemeSelect />
            </div>
            <div className={styles.btn_group}>
              <Button radius={10} variant='default' size='md' onClick={close}>
                Cancel
              </Button>
              <Button bg={'black'} radius={10} ml={10} size='md' onClick={handleSaved}>
                Save Changes
              </Button>
            </div>
            <div className={styles.sign_out_btn} onClick={() => router.push('/admin')}>
              <Button variant='default' radius={10} w={'100%'} size='md'>
                Sign Out
              </Button>
            </div>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <div
        className={styles.setting_holder}
        style={isClosed ? { width: '55px' } : {}}
        onClick={open}
      >
        <Settings size={20} />
        {!isClosed && <p>Settings</p>}
      </div>
    </>
  );
}