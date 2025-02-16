import React from 'react'
import Image from 'next/image'
import Star from '@/public/ic-actions-star.svg'
import Star1 from '@/public/ic-actions-star (1).svg'

const Stars = () => {
  return (
    <div className='flex w-[108px] h-[20px]'>
       <div>
        <Image src={Star} alt='star' height={20} width={20}/>
       </div>
       <div>
        <Image src={Star} alt='star' height={20} width={20}/>
       </div>
       <div>
        <Image src={Star} alt='star' height={20} width={20}/>
       </div>
       <div>
        <Image src={Star} alt='star' height={20} width={20}/>
       </div>
       <div>
        <Image src={Star1} alt='star' height={20} width={20}/>
       </div>

    </div>
  )
}

export default Stars