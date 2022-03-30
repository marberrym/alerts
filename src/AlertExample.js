import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack"
import generateID from "./generateID";

const AlertExample = ({ dispatch }) => {
    const defaultValues = {
        type: 'add',
        timeLimit: 3,
        text: 'uh oh an error',
        link: 'www.google.com',
        alertType: 'error',
        id: generateID(),
        title: 'It is borked!  Oh no.',
    }
    const [formValues, setFormValues] = useState(defaultValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const genID = () => {
      setFormValues({ ...formValues, id: generateID() });
    }

    const handleSubmit = () => {
      const { type, text, link, timeLimit, alertType, id, title } = formValues;
      const defaultTime = 3000;
      dispatch({type, text, link, timeLimit, alertType, id, title});
      genID();

      setTimeout(() => {
        dispatch({type: 'remove', id});
      }, timeLimit * 1000 || defaultTime);
    }

    const alertTypes = ['error','warning','info','success']
    return <Stack gap={2}>
        <TextField
          id="title-input"
          name="title"
          label="Title"
          type="text"
          value={formValues.title}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          id="text-input"
          name="text"
          label="Text"
          type="text"
          value={formValues.text}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          id="link-input"
          name="link"
          label="Link"
          type="text"
          value={formValues.link}
          onChange={(e) => handleChange(e)}
        />
        <FormControl>
          <Select name="alertType" value={formValues.alertType} onChange={handleChange}>
            {alertTypes.map(type => <MenuItem key={type} value={type}>{type}</MenuItem>)}
          </Select>
        </FormControl>
        <FormControl>
          <Select name="type" value={formValues.type} onChange={handleChange}>
            <MenuItem key="add" value="add">add</MenuItem>
            <MenuItem key="remove" value="remove">remove</MenuItem>
          </Select>
        </FormControl>
        <div>
          <TextField
            id="id-input"
            name="id"
            label="ID"
            type="text"
            value={formValues.id}
            onChange={(e) => handleChange(e)}
          />
          <Button onClick={genID}>Generate an ID!</Button>
        </div>
        <TextField
          id="timeLimit-input"
          name="timeLimit"
          label="Time limit in seconds"
          type="number"
          value={formValues.timeLimit}
          onChange={(e) => handleChange(e)}
        />
        <Button onClick={handleSubmit}>submit alert</Button>
    </Stack>
}

export default AlertExample;