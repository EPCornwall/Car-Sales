import React from 'react';
import {connect} from 'react-redux';
import {addFeature, removeFeature} from './actions'
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';


const App = (props) => {

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} /*needs remove feature prop*//>
      </div>
      <div className="box">
        <AdditionalFeatures /*needs add feature */ addFeature={props.addFeature} additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

function mapStateToProps(state){
  return{
    additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures,
    car: state.car
  }
}

export default connect(mapStateToProps, { addFeature, removeFeature}) (App);
