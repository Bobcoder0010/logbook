import react from "react";
const App = ()=>{
    const [count, setCount ] = rect.useState(0);
    const handleClick = () =>{
        setCount(count +1);

    }
    return(
        <div >
         <button   type = "button"onClick={handleClick}>
            Register here 
            </button>
            {count}

         
         </div>
        
    );
};
export default App;
