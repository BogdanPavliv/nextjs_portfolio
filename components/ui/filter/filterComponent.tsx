import React, { useState } from 'react';
import { Category } from "../../../lib/data"

interface FilterComponentProps {
    onFilterChange: (category: Category) => void;
    categories: Category[];
  }

const FilterComponent: React.FC<FilterComponentProps> = ({ onFilterChange, categories }) => {
    
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
    onFilterChange(category);
    setIsDropdownOpen(false);
  };

  return (
    <div className='flex flex-col py-[31px] px-0'>
        {/* Фільтрація як кнопки для великих екранів */}
        <div className="hidden justify-center gap-[42px] xl:flex">
            {categories.map((category) => (
               <button 
                key={category} 
                className={`font-normal text-2xl color border-none cursor-pointer  ${selectedCategory === category ? 'text-blue' : 'text-white'}`}
                onClick={() => handleCategoryChange(category)}
                >
                 {category}
               </button>
            ))}
        </div>
        {/* Випадаючий список для мобільних пристроїв */}
        <div className="max-w-[319px] relative xl:hidden">
            <button className='max-w-[319px] rounded-[3.125rem] border-[.0625rem] border-solid border-white bg-primary py-[.625rem] px-[1rem] text-[#9e9e9e] flex w-full items-center justify-between relative cursor-pointer' onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              {selectedCategory}
            </button>
            {isDropdownOpen && (
                <div className="w-full absolute grid grid-rows-1 overflow-hidden duration-300 border-[.0625rem] border-solid border-white bg-primary z-[2]">
                <nav className='max-w-[76rem] flex flex-wrap items-center justify-between gap-x-[2.625rem]'>
                {categories.map((category) => (
                    <button
                      key={category} 
                      className={`w-full p-[10px] text-left cursor-pointer ${selectedCategory === category ? 'text-blue' : 'text-white'}`}
                      onClick={() => handleCategoryChange(category)}
                    >
                       {category}
                    </button>
                ))}
                </nav>
            </div>
            )
                
            }
        </div>
    </div>
  )
}

export default FilterComponent;