const express = require('express')
const app = express()

app.set('view engine', 'pug')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => res.render('home'))
app.get('/services', (req, res) => res.render('services'))
app.get('/special-services', (req, res) => res.render('special-services'))
app.get('/safeguarding', (req, res) => res.render('safeguarding'))
app.get('/clergy', (req, res) => res.render('clergy'))

app.listen('3000', () => {
    console.log(`St Peters Walworth\nstarted: ${new Date().toLocaleString('en-GB')}`)
})