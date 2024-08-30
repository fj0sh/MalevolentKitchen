import React from 'react'

const InfoCard = () => {
    return (
        <div className="p-20 flex justify-center items-center">
            <div className="relative border bg-violet-200 w-[20rem] h-[20rem]">
                <div className="absolute border-none rounded-full w-[8rem] h-[8rem] bg-gray-200 -top-16 left-1/2 transform -translate-x-1/2"></div>
                <div className="flex flex-col justify-center items-center h-full gap-3 p-4">
                    <p className="font-bold">Gasuydgas</p>
                    <p className="text-center overflow-wrap break-word">
                        asdalsokdaasdoamk
                    </p>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
