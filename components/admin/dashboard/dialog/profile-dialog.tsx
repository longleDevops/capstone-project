"use client"

import styles from './styles.module.css'
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import Image from 'next/image';
import { Rating } from '@mantine/core';
import { useUser } from '@clerk/nextjs';
import { useGetBackgrounds } from '@/app/(back-end)/features/student-background/api/use-get-backgrounds';
import { useDialog } from '@/hooks/use-dialog';
import { DomesticStatus } from './domestic-status';
import { InternationalStatus } from './international-status';
import { WorkingStatus } from './working-status';
import { SearchingJobStatus } from './searching-job-status';
import { SeekingDegreeStatus } from './seeking-degree-status';
import { studentBackground } from '@/app/(back-end)/db/schema';

type props = {
  backgroundData: {
    id: number;
    firstName: string | null;
    lastName: string | null;
    status: string;
    studentId: string | null;
    major: string;
    startTerm: string;
    endTerm: string | null;
    campus: string;
    gender: string;
    race: string;
    degreeLevel: string;
    userId: string;
  }
}

export const ProfileDialog = ({ backgroundData }: props) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: .6,
        }}
        classNames={{
          header: styles.modal_container,
          body: styles.modal_container,
        }}
        radius={10}
        padding={0}
      >
        <div className={styles.container}>
          <div className={styles.upper_container}>
            <Image
              src="/banner.png"
              alt="banner logo"
              height={80}
              width={200}
              className={styles.banner_img}
            />
            <Image
              src="/graduated.png"
              alt="graduation logo"
              height={80}
              width={80}
              className={styles.graduation_img}
            />
          </div>

          {
            backgroundData.status === 'domestic-student' ? <DomesticStatus backgroundData={backgroundData} />
              : backgroundData.status === 'international-student' ? <InternationalStatus backgroundData={backgroundData} />
                : backgroundData.status === 'working-student' ? <WorkingStatus backgroundData={backgroundData} />
                  : backgroundData.status === 'seeking-student' ? <SeekingDegreeStatus backgroundData={backgroundData} />
                    : <SearchingJobStatus backgroundData={backgroundData} />
          }

        </div>
      </Modal>
      <Button
        onClick={open}
        radius={'md'}
        variant="gradient"
        gradient={{ from: 'indigo', to: 'blue', deg: 90 }}
      >
        View
      </Button>
    </>
  );
}