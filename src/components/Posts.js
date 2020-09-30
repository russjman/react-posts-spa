import React from 'react';

import { Container, Grid, Paper, TextField } from '@material-ui/core';


class Posts extends React.Component {

  render() {
    return (
      <Container>
        <Grid justify="center" container>
          <Grid item xs={5}>
            <TextField id="posts-search-field" label="Search Posts" variant="outlined" fullWidth />
          </Grid>
        </Grid>

        <Paper>
          search results
        </Paper>
      </Container>
    )
  }
}

export default Posts;
