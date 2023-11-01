"use client"
import React, { forwardRef, MutableRefObject, Ref } from 'react';
import Image from 'next/image'

interface CraftmanProps {
    prop1: string;
    prop2: number;
}

const Craftman = forwardRef((props: CraftmanProps, ref: Ref<HTMLDivElement>) => {
    const handleDownload = () => {
        const fileUrl = "../../../public/assets/pdf/@ResumeBoobalan.pdf"
        const fileName = '@ResumeBoobalan.pdf';
        fetch(fileUrl)
            .then((response) => response.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', fileName);
                document.body.appendChild(link);
                link.click();
                if (link.parentNode) {
                    link.parentNode.removeChild(link);
                }
            });
    };

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div ref={ref as MutableRefObject<HTMLDivElement>} className='w-full mt-28 md:flex justify-center items-center gap-5'>
            <div className='w-full md:w-1/2 '>
                <Image src="/assets/img/exp.jpg" alt="exp" width={600} height={400} className='mx-auto  rounded-xl ' />
            </div>
            <div className='w-full md:w-1/2  '>
                <div className=''>
                    <h1 className='text-[25px] lg:text-[35px]   font-bold'>Merging Design and Functionality for Exceptional Web Experiences</h1>
                    <p className='text-[16px] leading-[30px] my-5'>I am Boobalan, a frontend developer proficient in Next.js and React.js. I specialize in creating responsive, user-friendly, and highly functional web applications.</p>
                    <button className='buttonFor' onClick={handleDownload}>
                        Download CV
                    </button>
                </div>
            </div>
        </div>
    )
});

Craftman.displayName = 'Craftman';
export default Craftman;
