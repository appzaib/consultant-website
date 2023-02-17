import Slider from "@components/slider";
import { blogCards } from "@components/data/careers-data";

import stl from "./BlogSection.module.scss";

const BlogSection = () => {
  return (
    <div className={stl.blogSection}>
      <h1 className={stl.heading}>Company News and Updates</h1>
      <Slider height="70vh" content={blogCards} />
    </div>
  );
};

export default BlogSection;
