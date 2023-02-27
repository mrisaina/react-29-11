import React from 'react'
import ReactDOM from 'react-dom/client'
import Content from './Content'
import Title from './Title'

const App = () => {
    return (
        <>
            <Title title="React" />
            <Title title="App Welcome" />
            <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
