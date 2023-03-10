import { Grid, Typography } from '@mui/material'
import productsArray from 'utils/productsArray'
import ProductListItem from './ProductListItem'

type Props = {}
const ProductList = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    marginBottom: '30px',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                }}
            >
                List of products
            </Typography>

            <Grid container spacing={4}>
                {productsArray.map(
                    ({ id, title, desc, type, capacity, price, image }) => {
                        return (
                            <Grid item xs={12} sm={4} key={id}>
                                <ProductListItem
                                    title={title}
                                    desc={desc}
                                    type={type}
                                    capacity={capacity}
                                    price={price}
                                    image={image}
                                />
                            </Grid>
                        )
                    }
                )}
            </Grid>
        </>
    )
}
export default ProductList
