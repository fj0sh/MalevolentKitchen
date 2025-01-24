import React from 'react'
import Button from '../Button'
import { useRouter } from 'next/navigation'
import useMeal from '@/hooks/useMeal'

interface Props {
    data?: string
}

const Navbar = (props: Props) => {

    const { setInput } = useMeal()

    const router = useRouter()

    return (
        <div className="flex justify-end mx-10 gap-10 my-5">
            <input
                className="bg-slate-400 rounded-lg px-2 border border-black h-[50px] max-w-[500px] w-[500px] min-w-[250px] text-md"
                type="text"
                placeholder="Search......"
                onChange={(e) => setInput(e.target.value)}
            />
            <Button name="Search" onClick={() => router.push("/test")}></Button>
        </div>
    )
}

export default Navbar
