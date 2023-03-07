import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductListItem.scss'

type productListItem = {
    title: string
    desc: string
    feature1: string
    feature2: string
    price: number
}
const ProductListItem = (props: productListItem) => {
    return (
        <Card variant="outlined" className="product">
            <CardContent>
                <h4 className="product-title">{props.title}</h4>
                <div className="product-desc">{props.desc}</div>
                <div className="product-features">Type: {props.feature1}</div>
                <div className="product-features">
                    Capacity: {props.feature2}
                </div>
                <div className="product-price">
                    Price: <strong>${props.price}</strong>
                </div>
                <CardActions className="btns-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}
export default ProductListItem
