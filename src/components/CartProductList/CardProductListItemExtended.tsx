import { Card, CardContent, Grid } from '@mui/material'
import { productListItem } from 'utils/productsArray'

type Props = {
    product: productListItem
    productCount: number
}
const CardProductListItemExtended = ({ product, productCount }: Props) => {
    return (
        <Grid item xs={12} sm={4}>
            <Card>
                <CardContent>
                    <div className="product-image">
                        <img src={product.image} alt="" />
                    </div>
                    <h4>{product.title}</h4>
                    <p>Price for 1 item: {product.price}</p>
                    <p>Count: {productCount}</p>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default CardProductListItemExtended
