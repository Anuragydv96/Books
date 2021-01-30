import React from 'react'

const Student = () =>{
    return(
        <>
        <div className="form">
                        <h2>Resistration Form</h2>

        <label>ID:</label><br></br>
        <input type="text" value="" placeholder="ID No."/><br></br>

        <label>Name:</label> <br></br>
         <input type="text" value="" placeholder=" Name"/><br></br>

        <label>Phone no</label><br></br>
            <input type="text" value="" placeholder=" Mobile no."/><br></br>

            <label>Email:</label><br></br>  
             <input type="text" value="" placeholder=" Email "/><br></br>

            <label>Cource:</label><br></br>    
            <input type="text" value="" placeholder="Cource "/><br></br>

            <label>Address:</label><br></br>
            <input type="text" value="" placeholder="Address "/><br></br>

            <button>Register</button>



        </div>
                   
        </>
    );
}

export default Student;