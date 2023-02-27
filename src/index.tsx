import React from 'react'
import ReactDOM from 'react-dom/client'
import Content from './Content'
import Title from './Title'

// const title = React.createElement(
//     'h1',
//     {
//         id: 'title',
//         className: 'className',
//     },
//     'hello react'
// )

// added element with JSX

// const title = (
//     <h1 id="red" className="className">
//         <div>title</div>
//     </h1>
// )

// const list = (
//     <ul>
//         <li>list item 1</li>
//         <li>list item 2</li>
//         <li>list item 3</li>
//     </ul>
// )

// const content = (
//     <div>
//         {title}
//         {list}
//     </div>
// )

const App = () => {
    return (
        <>
            <Title /> <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
