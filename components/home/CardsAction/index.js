import React from 'react'
import { Link } from 'react-router-dom'
import ActionBtn from "../../../assets/images/action-btn.svg"
import CheckImg from "../../../assets/images/check-btn.svg"
import BucketImg from "../../../assets/images/bucketCheck.svg"
import ProgressImg from "../../../assets/images/progress.png"
const CardsAction = () => {
  return (
      <div className='w-full lg:w-[51.5%]'>
        <div className='flex justify-between items-center pr-4 mt-2.5'>
          <p className='text-[22px] font-extrabold '>Action Buttons</p>
          <img src={ActionBtn} alt="loading" className="w-9 cursor-pointer" />
        </div>
        <div className='relative'>
          <div className='line-img1 flex justify-between items-center bg-[#FF8F6B] py-[18px] md:py-[42px] pl-[15px] md:pl-[52px] pr-[15px] md:pr-[38px] rounded-xl mt-5'>
            <img src={CheckImg} alt="loading" className="w-[10%] md:w-[8%] lg:w-12" />
            <div className='ml-[10px] lg:ml-[0px] mr-[10px] lg:mr-[38px] xl:mr-[10px] w-[45%] md:w-[40%] xl:w-[45%]'>
              <h2 className='text-[18px] md:text-2xl lg:text-[22px] font-extrabold text-[#030229]'>Check-In</h2>
              <p className='text-[8px] md:text-base lg:text-[14px] font-light text-[#030229]'>If you want to make Check-In</p>
            </div>
            <Link to="/fold">
            <button className='text-white bg-black py-2 md:py-3 px-[20px] md:px-20 lg:px-14 rounded-lg border border-2 text-base md:text-lg  xl:text-base font-normal lg:font-extrabold action-btn'>Lets go</button>
            </Link>
          </div>
        </div>
        <div className='relative'>
          <div className='line-img2 flex justify-between items-center bg-[#FFD66B] py-[18px] md:py-[42px] pl-[15px] md:pl-[52px] pr-[15px] md:pr-[38px] rounded-xl mt-5'>
            <img src={ProgressImg} alt="loading" className="w-[10%] md:w-[8%] lg:w-12" />
            <div className='ml-[10px] lg:ml-[0px] mr-[10px] lg:mr-[38px] xl:mr-[10px] w-[45%] md:w-[40%] xl:w-[45%]'>
              <h2 className='text-[18px] md:text-2xl lg:text-[22px] font-extrabold text-[#030229]'>In Progress</h2>
              <p className='text-[8px] md:text-base lg:text-[14px] font-light text-[#030229]'>Want to put Launry in In-Progress</p>
            </div>
            <Link to="/in-progress">
            <button className='text-white bg-black py-2 md:py-3 px-[20px] md:px-20 lg:px-14 rounded-lg border-2 text-base md:text-lg  xl:text-base font-normal lg:font-extrabold action-btn'>Lets go</button>
            </Link>
          </div>
        </div>
        <div className='relative'>
          <div className='line-img3 flex justify-between items-center bg-[#C0BEFF] py-[18px] md:py-[42px] pl-[15px] md:pl-[52px] pr-[15px] md:pr-[38px] rounded-xl mt-5'>
            <img src={BucketImg} alt="loading" className="w-[12%] md:[10%] lg:w-12" />
            <div className='ml-[10px] lg:ml-[0px] mr-[10px] lg:mr-[38px] xl:mr-[10px] w-[42%] md:w-[44%] xl:w-[45%]'>
              <h2 className='text-[18px] md:text-2xl lg:text-[22px] font-extrabold text-[#030229]'>Check-Out</h2>
              <p className='text-[8px] md:text-base lg:text-[14px] font-light text-[#030229]'>Lets make it Check-Out</p>
            </div>
            <Link to="/load">
            <button className='text-white bg-black py-2 md:py-3 px-[20px] md:px-20 lg:px-14 rounded-lg border-2 text-base md:text-lg  xl:text-base  font-normal lg:font-extrabold  action-btn'>Lets go</button>
            </Link>
          </div>
        </div>
      </div>
    
  )
}
export default CardsAction