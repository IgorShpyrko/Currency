import React from 'react';

const styles = {
  footer: {
    minHeight: '8vh',
    backgroundColor: 'rgba(30, 150, 75, 0.6)'
  }
}

export default (params) =>  {
  return (
    <div className='footer' style={ styles.footer }>
      footer
    </div>
  )
};
