interface TitleComponent {
    title: string
    year: number
}

const Title = (props: TitleComponent) => {
    return (
        <h1>
            Hello {props.title}, year: {props.year}
        </h1>
    )
}

export default Title
