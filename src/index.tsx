import React from 'react'
import ReactDOM from 'react-dom/client'

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

const Title = () => {
    return <h1>Hello React App Component</h1>
}

const Content = () => {
    return (
        <React.Fragment>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                fuga praesentium facere ea molestias enim veritatis beatae
                libero, dolor obcaecati harum rerum aliquid officia corporis.
                Quaerat nam voluptatem tempore cum!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                fuga praesentium facere ea molestias enim veritatis beatae
                libero, dolor obcaecati harum rerum aliquid officia corporis.
                Quaerat nam voluptatem tempore cum!
            </p>
        </React.Fragment>
    )
}

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
