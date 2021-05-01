import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function TagSearch(props) {
  useEffect(() => {
    props.setValue(props.value);
  }, [props, props.value]);

  const handleKeyDown = (event) => {
    switch (event.key) {
      case ',':
      case ' ': {
        event.preventDefault();
        event.stopPropagation();
        if (event.target.value.length > 0) {
          props.setValue([...props.value, event.target.value]);
        }
        break;
      }
      default:
    }
  };

  return (
    <div style={{ width: '100%' }}>
      <Autocomplete
        multiple
        freeSolo
        options={tags}
        getOptionLabel={(option) => option}
        value={props.value}
        onChange={(event, newValue) => props.setValue(newValue)}
        filterSelectedOptions
        renderInput={(params) => {
          params.inputProps.onKeyDown = handleKeyDown;
          return (
            <TextField
              {...params}
              variant="outlined"
              label="Tags"
              placeholder="Enter tags"
              margin="normal"
              fullWidth
            />
          );
        }}
      />
    </div>
  );
}

const tags = [
  'JavaScript',
  'CSS',
  'HTML',
  'Python',
  'Django',
  'C',
  'C++',
  'C#',
  'Assembler',
  'Bash',
];
