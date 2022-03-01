import React from "react";
import {  Box } from "@mui/system";
import { Typography } from "@mui/material";
import { data } from "../types";

type contactsProp = {
  data: data
}

const Contacts = ({ data }: contactsProp) => {
  return (
    <>
      <Typography>Contacts</Typography>
      {!data && (
        <Typography>You have not added any contact yet</Typography>
      )}
      <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: '1rem',
                margin: '1rem 0rem'
              }}>
      <Typography>First Name</Typography>
      <Typography>Second Name</Typography>
      <Typography>Phone Number</Typography>
      </Box>
      {data?.map((item: any, index: number) => {
        return (
          <Box key={index}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                background: '#ccc',
                padding: '1rem',
                borderRadius: '1rem',
                margin: '1rem 0rem',
                textAlign: 'center'
              }}
            >
              <span>{item.firstName}</span>
              <span style={{
                textAlign: 'center',
                width: '30%'
              }}>{item.lastName}</span>
              <span>{item.phoneNumber}</span>
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default Contacts;
