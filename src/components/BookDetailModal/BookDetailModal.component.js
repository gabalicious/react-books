import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core';
import { fetchDetails } from "../../api"
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function BookDetailModal(props) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [lastUrl, setLastUrl] = useState(null)
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(null);
  useEffect(() => {

    if (props.detailsUrl && props.detailsUrl !== lastUrl) {
      setLastUrl(props.detailsUrl);
      setLoading(true);
      fetchDetails(props.detailsUrl).then((details) => {
        setDetails(details)
        setLoading(false);

      })
    }
  })
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Details</h2>
      {
        !loading ? (
          details && (<p dangerouslySetInnerHTML={{ __html: details.description }} id="simple-modal-description">

          </p>)) : (<div>loading...</div>)
      }
      <button onClick={props.handleClose}>Close Modal</button>
    </div>
  );

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
