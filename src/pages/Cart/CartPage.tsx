import { Grid } from '@mui/material'
import CardProductListItemExtended from 'components/CartProductList/CardProductListItemExtended'
import CartProductList from 'components/CartProductList/CartProductList'
import CartTotal from 'components/CartTotal/CartTotal'
import Title from 'components/Title/Title'
import { productListItem } from 'utils/productsArray'

type Props = {
    cartData: {
        [id: number]: number
    }

    productsObject?: {
        [id: number]: productListItem
    }

    removeProductFromCart: (id: number) => void
    changeProductQuantity: (id: number, count: number) => void
}
const CartPage = ({
    cartData,
    removeProductFromCart,
    changeProductQuantity,
}: Props) => {
    return (
        <>
            <Title>Cart Page</Title>
            <Grid container spacing={4} sx={{ margin: 0 }}>
                <CartProductList
                    cartData={cartData}
                    CartItem={CardProductListItemExtended}
                    removeProductFromCart={removeProductFromCart}
                    changeProductQuantity={changeProductQuantity}
                />
            </Grid>

            <CartTotal cartData={cartData} />
        </>
    )
}
export default CartPage
