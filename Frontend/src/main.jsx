import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createTheme, MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')).render(
  <MantineProvider>
    <App />
    </MantineProvider>
)
