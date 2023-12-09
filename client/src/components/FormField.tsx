import React from 'react'
import { FormFieldType } from '../types/Types'

const FormField = (params: FormFieldType) => {
  return (
		<div>
			<div className="flex items-center gap-2 mb-2">
				<label htmlFor={params.name} className='block text-sm font-medium text-gray-900'>
					{params.labelName}
				</label>
				{params.isSurpriseMe && (
					<button type='button' onClick={params.handleSurpriseMe} className='font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black'>
						Surprise Me
					</button>
				)}
			</div>
			<input 
				type={params.type} 
				id={params.name} 
				name={params.name} 
				placeholder={params.placeholder} 
				value={params.value} 
				onChange={params.handleChange} 
				required 
				className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3'
			/>
		</div>
  )
}

export default FormField