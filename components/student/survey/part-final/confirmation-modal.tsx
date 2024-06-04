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
import { useDomesticAnswers } from '@/hooks/use-domestic-answers';
import { useSurveyPartTwo } from '@/hooks/use-partTwo';
import { useCreateDomestic } from '@/app/(back-end)/features/domestic-student/api/use-create-cwu';
import { useCreateBackground } from '@/app/(back-end)/features/student-background/api/use-create-background';
import { useBackgroundAnswers } from '@/hooks/use-background-answers';
import { useCreateInternational } from '@/app/(back-end)/features/international-student/api/use-create-international';
import { useCreateWorking } from '@/app/(back-end)/features/working/api/use-create-working';
import { useInternationalAnswers } from '@/hooks/use-international-answers';
import { useWorkingAnswers } from '@/hooks/use-working-answers';
import { useSeekingDegreeAnswers } from '@/hooks/use-seeking-degree-answers';
import { useSearchingJobAnswers } from '@/hooks/use-searching-job-answers';
import { useCreateSearchingJob } from '@/app/(back-end)/features/searching-job/api/use-create-searching-job';
import { useCreateSeekingDegree } from '@/app/(back-end)/features/seeking-degree/api/use-create-seekingDegree';
import { useCreateAccount } from '@/app/(back-end)/features/account/api/use-create-account';
import { error } from 'console';
import { useQueryClient } from "@tanstack/react-query"


