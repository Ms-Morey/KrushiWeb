import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-blue-600 flex flex-col text-white font-semibold'>
        <div className='flex items-center justify-center gap-12 border-b pt-2 pb-2'>
            <div>Website policy</div>
            <div>Disclaimer</div>
            <div>Terms & Conditions</div>
        </div>
        <div className='flex text-white font-semibold items-center justify-center mt-2 pb-2'>
            <h1>The content of this website is licensed under Creative Commons Attribution 4.0 International License.</h1>
        </div>
    </footer>
  )
}

export default Footer