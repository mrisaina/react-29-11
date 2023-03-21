import Typography from '@mui/material/Typography'
import CartProductList from 'components/CartProductList/CartProductList'
import CartTotal from 'components/CartTotal/CartTotal'
import { productListItem } from 'utils/productsArray'

type Props = {
    cartData: {
        [id: number]: number
    }

    productsObject?: {
        [id: number]: productListItem
    }
}
const CartPage = ({ cartData }: Props) => {
    return (
        <>
            <Typography variant="h4" component={'h1'}>
                CartPage
            </Typography>
            <div>
                <CartProductList cartData={cartData} />
                <CartTotal cartData={cartData} />
            </div>
        </>
    )
}
export default CartPage
