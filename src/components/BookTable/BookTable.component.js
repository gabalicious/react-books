import React, { useState } from "react";
import BookDetailModal from "../BookDetailModal/BookDetailModal.component"
import { DataGrid } from '@material-ui/data-grid';
import { createRows } from '../../api'
import Button from '@material-ui/core/Button';

const BookTable = (props) => {
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
        <div style={{ display: 'flex', height: '100%' }}>
          <div style={{ flexGrow: 1 }}>
            <DataGrid page={props.currentPage} onPageChange={(params) => (props.setPage(params.page))} disableSelectionOnClick={true} pageSize={10}
              pagination
              rows={rows} columns={columns} />
          </div>
        </div>

        <BookDetailModal detailsUrl={detailsUrl} handleClose={() => { setIsModalOpen(false) }} open={isModalOpen} />
      </div>
    );
  }
  return <></>
};

export default BookTable;
