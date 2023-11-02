"use client"
import React, { useState, ChangeEvent, useEffect, useRef } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
const Skills: React.FC = () => {
    const [value, setValue] = useState<number>(0);
    const [data, setData] = useState(null);
    const [currentlyPlayingId, setCurrentlyPlayingId] = useState(null);
    const videoRefs = useRef({})

    const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };
    // const [data, setData] = useState(null);

    return (
        <>
            <p className='text-center my-7 sm:my-10 md:my-16 text-[38px] sm:text-[44px] md:text-[70px] font-sans font-bold leading-[30px]'>My Skills</p>
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
                            <div className='md:py-10'>
                                <img className='w-[120px] h-[120px]' src={`/assets/svg/${item.icon}.svg`} alt={item.name} />
                                <p className='font-semibold my-5 md:my-10'>{item.name}</p>
                            </div>
                        }
                    />
                ))}
            </Tabs>

        </>
    );
};

export default Skills;
