import React from 'react';

const Books =(props) =>
{
    return (
        <>
        
    <div className="container">
    <div className="card">
      <div className="image">
        <img src={props.imgsrc} alt="image1" />
      </div>
      <div className="content">
        <h2>{props.heading}</h2>
        <p>{props.para}</p>
        <button>check Now</button>
      </div>
    </div>
    
  </div>
  </>
  );
}

export default Books;