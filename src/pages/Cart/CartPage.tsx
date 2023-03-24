import { Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import CardProductListItemExtended from 'components/CartProductList/CardProductListItemExtended'
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

    removeProductFromCart: (id: number) => void
}
const CartPage = ({ cartData, removeProductFromCart }: Props) => {
    return (
        <>
            <Typography variant="h4" component={'h1'}>
                CartPage
            </Typography>
            <Grid container spacing={4} sx={{ margin: 0 }}>
                <CartProductList
                    cartData={cartData}
                    CartItem={CardProductListItemExtended}
                    removeProductFromCart={removeProductFromCart}
                />
            </Grid>

            <CartTotal cartData={cartData} />
        </>
    )
}
export default CartPage
