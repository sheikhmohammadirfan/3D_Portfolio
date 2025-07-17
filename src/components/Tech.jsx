import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  // Split technologies into two groups: first 6 and next 4
  const firstRow = technologies.slice(0, 6);
  const secondRow = technologies.slice(6, 10);

  return (
    <div className='flex flex-col items-center gap-10'>
      {/* First row - 6 balls */}
      <div className='flex flex-wrap justify-center gap-10'>
        {firstRow.map((tech) => (
          <div className='w-28 h-28' key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>

      {/* Second row - 4 balls */}
      <div className='flex flex-wrap justify-center gap-10'>
        {secondRow.map((tech) => (
          <div className='w-28 h-28' key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
