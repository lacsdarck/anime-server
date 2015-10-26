'use strict'

const http = require('http');//permite crear un servidor 
const port = process.env.PORT || 8080

const server = http.createServer() 

server.on('request',onRequest)
server.on('listening',onListening)
	
function onRequest (req,res) {
	// body...
	res.end('hola io.js')
}

function onListening () {

  console.log('  El servidor esta escuchando en el puerto  '+port)
}
