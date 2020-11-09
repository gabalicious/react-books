// import React, { useState, useEffect } from 'react';
import React from 'react'
import { Button } from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';

export default function InfoLink(props) {
  return (
    props.infoLink ? (
      <Button variant="contained" color="primary" target="_blank" href={props.infoLink} startIcon={<LinkIcon />}> Info Link</Button>) : (<div>false</div>));
}
