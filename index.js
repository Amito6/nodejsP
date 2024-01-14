const http = require("http");
const fs = require("fs");
const signup = require("./node-api/signup");


    const route = (response,path,code,type) =>{
        fs.readFile(path,(error,dataRes)=>{
            if(error){
                throw error;
            }
            else{
                response.writeHead(code,{
                    "Content-Type" : type
                });
                response.write(dataRes);
                response.end();
            }
        });
    }

const server = http.createServer((request,response)=>{
    if(request.url == "/" ||request.url == "/home" || request.url == "/homepage")
    {
        let path = "html/homepage.html";
        let code = 200;
        let type="text/html";
        route(response,path,code,type)
    }
    else if(request.url == "/about" || request.url == "/about-us")
    {
        let path = "html/about-us.html";
        let code = 200;
        let type="text/html";
        route(response,path,code,type)
    }
    // code for css
    else if(request.url == "/css/homepage.css")
    {
        let path = "css/homepage.css";
        let code = 200;
        let type = "text/css";
        route(response,path,code,type)
    }
    //code for js
    else if(request.url == "/js/homepage.js")
    {
        let path = "js/homepage.js";
        let code = 200;
        let type = "text/javascript";
        route(response,path,code,type)
    }
    //node-api routing
    else if(request.url == "/api/signup"){
      signup.demo(request,response);
    }
    else(request.url == "/*")
    {
        let path = "html/not-found.html";
        let code = 404;
        let type="text/html";
        route(response,path,code,type)
    }
});
server.listen(8080);
