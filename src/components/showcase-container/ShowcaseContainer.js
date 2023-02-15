import ProjectShowcase from "@components/project-showcase";

import stl from "./ShowcaseContainer.module.scss";

const ShowcaseContainer = () => {
  return (
    <div className={stl.projContainer}>
      <ProjectShowcase />
      <ProjectShowcase />
      <ProjectShowcase />
    </div>
  );
};

export default ShowcaseContainer;
