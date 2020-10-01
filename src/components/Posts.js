import React from 'react';

import { Button, Container, Grid, Paper, TextField, Dialog, DialogContent, DialogContentText, DialogActions, DialogTitle } from '@material-ui/core';
import PostsTable from './posts/PostsTable';
import PostForm from './posts/PostForm';

import PostsApi  from '../api/postsApi';

class Posts extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      dialogOpen: false
    }

    this.handleCloseDialog = this.handleCloseDialog.bind(this);
    this.handleRowClick = this.handleRowClick.bind(this);

  }

  componentDidMount() {
    let { state } = this;
    this.postsApi = new PostsApi();
    this.postsApi.getPosts().then((r) => {
      console.log('got posts', r);
      //state.posts = r;
      const posts = [
        {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          "userId": 1,
          "id": 2,
          "title": "qui est esse",
          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
          "userId": 1,
          "id": 3,
          "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
          "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
          "userId": 1,
          "id": 4,
          "title": "eum et est occaecati",
          "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        },
        {
          "userId": 1,
          "id": 5,
          "title": "nesciunt quas odio",
          "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        },
        {
          "userId": 1,
          "id": 6,
          "title": "nesciunt quas odio",
          "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        },
      ];
      this.setState({posts:posts});
    })
  }

  handleOpenDialog() {
    console.log('handleCloseDialog');
    this.setState({dialogOpen:true});
  }

  handleRowClick(e) {
    console.log('handleRowClick', e);
    this.setState({dialogOpen:true});
  }

  handleCloseDialog() {
    console.log('handleCloseDialog');
    this.setState({dialogOpen:false});
  }

  render() {
    const { posts, dialogOpen } = this.state;
    return (
      <Container>
        <Grid justify="center" container>
          <Grid item xs={5}>
            <TextField id="posts-search-field" label="Search Posts" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} >
            <PostsTable posts={posts} onRowClick={this.handleRowClick} />
          </Grid>
        </Grid>


        <Dialog open={dialogOpen} onClose={this.handleCloseDialog} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Edit Post</DialogTitle>
          <DialogContent>
            <PostForm />

          </DialogContent>
            <DialogActions>
              <Button onClick={this.handleCloseDialog} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleCloseDialog} color="primary">
                Save
              </Button>
            </DialogActions>
          </Dialog>
      </Container>
    )
  }
}

export default Posts;
