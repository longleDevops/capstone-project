"use client"

import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import { ArrowRight } from 'lucide-react';
import styles from './styles.module.css'
import { useSurvey } from '@/hooks/use-survey';

export const ConfirmationModal = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { setCurrentPart } = useSurvey()
  const handleConfirmed = () => {
    close();
    setCurrentPart(5)
  }
  return (
    <>
      <Modal opened={opened} onClose={close} centered closeOnClickOutside={false} withCloseButton={false} radius={10} padding={20}>
        {/* Modal content */}
        <div className={styles.header}>Confirm to submit the CWU survey?</div>
        <div className={styles.btn_holder}>
          <Button
            radius={10}
            size='md'
            styles={{ root: { fontSize: 16, color: 'black' } }}
            variant='transparent'
            onClick={close}
          >
            Cancel
          </Button>
          <Button
            radius={10}
            size='md'
            bg={'black'}
            styles={{ root: { fontSize: 16 } }}
            onClick={() => handleConfirmed()}
          >
            Confirm
          </Button>
        </div>
      </Modal>

      <Button
        radius={10}
        size='lg'
        color='rgba(21, 89, 43, 1)'
        variant='filled'
        styles={{ root: { fontSize: 16 } }}
        rightSection={<ArrowRight size={24} />
        }
        onClick={open}
      >
        Submit
      </Button>
    </>
  );
}