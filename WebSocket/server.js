const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // SSR (Server Side Rendering) - index.html 파일 실행
  res.sendFile(__dirname + '/index.html');
  
});

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});

// WebSocket 서버 생성
const WebSocket = require('ws');
const wsServer = new WebSocket.Server({ port: 8081 });

// 클라이언트가 연결되었을 때
wsServer.on('connection', (ws, req) => {
  console.log('클라이언트가 연결되었습니다.');

  // 클라이언트로부터 메시지를 받았을 때
  ws.on('message', (message) => {
    console.log(`클라이언트로부터 메시지를 받았습니다: ${message}`);

    // 클라이언트로 메시지 전송
    ws.send('서버로부터 메시지를 받았습니다.');
  });
});
