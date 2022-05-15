import "./Header.styles.css"


function Header(props){

    return(
    <div>
        <ch1 id="header">{props.name}</ch1>
        <h3 id="header">{props.name}</h3> 
        <p className="text">{props.author} </p>
    </div> 
    
    
   )

}



export default Header;