import React from 'react';

import { TextField, Button } from '@material-ui/core';

class  PostForm  extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      ...props.post
    };
  }

  handleChange(e) {
    // console.log('handleChange',e.target.value,this.state);
    let { state } = this;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  handleSave(e) {
    e.target.post = this.state;
    this.props.saveCallback(e);
  }

  handleCancel(e) {
    this.props.cancelCallback(e);
  }
  render() {
    // console.log('render props', this.props);
    const { title, body } = this.state;

    return (
      <form noValidate>
        <Button onClick={(e) => this.handleSave(e)} color="primary" variant="outlined">Save</Button>
        &nbsp;
        <Button onClick={(e) => this.handleCancel(e)} color="default" variant="outlined">Cancel</Button>
        <TextField
            id="title-field"
            label="Title"
            name="title"
            placeholder="title"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            value={title}
            onChange={(e) => this.handleChange(e)}
          />

        <TextField
            id="body-field"
            label="Body"
            name="body"
            placeholder="body"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            multiline={true}
            rows="5"
            value={body}
            onChange={(e) => this.handleChange(e)}
          />
        </form>
    )
  }
}

export default PostForm;
