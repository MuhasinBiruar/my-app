'use client';
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Hover, {divGap} from '../components/utility';
import PicContainer from './pic_container';
import { gradeSevenDesc, gradDesc } from './description';
interface schoolPicture{
    id: number;
    src: string;
    title: string;
    description: string;
    category: string;
}


const SCHOOLPICTURES: schoolPicture[] = [
    {id: 1, src: '/school_pictures/Grade7.jpg', title: 'Grade 7', description: gradeSevenDesc, category: 'CCI'},
    {id: 2, src: '/school_pictures/Grade4.jpg', title: 'Grade 4', description: 'Placeholder', category: 'CCI'},
    {id: 3, src: '/school_pictures/Kinder.jpg', title: 'Kinder', description: 'Placeholder', category: 'CCI'},
    {id: 4, src: '/school_pictures/Grad1.jpg', title: 'Graduation Day', description: gradDesc, category: 'CCI'},
    {id: 5, src: '/school_pictures/Grad2.jpg', title: 'Graduation Day', description: 'Placeholder', category: 'CCI'},
    {id: 6, src: '/school_pictures/Grade5.jpg', title: 'Senior High School', description: 'Placeholder', category: 'CCI'},
    {id: 7, src: '/school_pictures/Grade6.jpg', title: 'Grade 6', description: 'Placeholder', category: 'CCI'},
]

export default function Modals() {
    const [selectedPicture, setSelectedPicture] = useState<schoolPicture | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const relatedPictures = SCHOOLPICTURES.filter((picture) => picture.category === selectedPicture?.category && picture.id !== selectedPicture?.id
    );
    const [reset, setReset] = useState(false);

    useEffect(() => {
        if (selectedPicture) {
            setTimeout(() => setIsAnimating(true), 10);
        } else {
            setIsAnimating(false);
        }
    }, [selectedPicture]);

    const handleClose = () => {
        setIsAnimating(false);
        setTimeout(() => setSelectedPicture(null), 300);
    };

    return (
        <>
        <div className="flex flex-row md:flex-row justify-between items-center gap-0 mt-2 h-[50%]">
            <PicContainer>
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image src={SCHOOLPICTURES[0].src} alt={SCHOOLPICTURES[0].title} fill className="rounded-xl 
                    object-cover border border-gray-400 drop-shadow-md hover:drop-shadow-2xl transition-all 
                    duration-300 ease-in-out" onClick={() => setSelectedPicture(SCHOOLPICTURES[0])} />
                </div>
                <span className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-xs p-1 text-center 
                rounded-b-xl md:hidden">
                    {SCHOOLPICTURES[0].title}
                </span>
            </PicContainer>
            <PicContainer>
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image src={SCHOOLPICTURES[1].src} alt={SCHOOLPICTURES[1].title} fill className="rounded-xl \
                        object-cover border border-gray-400 drop-shadow-md hover:drop-shadow-2xl transition-all \
                        duration-300 ease-in-out" onClick={() => setSelectedPicture(SCHOOLPICTURES[1])} />
                </div>
                <span className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-xs p-1 text-center rounded-b-xl md:hidden">
                    {SCHOOLPICTURES[1].title}
                </span>
            </PicContainer>
            <PicContainer>
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image src={SCHOOLPICTURES[2].src} alt={SCHOOLPICTURES[2].title} fill className="rounded-xl object-cover border border-gray-400 drop-shadow-md hover:drop-shadow-2xl transition-all duration-300 ease-in-out" onClick={() => setSelectedPicture(SCHOOLPICTURES[2])} />
                </div>
                <span className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-xs p-1 text-center rounded-b-xl md:hidden" 
                onClick={() => setSelectedPicture(SCHOOLPICTURES[2])}>
                    {SCHOOLPICTURES[2].title}
                </span>
            </PicContainer>
        </div>
        {selectedPicture && createPortal(
                <div className={`fixed inset-0 drop-shadow-black drop-shadow-xl backdrop-blur-sm flex items-center justify-center z-50 
                transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`} id="agartha"
                onClick={handleClose}>
                    <div className={`bg-white rounded-2xl drop-shadow-black drop-shadow-xl border border-black p-4
                    w-[90%] h-[75%] mx-4 relative flex flex-row overflow-auto md:overflow-hidden
                    md:flex-col transition-transform duration-300 ${isAnimating ? 'scale-100' : 'scale-95'} 
                    gap-2`} 
                    onClick={(e) => e.stopPropagation()}>
                        <button className="hover:bg-red-500 rounded-md 
                        transition-colors duration-200 ease-in-out absolute top-2 right-2 text-gray-600 hover:text-gray-800 
                        z-10 text-2xl font-bold px-3 py-1 sticky-top cursor-pointer" 
                                onClick={handleClose}>
                            ✕
                        </button>
                        <div className="flex flex-row 2 gap-2 w-full h-[50%]">
                        <div className="bg-white h-full w-[75%] mt-10 rounded-xl overflow-hidden">
                            <img src={selectedPicture.src} alt={selectedPicture.title} className="w-full h-full object-cover rounded-xl
                            transition-all duration-1000 hover:rotate-3600 hover:scale-1 hover:drop-shadow-black hover:drop-shadow-xl"/>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 w-full mt-10 h-full overflow-y-visible">
                        {SCHOOLPICTURES.filter(pic => pic.id !== selectedPicture?.id && pic.category === selectedPicture?.category).reduce((acc, pic, index, array) => {
                            if (index % 2 === 0) {
                                acc.push(array.slice(index, index + 2));
                            }
                            return acc;
                        }, [] as schoolPicture[][]).map((column, colIndex) => (
                            <div key={colIndex} className="flex flex-col gap-1 w-[50%] h-full ">
                                {column.map((pic) => (
                                    <div key={pic.id} className="w-full h-[50%] rounded-xl hover:z-50 ">
                                        <img src={pic.src} alt={pic.title} className="w-full h-full object-cover rounded-xl 
                                        transition-all duration-400 hover:scale-110 hover:drop-shadow-xl hover:drop-shadow-black
                                        hover:border hover:border-black cursor-pointer" onClick={() => setSelectedPicture(pic)}/>
                                    </div>
                                ))}
                            </div>
                        ))}
                        </div>
                        </div>
                        <div className="border rounded-md w-full h-full mt-12 bg-gray-200 overflow-auto p-2">
                            <h2>
                                <b>Description</b>
                            </h2>
                            <p>
                                {selectedPicture.description}
                            </p>
                        </div>
                    </div>
                </div>
                ,
                document.body
            )} 
        </>  
    )
}