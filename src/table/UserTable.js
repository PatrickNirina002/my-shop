
//import "./table.css"
import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import './si.css'
import Coeur from "./Coeur"
import Coms from "./Coms"
const UserTable = props => {
	
	
	const [count, setCount] = useState(0);
	const [cout, setCout] = useState(0);

  return(  <div class="row">
			{props.users.length > 0  ? (
				props.users.map(user => (
					
					
						<div class="col-3 cc">
						<div class="card-title">ajouter un image ici</div>
                            <div class="card-body px-1">
                             <span>Nom Produit  {user.name}</span><br/>
							 <p class="para">Description {user.desc}</p><br/>
							 <span>{user.username}</span>
							</div> 
							<div class="card-footer colo">
							<p> <Coeur/>
							<Coms/>

</p> 
							</div> 
                            </div>
				
						
						
					
				))
			) : (
				<span>
				
				</span>
			)}

    </div>
)}
export default UserTable