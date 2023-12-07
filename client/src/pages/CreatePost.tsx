import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {preview} from '../assets'
import {getRandomPrompt} from '../utils'
import { FormField, Loader } from '../components'
import { CreatePostForm } from '../types/Types'


const CreatePost = () => {
  const navigate = useNavigate()
	const [form, setform] = useState({name: '', prompt: '', photo: ''} as CreatePostForm)
	const [generatingImg, setgeneratingImg] = useState(false)
	const [loading, setloading] = useState(false)
	function handleSubmit(): any {

	}
	function handleChange(): any {

	}
	function handleSurpriseMe(): any {

	}
  return (
		<section className='max-w-7xl mx-auto'>
			<div>
				<h1 className='font-extrabold text-[#222328] text-[32px]'>
					Generate Image
				</h1>
				<p className='mt-2 text-[#666e75] text-[16px] max-w[500px]'>
					Create images through the ImageAI generator and share them with the community
				</p>
			</div>
			<form className='mt-16 max-w-3xl' onSubmit={handleSubmit} action="">
				<div className="flex flex-col gap-5">
					<FormField labelName='Your Name' type='text' name='name' placeholder='Jason Zhang' value={form.name} handleChange={handleChange}/>
					<FormField labelName='Prompt' type='text' name='name' placeholder='A giant poop emoji' value={form.name} handleChange={handleChange} isSurpriseMe handleSurpriseMe={handleSurpriseMe}/>
				</div>
			</form>
		</section>
  )
}

export default CreatePost