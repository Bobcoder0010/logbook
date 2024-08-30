
import react from "react-dom"
const App = ()=>{
    const [IsOpen, setOpen ] = rect.useState(false);
    const handleClick = () =>{
        setOpen(!IsOpen);

    }
    return(
        <div >
         <button   type = "button"onClick={handleClick}>
            Register here 
            </button>
            {isOpen && <div> Register here </div>}

         
         </div>
        
    );
};
export default App;
