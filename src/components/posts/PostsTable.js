import React from 'react';

import { DataGrid } from '@material-ui/data-grid';

const  PostsTable = (props) => {
  console.log('PostsTable', props);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70, stortable: true },
    { field: 'title', headerName: 'Title', width: 200, stortable: true},
    { field: 'body', headerName: 'Body'}
  ];

  const { posts, onRowClick } = props;
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={posts} columns={columns} pageSize={5} onRowClick={(RowParams) => onRowClick(RowParams)} />
    </div>
  )
}

export default PostsTable;
