import axios from 'axios'
import { useEffect, useState } from 'react'

const App = () => {

  

  const [links, setLinks] = useState([])
  const [pageValue, setPageValue] = useState(Number(localStorage.getItem("value")) || 1)

  

 
  

  
  const GetData = async()=>
  {
    
    
    const response = await axios.get(`https://picsum.photos/v2/list?page=${pageValue}&limit=30`)
    const data =  response.data.map((ele)=>{return ele.download_url})

    
    setLinks(data);

    
  }

  
  

  useEffect(function(){
    GetData();
    const storage = localStorage.setItem("value",pageValue);
  },[pageValue])

  return (
    <div className='min-h-screen  w-screen p-3 pt-7 bg-black text-white'>
      <div>
      
      

     
       <div className="flex flex-wrap gap-4 p-4 justify-center overflow-hidden">
        {links.map((ele, idx) => (
          <img
            key={idx}
            src={ele}
            alt={`Image ${idx}`}
            className="w-40 h-40 object-cover rounded"
          />
        ))}

        </div>
        
      

      <div className='flex flex-row justify-center gap-4'>
        <button 
        onClick={()=>{
          if(pageValue > 1)
          {
          setPageValue( pageValue-1)
          
          }

          

        }}
        className='w-[80px] bg-mist-400 p-1 rounded-2xl'>Prev</button>
        <h4>page no {pageValue}</h4>
        <button
         onClick={()=>{
          
          setPageValue(pageValue+1)

          
        }}
        className='w-[80px] bg-mist-400 p-1 rounded-2xl'>Next</button>
      </div>
      </div>

      

    </div>
  )
}

export default App
