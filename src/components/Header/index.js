import "./Header.styles.css"


function Header(props){

    return(
    <div>
        <h1 id="header">{props.name}</h1>
        <h3 id="header">{props.name}</h3> 
        <p className="text">{props.author} </p>
    </div> 
    
    
   )

}



export default Header;