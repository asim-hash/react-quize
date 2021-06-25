import React from 'react'

const ErrorMessage = ({ children }) => {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div
      style={{
        width: '100%',
        padding: 10,
        marginBottom: 10,
        borderRadius: 4,
        backgroundColor: 'orangered',
        textAlign: 'center',
        color: 'white',
        textTransform: 'capitalize'
      }}
    >
      {children}
    </div>
  )
}

export default ErrorMessage
