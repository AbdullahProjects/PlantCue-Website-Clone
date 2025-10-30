import React from 'react'
import Images from '../../utils/images'

const DownloadApp = (props) => {
  return (
    <div className='download-app show-cursor'>
        <div className='bg-black rounded-[20px] px-8 py-5 flex flex-row justify-center items-center gap-4'>
            <img src={props.img} alt="" className='w-[30px] ' />
            <div className="flex flex-col gap-0 items-start">
                <div className="text-[#FFFFFF] text-[12px] lg:text-[13px] font-bold">Download on the</div>
                <button className="text-white text-[15px] lg:text-[16px] font-bold">{props.platform}</button>
            </div>
        </div>
    </div>
  )
}

export default DownloadApp