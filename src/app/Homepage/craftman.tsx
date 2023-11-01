"use client"
import React, { forwardRef } from 'react';

const Craftman = forwardRef((props, ref) => {
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
        <div ref={ref} className='w-full mt-28 md:flex justify-center items-center gap-5'>
            <div className='w-full md:w-1/2 '>
                <img src="/assets/img/exp.jpg" className='mx-auto h-[400px]  w-[600px]  rounded-xl ' />
            </div>
            <div className='w-full md:w-1/2  '>
                <div className=''>
                    <h1 className='text-[25px] lg:text-[35px]   font-bold'>Merging Design and Functionality for Exceptional Web Experiences</h1>
                    <p className='text-[16px] leading-[30px] my-5'>I am Boobalan, a frontend developer proficient in Next.js and React.js. I specialize in creating responsive, user-friendly, and highly functional web applications.</p>
                    <button className='buttonFor' onClick={handleDownload}>
                        {/* // className='pt-[17px] px-[40px] pb-[13px] font-semibold text-white capitalize bg-[#fe3e57] rounded-sm hover:scale-105 transition-transform'  */}
                        Download CV
                    </button>
                </div></div>
        </div>
    )
})
Craftman.displayName = 'Craftman';
export default Craftman