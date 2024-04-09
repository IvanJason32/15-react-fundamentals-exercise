// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

// ### Forms ###

// import * as React from 'react'

// function UsernameForm({onSubmitUsername}) {
//   // 🐨 add a submit event handler here (`handleSubmit`).
//   // 💰 Make sure to accept the `event` as an argument and call
//   // `event.preventDefault()` to prevent the default behavior of form submit
//   // events (which refreshes the page).
//   // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
//   //
//   // 🐨 get the value from the username input (using whichever method
//   // you prefer from the options mentioned in the instructions)
//   // 💰 For example: event.target.elements[0].value
//   // 🐨 Call `onSubmitUsername` with the value of the input

//   // 🐨 add the onSubmit handler to the <form> below

//   // 🐨 make sure to associate the label to the input.
//   // to do so, set the value of 'htmlFor' prop of the label to the id of input
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // console.log(event.target.elements.username.value);
//     onSubmitUsername(event.target.elements.username.value);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor='username'>Username:</label>
//         <input id='username' type="text" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// function App() {
//   const onSubmitUsername = username => alert(`You entered: ${username}`)
//   return <UsernameForm onSubmitUsername={onSubmitUsername} />
// }

// export default App

// ### Extra Credit - using refs ###

// import * as React from 'react'

// function UsernameForm({onSubmitUsername}) {
//   const inputRef = React.useRef();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(inputRef.current.value);
//     onSubmitUsername(inputRef.current.value);

//   };
  
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor='username'>Username:</label>
//         <input ref={inputRef} id='username' type="text" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// function App() {
//   const onSubmitUsername = username => alert(`You entered: ${username}`)
//   return <UsernameForm onSubmitUsername={onSubmitUsername} />
// }

// export default App

// ### Extra Credit - Validate lower-case ###

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef();
  const [error, setError] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputRef.current.value);
    onSubmitUsername(inputRef.current.value);

  };
  
  const handleChange = (event) => {
    // console.log(event);
    const value = event.target.value;
    const isValid = value === value.toLowerCase();
    // console.log(isValid);
    setError(isValid ? null : 'Username must be lower case');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>Username:</label>
        <input onChange={handleChange} ref={inputRef} id='username' type="text" />
      </div>
      {error &&<span role='alert' style={{color:'Red', fontWeight:'bold'}}>{error}</span>} 
      <button disabled={Boolean(error)} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App