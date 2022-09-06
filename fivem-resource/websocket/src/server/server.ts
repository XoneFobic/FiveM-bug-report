import {io, Socket} from 'socket.io-client';

import DisconnectReason = Socket.DisconnectReason;

class Server {
  private socket: Socket;

  public constructor() {
    this.setupComponent();
  }

  private setupComponent() {
    try {
      this.socket = io('http://localhost:3000');

      this.socket.on('connect', () => {
        console.log('Connected to server');

        this.socket.io.on('close', (reason: DisconnectReason) => {
          console.log('Connection closed', reason);
        })
      });
      this.socket.on('disconnect', (reason: DisconnectReason) => {
        console.log('Disconnected from server', reason);
      });
      this.socket.on('connect_error', (error: any) => {
        console.log('Connection error', error);
      });
    } catch (error) {
      console.error('Error');
    }
  }
}

new Server();
