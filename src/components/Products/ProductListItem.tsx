import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductListItem.scss'

type productListItem = {
    title: string
    desc: string
    feature1: string
    feature2: string
    price: number
}
const ProductListItem = ({
    title,
    desc,
    feature1,
    feature2,
    price,
}: productListItem) => {
    return (
        <Card variant="outlined" className="product">
            <CardContent>
                <h4 className="product-title">{title}</h4>
                <div className="product-desc">{desc}</div>
                <div className="product-features">Type: {feature1}</div>
                <div className="product-features">Capacity: {feature2}</div>
                <div className="product-price">
                    Price: <strong>${price}</strong>
                </div>
                <CardActions className="btns-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}
export default ProductListItem
