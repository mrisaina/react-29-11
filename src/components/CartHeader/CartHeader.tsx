import productsArray from 'utils/productsArray'

type Props = {
    cartData: {
        [id: number]: number
    }
}
const CartHeader = ({ cartData }: Props) => {
    return (
        <div>
            {Object.keys(cartData).map((id) => {
                let product = productsArray.find((el) => Number(id) === el.id)
                return (
                    <div key={id}>
                        {product?.title} : {cartData[Number(id)]}
                    </div>
                )
            })}
        </div>
    )
}
export default CartHeader
