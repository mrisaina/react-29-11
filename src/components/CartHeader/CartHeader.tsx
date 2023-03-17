type Props = {
    cartData: {
        [id: number]: number
    }
}
const CartHeader = (props: Props) => {
    return (
        <div>
            {Object.keys(props.cartData).map((id) => {
                return (
                    <div key={id}>
                        {id} : {props.cartData[Number(id)]}
                    </div>
                )
            })}
        </div>
    )
}
export default CartHeader
