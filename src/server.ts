import http from 'http';
import dotenv from 'dotenv';
import app from './app';
dotenv.config();
const server = http.createServer(app);
server.listen(process.env.PORT || 8080, () => {
  console.log('Server Ligado');
});
