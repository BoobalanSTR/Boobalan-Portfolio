"use client"
import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Skills = () => {
    const [value, setValue] = useState(0);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <p className='text-center my-16 text-[70px] font-sans font-bold leading-[30px]'>My Skills</p>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >
                {[
                    { name: "Next.js", icon: "next" },
                    { name: "React.js", icon: "react" },
                    { name: "TypeScript", icon: "ts" },
                    { name: "Redux", icon: "redux" },
                    { name: "Git & GitHub", icon: "git" },
                    { name: "JavaScript", icon: "js" },
                    { name: "Sass", icon: "sass" },
                    { name: "Tailwind CSS", icon: "tail" },
                    { name: "Bootstrap", icon: "bootstrap" },
                    { name: "CSS", icon: "css" },
                    { name: "HTML", icon: "html" }
                ].map((item, index) => (
                    <Tab
                        key={index}
                        label={
                            <div className='py-10'>
                                <img className='w-[120px] h-[120px]' src={`/assets/svg/${item.icon}.svg`} alt={item.name} />
                                <p className='font-semibold my-10'>{item.name}</p>
                            </div>
                        }
                    />
                ))}
            </Tabs>

        </>
    );
};

export default Skills;
