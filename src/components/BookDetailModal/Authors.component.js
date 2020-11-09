// import React, { useState, useEffect } from 'react';
import React from 'react'
export default function Authors(props) {
  return (
    props.authors ? (
      <div>By {props.authors}</div>
    ) : (<div></div>)
  );
}
