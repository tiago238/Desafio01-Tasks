import http from 'node:http';

const server = http.createServer((req,res) => {

    const { method, url } = req    

    if (method == 'GET' && url == '/tasks'){

    }    

    return res.end('teste de conexão')
})

server.listen(3333)
