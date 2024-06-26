import React, { Component } from 'react'

export class Newsitem extends Component {

  render() {
    // let (title,description)=this.props;
    let { title, description, imgurl, newsurl, author, date ,source} = this.props
    return (

      <div>

        <div className="card my-2" >
          <img src={imgurl} />
        
          
          <div className="card-body">
            <h5 className="card-title">{title}... 
              <span className="position-absolute top-0 start-10 translate-middle badge rounded-pill bg-danger" style={{zIndex:'2',left:'85%'} }>
            {source}
              <span className="visually-hidden">unread messages</span>
            </span></h5>
            <p className="card-text">{description}...</p>
            <p className="card-text align-left">
              <small className="text-muted"><strong>{author}   </strong>      [{new Date(date).toGMTString()}]</small>

            </p>
            <a href={newsurl} target='_blanck' className="btn btn-primary btn-sm">Read More</a>
          </div>
        </div>

      </div>
    )
  }
}

export default Newsitem
