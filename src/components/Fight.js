import React from 'react';

const Fight = ({ disable, onFight }) => {
  return disable ? (
    <div>
      <button
        className='br3 f4 link dim ph3 pv2 mb2 dib white pa3 ba b--light-yellow bg-blue'
        onClick={onFight}
      >
        Fight
      </button>
    </div>
  ) : null
}

export default Fight;