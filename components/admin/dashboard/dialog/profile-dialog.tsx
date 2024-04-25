"use client"

import styles from './styles.module.css'
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

export const ProfileDialog = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Profile"
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: .6,
        }}
        classNames={{
          header: styles.modal_container,
          body: styles.modal_container
        }}
      >
        <div className={styles.container}>
          <div className={styles.upper_container}>
            Img
          </div>
          <div className={styles.bottom_container}>
            <p>Kevin Le</p>
            <p>Graduated student</p>
            <p>Computer science</p>
            <p>Overall satisfaction: 5 stars</p>
          </div>

        </div>
      </Modal>

      <Button onClick={open}  >View Profile</Button>
    </>
  );
}