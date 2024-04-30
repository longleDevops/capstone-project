import React, { useState, useEffect } from "react";
import { Radio, Group, Stack } from "@mantine/core";

interface SurveyP2Props {
  onP2Complete: () => void;
}
export function Survey_p2({ onP2Complete }: SurveyP2Props) {
  const [isClient, setIsClient] = useState(false);

  const [question1, setQuestion1] = useState<string>("");
  const [question2, setQuestion2] = useState<string>("");
  const [question3, setQuestion3] = useState<string>("");
  const [question4, setQuestion4] = useState<string>("");
  const [question5, setQuestion5] = useState<string>("");

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
  useEffect(() => {
    checkQuestionsAnswered();
  }, [question1, question2, question3, question4, question5]);

  const checkQuestionsAnswered = () => {
    if (
      question1 !== "" &&
      question2 !== "" &&
      question3 !== "" &&
      question4 !== "" &&
      question5 !== ""
    ) {
      // If all questions are answered, call onP1Complete()
      onP2Complete();
    }
  };
  // Function to handle completion status
  return (
    <>
      <p style={{ fontSize: "1.5em", fontWeight: "bold" }}>
        How much did you learn through your use of the career information
        provided by the career services office?
      </p>
      <Stack>
        <Group>
          <Radio.Group
            name="learningExperience1"
            label="1. I learned how to explore, make career decisions, and plan my
            career goals."
            withAsterisk
            onChange={handleQ1}
          >
            <Group mt="m">
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
            name="learningExperience2"
            label="2. I learned about employment and the job search."
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
            name="learningExperience3"
            label="3. I learned about current occupations and the job market"
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
            name="learningExperience4"
            label=" 4. I learned about writing resume and job preparation questions."
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
            name="learningExperience5"
            label="5. I learned about employment and the job search"
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
      </Stack>
    </>
  );
}
