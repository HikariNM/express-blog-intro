const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Server del mio blog')
})
app.get('/bacheca', (req, res) => {
  const dogs = [
    {
      title: "Byron",
      description: "Red Tricolor Australian Shepherd",
      img: "/img/Byron.jpg",
      tags: ["Male", "Aussie", "2022"],
    },
    {
      title: "Balto",
      description: "Blue Merle  Australian Shepherd",
      img: "/img/Balto.jpg",
      tags: ["Male", "Aussie", "2010"],
    },
    {
      title: "Star",
      description: "Blue MerleAustralian Shepherd",
      img: "/img/Star.jpg",
      tags: ["Female", "Aussie", "2023"],
    },
    {
      title: "Daiquiri",
      description: "Black Tricolor Australian Shepherd",
      img: "/img/Daiquiri.jpg",
      tags: ["Male", "Aussie", "2024"],
    },
    {
      title: "Baiko",
      description: "Kai Ken",
      img: "/img/Baiko.jpg",
      tags: ["Male", "KaiKen", "2023"],
    }
  ];
  res.json(dogs);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
