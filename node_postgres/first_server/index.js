const http = require('http')

const hostname = 'localhost'
const port = 3000

const server = http.createServer((req, res) => {
    const { url } = req
    console.log(url);

    // if (url === '/translations') {
    //     res.end('translations')
    // }
    res.end('Welcome to node!')
})

server.listen(port, hostname, () => {
    console.log(`Server running at ${hostname}:${port}`);
}) 