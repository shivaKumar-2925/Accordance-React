 
import './accordance.css';
import {Data} from './AccorQue'
import MyAccordance from './MyAccordance';

export default  function Accordance(){
 
 

  return(
    <>
   <div className="inteQue">
     <div className="mainQue">
     <h1>React interview quetions</h1>
     <br />
     
       
       {Data.map(
         (val,ind)=>{
       return(
         <>
         <div className="queNdAns">
        <MyAccordance key={ind} ind={ind} values={val}/>
         </div>
       </>
       )
         }
       )}
    
     
   </div>
</div>
    </>
  )
}