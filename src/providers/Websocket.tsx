import { createContext, FC, useContext, useEffect, useState } from 'react';

type WebSocketProviderProps = { 
  url: string; 
  children: React.ReactNode
};

interface WebSocketContextValue {
  socket: WebSocket | null;
  isConnected: boolean;
}

// Create a context for the WebSocket
const WebSocketContext = createContext<WebSocketContextValue | null>(null);

export const useWebSocket = () => {
  const context = useContext(WebSocketContext);
  if (!context) {
    throw new Error('useWebSocket must be used within a WebSocketProvider');
  }
  return context;
};

export const WebSocketProvider: FC<WebSocketProviderProps> = ({ url, children }) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [isConnecting, setIsConnecting] = useState<boolean>(true);
  const [isConnected, setIsConnected] = useState<boolean>(false);

  useEffect(() => {
    const ws = new WebSocket(url);

    ws.onopen = () => {
      console.log('WebSocket connection opened');
      setIsConnecting(false);
      setIsConnected(true);
    };

    ws.onclose = () => {
      if (isConnected) {
        console.log('WebSocket connection closed');
        setIsConnecting(false);
        setIsConnected(false);
      }
    };

    ws.onerror = (error) => {
      if (isConnected) {
        console.error('WebSocket error:', error);
        setIsConnecting(false);
        setIsConnected(false);
      }
    };

    setSocket(ws);

    return () => {
      ws.close();
    };
  }, [url]);

  return (
    <WebSocketContext.Provider value={{ socket, isConnected }}>
      {children}
    </WebSocketContext.Provider>
  );
};