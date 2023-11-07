const express = require('express')
const swaggerUi = require('swagger-ui-express')

const swaggerDocument = require('./swagger.json')

const app = express()
const port = 3000

app.use('/internal/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// swagger doc not generated for PURGE api
app.purge('/api/queue/:id', (req, res) => {
    // #swagger.summary = 'Purge API'
    // #swagger.description = 'Purge API'
    const id = req.params.id
    res.send(`Purged ${id}!`)
})

app.get('/', (req, res) => {
    // #swagger.summary = 'Home API'
    // #swagger.description = 'Home API'
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})