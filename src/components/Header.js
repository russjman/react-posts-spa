import React from 'react';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, Typography } from '@material-ui/core';


function Header(props) {
  const posts = useSelector(state => state.posts)

  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h4">
          Blog Posts SPA
        </Typography>
        <Typography variant="h6">
          {posts.items.length} Posts
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
