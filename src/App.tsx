import React, { useEffect } from 'react'
import ToDo from './components/Todo.tsx'

function App() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(
          (registration) => {
            console.log(
              'ServiceWorker registration successful with scope: ',
              registration.scope
            )
          },
          (err) => {
            console.log('ServiceWorker registration failed: ', err)
          }
        )
      })
    }

    if ('Notification' in window && 'serviceWorker' in navigator) {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          console.log('Notification permission granted.')
        }
      })
    }
  }, [])

  return (
    <div className='App'>
      <ToDo />
    </div>
  )
}
export default App
