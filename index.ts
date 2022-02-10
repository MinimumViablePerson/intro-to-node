import express from 'express'

const app = express()
const PORT = 3000

type Doggo = {
  id: number
  name: string
  age: number
  hasOwner?: boolean
  size?: 'big' | 'small'
}

const dogs: Doggo[] = [
  {
    id: 1,
    age: 4,
    name: 'Nico',
    hasOwner: true,
    size: 'big'
  },
  {
    id: 2,
    age: 3,
    name: 'Ed',
    hasOwner: false,
    size: 'small'
  }
]

app.get('/', (req, res) => {
  res.send('Welcome to Node!!!!')
})

app.get('/getRandomNumber', (req, res) => {
  const randomNumber = Math.random()
  res.send(randomNumber.toString())
})

app.get('/dogs', (req, res) => {
  res.send(dogs)
})

app.get('/dogs/:id', (req, res) => {
  const id = Number(req.params.id)
  const match = dogs.find(dog => dog.id === id)
  if (match) {
    res.send(match)
  } else {
    res.status(404).send({ error: 'Dog not found.' })
  }
})

app.get('/greet/:name', (req, res) => {
  const name = req.params.name
  res.send(
    `Hello there, ${name.toUpperCase()}, your name is ${
      name.length
    } characters long!!`
  )
})

app.get('/someHTMLStuff', (req, res) => {
  res.send(`<div><h1>Welcome to node!</h1></div>`)
})

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`)
})
