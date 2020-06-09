const server = require('./server');
//port
const port = process.env.PORT || 8000;
server.listen(port, () => console.log(`\n** Running on port ${port} hard work **\n`));