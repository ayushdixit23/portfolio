import React from "react"
import ProjectIndividualComponent from "./ProjectIndividualComponent";

const ProjectForLanding = () => {
  return (
    <>
      <div className="max-h-[500px] overflow-y-scroll">
        {Array.from({ length: 4 }, (_, index) => (
          <ProjectIndividualComponent key={index} />
        ))}
      </div>
    </>

  );
};

export default ProjectForLanding;
