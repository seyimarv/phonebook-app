import React, { useCallback, useState } from "react";
import { Box, TextField } from "@mui/material";
import { Button } from "@mui/material";
import styled from "styled-components";
import { data } from "../types";

interface formProps {
  data: data;
  setData:  (value: any) => void;
  setCreateNew: (value: boolean) => void;
}

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  padding: 3rem;
  width: 40%;
  margin: auto;
  background: white;
  .MuiTextField-root {
    margin: 0.5rem 0rem;
  }
`;

const Form = ({ data, setData, setCreateNew }: formProps) => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  const changeHandler = useCallback(
    (data) => {
      setInput({
        ...input,
        [data.name]: data.value,
      });
    },
    [input]
  );

  const submitHandler = (event: any) => {
    let newData: any;
    if(data) {
      newData = data
    } else {
      newData = []
    }
    event.preventDefault();
    let isErrorByFirstName = "";
    let isErrorByLastName = "";
    let isErrorByPhoneNumber = "";

    if (!input.firstName) isErrorByFirstName = "First name is required";
    if (!input.firstName) isErrorByLastName = "Last name is required";
    if (!input.firstName) isErrorByPhoneNumber = "Phone Number is required";

    let isError =
      isErrorByFirstName || isErrorByLastName || isErrorByPhoneNumber;
    if (isError) {
      setError({
        firstName: isErrorByFirstName,
        lastName: isErrorByLastName,
        phoneNumber: isErrorByPhoneNumber,
      });
    } else {
      setError({
        firstName: "",
        lastName: "",
        phoneNumber: "",
      });
      newData.push(input)
      setData(newData)
      console.log(data)
      setCreateNew(false)
      localStorage.setItem("data", JSON.stringify(newData));
    }
    setInput({
      firstName: "",
      lastName: "",
      phoneNumber: "",
    });
  };
  const handleChange = (event: any) => {
    changeHandler(event?.target);
  };
  return (
   
    <StyledBox component="form" onSubmit={submitHandler}>
      <TextField
        size="small"
        name="firstName"
        label="First Name"
        value={input.firstName}
        onChange={handleChange}
        helperText={error?.firstName}
        error={error.firstName ? true : false}
      />
      <TextField
        size="small"
        label="Last Name"
        name="lastName"
        value={input.lastName}
        onChange={handleChange}
        helperText={error?.lastName}
        error={error.lastName ? true : false}
      />
      <TextField
        size="small"
        label="Phone Number"
        name="phoneNumber"
        type="number"
        value={input.phoneNumber}
        onChange={handleChange}
        helperText={error?.phoneNumber}
        error={error.phoneNumber ? true : false}
      />
      <Box display="flex">
      <Button fullWidth style={{
        margin: '0rem 1rem 0rem 0rem'
      }} onClick={() => setCreateNew(false)} variant="outlined">
        Cancel{" "}
      </Button>
      <Button fullWidth type="submit" variant="contained">
        Save{" "}
      </Button>
      </Box>
      
    </StyledBox>
  );
};
export default Form;
