import React, { useState, useEffect } from "react";
import { TextInput, Select } from "@mantine/core";
import dayjs from 'dayjs';
import { DatePickerInput } from '@mantine/dates';

interface SurveyP1Props {
  onP1Complete: () => void;
}

export function Survey_p1({ onP1Complete }: SurveyP1Props) {
  const [currentStatus, setCurrentStatus] = useState<string>("");
  const [major, setMajor] = useState<string>("");
  const [hasInternship, setHasInternship] = useState<string>("");

  // INTERN QUESTIONS
  const [internshipQuestion1, setInternshipQuestion1] = useState<string>("");
  const [internshipQuestion2, setInternshipQuestion2] = useState<string>("");
  const [internshipQuestion3, setInternshipQuestion3] = useState<string>("");
  const [internshipQuestion4, setInternshipQuestion4] = useState<string>("");
  ////WORKING QUESTION
  const [workingQuestion1, setWorkingQuestion1] = useState<string>("");
  const [workingQuestion2, setWorkingQuestion2] = useState<string>("");
  const [workingQuestion3, setWorkingQuestion3] = useState<string>("");
  const [workingQuestion4, setWorkingQuestion4] = useState<string>("");
  const [workingQuestion5, setWorkingQuestion5] = useState<string>("");
  const [workingQuestion6, setWorkingQuestion6] = useState<string>("");
  //NEXT ACADEMIC LEVEL
  const [nextAcaQuestion1, setAcaQuestion1] = useState<string>("");
  const [nextAcaQuestion2, setAcaQuestion2] = useState<string>("");
  const [nextAcaQuestion3, setAcaQuestion3] = useState<string>("");
  const [nextAcaQuestion4, setAcaQuestion4] = useState<string>("");
  //APPLYING FOR JOB/TAKING A BREAK
  const [freeStatusQuestion1, setfreeStatusQuestion1] = useState<string>("");
  const [freeStatusQuestion2, setfreeStatusQuestion2] = useState<string>("");
  const [freeStatusQuestion3, setfreeStatusQuestion3] = useState<string>("");
  const [freeStatusQuestion4, setfreeStatusQuestion4] = useState<string>("");
  // GRADUATION DATE
  const [grad, setGrad] = useState<Date | null>(null);

  useEffect(() => {
    checkQuestionsAnswered();
  }, [
    currentStatus,
    major,
    hasInternship,
    internshipQuestion1,
    internshipQuestion2,
    internshipQuestion3,
    internshipQuestion4,
    workingQuestion1,
    workingQuestion2,
    workingQuestion3,
    workingQuestion4,
    workingQuestion5,
    workingQuestion6,
    nextAcaQuestion1,
    nextAcaQuestion2,
    nextAcaQuestion3,
    nextAcaQuestion4,
    freeStatusQuestion1,
    freeStatusQuestion2,
    freeStatusQuestion3,
    freeStatusQuestion4,
  ]);

  const handleInternshipQuestionChange = (value: string | null) => {
    setHasInternship(value || "");
  };
  const handleStatusChange = (value: string | null) => {
    setCurrentStatus(value || "");
  };

  const handleMajorChange = (value: string | null) => {
    setMajor(value || "");
  };
  //Handle Intern changing
  const handleInternChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInternshipQuestion1(value);
  };
  const handleInternChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInternshipQuestion2(value);
  };
  const handleInternChange3 = (value: string | null) => {
    setInternshipQuestion3(value || "");
  };
  const handleInternChange4 = (value: string | null) => {
    setInternshipQuestion4(value || "");
  };
  //Handle Working changing
  const handleWorkingChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setWorkingQuestion1(value);
  };
  const handleWorkingChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setWorkingQuestion2(value);
  };
  const handleWorkingChange3 = (value: string | null) => {
    setWorkingQuestion3(value || "");
  };
  const handleWorkingChange4 = (value: string | null) => {
    setWorkingQuestion4(value || "");
  };
  const handleWorkingChange5 = (value: string | null) => {
    setWorkingQuestion5(value || "");
  };
  const handleWorkingChange6 = (value: string | null) => {
    setWorkingQuestion6(value || "");
  };
  //Handle next academic changing
  const handleAcaChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setAcaQuestion1(value);
  };
  const handleAcaChange2 = (value: string | null) => {
    setAcaQuestion2(value || "");
  };
  const handleAcaChange3 = (value: string | null) => {
    setAcaQuestion3(value || "");
  };
  const handleAcaChange4 = (value: string | null) => {
    setAcaQuestion4(value || "");
  };
  //Handle Taking a break/ Applying for a job
  //Handle next academic changing
  const handleFreeStatusChange1 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setfreeStatusQuestion1(value);
  };
  const handleFreeStatusChange2 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setfreeStatusQuestion2(value);
  };
  const handleFreeStatusChange3 = (value: string | null) => {
    setfreeStatusQuestion3(value || "");
  };
  const handleFreeStatusChange4 = (value: string | null) => {
    setfreeStatusQuestion4(value || "");
  };
  //Check questions answered flow
  const checkQuestionsAnswered = () => {
    if (currentStatus !== "" && major !== "") {
      if (hasInternship !== "No") {
        switch (currentStatus) {
          case "Yes":
            if (
              !internshipQuestion1 ||
              !internshipQuestion2 ||
              !internshipQuestion3 ||
              !internshipQuestion4
            ) {
              return;
            }
            break;
          case "I am currently working":
            if (
              !workingQuestion1 ||
              !workingQuestion2 ||
              !workingQuestion3 ||
              !workingQuestion4 ||
              !workingQuestion5 ||
              !workingQuestion6
            ) {
              return;
            }
            break;
          case "I am pursuing a new/ or higher degree":
            if (
              !nextAcaQuestion1 ||
              !nextAcaQuestion2 ||
              !nextAcaQuestion3 ||
              !nextAcaQuestion4
            ) {
              return;
            }
            break;
          case "I am applying for a job OR I am taking a break":
            if (
              !freeStatusQuestion2 ||
              !freeStatusQuestion3 ||
              !freeStatusQuestion4
            ) {
              return;
            }
            break;
          default:
            break;
        }
      }
      // If all questions are answered, call onP1Complete()
      onP1Complete();
    }
  };

  return (
    <>
      <Select
        size="xl"
        style={{ marginBottom: "16px" }}
        label="What is your major?"
        placeholder="Example: Computer Science"
        data={[
          "Art",
          "Elementary Education",
          "Business",
          "Psychology",
          "Criminal Justice and Safety Studies",
          "Social Science Research Methods",
          "Marketing",
          "Computer and Information Systems Security",
          "Photography",
          "Web Page and Digital Design",
          "Accounting",
          "Finance",
        ]}
        allowDeselect={false}
        searchable
        onChange={handleMajorChange}
      />
      <DatePickerInput
        size="xl"
        label="When is your graduation?"
        placeholder="Pick date and year"
        value={grad}
        onChange={setGrad}
      />
      <Select
        size="xl"
        label="Are you currently studying at CWU?"
        placeholder="Please select one options"
        data={[
          "Yes",
          "I am currently working",
          "I am pursuing a new/ or higher degree",
          "I am applying for a job OR I am taking a break",
        ]}
        allowDeselect={false}
        onChange={handleStatusChange}
      />

      {/* Render additional questions if current status is "Yes" */}
      {currentStatus === "Yes" && (
        <>
          {currentStatus === "Yes" && (
            <>
              <Select
                size="xl"
                label="Do you have internship?"
                placeholder="Yes or no"
                data={["Yes", "No"]}
                onChange={handleInternshipQuestionChange}
              />
              {hasInternship === "Yes" && (
                <>
                  {/* Example internship questions */}
                  <TextInput
                    size="xl"
                    label="Please enter your company name"
                    placeholder="Example: Apple"
                    onChange={handleInternChange1}
                  />
                  <TextInput
                    size="xl"
                    label="Please enter your job title"
                    placeholder="Example: Software Engineering"
                    onChange={handleInternChange2}
                  />
                  <Select
                    size="xl"
                    label="Please select your salary range"
                    placeholder="Salary Range"
                    data={[
                      "Below $20,000",
                      "$20,000 - $40,000",
                      "$40,000 - $60,000",
                      "$60,000 - $80,000",
                      "$80,000 - $100,000",
                      "Above $100,000",
                    ]}
                    onChange={handleInternChange3}
                  />
                  <Select
                    size="xl"
                    label="How long did it take you for preparing?"
                    placeholder="Counted by months"
                    data={["1", "2", "3", "6", "9", "12 or more"]}
                    allowDeselect={false}
                    onChange={handleInternChange4}
                  />
                </>
              )}
            </>
          )}
        </>
      )}
      {/* Render additional questions if current status is "current working" */}
      {currentStatus === "I am currently working" && (
        <>
          {/* Example internship questions */}
          <TextInput
            size="xl"
            label="Please enter you company name"
            placeholder="Example: Apple"
            onChange={handleWorkingChange1}
          />
          <TextInput
            size="xl"
            label="Please enter your job title"
            placeholder="Example: Software Engineering "
            onChange={handleWorkingChange2}
          />
          <Select
            size="xl"
            label="Please select  your salary range "
            placeholder="Salary Range"
            data={[
              "Below $20,000",
              "$20,000 - $40,000",
              "$40,000 - $60,000",
              "$60,000 - $80,000",
              "$80,000 - $100,000",
              "Above $100,000",
            ]}
            onChange={handleWorkingChange3}
          />
          <Select
            size="xl"
            label="How long did it take you for the job?"
            placeholder="Counted by months"
            data={["1", "2", "3", "6", "9", "12 or more"]}
            allowDeselect={false}
            onChange={handleWorkingChange4}
          />
          <Select
            size="xl"
            label="Did you got any recommendation letter from CWWU or career center service for the job? "
            placeholder="Yes or No"
            data={["Yes", "No"]}
            onChange={handleWorkingChange5}
          />
          <Select
            size="xl"
            label=" How did you secure your current job?"
            placeholder="Example : CWU career center service"
            data={[
              "Through university career services",
              "Job fair",
              "Online job board",
              "Networking",
              "Direct applicatio",
            ]}
            onChange={handleWorkingChange6}
          />
        </>
      )}
      {/* Render additional questions if current status is "I am pursuing a new/ or higher degree" */}
      {currentStatus === "I am pursuing a new/ or higher degree" && (
        <>
          {/* Example internship questions */}
          <TextInput
            size="xl"
            label="Please enter a school name that you are pusuring a new degree"
            placeholder="Example: CWU"
            onChange={handleAcaChange1}
          />
          <Select
            size="xl"
            label="Please enter your major"
            placeholder="Example : CWU"
            data={[
              "Art",
              "Elementary Education",
              "Business",
              "Psychology",
              "Criminal Justice and Safety Studies",
              "Social Science Research Methods",
              "Marketing",
              "Computer and Information Systems Security",
              "Photography",
              "Web Page and Digital Design",
              "Accounting",
              "Finance",
            ]}
            onChange={handleAcaChange2}
          />

          <Select
            size="xl"
            label="Did the major at CWU help you get acceped? "
            placeholder="Yes or No"
            data={["Yes", "No"]}
            onChange={handleAcaChange3}
          />
          <Select
            size="xl"
            label="How long did it take you for getting accepted?"
            placeholder="Counted by months"
            data={["1", "2", "3", "6", "9", "12 or more"]}
            allowDeselect={false}
            onChange={handleAcaChange4}
          />
        </>
      )}
      {/* Render additional questions if current status is "I am applying for a job OR I am taking a break" */}
      {currentStatus === "I am applying for a job OR I am taking a break" && (
        <>
          {/* Example internship questions */}

          <TextInput
            size="xl"
            label="Please enter your job title you aiming for"
            placeholder="Example: Software Engineering "
            onChange={handleFreeStatusChange2}
          />

          <Select
            size="xl"
            label="Please select your expected salary Range "
            placeholder="Salary Range"
            data={[
              "Below $20,000",
              "$20,000 - $40,000",
              "$40,000 - $60,000",
              "$60,000 - $80,000",
              "$80,000 - $100,000",
              "Above $100,000",
            ]}
            onChange={handleFreeStatusChange3}
          />
          <Select
            size="xl"
            label="How long do you expect for getting a new job?"
            placeholder="Counted by months"
            data={["1", "2", "3", "6", "9", "12 or more"]}
            allowDeselect={false}
            onChange={handleFreeStatusChange4}
          />
        </>
      )}
    </>
  );
}