export const ConfirmationModal = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const queryClient = useQueryClient()

  const { q1Answer: q1SurveyPt2, q3Path1Answer, q2Path2Answer, q2Path3Answer, q2Path4Answer } = useSurveyPartTwo()
  const { q1Answer, q2Answer, q3Answer, q4Answer, q5Answer } = useSurveyPartThree()
  const { setCurrentPart } = useSurvey()

  // All saved answers
  const { backgroundAnswers } = useBackgroundAnswers()
  const { domesticAnswers } = useDomesticAnswers()
  const { internationalAnswers } = useInternationalAnswers()
  const { workingAnswers } = useWorkingAnswers()
  const { seekingAnswers } = useSeekingDegreeAnswers()
  const { searchingAnswers } = useSearchingJobAnswers()

  // POST method to backend
  const backgroundMutation = useCreateBackground()
  const domesticMutation = useCreateDomestic()
  const internationalMutation = useCreateInternational()
  const workingMutation = useCreateWorking()
  const seekingDegreeMutation = useCreateSeekingDegree()
  const searchingJobMutation = useCreateSearchingJob()
  const satisfactionMutation = useCreateSatisfaction()
  const accountMutation = useCreateAccount()
  // Is loading states
  const { isPending: isBackgroundLoading } = backgroundMutation
  const { isPending: isDomesticLoading } = domesticMutation
  const { isPending: isInternationalLoading } = internationalMutation
  const { isPending: isWorkingLoading } = workingMutation
  const { isPending: isSeekingDegreeLoading } = seekingDegreeMutation
  const { isPending: isSearchingJobLoading } = searchingJobMutation
  const { isPending: isSatisfactionLoading } = satisfactionMutation


  const handleSubmit = () => {
    const studentStatus =
      (q1SurveyPt2 === 0 && q3Path1Answer === 0) ? 'domestic-student'
        : (q1SurveyPt2 === 0 && q3Path1Answer === 1) ? 'international-student'
          : q1SurveyPt2 === 1 ? 'working-student'
            : q1SurveyPt2 === 2 ? 'seeking-student'
              : 'job-seeking-student';

    const avgRating = ((q1Answer + q2Answer + q3Answer + q4Answer + q5Answer) / 5).toFixed(1)
    // domestic ans
    if (q1SurveyPt2 === 0 && q3Path1Answer === 0) {
      backgroundMutation.mutate({
        ...backgroundAnswers,
        status: studentStatus,
        avgSalary: domesticAnswers.avgInternshipSalary,
        isEmployed: domesticAnswers.avgInternshipSalary > 0,
        avgRating
      }, {
        onSuccess: () => {
          domesticMutation.mutate(domesticAnswers, {
            onSuccess: () => {
              queryClient.invalidateQueries(),
                satisfactionMutation.mutate({
                  q1Answer,
                  q2Answer,
                  q3Answer,
                  q4Answer,
                  q5Answer,
                }, {
                  onSuccess: () => {
                    accountMutation.mutate({
                      firstName: backgroundAnswers.firstName,
                      lastName: backgroundAnswers.lastName,
                    }, {
                      onSuccess: () => {
                        close(),
                          toast.success("Successfully Submit")
                        setCurrentPart(6)
                      }

                    })
                  }
                })
            }

          });
        }
      });
    }

    // International
    if (q1SurveyPt2 === 0 && q3Path1Answer === 1) {
      backgroundMutation.mutate({
        ...backgroundAnswers,
        status: studentStatus,
        avgSalary: internationalAnswers.avgSalary,
        isEmployed: internationalAnswers.avgSalary > 0,
        avgRating
      });
      internationalMutation.mutate(internationalAnswers,
        {
          onSuccess: () => {
            satisfactionMutation.mutate({
              q1Answer,
              q2Answer,
              q3Answer,
              q4Answer,
              q5Answer,
            }, {
              onSuccess: () => {
                accountMutation.mutate({
                  firstName: backgroundAnswers.firstName,
                  lastName: backgroundAnswers.lastName,
                }, {
                  onSuccess: () => {
                    close(),
                      toast.success("Successfully Submit")
                    setCurrentPart(6)
                  }
                })
              }
            })
          }
        }
      );
    }

    // Working
    if (q1SurveyPt2 === 1 && q2Path2Answer === 0) {
      backgroundMutation.mutate({
        ...backgroundAnswers,
        status: studentStatus,
        avgSalary: workingAnswers.avgSalary,
        isEmployed: true,
        avgRating
      });
      workingMutation.mutate(workingAnswers,
        {
          onSuccess: () => {
            satisfactionMutation.mutate({
              q1Answer,
              q2Answer,
              q3Answer,
              q4Answer,
              q5Answer,
            }, {
              onSuccess: () => {
                accountMutation.mutate({
                  firstName: backgroundAnswers.firstName,
                  lastName: backgroundAnswers.lastName,
                }, {
                  onSuccess: () => {
                    close(),
                      toast.success("Successfully Submit")
                    setCurrentPart(6)

                  }

                })
              }
            })
          }
        }
      );
    }

    // seeking degree
    if (q1SurveyPt2 === 2 && q2Path3Answer === 0) {
      backgroundMutation.mutate({
        ...backgroundAnswers,
        status: studentStatus,
        avgSalary: 0,
        isEmployed: false,
        avgRating
      });
      seekingDegreeMutation.mutate(seekingAnswers,
        {
          onSuccess: () => {
            satisfactionMutation.mutate({
              q1Answer,
              q2Answer,
              q3Answer,
              q4Answer,
              q5Answer,
            }, {
              onSuccess: () => {
                accountMutation.mutate({
                  firstName: backgroundAnswers.firstName,
                  lastName: backgroundAnswers.lastName,
                }, {
                  onSuccess: () => {
                    close(),
                      toast.success("Successfully Submit")
                    setCurrentPart(6)

                  }

                })
              }
            })
          }

        }
      );
    }

    // Searching jobs
    if (q1SurveyPt2 === 3 && q2Path4Answer === 0) {
      backgroundMutation.mutate({
        ...backgroundAnswers,
        status: studentStatus,
        avgSalary: 0,
        isEmployed: false,
        avgRating
      });
      searchingJobMutation.mutate(searchingAnswers, {
        onSuccess: () => {
          satisfactionMutation.mutate({
            q1Answer,
            q2Answer,
            q3Answer,
            q4Answer,
            q5Answer,
          }, {
            onSuccess: () => {
              accountMutation.mutate({
                firstName: backgroundAnswers.firstName,
                lastName: backgroundAnswers.lastName,
              }, {
                onSuccess: () => {
                  close(),
                    toast.success("Successfully Submit")
                  setCurrentPart(6)

                }

              })
            }
          })
        }
      });
    }
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
  const isLoading = () => {
    return isBackgroundLoading || isDomesticLoading || isSatisfactionLoading
  }
  return (
    <>
      <Modal opened={opened} onClose={close} centered closeOnClickOutside={false} withCloseButton={false} radius={10} padding={20}>
        {/* Modal content */}
        <div className={styles.header}>Confirm to submit the CWU survey?</div>
        <div className={styles.btn_holder}>
          <button
            onClick={close}
            disabled={isLoading()}
            className={styles.cancel_btn}
          >
            Cancel
          </button>
          <Button
            radius={10}
            size='md'
            bg={'black'}
            styles={{ root: { fontSize: 16 } }}
            onClick={handleSubmit}
            disabled={isLoading()}
          >
            {isLoading() ? 'Submit...' : 'Submit'}
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