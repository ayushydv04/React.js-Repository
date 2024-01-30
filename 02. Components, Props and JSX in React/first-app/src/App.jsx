import { useState } from 'react'
// import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="main">
        <div className="Cards">
          <Card title="Card 1" description=" Card 1 desc" />
          <Card title="Card 2" description=" Card 2 desc" />
          <Card title="Card 3" description=" Card 3 desc" />
          <Card title="Card 4" description=" Card 4 desc" />

        </div>

      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App
