import React from 'react'

const ImgCards = ({image}) => {
  return (
    <div className='max-w-sm w-[500px] rounded overflow-hidden shadow-lg'>
    <img src={image.webformatURL} alt=""  className='w-full h-[250px]'/>
<div className="px-6 py-4">
<div className='font-bold text-purple-700 text-xl mb-2'>
   photo by : {image.user}
</div>
<ul>
   <li><strong>Views:</strong>{image.views}</li>
   <li><strong>Downloads:</strong>{image.downloads}</li>
   <li><strong>Likes:</strong>{image.likes}</li>
</ul>
</div>  
<div className="px-6 py-4">
<span className=' cursor-pointer inline-block capitalize bg-gray-200 text-blue-700 rounded-full px-3 py-1 text-sm font-semibold to-gray-700 mr-2 hover:text-purple-700'>
   #{image.tags}

</span>

</div>
<div className='container mx-auto'>

 
 </div> 

</div>
  )
}

export default ImgCards