"use client"

import { CarProps } from '@/types'
import { calculateCarRent } from '@/utils';
import Image from 'next/image';
import React, { useState } from 'react'
import CustomButton from './CustomButton';
import CarDetails from './CarDetails';

interface CarCardProps {
    car:CarProps;
}

const CarCard = ({car}: CarCardProps) => {

    const { city_mpg, drive,make,model,transmission,year} = car;
    const carRent = calculateCarRent(city_mpg, year);

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='car-card group'>
        <div className="car-card__content">
            <h2 className='car-card__content-tittle' >
                {make} {model}
            </h2>
        </div>
        <p className='flex mt-6 text-[32px]'>
            <span className='self-start text-[14px]'>
                $
            </span>
            {carRent}
            <span className='self-end text-[14px] font-medium'>
                /day
            </span>
        </p>

        <div className='relative w-full h-40 my-3 object-contain'>
            <Image src={"/hero.png"} alt='Car Model' fill className='object-contain' />
        </div>

        <div className="relative flex w-full mt-2">
            <div className="flex group-hover:invisible w-full justify-between text-gray">
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src={"/steering-wheel.svg"} width={20} height={20} alt='steering wheel'  />
                    <p className='text-[14px]' > {transmission =="a" ? "Automatic" : "Manual"}</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src={"/tire.svg"} width={20} height={20} alt='tire'  />
                    <p className='text-[14px]' > {drive.toUpperCase()}</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src={"/gas.svg"} width={20} height={20} alt='gas'  />
                    <p className='text-[14px]' > {city_mpg} MPG</p>
                </div>
            </div>
        <div className="car-card__btn-container">
            <CustomButton title='View More'
            containerStyles='w-full py-16 rounded-full bg-primary-blue'
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon ="/right-arrow.svg"
            handleClick={()=> setIsOpen(true)} />
        </div>
        </div>
<CarDetails isOpen={isOpen} closeModal={()=>setIsOpen(false)} car={car} />
    </div>
  )
}

export default CarCard