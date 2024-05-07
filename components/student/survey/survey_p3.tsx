import React, { useState, useEffect } from "react";
import { Radio, Group, Stack } from "@mantine/core";

interface SurveyP3Props {
  onP3Complete: () => void;
}
export function Survey_p3({ onP3Complete }: SurveyP3Props) {
  const [isClient, setIsClient] = useState(false);

  const [question1, setQuestion1] = useState<string>("");
  const [question2, setQuestion2] = useState<string>("");
  const [question3, setQuestion3] = useState<string>("");
  const [question4, setQuestion4] = useState<string>("");
  const [question5, setQuestion5] = useState<string>("");
  const [question6, setQuestion6] = useState<string>("");
  const [question7, setQuestion7] = useState<string>("");

  const handleQ1 = (value: string | null) => {
    setQuestion1(value || "");
  };
  const handleQ2 = (value: string | null) => {
    setQuestion2(value || "");
  };
  const handleQ3 = (value: string | null) => {
    setQuestion3(value || "");
  };
  const handleQ4 = (value: string | null) => {
    setQuestion4(value || "");
  };
  const handleQ5 = (value: string | null) => {
    setQuestion5(value || "");
  };
  const handleQ6 = (value: string | null) => {
    setQuestion6(value || "");
  };
  const handleQ7 = (value: string | null) => {
    setQuestion7(value || "");
  };
  useEffect(() => {
    checkQuestionsAnswered();
  }, [
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
  ]);

  const checkQuestionsAnswered = () => {
    if (
      question1 !== "" &&
      question2 !== "" &&
      question3 !== "" &&
      question4 !== "" &&
      question5 !== ""
    ) {
      // If all questions are answered, call onP1Complete()
      onP3Complete();
    }
  };
  return (
    <>
      <Stack>
        <Group>
          <Radio.Group
            size="xl"
            name="Satisfaction"
            label="1. Career planning and decisions"
            withAsterisk
            onChange={handleQ1}
          >
            <Group mt="xs">
              <Radio value="1" label="Bad" />
              <Radio value="2" label="Not So Good" />
              <Radio value="3" label="OK!" />
              <Radio value="4" label="Good!!" />
              <Radio value="5" label="Excellent!!!" />
            </Group>
          </Radio.Group>
        </Group>

        <Group>
          <Radio.Group
            size="xl"
            name="Satisfaction2"
            label="2. Occupations and the job market."
            withAsterisk
            onChange={handleQ2}
          >
            <Group mt="xs">
              <Radio value="1" label="Bad" />
              <Radio value="2" label="Not So Good" />
              <Radio value="3" label="OK!" />
              <Radio value="4" label="Good!!" />
              <Radio value="5" label="Excellent!!!" />
            </Group>
          </Radio.Group>
        </Group>
        <Group>
          <Radio.Group
            size="xl"
            name="Satisfaction3"
            label="3. Listings of full time job/internship oppotunities/ Job Network"
            withAsterisk
            onChange={handleQ3}
          >
            <Group mt="xs">
              <Radio value="1" label="Bad" />
              <Radio value="2" label="Not So Good" />
              <Radio value="3" label="OK!" />
              <Radio value="4" label="Good!!" />
              <Radio value="5" label="Excellent!!!" />
            </Group>
          </Radio.Group>
        </Group>
        <Group>
          <Radio.Group
            size="xl"
            name="Satisfaction4"
            label="4. Building interview/communication skills"
            withAsterisk
            onChange={handleQ4}
          >
            <Group mt="xs">
              <Radio value="1" label="Bad" />
              <Radio value="2" label="Not So Good" />
              <Radio value="3" label="OK!" />
              <Radio value="4" label="Good!!" />
              <Radio value="5" label="Excellent!!!" />
            </Group>
          </Radio.Group>
        </Group>
        <Group>
          <Radio.Group
            size="xl"
            name="Satisfaction5"
            label="5. Building writing resume/CV skills"
            withAsterisk
            onChange={handleQ5}
          >
            <Group mt="xs">
              <Radio value="1" label="Bad" />
              <Radio value="2" label="Not So Good" />
              <Radio value="3" label="OK!" />
              <Radio value="4" label="Good!!" />
              <Radio value="5" label="Excellent!!!" />
            </Group>
          </Radio.Group>
        </Group>
        <Group>
          <Radio.Group
            size="xl"
            name="Satisfaction6"
            label="6. Career information accessible through the career services website"
            withAsterisk
            onChange={handleQ7}
          >
            <Group mt="xs">
              <Radio value="1" label="Bad" />
              <Radio value="2" label="Not So Good" />
              <Radio value="3" label="OK!" />
              <Radio value="4" label="Good!!" />
              <Radio value="5" label="Excellent!!!" />
            </Group>
          </Radio.Group>
        </Group>
        <Group>
          <Radio.Group
            size="xl"
            name="Satisfaction7"
            label="7. Staff who help you find career infomation."
            withAsterisk
            onChange={handleQ7}
          >
            <Group mt="xs">
              <Radio value="1" label="Bad" />
              <Radio value="2" label="Not So Good" />
              <Radio value="3" label="OK!" />
              <Radio value="4" label="Good!!" />
              <Radio value="5" label="Excellent!!!" />
            </Group>
          </Radio.Group>
        </Group>
      </Stack>
    </>
  );
}
