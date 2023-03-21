import Typography from '@mui/material/Typography'
import productsArray, {
    getProductsObject,
    productListItem,
} from 'utils/productsArray'

type Props = {
    cartData: {
        [id: number]: number
    }

    productsObject?: {
        [id: number]: productListItem
    }
}
const CartPage = ({
    cartData,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <>
            <Typography variant="h4" component={'h1'}>
                CartPage
            </Typography>
            <div>
                {Object.keys(cartData).map((id) => {
                    return (
                        <div key={id}>
                            {productsObject[Number(id)].title} :{' '}
                            {cartData[Number(id)]}:{' '}
                            {productsObject[Number(id)].price}
                        </div>
                    )
                })}
                <div>
                    Total: ${' '}
                    {Object.keys(cartData).reduce((sum, itemId) => {
                        sum =
                            sum +
                            cartData[Number(itemId)] *
                                productsObject[Number(itemId)].price
                        return sum
                    }, 0)}
                </div>
            </div>
        </>
    )
}
export default CartPage
