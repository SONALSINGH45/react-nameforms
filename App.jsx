import React,{useState} from "react";


const App=()=>{

    const [name,setName]=useState("");
    const[fullName,setfullName]=useState("")
    const[lastName,setlastName]=useState("");
    const[lastNamenew,setlastNamenew]=useState("")

    const onSubmits=(event)=>{
        event.preventDefault();
        setfullName(name);
        setlastNamenew(lastName);
    }

    const inputEvent=(event)=>{
        console.log(event.target.value)
        setName(event.target.value)
    }
    const inputEventTwo=(event)=>{
        //console.log(event.target.value)
        setlastName(event.target.value)
    }


    return(

    <>
    <form onSubmit={onSubmits}>
    <div>
        <h1> Hello {fullName} {lastNamenew}</h1>
        <input type='text' placeholder="enter your name"
        onChange={inputEvent}
        value={name}
        />
        <input type='text' placeholder="enter your lastname"
        onChange={inputEventTwo}
        value={lastName}
        />
        <button type='submit'> submit me</button>
    </div>
    </form>
    </>
    );
}


export default App;