"use client"

import styles from './styles.module.css'
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import Image from 'next/image';
import { Rating } from '@mantine/core';


export const ProfileDialog = () => {
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
          <div className={styles.bottom_container}>
            <p className={styles.username}>@andre</p>
            <p className={styles.name}>Andree Lindo</p>
            <div className={styles.graduation_holder}>
              <p className={styles.status}>Graduated</p>
              <p className={styles.date}>Since May 2023</p>
            </div>
            <p className={styles.degree}>BAs in Computer science</p>
            <div className={styles.holder}>
              <p className={styles.left_txt}>Company</p>
              <p className={styles.right_txt}>Microsoft Inc.</p>
            </div>
            <div className={styles.holder}>
              <p className={styles.left_txt}>Job Title</p>
              <p className={styles.right_txt} >Software Engineer</p>
            </div>
            <div className={styles.holder}>
              <p className={styles.left_txt}>Salary range</p>
              <p className={styles.right_txt}>$400,000-$450,000</p>
            </div>

            <div className={styles.holder}>
              <p className={styles.left_txt}>Date</p>
              <p className={styles.right_txt}>07/12/2020</p>
            </div>
            <div className={styles.holder}>
              <p className={styles.left_txt}>Survey Rating</p>
              <Rating value={3.5} fractions={2} readOnly />
            </div>
          </div>
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