import React from "react";
import { TextInput } from "@mantine/core";
import styles from "./style.module.css";

interface DemoProps {
  submitted: boolean; // Specify the type of the submitted prop
}

export function Demo({ submitted }: DemoProps) {
  const [fullName, setFullName] = React.useState("");
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
        label="Full Name"
        placeholder="Enter your full name"
        value={fullName}
        onChange={(event) => handleChange(event, setFullName)}
        style={{ marginBottom: "16px" }}
        error={validateName(fullName)}
      />
      <TextInput
        label="CWU Email"
        placeholder="Enter your CWU email"
        value={cwuEmail}
        onChange={(event) => handleChange(event, setCwuEmail)}
        style={{ marginBottom: "16px", borderRadius: "80px 80px 0 0" }}
        error={validateEmail(cwuEmail)}
      />
      <TextInput
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
