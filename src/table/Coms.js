import React, { useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import Stock from "./Stock"
const Coms= props =>{
  // Declare a new state variable, which we'll call "count"
  const initialFormState=[]
  const [coms,setCom]=useState(initialFormState)
  const [cout, setCout] = useState(0);
  const addCom = (coms,teste)  =>{
      setCom(coms.concat([teste]))
  }
  return (
    <div>
      							<paragraphe className="sa"   onClick={() => {
		
		confirmAlert({
			customUI: ({onClose}) => {
				return (
					<form id='ID'>
					<div class="sss">
					<div className="fa">
					<button className="btn btn-danger naf" onClick={(b) => {
						onClose()}
			} >X</button>
					</div>
						<input name='input'  id="e" className="modifier" />
							
						<button onClick={(e) => {
							var teste=document.forms['ID'].elements['input'].value;
							var count=1;
						
								e.preventDefault()
								document.getElementById("sss").innerHTML+=teste ;
								document.getElementById("sss").innerHTML+="<br>"
								addCom(coms,teste);
								document.getElementById("e").value=' ';
								setCout(cout + 1)
							
					
			}} class="btn btn-primary d">comment</button>
		
		<div id="sss" class="r"></div>
        <Stock coms={coms}/>
					</div>
					</form>
				)
				
			}

		})
	}}
>Comment {cout}</paragraphe>
      
    </div>
  );
}
export default Coms