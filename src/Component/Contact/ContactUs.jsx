import React from 'react'
import leftTop from '../../assets/images/webp/left-top.webp'
import rightbottom from '../../assets/images/webp/right-bottom.webp'

const ContactUs = () => {
    return (
        <>

            <div className='relative'>
                <div className='contact-us bg-white h-24 w-full  absolute top-30 left-0'></div>
                <div className='py-60  px-[70px] text-white bg-[#1F4B3F]  h-[300px] rounded-b-3xl '>

                    <div className="left-top w-40 absolute left-0 top-54">
                        <img src={leftTop} alt="" className='h-full w-full' />
                    </div>
                    <div className='absolute bottom-20 left-16 sm:left-30'>

                        <h1 className='text-3xl sm:text-4xl font-semibold leading-15'>Contact Us</h1>
                        <p>We'd love to talk about how we can help you.</p>
                    </div>
                    <div className="right-bottom w-40 absolute bottom-0 right-0 ">
                        <img src={rightbottom} alt="" className='w-full h-full rounded-br-3xl' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs
