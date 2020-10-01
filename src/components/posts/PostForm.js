import React from 'react';

import { TextField } from '@material-ui/core';

const  PostForm = (props) => {
  console.log('props');
  return (
    <form noValidate>
    <TextField
        id="title-field"
        label="Title"
        placeholder="title"
        helperText="Full width!"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />

      <TextField
          id="body-field"
          label="Body"
          placeholder="body"
          helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          multiline={true}
          rows="10"
        />
  </form>
  )
}

export default PostForm;
