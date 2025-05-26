import React from 'react'

function Box({content,link,difc}) {
  
  let color = "bg-red-300";
  let text = "text-red-500"

  if(difc === "easy" || difc === "school"){
    color = "bg-green-200";
    text = "text-green-500";
  }else if(difc === "Medium"){
     color = "bg-yellow-100";
     text = "text-yellow-500";
  }else{
    color = "bg-red-300"
    text = "text-red-500"
  }
  return (
     <div className='flex items-center justify-between bg-gray-700 min-h-16 border rounded-2xl shadow-lg'>
       <div className='text-white pl-4'>
           {content} 
       </div>
       <div className=' flex justify-between text-white pr-3 gap-x-4'>
           <div className={`text-${difc}-500  border rounded-full ${color} ${text} flex justify-center text-center`}>
               {difc}
           </div>
           <div className=' border border-green-200  rounded-2xl hover:bg-green-100 hover:text-gray-400'>
               <a
               className='p-1.5 text-green-200 +'
               href={link}>Solve Problem</a>
           </div>
       </div>
    </div>
  )
}

export default Box
