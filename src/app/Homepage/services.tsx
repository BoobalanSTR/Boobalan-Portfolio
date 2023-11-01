import Image from 'next/image';
import React from 'react'

const Services = () => {
    return (
        <>
            <p className='text-center my-16 font-sans text-[70px] font-bold leading-[30px]'>Projects</p>
            <section className='grid sm:grid-cols-2 gap-y-10' >
                {[
                    {
                        title: 'Boatstar-Vacation Rental Boats',
                        description: 'A project focused on boat rentals.',
                        imageSrc: 'https://follio-react.wpocean.com/static/media/shape.482143e4.png',
                        imageSrc1: '/assets/svg/boat.svg',
                        className: "absolute w-16 h-16 top-[55px] left-[77px] "
                    },
                    {
                        title: 'Codeweb Solution',
                        description: 'Bridging Technology and Marketing for Effective Solutions.',
                        imageSrc: 'https://follio-react.wpocean.com/static/media/shape-2.a49e63ca.png',
                        imageSrc1: '/assets/svg/web.svg',
                        className: "absolute w-16 h-16 top-[55px] left-[77px]"
                    },
                    {
                        title: 'Academy Project',
                        description: 'Streamlining Student and Teacher Management with Fee Tracking.',
                        imageSrc: 'https://follio-react.wpocean.com/static/media/shape-3.9d276bde.png',
                        imageSrc1: '/assets/svg/academy.svg',
                        className: "absolute w-16 h-16 top-[55px] left-[77px]"
                    },
                    {
                        title: 'Rebustar',
                        description: 'Seamlessly Integrating and Monetizing Added Company Projects.',
                        imageSrc: 'https://follio-react.wpocean.com/static/media/shape-4.02e878bf.png',
                        imageSrc1: '/assets/svg/rebustar.svg',
                        className: "absolute w-16 h-16 top-[55px] left-[77px]"
                    }
                ].map((project, index) => (
                    <div key={index} className='grid justify-center lg:grid-cols-2 justify-items-center'>
                        <div className='relative'>
                            <Image width={1600} height={900} className=' ' src={project.imageSrc} alt='Image Alt Text' />
                            <Image width={64} height={64} className={project.className} src={project.imageSrc1} alt='Image Alt Text' />
                        </div>
                        <p className='text-[30px]   leading-[35px] font-semibold max-w-[353px] grid text-center lg:text-start'>
                            <span>{project.title}</span>
                            <span className='text-[16px] leading-[30px] text-[#717171]'>{project.description}</span>
                        </p>
                    </div>
                ))}
            </section>

        </>
    )
}

export default Services
