import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParentComponent from './components/props/ParentComponent'
import UserProfile from './components/componentComposition/UserProfile'
import Dashboard from './components/conditionalRendering/Dashboard'
import UserDashboard from './components/combinedComponents/UserDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ParentComponent />
      <UserProfile
        imageUrl="https://rickandmortyapi.com/api/character/avatar/77.jpeg"
        name="John Doe"
        email="john.doe@example.com"
        bio="Frontend developer with a passion for clean design and performant code."
      />
      <Dashboard isLoggedIn={true} />
      <UserDashboard
        name="Beth smith"
        age={28}
        email="Beth.smith@example.com"
        imageUrl="https://rickandmortyapi.com/api/character/avatar/4.jpeg"
        isLoggedIn={false}
      />
    </>
  );
}

export default App
