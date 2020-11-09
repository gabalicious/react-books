// import React, { useState, useEffect } from 'react';
import React from 'react'
export default function Description(props) {
  return (
    props.description ? (

      <div>
        <h3>Description</h3>
        <p dangerouslySetInnerHTML={{ __html: props.description }}
          id="simple-modal-description">
        </p>
      </div>
    ) : (<div></div>)
  );
}
