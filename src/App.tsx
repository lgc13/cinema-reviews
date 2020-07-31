import React from "react"
import logo from "./logo.svg"
import "./App.css"

const App: React.FC = () => {
    const OtherHeading: React.FC = () => <h1>My Website Heading</h1>

    const doMath = (): number => {
        console.log("doing math....")
        return 1 + 1
    }

    const myFunction = (message: string) => {
        console.log(`Message" ${message}`)
        console.log(`doMath: ${doMath()}`)
        return message
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
                {OtherHeading({})}
                {myFunction("some message")}
            </header>
        </div>
    )
}

export default App
