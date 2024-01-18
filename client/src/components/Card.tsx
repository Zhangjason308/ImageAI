import React from 'react'
import {download} from '../assets'
import {downloadImage} from '../utils'
import {CreatePostFormType} from '../types/Types'

const Card = (_id: string, post: CreatePostFormType) => {
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <img src={post.photo} alt="prompt" className='w-full h-auto object-cover rounded-xl' />
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
        <p className='text-white text-sm overflow-y-auto'>{post.prompt}</p>
        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className='w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold'>
              {post.name[0]}
            </div>
            <p className='text-white text-sm'>{post.name}</p>
          </div>
          <button type='button' onClick={() => downloadImage(_id, post.photo)} className='outline-none bg-transparent border-none'>
            <img src={download} alt="download" className='w-6 h-6 object-contain invert' />
          </button>
        </div>
      </div>
    </div>

  )
}

export default Card