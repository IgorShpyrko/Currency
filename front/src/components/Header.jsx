import React from 'react';
import Menu from './containers/Menu'

const styles = {
  header: {
    minHeight: '8vh',
    backgroundColor: 'rgba(30, 150, 75, 0.6)'
  }
}

export default (params) =>  {
  return (
    <div className='header' style={ styles.header }>
      <div className='logoWrapper'>
        Logo
      </div>
      <Menu />
    </div>
  )
};