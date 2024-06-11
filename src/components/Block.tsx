import React from 'react'

interface blockProps {
    value?:string|null;
    onClick?:()=>void
}

const Block:React.FC<blockProps> = (props) => {
  return <section>
    
    <div onClick={props.onClick} className='block'>{props.value}</div>
  </section>
  
}

export default Block