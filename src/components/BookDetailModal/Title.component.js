// import React, { useState, useEffect } from 'react';
import React from 'react'
export default function Title(props) {
  return (
    props.title ? (
      <h4>{props.title}</h4>
    ) : (<div></div>)
  );
}
