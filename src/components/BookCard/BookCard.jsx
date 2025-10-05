import React from 'react';
import { Star } from 'lucide-react';
import './BookCard.css'
import { Link } from 'react-router';
const BookCard = ({book}) => {
    const {image,bookName,author,rating, bookId } = book;
    return (
        <div className='flex justify-center pageFont p-2'>
            <div className='w-full bg-base-100 rounded-2xl shadow-md p-4 border border-gray-200'>
                <div className='flex justify-center items-center backColor rounded-xl py-5'>
                    <div className='w-34 h-40 overflow-hidden'>
                        <img className='w-full h-full object-contain shadow-md' src={image} alt="" />
                    </div>
                </div>
                <div className='flex gap-5 my-5'>
                    <div className='flex justify-center items-center bg-green-100 px-2 h-[20px] rounded-xl text-xs font-medium text-green-700'>Young Adult</div>
                    <div className='flex justify-center items-center bg-green-100 px-2 h-[20px] rounded-xl text-xs font-medium text-green-700'>Identity</div>
                </div>
                <div className='my-4 space-y-2'>
                    <h1 className='text-[22px] font-bold fontPrimary'>{bookName}</h1>
                    <h3 className='font-semibold text-[#131313bd]'>By : {author} </h3>
                </div>
                <div className='flex border-t-1 border-dashed justify-between pageFont font-medium text-[#131313bd] py-3  border-gray-300'>
                    <span>Category</span>
                    <div className='flex items-center gap-2'><p>{rating} </p><Star className='w-4'></Star></div>
                    
                </div>
                <div className='flex justify-center'>
                    <Link to={`/bookdetails/${bookId}`} className='btn w-full bg-teal-400 hover:bg-teal-500  text-white'>Detalis</Link>
                </div>
                   
            </div>
        </div>
    );
};

export default BookCard;