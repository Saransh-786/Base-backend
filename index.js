require('dotenv').config()
console.log("saranswh chai");
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('saranshdotcom')
}
)

app.get('/login',(req,res)=>{
    res.send('<h1>please login at saranshdotcom</h1>')
}
)

app.get('/youtube',(req,res)=>{
    res.send("<h2> saransh and code</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})