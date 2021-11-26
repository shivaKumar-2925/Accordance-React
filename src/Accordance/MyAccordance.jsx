import { useState } from 'react';
export default function MyAccordance(props){
  const [sign, setsign] = useState(true)
  let changePlus=()=>{
    setsign(!sign)
  }
  return(
    <>
       <div className="que">
       <h3 className='quetion'><span className="plus" onClick={changePlus} >{sign ? "➕": "➖"}</span>{props.values.quetion}</h3></div>
       <div className="ans" style={{display:sign ?'none':'block'}}>
      
       <p>{props.values.answer}</p>
        </div>
    </>
  )
}