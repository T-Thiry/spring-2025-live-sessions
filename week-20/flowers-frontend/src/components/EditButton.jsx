
export const EditButton = async (id) => {

  try {
    const response = await fetch(`http://localhost:8080/flowers/${id}`, {
    method: "POST"
  })
  response.json()
} catch (err) {
  console.error(err)
}

  const handleEdit = (event) => {
    event.preventDefault()
    const newMessage = prompt("Edit the flower name:")
  }
  return (
    <button onClick={handleEdit}>✏️</button>
  )
}