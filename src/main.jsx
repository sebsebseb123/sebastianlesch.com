import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

console.log("Hiii! You're taking a look at the code :)");
console.log("Glad to hear it, hope you like what you see.");
console.log("Oh, and \"View Source\" if you haven't already.");

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
