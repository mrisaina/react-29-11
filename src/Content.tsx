type ContentType = {
    text1: string
    text2: string
}

const Content = (props: ContentType) => {
    return (
        <>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
        </>
    )
}

export default Content
