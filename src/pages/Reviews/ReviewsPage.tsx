import {
    Button,
    Card,
    CardContent,
    TextareaAutosize,
    TextField,
} from '@mui/material'
import Title from 'components/Title/Title'
import { useState } from 'react'

type Props = {}

type Review = {
    name: string
    text: string
}
const ReviewsPage = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'Евгеній',
            text: 'Навіть не знаю, щр написати. Телефон як телефон. Не був моєю мрією ніколи)) Перейшов з Huawei P20 якому вдже 5-й рік ішов. Перший ифон. Ніякого вау ефекта не викликав. Сподобалась батарея. В моїх режимах використання тримає майже 3 дні',
        },
        {
            name: 'Юрій',
            text: 'Це просто вау) як завжди розетка на висоті по доставці та обслуговуванню Змінювала с 11 про мах і є різниця в самому розмірі та в розмірах камери ( вони величезні)',
        },
    ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)
    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const onSend = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert('All fields required!')
            return
        }
        setReviews((prevState) => {
            return [...prevState, newReview]
        })
        setNewReview({
            name: '',
            text: '',
        })
    }

    console.log(newReview)

    return (
        <>
            <Title>Reviews</Title>

            {reviews.map(({ name, text }, id) => {
                return (
                    <Card sx={{ margin: '30px 0', padding: '0 20px' }} key={id}>
                        <CardContent>
                            <div>{name}: </div>
                            <div>{text}</div>
                        </CardContent>
                    </Card>
                )
            })}

            <form onSubmit={onSend}>
                <h3>Please, leave the review</h3>
                <div>
                    <TextField
                        size="small"
                        placeholder="Your name"
                        value={newReview.name}
                        onChange={handleName}
                    />
                </div>
                <br />
                <div>
                    <TextareaAutosize
                        placeholder="Your message"
                        minRows={5}
                        value={newReview.text}
                        onChange={handleText}
                    />
                </div>
                <Button type="submit" variant="outlined">
                    Send
                </Button>
            </form>
        </>
    )
}
export default ReviewsPage
