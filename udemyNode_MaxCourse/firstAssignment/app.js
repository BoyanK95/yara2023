const http = require('http')
const port = 3000

const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method
    
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
        res.write('<body>')
        res.write('<h1>Hello, It\'s nice to meet you!</h1>')
        res.write('<form action="/create-user" method="POST"><input type="text" name="username" type="submit"><button>Add user</button></form>')
        res.write('</body>')
        res.write('</html>')
        return res.end()
    }
    if (url === '/create-user' && method === 'POST') {
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk)
        })
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString() //username=whatever=the-user-entered
            console.log(parseBody.split('=')[1]);
        })
        res.statusCode = 302
        res.setHeader('Location', '/')
        res.end()
    }
})

server.listen(port)