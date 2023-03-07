import React from 'react'

const Error = () => {
  return (
    <>
      <div className="error">
        <h3 className='page__heading'>Oh Snap! Error 404!</h3>
        <div className="error-desc">
          <p className='error__message'>The Page you are looking for is not available or does not exist anymore. Please contact us if there is anything specific you are looking for.</p>
          <a href="/">Go back to Home Page &rarr;</a>
        </div>
      </div>
    </>
  )
}

export default Error
