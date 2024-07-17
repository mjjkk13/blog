import React from 'react'
import Header from '../Home/components/Header'
import { ChevronLeft, Send, Heart } from 'lucide-react'

function AddNewScreen() {
  return (
    <div>
        <Header/>

        <button className='btn mt-7'>
            <ChevronLeft className='w-5 h-5'/>
            Back</button>
        <h2 className='font-bold text-2xl mt-5'>From my head to this blog: I actually like some silly things </h2>
        <div className='flex flex-col mt-7 gap-2'>
            <label>My Ideas *</label>
            <textarea className="textarea textarea-bordered border-primary" placeholder="Ideassss"></textarea>
        </div>

        <div className='flex flex-col mt-7 gap-2'>
            <label className='flex justify-between'>My thoughts about this *
                <span className='flex items-centergap-2 text-sm'>
                <Heart className='w-5 h-5'/>
                    As many I like</span>
            </label>
            <input type="text" placeholder="Thoughts" className="input input-bordered border-primary w-full" />
        </div>

        <button className='btn w-full btn-primary mt-7'>
            Send
            <Send className='w-4 h-4'/>
            </button>

    </div>
  )
}

export default AddNewScreen