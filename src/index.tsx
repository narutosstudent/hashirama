/* @refresh reload */
import './index.css'
import { Router } from '@solidjs/router'
import { render } from 'solid-js/web'

import { App } from './App'

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById('root') as HTMLElement
)
