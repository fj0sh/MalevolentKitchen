import InfoCard from '@/components/Cards/InfoCard'
import React from 'react'

const page = () => {
    return (
        <div className='h-full'>
            <div className='flex h-full'>
                <div className='w-1/2 bg-red-200'></div>
                <div className='w-1/2 bg-blue-200'></div>
            </div>
            <div className='h-full bg-green-200 flex'>
                <InfoCard />
            </div>

        </div>
    )
}

export default page
