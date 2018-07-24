import http from 'http'

import app from './server'

const server = http.createServer(app)
let currentApp = app

server.listen(3001,()=>{
	console.log('log to 3001 port')
})

if(module.hot){
	module.hot.accept(['./server'],()=>{
		server.removeListener('request', currentApp)
		server.on('request',app)
		currentApp = app
	})
}