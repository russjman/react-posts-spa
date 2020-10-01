import React from 'react';

import { TextField } from '@material-ui/core';

const  PostForm = (props) => {
  console.log('props', props);
  const { userId, id, title, body } = props.post;
  return (
    <form noValidate>
      <TextField
          id="title-field"
          label="Title"
          placeholder="title"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={title}
        />

      <TextField
          id="body-field"
          label="Body"
          placeholder="body"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          multiline={true}
          rows="10"
          value={body}
        />
      </form>
  )
}

export default PostForm;
