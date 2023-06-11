
import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
   <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>

  <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
  <div className='flex flex-col justify-start items-start gap-6'>
    <Image src={"/logo.svg"} alt='footer Logo' width={118} height={18} className='objext-contain'/>
    <p className='text-base text-gray-700' > Car Showcase 2023 <br/> All right reserved &copy;</p>
  </div>
  
  <div className='footer__links'>
    {
      footerLinks.map((link) =>(
        <div key={(link.title)} className='footer__link'>
          <h3 className='font-bold'>{link.title}</h3>
          {link.links.map(link =>(
            <Link href={link.url} key={link.title} className='text-gray-500' >{link.title}</Link>
          ))}
        </div>
      ))
    }
  </div></div>
  <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
    <p>@2023 CarHub. All Rights Reserved</p>
    <div className="footer__copyrights-link">
      <Link href={"/"} className='text-gray-500'>Privacy Policy</Link>
    </div>
    </div>
   </footer>
  )
}

export default Footer