import React from 'react'

export const Progress = () => {
  return (
    <div className='prog-con'>
      <div className="progress-circle over50 p100">
            
            <div className="left-half-clipper">
                <div className="first50-bar"></div>
                <div className="value-bar"></div>
            </div>
        </div>
        <div className="progress flex">
        <div className="text flex">
            <span className="percent">64%</span>
            <span className="status">Completed</span>
        </div>
      </div>
    </div>
  )
}

