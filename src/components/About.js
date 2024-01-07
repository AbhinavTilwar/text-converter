import React from 'react'

export default function About() {
  return (
    <div>
      <div className="accordion my-3" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                About TextUtils
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <p>The website provides different text functionalities like converting to upperCase and lowerCase.It also reads the provided text for exact pronounciation of each word.It also gives you the count of letters and words in the provided text.</p>
            </div>
            </div>
        </div>
        
            </div>
        </div>
     
  )
}
