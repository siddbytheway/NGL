const http = require("http")

const PORT = 3000

const server = http.createServer((req , res) => {
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end("Testing<br><input type='text'/><br><button>click</button>")
})

server.listen(PORT , 'localhost' , () => {
    console.log(`Server running at localhost:${PORT}`)

    document.querySelector('button').addEventListener('click' , () => {
        const text = document.querySelector("input").value
        console.log(text);
    })


})

