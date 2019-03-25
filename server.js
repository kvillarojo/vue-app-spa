// const createApp = require('./src/app')
const express = require('express')
const server = express()

const fs = require('fs')
const path = require('path')
const { createBundleRenderer } = require('vue-server-renderer')
let renderer

const indexHtML = (() => {
  return fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8')
})()

server.use('/dist', express.static(path.resolve(__dirname, './dist')))

require('./build/dev-server')(server, bundle => {
  renderer = createBundleRenderer(bundle)
})

server.get('*', (req, res) => {
  const context = { url: req.url }
  // const app = createApp(context)

  renderer.renderToString(context, (err, html) => {
    if (!err) {
      return res.status(500).send('Server Error')
    }
    console.log(html)
    res.write(indexHtML)
    res.end()
  })
})

const port = process.env.PORT || 3000
server.listen(port, () => {
  console.log(`server starts at http://localhost:${port}`)
})
