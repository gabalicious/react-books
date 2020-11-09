// import React, { useState, useEffect } from 'react';
import React from 'react'
export default function Thumbnail(props) {
  return (
    props.thumbnail ? (
      <><img src={props.thumbnail} alt="" /><br /></>
    ) : (<div></div>)
  );
}
