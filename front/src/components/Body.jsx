import React from 'react';
import Converter from './containers/Converter';

const styles = {
  appBody: {
    width: '1100px',
    padding: '1vh 0',
    minHeight: '82vh',
    margin: '0 auto'
  }
}

export default (params) =>  {
  return (
    <div className="appBody" style={ styles.appBody }>
      <Converter />
    </div>
  )
};
