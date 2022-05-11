import {useState} from "react";



function Footer() {
    const [show,setShow] = useState(false)

    function handleClick() {
        setShow(true)
    }

    
    return (
        <div>
        
            {show &&  <h3>login in</h3>}
            
    
        
            <button onClick={handleClick}>Click</button>
        </div>
    )
}


export default Footer