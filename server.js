const express = require('express');
const fs = require("fs").promises;
const path = require("path");

const hostName = "127.0.0.1";
const port = 3333;


const app = express();


app.use(express.static(path.join(__dirname, 'public')));


app.get("/",(req,res)=>{
  getHtmlPage("index.html")
  .then(html=>{
    res.header("Content-Type", "text/html");
    res.statusCode = 200;
    res.send(html);
  });
});

app.get("/news",(req,res)=>{
  getHtmlPage("news.html")
  .then(html=>{
    res.header("Content-Type", "text/html");
    res.statusCode = 200;
    res.send(html);
  });
});
app.get("/menu",(req,res)=>{
  getHtmlPage("menu.html")
  .then(html=>{
    res.header("Content-Type", "text/html");
    res.statusCode = 200;
    res.send(html);
  });
});

app.get("/contact",(req,res)=>{
  getHtmlPage("contact.html")
  .then(html=>{
    res.header("Content-Type", "text/html");
    res.statusCode = 200;
    res.send(html);
  });
});


app.listen(port, ()=>{
  console.log(`Server is running : http://${hostName}:${port}`);
});


async function getHtmlPage(pathName){
  const html = await fs.readFile(path.join(__dirname, pathName));
  return html;
}

