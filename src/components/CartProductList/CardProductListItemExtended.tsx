import { Button, Card, CardContent, Grid } from '@mui/material'
import { productListItem } from 'utils/productsArray'
import DeleteIcon from '@mui/icons-material/Delete'
import Quantity from 'components/Quantity/Quantity'
import { useAppSelector, useAppDispatch } from 'redux/hooks'
import { switchLike } from 'redux/likeReducer'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'

type Props = {
    product: productListItem
    productCount: number
    removeProductFromCart: (id: number) => void
    changeProductQuantity: (id: number, count: number) => void
}
const CardProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
    changeProductQuantity,
}: Props) => {
    let isLiked = useAppSelector((state) => state.productsLike[product.id])
    let dispatch = useAppDispatch()

    return (
        <Grid item xs={12} sm={4}>
            <Card>
                <CardContent>
                    <Button
                        variant="outlined"
                        onClick={() =>
                            dispatch(() => dispatch(switchLike(product.id)))
                        }
                    >
                        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Button>
                    <div className="product-image">
                        <img src={product.image} alt="" />
                    </div>
                    <h4>{product.title}</h4>
                    <p>Price for 1 item: {product.price}</p>
                    <p>Count: {productCount}</p>
                    <Quantity
                        count={productCount}
                        onDecrement={() =>
                            productCount === 1
                                ? removeProductFromCart(product.id)
                                : changeProductQuantity(
                                      product.id,
                                      productCount - 1
                                  )
                        }
                        onIncrement={() =>
                            changeProductQuantity(product.id, productCount + 1)
                        }
                        minCount={0}
                    />
                    <Button
                        variant="outlined"
                        onClick={() => removeProductFromCart(product.id)}
                    >
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default CardProductListItemExtended
