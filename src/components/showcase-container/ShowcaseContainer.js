import { projects } from "@components/data/how-we-work-data";

import stl from "./ShowcaseContainer.module.scss";

const ShowcaseContainer = () => {
  return (
    <div className={stl.projContainer}>
      <div className={stl.text}>
        <h1 className={stl.heading}>
          Our Projects: See Our Completed Web Development Work
        </h1>
        <p className={stl.desc}>
          At Codeline-Consulting, we take pride in delivering high-quality,
          customized web solutions that help our clients achieve their business
          goals. Take a look at some of our completed web development projects
          to see how we've helped other businesses like yours succeed. From
          e-commerce sites to portfolio websites, we've worked on a variety of
          projects, and we're confident that we can create a solution that meets
          your unique needs. Browse our portfolio and see the results for
          yourself!
        </p>
      </div>
      {projects.map((project) => project)}
    </div>
  );
};

export default ShowcaseContainer;
