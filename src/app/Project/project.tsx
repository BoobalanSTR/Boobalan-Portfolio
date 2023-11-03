"use client"
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';

const Project = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "/assets/img/main.png",
        "/assets/img/list.png",
        "/assets/img/detail.png",
        "/assets/img/book.png",
        "/assets/img/chat.png",
        "/assets/img/comment.png",
        "/assets/img/profile.png",
        "/assets/img/account.png",
    ];
    const handleOnChange = (index) => {
        setCurrentSlide(index);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    return (
        <>
            <div className="slider-container mt-10 sm:w-[90%] px-2 mx-auto h-[70%] flex">
                <IconButton onClick={handlePrevSlide} disabled={currentSlide === 0}>
                    <ArrowBackIosIcon />
                </IconButton>
                <Carousel
                    selectedItem={currentSlide}
                    onChange={handleOnChange}
                    showArrows={false}
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                    dynamicHeight={true}
                >
                    {slides.map((slide, index) => (
                        <div key={index}>
                            <img className='rounded-xl shadow-xl' src={slide} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </Carousel>
                <IconButton onClick={handleNextSlide} disabled={currentSlide === slides.length - 1}>
                    <ArrowBackIosIcon style={{ transform: 'rotate(180deg)' }} />
                </IconButton>
            </div>

        </>
    );
};

export default Project;