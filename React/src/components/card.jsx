import React from 'react'

const card = (props) => {

    
  return (
       <div className="container">
        
        <div className="card">
            <div className="card-header">
                <div className="logo-container">
                    <div class="logo airbnb-logo">
                           <img src={props.img} alt="" />
                    </div>
                </div>
                <button className="save-btn">
                    Save <span>🔖</span>
                </button>
            </div>
            
            <div className="company-name">
                {props.company}<span className="posted-time">{props.date}</span>
            </div>
            
            <h2 className="job-title">{props.post}</h2>
            
            <div className="tags">
                <span className="tag">{props.tag1}</span>
                <span className="tag">{props.tag2}</span>
            </div>
            
            <div className="divider"></div>
            
            <div className="card-footer">
                <div className="salary-info">
                    <div className="salary">${props.pay}/hr</div>
                    <div className="location">{props.loc}</div>
                </div>
                <button className="apply-btn">Apply now</button>
            </div>
        </div>
    </div>
  )
}

export default card