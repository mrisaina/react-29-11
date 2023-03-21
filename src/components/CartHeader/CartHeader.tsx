import CartProductList from 'components/CartProductList/CartProductList'
import CartTotal from 'components/CartTotal/CartTotal'

type Props = {
    cartData: {
        [id: number]: number
    }
}
const CartHeader = ({ cartData }: Props) => {
    return (
        <div>
            <CartProductList cartData={cartData} />
            <CartTotal cartData={cartData} />
        </div>
    )
}
export default CartHeader
