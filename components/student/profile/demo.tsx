import React from "react";
import { TextInput } from "@mantine/core";
import styles from "./style.module.css";
import '@mantine/core/styles/Input.css';

interface DemoProps {
  submitted: boolean; // Specify the type of the submitted prop
}

export function Demo({ submitted }: DemoProps) {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [cwuEmail, setCwuEmail] = React.useState("");
  const [cwuId, setCwuId] = React.useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<any>
  ) => {
    setState(event.currentTarget.value);
  };

  const validateName = (value: string) => {
    if (submitted) {
      return value.length >= 2
        ? null
        : "Name must be at least 2 characters long";
    }
    return null;
  };

  const validateCWUId = (value: string) => {
    if (submitted) {
      return /^\d{9}$/.test(value) ? null : "CWU ID must be a 9-digit number";
    }
    return null;
  };

  const validateEmail = (value: string) => {
    if (submitted) {
      return value.endsWith("@cwu.edu") ? null : "Email must end with @cwu.edu";
    }
    return null;
  };

  return (
    <>
      <TextInput
        size="xl"
        label="First Name"
        placeholder="Enter your first name"
        value={firstName}
        onChange={(event) => handleChange(event, setFirstName)}
        style={{ marginBottom: "16px" }}
        error={validateName(firstName)}
      />
      <TextInput
        size="xl"
        label="Last Name"
        placeholder="Enter your last name"
        value={lastName}
        onChange={(event) => handleChange(event, setLastName)}
        style={{ marginBottom: "16px" }}
        error={validateName(lastName)}
      />
      <TextInput
        size="xl"
        label="CWU Email"
        placeholder="Enter your CWU email"
        value={cwuEmail}
        onChange={(event) => handleChange(event, setCwuEmail)}
        style={{ marginBottom: "16px" }}
        error={validateEmail(cwuEmail)}
      />
      <TextInput
        size="xl"
        label="CWU ID"
        placeholder="Enter your CWU ID"
        value={cwuId}
        onChange={(event) => handleChange(event, setCwuId)}
        style={{ marginBottom: "16px" }}
        error={validateCWUId(cwuId)}
      />
    </>
  );
}
