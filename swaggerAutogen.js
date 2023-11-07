const swaggerAutogen = require('swagger-autogen')

const outputFile = './swagger.json'
const endpointsFiles = ['index.js']

const config = {
  info: {
    title: 'Test API Documentation',
    description: 'Test API'
  },
  host: 'localhost',
  basePath: '/',
  schemes: ['http']
}

swaggerAutogen({
  openapi: '3.1.0'
})(outputFile, endpointsFiles, config).then(() => {
  require('./index')
})
