import React from 'react';

import { Button, Container, Grid, Paper, TextField, Dialog, DialogContent, DialogContentText, DialogActions, DialogTitle } from '@material-ui/core';
import PostsTable from './posts/PostsTable';
import PostForm from './posts/PostForm';

import { connect } from 'react-redux';
import { getPosts, editPostAction } from '../actions/posts'

// TODO: More Unit tests
// TODO: Add post(save to store)
// TODO: update readme

class Posts extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dialogOpen: false,
      selectedPost: {
        id: '',
        userId: '',
        title: '',
        body: ''
      },
      filteredPosts: [],
      searchString: ''
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
    console.log('handleSavePost', e.target.post);
    const { post } = e.target;
    this.props.editPostAction(post.id, post)
    this.setState({dialogOpen:false, selectedPost: {}});
  }

  handleSearchPost(e) {
    console.log('handleSearchPost',e.target.value);
    const { posts } = this.props;
    const { value } = e.target;
      this.setState({searchString: value, filteredPosts: posts.items.filter(p =>  p.title.includes(value))});
  }

  render() {
    const { dialogOpen, selectedPost, filteredPosts, searchString} = this.state;
    const { posts } = this.props;

    return (
      <Container>
        <Grid justify="center" spacing={2} container>
          <Grid item xs={8}>
            <TextField id="posts-search-field" label="Search Posts" onChange={(e) => this.handleSearchPost(e) } variant="outlined" value={searchString} fullWidth />
          </Grid>
          <Grid item xs={2}><Button color="primary" variant="contained" onClick={() => this.handleOpenDialog() } fullWidth>Add</Button></Grid>
          <Grid item xs={2}><Button color="primary" variant="contained" onClick={() => this.setState({searchString: ''}) } fullWidth>Clear</Button></Grid>

          <Grid item xs={12} >
            <Paper elevation={3}>
              <PostsTable posts={searchString ? filteredPosts : posts.items} onRowClick={this.handleRowClick} />
            </Paper>
          </Grid>
        </Grid>

        <Dialog open={dialogOpen} onClose={this.handleCloseDialog} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">{selectedPost.id ? 'Edit' : 'Add'} Post {selectedPost.id}</DialogTitle>
          <DialogContent>
            <PostForm post={selectedPost} saveCallback={this.handleSavePost} />
          </DialogContent>
            <DialogActions>
              <Button onClick={this.handleCloseDialog} color="primary">
                Cancel
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
