import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import { useState } from 'react'
import './ProductListItem.scss'

type productListItem = {
    title: string
    desc: string
    type: string
    capacity: number
    price: number
    image: string
}
const ProductListItem = ({
    title,
    desc,
    type,
    capacity,
    price,
    image,
}: productListItem) => {
    const [count, setCount] = useState<number>(1)

    const [countEl, setPhoneCount] = useState<number>(0)

    const onIncrement = () => {
        setCount(count + 1)
    }

    const onDecrement = () => {
        setCount(count - 1)
    }

    return (
        <Card variant="outlined" className="product">
            <CardContent>
                <div className="product-image">
                    <img src={image} alt="" />
                </div>
                <h4 className="product-title">{title}</h4>
                <div className="product-desc">{desc}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity}GB</div>
                <div className="product-price">
                    Price: <strong>${price}</strong>
                </div>
                <div className="product-quantity">
                    <Button
                        variant="outlined"
                        onClick={onDecrement}
                        disabled={count <= 1}
                    >
                        -
                    </Button>
                    <TextField size="small" value={count} />
                    <Button variant="outlined" onClick={onIncrement}>
                        +
                    </Button>
                </div>
                <CardActions className="btns-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}
export default ProductListItem
