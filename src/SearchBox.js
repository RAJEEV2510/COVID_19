import React from 'react'
function  Search(props)
{
    return (
    <>
<input type="search"
style={{
    width:'200px',
    height:"30px",
    marginBottom:'40px'
}}

 className="search"  placeholder={props.placeholder} onChange={props.handlechange}>
    </input>
     </>
    )
}
export  default  Search ;