import React from 'react'

const Regestration = () => {
  return (
    <div>
      <form action="">
        <fieldset>
            <legend>Register</legend>
            <label htmlFor="">Name: </label>
            <input type="text" />
            <label htmlFor="">Email: </label>
            <input type="email" />
            <label htmlFor="">Phone: </label>
            <input type="tel" />
             <button>Submit</button>
        </fieldset>
      </form>
    </div>
  )
}

export default Regestration
