import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AgeCalculator from './components/AgeCalculator'
import PasswordInput from "./components/PasswordInput.tsx";
import PasswordStrength from "./components/PasswordStrength.tsx";
import CharacterSequenceValidator from "./components/CharacterSequenceValidator.tsx";
import PasswordTimeValidator from "./components/PasswordTimeValidator.tsx";
import CountryFlagValidator from "./components/CountryFlagValidator.tsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <AgeCalculator />
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <h2>PasswordSetter</h2>
            <PasswordInput passwordValue={password} setter={setPassword} />
            <br /> <br />
            <PasswordStrength password={password} />
            <CharacterSequenceValidator password={password} />
            <PasswordTimeValidator password={password} passwordCreationTime={passwordCreationTimeA} timeWindow={5000} />
            <CountryFlagValidator password={password} />
        </>
    )
}

export default App