import { StrictMode, Component } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("React Error Boundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '40px 24px',
          color: '#FF9EBD',
          fontFamily: 'sans-serif',
          background: '#07152F',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}>
          <h1 style={{ color: '#FFD38A', marginBottom: '16px' }}>Runtime Exception Detected</h1>
          <p style={{ color: '#C8C7FF', marginBottom: '24px' }}>{this.state.error?.message || String(this.state.error)}</p>
          <pre style={{
            textAlign: 'left',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-all',
            color: '#8AE4FF',
            background: 'rgba(11, 31, 70, 0.8)',
            padding: '20px',
            borderRadius: '12px',
            border: '1px solid rgba(138, 228, 255, 0.2)',
            maxWidth: '800px',
            width: '100%',
            overflowX: 'auto'
          }}>
            {this.state.error?.stack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)

