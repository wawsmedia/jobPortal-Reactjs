import React from 'react'
import { ClipLoader } from 'react-spinners'
const Spinner = ({loading, color}) => {

    const override = {
      margin:'100px auto',
      display:'block'
    }
  return (
    <ClipLoader
        color='#156789'
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  )
}

export default Spinner