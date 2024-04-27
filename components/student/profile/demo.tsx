import React from "react";
import { TextInput, Alert } from "@mantine/core";

export function Demo() {
  const [fullName, setFullName] = React.useState("");
  const [cwuEmail, setCwuEmail] = React.useState("");
  const [cwuId, setCwuId] = React.useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<any> // Specify the type of the setState parameter as needed
  ) => {
    setState(event.currentTarget.value);
  };

  const validateName = (value: string) => {
    return value.length >= 2 ? null : "Name must be at least 2 characters long";
  };

  const validateCWUId = (value: string) => {
    return /^\d{9}$/.test(value) ? null : "CWU ID must be a 9-digit number";
  };

  const validateEmail = (value: string) => {
    return value.endsWith("@cwu.edu") ? null : "Email must end with @cwu.edu";
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
        style={{ marginBottom: "16px" }}
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
