"use client"

import { useSatisfaction } from '@/app/(back-end)/features/satisfaction/api/use-satisfaction';
import { useSurveyPartThree } from '@/hooks/use-partThree';
import { useSurvey } from '@/hooks/use-survey';
import { Button, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';
import styles from './styles.module.css';


export const ConfirmationModal = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { q1Answer, q2Answer, q3Answer, q4Answer, q5Answer } = useSurveyPartThree()
  const { setCurrentPart } = useSurvey()

  const satisfactionMutation = useSatisfaction()
  const handleSubmit = () => {
    satisfactionMutation.mutate({
      q1Answer,
      q2Answer,
      q3Answer,
      q4Answer,
      q5Answer,
    }, {
      onSuccess: () => {
        close(),
          toast.success("Successfully Submit"),
          setCurrentPart(5)
      }
    })

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
            onClick={handleSubmit}
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