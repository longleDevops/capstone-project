"use client"

import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';
import { useSurvey } from '@/hooks/use-survey';

export function StepperNavbar() {
  const [active, setActive] = useState(1);
  const { currentPart, setCurrentPart } = useSurvey()


  return (
    <>
      <Stepper active={currentPart === 0 ? 0 : [1, 2, 3, 4].includes(currentPart) ? 1 : currentPart === 5 ? 2 : 4} >
        <Stepper.Step label="Background" description="Check background">
        </Stepper.Step>
        <Stepper.Step label="Employment" description="Verify employment">
        </Stepper.Step>
        <Stepper.Step label="Planning" description="Rate your satisfaction">
        </Stepper.Step>
        <Stepper.Step label="Result" description="Get report">
        </Stepper.Step>

      </Stepper>
    </>
  );
}