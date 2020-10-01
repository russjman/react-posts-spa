import React from 'react';

import { Button, Container, Grid, Paper, TextField, Dialog, DialogContent, DialogContentText, DialogActions, DialogTitle } from '@material-ui/core';
import PostsTable from './posts/PostsTable';
import PostForm from './posts/PostForm';

import { useSelector, useDispatch, connect } from 'react-redux';
import { editPostAction } from '../actions/posts'

// TODO: Unit tests
// TODO: Get posts on load
// TODO: Filter/search posts by title
// TODO: Edit post(save to store)
// TODO: Add post(save to store)
// TODO: Add post button and modal ui
class Posts extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dialogOpen: false,
      selectedPost: {},
    }

    this.handleCloseDialog = this.handleCloseDialog.bind(this);
    this.handleRowClick = this.handleRowClick.bind(this);
    this.handleSearchPost = this.handleSearchPost.bind(this);
    this.handleSavePost = this.handleSavePost.bind(this);
  }

  componentDidMount() {
  }

  handleOpenDialog() {
    console.log('handleCloseDialog');
    this.setState({dialogOpen:true});
  }

  handleRowClick(e) {
    console.log('handleRowClick', e);
    this.setState({dialogOpen:true, selectedPost: e.data});
  }

  handleCloseDialog() {
    console.log('handleCloseDialog');
    this.setState({dialogOpen:false, selectedPost: {}});
  }

  handleSavePost(e) {
    console.log('handleSavePost', this.state.selectedPost);
    // const dispatch = useDispatch();
    // dispatch(editPostAction());
    // this.setState({dialogOpen:false});
  }

  handleSearchPost(e) {
    console.log('handleSearchPost', e.target.value);
    const { posts } = this.props;
    const { value } = e.target;
    if(value) {
      this.setState({filteredPosts: posts.items.filter(p => p.title.contains(value) ) });
    }
  }

  render() {
    const { dialogOpen, selectedPost, filteredPosts} = this.state;
    const { posts } = this.props;
    return (
      <Container>
        <Grid justify="center" spacing={2} container>
          <Grid item xs={5}>
            <TextField id="posts-search-field" label="Search Posts" onChange={(e) => this.handleSearchPost(e) } variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={1}><Button color="primary" variant="contained" fullWidth>Search</Button></Grid>
          <Grid item xs={1}><Button color="primary" variant="contained" onClick={() => this.handleOpenDialog() } fullWidth>Add</Button></Grid>
          <Grid item xs={12} >
            <Paper elevation={3}>
              <PostsTable posts={posts.items} onRowClick={this.handleRowClick} />
            </Paper>
          </Grid>
        </Grid>

        <Dialog open={dialogOpen} onClose={this.handleCloseDialog} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Edit Post</DialogTitle>
          <DialogContent>
            <PostForm post={selectedPost} />

          </DialogContent>
            <DialogActions>
              <Button onClick={this.handleCloseDialog} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleSavePost} color="primary">
                Save
              </Button>
            </DialogActions>
          </Dialog>
      </Container>
    )
  }
}

export default Posts;
