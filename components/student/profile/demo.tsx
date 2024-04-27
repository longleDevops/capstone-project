// demo.js
import React, { useState } from "react";
import { TextInput } from "@mantine/core";

export function Demo() {
  const [fullName, setFullName] = useState("");
  const [cwuEmail, setCwuEmail] = useState("");
  const [cwuId, setCwuId] = useState("");

  const handleChange = (newValue: string, setState: any) => {
    setState(newValue);
  };

  return (
    <>
      <>
        <TextInput
          label="Full Name"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(event) =>
            handleChange(event.currentTarget.value, setFullName)
          }
          style={{ marginBottom: "16px" }} // Example of inline style
          className="custom-text-input" // Example of using a class name for styling
        />
        <TextInput
          label="CWU Email"
          placeholder="Enter your CWU email"
          value={cwuEmail}
          onChange={(event) =>
            handleChange(event.currentTarget.value, setCwuEmail)
          }
          style={{ marginBottom: "16px" }} // Example of inline style
          className="custom-text-input" // Example of using a class name for styling
        />
        <TextInput
          label="CWU ID"
          placeholder="Enter your CWU ID"
          value={cwuId}
          onChange={(event) =>
            handleChange(event.currentTarget.value, setCwuId)
          }
          style={{ marginBottom: "16px" }} // Example of inline style
          className="custom-text-input" // Example of using a class name for styling
        />
        <style>{`
        .custom-text-input {
          border-color: #ccc;
          border-radius: 6px;
          padding: 10px;
          font-size: 16px;
          width: 100%;
        }
      `}</style>
      </>
    </>
  );
}
