"use client"; 

import React, { forwardRef, useState, ReactNode } from "react";
import "./Skills.css";


import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiVisualstudio,
  DiNpm,
  DiMongodb,
  DiGithub,
  DiDatabase,
 
} from "react-icons/di";


interface TooltipProps {
  content: string;
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <div className="absolute z-10 px-3 py-2 text-xl text-[#CDCBD6] bg-gray-800 rounded-lg shadow-md">
          {content}
          <div className="tooltip-arrow"></div>
        </div>
      )}
    </div>
  );
};


interface SkillsProps {
  ref?: React.Ref<HTMLDivElement>; 
}

const Skills = forwardRef<HTMLDivElement, SkillsProps>((props, ref) => {
  return (
    <div>
      <h1   className="skills" ref={ref}>
        MY <span>SKILLS</span>
      </h1>
      <div className="flex justify-center flex-wrap md:text-lg text-lg space-x-3 gap=15px">
        <Tooltip content="C++">
          <CgCPlusPlus className="tech-icons" />
        </Tooltip>
        <Tooltip content="Python">
          <DiPython className="tech-icons" />
        </Tooltip>
        <Tooltip content="JavaScript">
          <DiJavascript1 className="tech-icons" />
        </Tooltip>
        <Tooltip content="React">
          <DiReact className="tech-icons" />
        </Tooltip>
        <Tooltip content="Node.js">
          <DiNodejs className="tech-icons" />
        </Tooltip>
        <Tooltip content="MongoDB">
          <DiMongodb className="tech-icons" />
        </Tooltip>
        <Tooltip content="database"> <DiDatabase className="tech-icons"  /></Tooltip>
      </div>
      <h1 className="toolss">
        <span  >Tools</span> I Use
      </h1>
      <div className="flex justify-center flex-wrap md:text-lg text-lg space-x-3">
        <Tooltip content="Visual Studio">
          <DiVisualstudio className="tech-icons" />
        </Tooltip>
        <Tooltip content="npm">
          <DiNpm className="tech-icons" />
        </Tooltip>
        <Tooltip content="Git">
          <DiGit className="tech-icons" />
        </Tooltip>
        <Tooltip content="GitHub">
          <DiGithub className="tech-icons" />
        </Tooltip>
      </div>
    </div>
  );
});

Skills.displayName = 'Skills';

export default Skills;
