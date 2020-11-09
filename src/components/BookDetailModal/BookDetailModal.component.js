import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Button } from '@material-ui/core';
import { fetchDetails } from "../../api"

import Description from './Description.component'
import Thumbnail from './Thumbnail.component'
import Title from './Title.component'
import Authors from './Authors.component'
import InfoLink from './InfoLink.component'

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    overflow: 'scroll',
    height: '50%'

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
          details && (
            <div>
              <Title title={details.title} />
              <Authors authors={details.authors} />
              <Thumbnail thumbnail={details.imageUrl} />
              <InfoLink infoLink={details.infoLink} />
              <Description description={details.description} />
            </div>
          )) : (<div>loading...</div>)
      }
      <Button variant="contained" color="secondary" onClick={props.handleClose}>Close Modal</Button>
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
