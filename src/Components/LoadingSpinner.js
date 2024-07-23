import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className='flex flex-row text-center justify-center gap-4 w-60'>
      <span className="loading loading-infinity loading-xs"></span>
<span className="loading loading-infinity loading-sm"></span>
<span className="loading loading-infinity loading-md"></span>
<span className="loading loading-infinity loading-lg"></span>
    </div>
  )
}

export default LoadingSpinner
