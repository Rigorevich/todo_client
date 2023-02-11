import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NativeSelect from "@mui/material/NativeSelect";
import FormControl from "@mui/material/FormControl";

const NewTodo = () => {
  return (
    <FormControl fullWidth>
      <Box
        style={{
          padding: 30,
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          New Todo
        </Typography>
        <TextField
          id="standard-multiline-flexible"
          label="Title"
          multiline
          maxRows={4}
          variant="standard"
        />
        <TextField
          id="standard-multiline-flexible"
          label="Description"
          multiline
          maxRows={4}
          variant="standard"
        />
        <NativeSelect
          defaultValue="Category"
          inputProps={{
            name: "Category",
            id: "uncontrolled-native",
          }}
          style={{
            marginTop: "15px",
          }}
        >
          {/*<option value={10}>Ten</option>*/}
          {/*<option value={20}>Twenty</option>*/}
          {/*<option value={30}>Thirty</option>*/}
        </NativeSelect>
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Button variant="contained" color="success">
            Save
          </Button>
          <Button variant="contained" color="error">
            Cancel
          </Button>
        </div>
      </Box>
    </FormControl>
  );
};

export default NewTodo;
