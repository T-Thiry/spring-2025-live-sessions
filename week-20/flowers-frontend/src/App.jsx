import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [flowers, setFlowers] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchFlowers = () => {
    setLoading(true)
    fetch("http://localhost:8080/flowers")
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error('Network response was not ok')
      })
      .then(data => {
        setFlowers(data.response)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchFlowers()
  }, [])



  const handleClick = () => {
    setLoading(true)
    fetch("http://localhost:8080/flowers?color=Red")
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error('Network response was not ok')
      })
      .then(data => {
        setFlowers(data.response)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const flowerName = event.target.flowerName.value
    const flowerColor = event.target.flowerColor.value
    fetch("http://localhost:8080/flowers", {
      method: "POST",
      body: JSON.stringify({ name: flowerName, color: flowerColor }),
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  if (loading) {
    return <p>LOADING...</p>
  }

  return (
    <>
      <h1>Flower Power!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="flowerName">Flower Name:</label>
          <input
            type="text"
            name="flowerName"
            id="flowerName"
            aria-label="Enter the name of the flower"
            placeholder="e.g., Rose, Tulip, Daisy"
            required
          />
        </div>
        <div>
          <label htmlFor="flowerColor">Flower Color:</label>
          <input
            type="text"
            name="flowerColor"
            id="flowerColor"
            aria-label="Enter the color of the flower"
            placeholder="e.g., Red, Blue, Yellow"
            required
          />
        </div>
        <button type="submit" aria-label="Add new flower to the collection">
          Add flower
        </button>
      </form>
      <button onClick={handleClick} aria-label="Filter flowers to show only red ones">
        Get red flowers
      </button>
      {flowers.length && flowers.map(flower => <p>{flower.name} - {flower.color}</p>)}
    </>
  )
}

export default App
