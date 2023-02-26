const http = require('http')
const port = 3000

const server = http.createServer((req, res) => {
    const url = req.url
    
    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Users</title></head>')
        res.write('<body><h1>Mahlenskata banda</h1><ul><li>Misho Gospodinov</li><li>Rafael Iliev</li><li>Deivid Mollov</li></ul></body>')
        res.write('</html>')
        return res.end()
    }

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Greeting</title></head>')
        res.write('<body><h1>Hello, It\'s nice to meet you!</h1></body>')
        res.write('</html>')
        return res.end()
    }
})

server.listen(port)