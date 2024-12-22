import React from 'react'
import Image from '../components/Image';

const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
        <div className="flex items-center gap-4">

            <Image src="default-image.jpg" className="w-10 h-10 rounded-full object-cover" w={40}/>
            <span className=" font-medium">John Doe</span>
            <span className="text-sm text-gray-500">2 days</span>
        </div>
        <div className='mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos velit alias amet dolor ea, delectus neque voluptates. Repudiandae earum asperiores nihil quia iusto, tempora porro magni libero officia, officiis culpa!

        </div>
    
    </div>
  )
}

export default Comment