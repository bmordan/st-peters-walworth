const express = require('express')
const app = express()
const static = require('serve-static')
const pages = require('./lib/pages')

app.set('view engine', 'pug')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(static('public', {index: ['index.html'], extensions: ['html']}))

pages.unshift("")

pages.forEach(page => app.get(`/${page}`, (req, res) => res.render(page || 'index')))

app.listen('3000', async () => {
    console.log(`St Peters Walworth\nstarted: ${new Date().toLocaleString('en-GB')}`)
})
