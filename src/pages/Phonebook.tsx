import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import Searchinput from "../components/searchinput";
import { Button } from "@mui/material";
import Contacts from "../components/Contacts";
import { data } from "../types";
const PhoneBook = () => {
  const [data, setData] = useState<data>(null);
  const [searchInput, setSearchInput] = useState("");
  const [createNew, setCreateNew] = useState(false)
  const fetchedData = localStorage.getItem("data");

  const onSearchChange = (event: any) => {
    setSearchInput(event.target.value);
    let filteredData;
    if (data) {
      filteredData = data?.filter((eachData: any) => {
        return (
          eachData?.firstName
            .toLowerCase()
            .includes(searchInput.toLowerCase()) ||
          eachData?.lastName.toLowerCase().includes(searchInput) ||
          eachData?.phoneNumber.includes(searchInput)
        );
      });
    }
    if (filteredData) {
        setData(filteredData);
      }
  };
  useEffect(() => {
    if (fetchedData && !searchInput) {
      setData(JSON.parse(fetchedData));
    }
  }, [fetchedData, createNew, searchInput]);
  return (
    <Box padding='1rem'>
      <Box  sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center', 
        margin: '2rem 0rem'
      }}>
       <Typography>
         Phonebook
       </Typography>
       <Searchinput onSearchChange={onSearchChange} />
       <Button onClick={() => setCreateNew(true)}>
         Add new
       </Button>
      </Box>
      {
        createNew &&  <Form data={data} setData={setData} setCreateNew={setCreateNew} />
      }
      {
        data ? <Contacts data={data}/> : null
      }
    </Box>
  );
};

export default PhoneBook;
