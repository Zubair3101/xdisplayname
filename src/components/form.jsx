import React, { useState } from 'react'

function Form() {

    let [firstname, setFirstname] = useState("");
    let [lastname, setLastname] = useState("");
    let [fullname, setFullname] = useState("");

    let handleSubmit = (e) => {
        e.preventDefault();
        setFullname(`${firstname} ${lastname}`);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="fname">FIRSTNAME </label>
                <input type="text" id="fname" pattern="[A-Za-z]+" required onChange={e => setFirstname(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="lname">LASTNAME </label>
                <input type="text" id="lname" pattern="[A-Za-z]+" required onChange={e => setLastname(e.target.value)}/>
            </div>
            <button type='submit'>SUBMIT</button>
        </form>
        {fullname && <p>Full Name: {fullname}</p>}
    </div>
  )
}

export default Form;