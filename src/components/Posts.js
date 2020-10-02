import React from 'react';

import { Button, Container, Grid, Paper, TextField, Dialog, DialogContent, DialogContentText, DialogActions, DialogTitle } from '@material-ui/core';
import PostsTable from './posts/PostsTable';
import PostForm from './posts/PostForm';

import { connect } from 'react-redux';
import { getPosts, editPostAction } from '../actions/posts'

// TODO: Unit tests
// TODO: Get posts on load
// TODO: Edit post(save to store)
// TODO: Add post(save to store)
class Posts extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dialogOpen: false,
      selectedPost: {},
      filteredPosts: []
    };

    this.handleCloseDialog = this.handleCloseDialog.bind(this);
    this.handleRowClick = this.handleRowClick.bind(this);
    this.handleSearchPost = this.handleSearchPost.bind(this);
    this.handleSavePost = this.handleSavePost.bind(this);
  }

  componentDidMount() {
    this.props.getPosts()
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
    const { id } = this.state.selectedPost;

    this.props.editPostAction(this.state.selectedPost.id, this.state.selectedPost)
    this.setState({dialogOpen:false, selectedPost: {}});
    this.props.getPosts();

  }

  handleSearchPost(e) {
    const { posts } = this.props;
    const { value } = e.target;
    if(value) {
      this.setState({filteredPosts: posts.items.filter(p =>  p.title.includes(value))});
    } else {
      this.setState({filteredPosts: []});
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
          <Grid item xs={1}><Button color="primary" variant="contained" onClick={() => this.handleOpenDialog() } fullWidth>Add</Button></Grid>
          <Grid item xs={12} >
            <Paper elevation={3}>
              <PostsTable posts={filteredPosts.length ? filteredPosts : posts.items} onRowClick={this.handleRowClick} />
            </Paper>
          </Grid>
        </Grid>

        <Dialog open={dialogOpen} onClose={this.handleCloseDialog} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Edit Post {selectedPost.id}</DialogTitle>
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

const mapDispatchToProps = {
  getPosts,
  editPostAction
};

export default connect(null,mapDispatchToProps)(Posts);
