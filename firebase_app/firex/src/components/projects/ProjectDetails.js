import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">
            Project Title - ({id})
          </span>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste qui exercitationem accusamus sapiente quod error molestias aliquam. Iure, repellat ducimus eius, totam accusamus odit tenetur id quis asperiores architecto laborum?</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by Siddhant Shukla</div>
          <div>25th Oct, 12 PM</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails;
