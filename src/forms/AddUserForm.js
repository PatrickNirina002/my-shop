import React, { useState } from 'react'
import "./form.css"
import "bootstrap/dist/css/bootstrap.min.css"

const AddUserForm = props => {
	const initialFormState = { id: [], name: '', username: '',desc:'' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
        <div >
			<div class="nai">
		<form class="mb"
			onSubmit={event => {
				
				event.preventDefault()
				if (!user.name || !user.username) return
                if(isNaN(user.username)) return
				props.addUser(user)
				props.setCount(props.count + 1)
				setUser(initialFormState)
			}}
		>
		<table>
		<tr>
		        <td><label class="s">Produit</label></td>
			    <td><input  type="text" name="name" value={user.name} onChange={handleInputChange} /><br/></td>
		</tr>
			<tr>
			    <td><label class="s" >Prix</label></td>
			    <td><input type="text" name="username" value={user.username} onChange={handleInputChange} /><br/> </td>
			</tr>
			<tr>
			<td></td>
			<td><div id="sis"></div></td>
			</tr>
			<tr>
			    <td><label class="s" >Description</label></td>
			    <td><textarea name="desc" value={user.desc} onChange={handleInputChange}></textarea> </td>
			</tr>
		</table>
			<label class="btn btn-success sii" for="fichier">File</label>
            <input class="name" type="file" accept=".jpg, .jpeg, .png" onchange={
			 (filename)=> {
					document.getElementById('div1').innerHTML='<img src="file://'+filename+'" width="200px" height="auto"/>';
			}}/><br/>
			<button class="btn btn-primary pi" name="fichier" onClick={()=>{
				(isNaN(user.username))?document.getElementById("sis").innerHTML="Entrer un nombre":document.getElementById("sis").innerHTML=""}}>Ajouter</button>
			
		</form>
		</div>
        </div>
	)
}

export default AddUserForm