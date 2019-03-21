import React, { useState } from 'react';

const Stock= props =>(

    <div>
      
     {
         props.coms.length> 0 ? (
             props.coms.map(user=>(
                <div>{user} </div>  
             )
                )
         ):("")
     }
    </div>
)
export default Stock