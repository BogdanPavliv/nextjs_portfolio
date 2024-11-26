"use client"

import { projectsData } from '@/lib/data';
import React, { useState } from 'react';
import FilterComponent from "../components/ui/filter/filterComponent";
import { Category } from "../lib/data"
import { Project } from '@/components/project';

const Work = () => {

  const [filteredCategory, setFilteredCategory] = useState<Category>('All');

  const handleFilterChange = (category: Category) => {
    setFilteredCategory(category);
  };

  const filteredProjects = filteredCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === filteredCategory);

  return (
    <section id='work' className='bg-primary overflow-hidden'>
      <div className='container w-full py-[100px] lg:py-[200px]'>
        <h1 className='mt-8 px-2 py-4 text-[40px] font-bold uppercase leading-[3rem] md:px-0'>
          recent
          <br />
          <span className='under-line'>projects</span>
        </h1>
        <FilterComponent
         onFilterChange={handleFilterChange} 
         categories={['All', 'Landing-page', 'Online-store', 'Multi-page', 'Others']}
        />
        <div className='flex flex-col gap-[200px] py-4 xl:gap-[150px]'>
          {filteredProjects.map((project, i) => (
            <React.Fragment key={i}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
