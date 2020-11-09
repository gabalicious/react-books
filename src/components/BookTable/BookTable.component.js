import React, { useState } from "react";
import BookDetailModal from "../BookDetailModal/BookDetailModal.component"
import * as style from "./BookTable.scss";
import { DataGrid } from '@material-ui/data-grid';
import { createRows } from '../../api'
import Button from '@material-ui/core/Button';

console.log(createRows)
const BookTable = (props) => {
  // const results = props.results || [];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const rows = createRows(props.results) || [];
  const [detailsUrl, setDetailsUrl] = useState("");
  const columns = [
    {
      field: 'title', headerName: 'Title', width: 375,
    },
    { field: 'author', headerName: 'Author', width: 180, },

    {
      field: 'pageCount',
      headerName: 'Page Count',
      type: 'number',
      width: 120,
    },
    { field: 'date', headerName: 'Date', type: 'date', width: 120, },
    {
      field: 'selfLink', headerName: ' ', width: 375, renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={() => { setDetailsUrl(params.value); setIsModalOpen(true); }}
        >
          More Details
        </Button>
      )
    },

  ];
  if (rows.length > 0) {
    return (
      <div style={{ height: '75vh', width: '100%' }}>
        <DataGrid pageSize={10}
          paginationMode="server"
          rowsPerPageOptions={[10]}
          page={props.currentPage}
          rowCount={props.totalItems}
          pagination
          onPageChange={(params) => (props.setPage(params.page))}
          rows={rows} columns={columns} />
        <BookDetailModal detailsUrl={detailsUrl} handleClose={() => { setIsModalOpen(false) }} open={isModalOpen} />
      </div>
    );
  }
  return <></>
};

export default BookTable;
