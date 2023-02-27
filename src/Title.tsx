interface TitleComponent {
    title: string
}

const Title = (props: TitleComponent) => {
    return <h1>Hello {props.title}</h1>
}

export default Title
