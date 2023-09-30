import React from 'react'

const Contact = () => {
  return (
    <div className='flex justify-center items-center'>
          <form action="" className='w-[80%]  capitalize'>
               
                <div className='flex  gap-5 '>
                     <div className='lg:w-1/2  w-full'>
                          <label className=' font-bold'>name</label>
                          <input type="text"  className='w-full p-2 my-2 outline-none text-sm'/>
                     </div>
                     <div className='lg:w-1/2  w-full'>
                          <label  className=' font-bold'>Email</label>
                          <input type="text"  className='w-full p-2 my-2 outline-none'/>
                     </div>
                </div>

          
                
                     <div className='flex  gap-5 '>
                     <div className='lg:w-1/2  w-full'>
                          <label  className=' font-bold'>city</label>
                          <input type="text"  className='w-full p-2 my-2 outline-none'/>
                     </div>
                     <div className='lg:w-1/2  w-full'>
                          <label  className=' font-bold'>state</label>
                          <input type="text"  className='w-full p-2 my-2 outline-none'/>
                     </div>
                </div>



                <div className='flex  gap-5 '>
                <div className='lg:w-1/2  w-full'>
                          <label  className=' font-bold'>  website</label>
                        <select  className='w-full p-2 mt-2 outline-none' >
                        <option value="" >provided web site </option>
                        <option value="" >Web Application </option>
                        <option value="" >Web Application</option>
                        <option value="" >Ui/Ux Design</option>
                        <option value="" >Digital Marketing</option>
                        </select>  
                     </div>
                     <div className='lg:w-1/2  w-full'>
                          <label  className=' font-bold'>password</label>
                          <input type="text"  className='w-full p-2 my-2 outline-none'/>
                 </div>
                </div>

                <div className='w-full'>
                          <label  className=' font-bold'>send the message</label>
                          <textarea type=""  className='w-full p-2 my-2 outline-none' placeholder='Enter The Your Message......................'/>
                 </div>


              <div className='flex justify-end     mt-5'>
                 <button className='px-14 hover:bg-background-color hover:text-black hover:border py-2 bg-orange rounded-md capitalize text-white'>submite</button>
              </div>
                
          </form>
    </div>
  )
}

export default Contact