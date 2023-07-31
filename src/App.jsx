import { useState, useEffect} from 'react'
import './App.css'
import ImgCards from './ImgCards'
import ImgSearch from './ImageSearch'

function App() {
const APP_ID = '195893'
  const APP_KEY = '38522044-62362b1dbb11bc6355c537ae1'


  const [images, setImages] =useState([]);
  const[isLoading, setIsloading] = useState(true);
  const[term, setTerm] = useState('');

  useEffect(()=>{
  fetch(`https://pixabay.com/api/?key=${APP_KEY}&q=${term}&image_type=photo&pretty=true`)
.then(res => res.json())
.then(data => {
  setImages(data.hits);
  setIsloading(false);
})
.catch (err => console.log(err))
}, [term])

  return (
    <>
 
     <div className='container mx-auto'>
     <ImgSearch searchText ={(Text)=> setTerm(Text)} />
{!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32"> IMAGE NOT FOUND</h1>  }
    
      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32"> loading...</h1> :
 <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
 {images.map(image =>(
  <ImgCards key={image.id} image={image}/>
 ))}
  </div>
      }
   

   
     </div>

    </>
  )
}

export default App
