import React from 'react'

const Spacer = ({ height = '50px' }) => {
  return (
    <div style={{
      width: '100%',
      height: height,
      backgroundColor: '#ece9e9',
    }}></div>
  )
}

export default Spacer
