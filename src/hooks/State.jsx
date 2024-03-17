import React, { useState } from 'react'

const State = () => {
    const [data, setData]  = useState(4);

    const Increase =()=>{
        setData(data+1)
    }

  return (
    <>

    <h1 className='fw-bold text-danger fs-1 text-center'> {data} </h1>

    <button className="btn btn-success px-4 py-2 " onClick={Increase}>Increment</button>

{
    data>0 && 
     <button className="btn btn-danger px-4 py-2 " onClick={   ()=>setData(data-1)    }>decrement</button>
}
    
<button className="btn btn-warning px-4 py-2 " onClick={   ()=>setData(data*2)    }>Multiply by 2</button>
    

    </>
  )
}

export default State