import React from 'react';


const AdditionalFeature = props => {
  const handleAdd = (e) =>{
    e.preventDefault();
    props.addFeature(props.feature.name)
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={handleAdd} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


export default AdditionalFeature;
