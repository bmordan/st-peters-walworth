const pug = require('pug')
const fs = require('fs/promises')
const pages = require('./pages')
const path = require('path')

async function main () {
    await Promise.all(pages.map(async page => {
        const tpl = await pug.compileFile(path.join(__dirname, '..', 'views', `${page}.pug`))
        return await fs.writeFile(path.join(__dirname, '..', 'public', `${page}.html`), tpl())
    }))
}

main()