import React from 'react'

export default function Footer(props) {
  return (
    <div className="fixed-bottom mt-5 my-2">
      <div className="row">
        <div className="col-12 text-center">
          <div className={`text-${props.mode==='light'?'dark':'light'}`}>&copy; 2024 Your Company. All rights reserved.</div>
        </div>
      </div>
    </div>
    
  )
}
