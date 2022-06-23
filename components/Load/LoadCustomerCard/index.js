import React from 'react'
import ArrowV from "../../../assets/images/arrowV.svg"
import { Link } from 'react-router-dom'
const LoadCustomerCards = () => {
    return (
        <div className='bg-white rounded-xl w-full xl:w-[33%] px-[22px] py-5 h-[732px] cursor-pointer'>
            <div className='flex justify-between pr-10 mb-2.5'>
                <h2 className='text-2xl font-bold'>Customers</h2>
                {/* dropdown start */}
                <div className="group relative">
                    <button className="button-effects-sec">
                        <img src={ArrowV} alt="Loading" />
                    </button>
                    <nav tabindex="0" className="bg-white invisible  w-32 absolute right-0 top-[24px] transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1 shadow-xl rounded-md z-40" >
                        <ul className="">
                            <li>
                                <Link to="" className="block px-4 py-2 hover:bg-gray-100 text-sm">Edit</Link>
                            </li>
                            <li>
                                <Link to="" className="block px-4 py-2 hover:bg-gray-100 text-sm">Delete</Link>
                            </li>
                            <li>
                                <Link to="" className="block px-4 py-2 hover:bg-gray-100 text-sm">Reply</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* dropdown end here */}
            </div>
            <div className='mt-3.5  pt-2.5 pb-4 px-5 border-2 border-white hover:border-[#22215B] rounded-xl customer-shadow '>
                <div className='flex justify-between items-center mt-2'>
                    <p className='font-bold text-sm text-[#22215B]'>Name</p>
                    <p className='font-bold text-sm text-[#22215B]'>Name</p>
                </div>
                <div className='flex justify-between items-center mt-2'>
                    <p className='font-bold text-[#22215B] text-sm'># of Bags:</p>
                    <p className='font-bold text-[#22215B] text-sm'>14 <span className='font-normal'>Bag(s)</span></p>
                </div>
                <div className='flex justify-between items-center mt-[8px]'>
                    <p className='font-bold text-[#22215B] text-sm'>Colors</p>
                    <p className='font-light text-[#FF0000] text-sm'>(Red) FF0000</p>
                </div>
                <div className='flex justify-between  mt-[8px]'>
                    <p className='font-bold text-[#22215B] text-sm'>Notes</p>
                    <p className='font-light text-[#22215B] text-sm w-[74%] text-right leading-[17px] tracking-[-0.4px]'>Something notes for the Product for washing.</p>
                </div>
            </div>
            <div className='mt-3.5  pt-2.5 pb-4 px-5 border-2 border-white hover:border-[#22215B] rounded-xl customer-shadow'>
                <div className='flex justify-between items-center mt-2'>
                    <p className='font-bold text-sm text-[#22215B]'>Name</p>
                    <p className='font-bold text-sm text-[#22215B]'>Name</p>
                </div>
                <div className='flex justify-between items-center mt-2'>
                    <p className='font-bold text-[#22215B] text-sm'># of Bags:</p>
                    <p className='font-bold text-[#22215B] text-sm'>14 <span className='font-normal'>Bag(s)</span></p>
                </div>
                <div className='flex justify-between items-center mt-[8px]'>
                    <p className='font-bold text-[#22215B] text-sm'>Colors</p>
                    <p className='font-light text-[#FF0000] text-sm'>(Red) FF0000</p>
                </div>
                <div className='flex justify-between  mt-[8px]'>
                    <p className='font-bold text-[#22215B] text-sm'>Notes</p>
                    <p className='font-light text-[#22215B] text-sm w-[74%] text-right leading-[17px] tracking-[-0.4px]'>Something notes for the Product for washing.</p>
                </div>

            </div>
            <div className='mt-3.5  pt-2.5 pb-4 px-5 border-2 border-white hover:border-[#22215B] rounded-xl customer-shadow'>
                <div className='flex justify-between items-center mt-2'>
                    <p className='font-bold text-sm text-[#22215B]'>Name</p>
                    <p className='font-bold text-sm text-[#22215B]'>Name</p>
                </div>
                <div className='flex justify-between items-center mt-2'>
                    <p className='font-bold text-[#22215B] text-sm'># of Bags:</p>
                    <p className='font-bold text-[#22215B] text-sm'>14 <span className='font-normal'>Bag(s)</span></p>
                </div>
                <div className='flex justify-between items-center mt-[8px]'>
                    <p className='font-bold text-[#22215B] text-sm'>Colors</p>
                    <p className='font-light text-[#FF0000] text-sm'>(Red) FF0000</p>
                </div>
                <div className='flex justify-between  mt-[8px]'>
                    <p className='font-bold text-[#22215B] text-sm'>Notes</p>
                    <p className='font-light text-[#22215B] text-sm w-[74%] text-right leading-[17px] tracking-[-0.4px]'>Something notes for the Product for washing.</p>
                </div>

            </div>
            <div className='mt-3.5  pt-2.5 pb-4 px-5 border-2 border-white hover:border-[#22215B] rounded-xl customer-shadow'>
                <div className='flex justify-between items-center mt-2'>
                    <p className='font-bold text-sm text-[#22215B]'>Name</p>
                    <p className='font-bold text-sm text-[#22215B]'>Name</p>
                </div>
                <div className='flex justify-between items-center mt-2'>
                    <p className='font-bold text-[#22215B] text-sm'># of Bags:</p>
                    <p className='font-bold text-[#22215B] text-sm'>14 <span className='font-normal'>Bag(s)</span></p>
                </div>
                <div className='flex justify-between items-center mt-[8px]'>
                    <p className='font-bold text-[#22215B] text-sm'>Colors</p>
                    <p className='font-light text-[#FF0000] text-sm'>(Red) FF0000</p>
                </div>
                <div className='flex justify-between  mt-[8px]'>
                    <p className='font-bold text-[#22215B] text-sm'>Notes</p>
                    <p className='font-light text-[#22215B] text-sm w-[74%] text-right leading-[17px] tracking-[-0.4px]'>Something notes for the Product for washing.</p>
                </div>
            </div>
        </div>
    )
}

export default LoadCustomerCards