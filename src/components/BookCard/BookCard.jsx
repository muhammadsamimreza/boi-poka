import React from 'react';
import bookImg from '../../assets/books.jpg'
import { Star } from 'lucide-react';
const BookCard = () => {
    return (
        <div className='flex justify-center'>
            <div className='w-60 h-80 bg-base-100 rounded-2xl shadow-md p-4 border'>
                <div className='flex justify-center items-center backColor rounded-xl py-5'>
                    <img className='rounded-xl w-28 h-28' src={bookImg} alt="" />
                </div>
                <div className='flex gap-5 my-4'>
                    <div className='flex justify-center items-center bg-green-100 px-2 h-[20px] rounded-xl text-xs font-medium text-green-700'>Young Adult</div>
                    <div className='flex justify-center items-center bg-green-100 px-2 h-[20px] rounded-xl text-xs font-medium text-green-700'>Identity</div>
                </div>
                <div className='my-3 space-y-1'>
                    <h1 className='text-xl font-bold'>Book Name</h1>
                    <h3 className='text-sm font-semibold'>By : </h3>
                </div>
                <div className='flex justify-between text-xs'>
                    <span>Category</span>
                    <div className='flex items-center gap-2'><p>Ratting  </p><Star className='w-4'></Star></div>
                    
                </div>
                   
            </div>
        </div>
    );
};

export default BookCard;