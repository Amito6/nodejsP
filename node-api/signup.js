exports.demo =(request,response)=>{
    response.writeHead(200,{
        "Content-Type" : "application/json"
    });
    const message = JSON.stringify({
        message : "Success!"
    });
    response.write(message);
    response.end();
};
