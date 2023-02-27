import React from 'react'
import ReactDOM from 'react-dom/client'
import Content from './Content'
import Title from './Title'

const App = () => {
    return (
        <>
            <Title title="React" year={2022} />
            <Title title="App Welcome" year={2023} />
            <Content text1="Text1, Hello!" text2="Text2, Hello!" />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
