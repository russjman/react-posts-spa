const express = require('express')
const https = require('https');
const bodyParser = require('body-parser')
const app = express()
const port = 9000

app.use(bodyParser.json()) // for parsing application/json

app.get('/posts', (req, res) => {
  //return res.send('GET HTTP method on posts resource');
  let chunks = ''
  https.get('https://jsonplaceholder.typicode.com/posts', (res2) => {
    res2.on('data', (d) => {
      chunks += d;
    })

    res2.on('end', () => {
      if(res.statusCode === 200) {
        res.send(chunks)
      }
    })
  })
})

app.post('/posts', (req, res) => {
  return res.send('POST HTTP method on posts resource');
});

app.put('/posts', (req, res) => {
  return res.send('PUT HTTP method on posts resource');
});

app.delete('/posts', (req, res) => {
  return res.send('DELETE HTTP method on posts resource');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
