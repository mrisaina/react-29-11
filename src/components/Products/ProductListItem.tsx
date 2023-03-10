import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import { Component } from 'react'
import './ProductListItem.scss'

type productListItem = {
    title: string
    desc: string
    type: string
    capacity: number
    price: number
    image: string
}

class ProductListItem extends Component<productListItem> {
    render() {
        return (
            <Card variant="outlined" className="product">
                <CardContent>
                    <div className="product-image">
                        <img src={this.props.image} alt="" />
                    </div>
                    <h4 className="product-title">{this.props.title}</h4>
                    <div className="product-desc">{this.props.desc}</div>
                    <div className="product-features">
                        Type: {this.props.type}
                    </div>
                    <div className="product-features">
                        Capacity: {this.props.capacity}GB
                    </div>
                    <div className="product-price">
                        Price: <strong>${this.props.price}</strong>
                    </div>
                    <div className="product-quantity">
                        <Button variant="outlined">-</Button>
                        <TextField size="small" value="1" />
                        <Button variant="outlined">+</Button>
                    </div>
                    <CardActions className="btns-wrap">
                        <Button variant="outlined">Add to cart</Button>
                    </CardActions>
                </CardContent>
            </Card>
        )
    }
}

// const ProductListItem = ({
//     title,
//     desc,
//     type,
//     capacity,
//     price,
//     image,
// }: productListItem) => {
//     return (
//         <Card variant="outlined" className="product">
//             <CardContent>
//                 <div className="product-image">
//                     <img src={image} alt="" />
//                 </div>
//                 <h4 className="product-title">{title}</h4>
//                 <div className="product-desc">{desc}</div>
//                 <div className="product-features">Type: {type}</div>
//                 <div className="product-features">Capacity: {capacity}GB</div>
//                 <div className="product-price">
//                     Price: <strong>${price}</strong>
//                 </div>
//                 <div className="product-quantity">
//                     <Button variant="outlined">-</Button>
//                     <TextField size="small" value="1" />
//                     <Button variant="outlined">+</Button>
//                 </div>
//                 <CardActions className="btns-wrap">
//                     <Button variant="outlined">Add to cart</Button>
//                 </CardActions>
//             </CardContent>
//         </Card>
//     )
// }
export default ProductListItem
