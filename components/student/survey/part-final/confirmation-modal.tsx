"use client"

import { useCreateSatisfaction } from '@/app/(back-end)/features/satisfaction/api/use-create-satisfaction';
import { useSurveyPartThree } from '@/hooks/use-partThree';
import { useSurvey } from '@/hooks/use-survey';
import { Button, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';
import styles from './styles.module.css';
import { notifications } from '@mantine/notifications';
import styles2 from "@/components/student/survey/notification.module.css"

export const ConfirmationModal = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { q1Answer, q2Answer, q3Answer, q4Answer, q5Answer } = useSurveyPartThree()
  const { setCurrentPart } = useSurvey()

  const satisfactionMutation = useCreateSatisfaction()

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

  const navigateNext = () => {
    if (q1Answer === -1 || q2Answer === -1 || q3Answer === -1 || q4Answer === -1 || q5Answer === -1) {
      notifications.show({
        title: 'Please answer all questions',
        message: "",
        color: 'red',
        autoClose: 3000,
        style: { width: 290, height: 80 },
        classNames: styles2
      });
      return;
    }
    open()
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
        onClick={navigateNext}
      >
        Submit
      </Button>
    </>
  );
}