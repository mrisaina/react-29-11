import { Grid, Typography } from '@mui/material'
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
                <Grid item xs={12} sm={4}>
                    <ProductListItem
                        title="iPhone 14 Pro"
                        desc="This is description 14"
                        feature1="super phone"
                        feature2="256GB"
                        price={1200}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <ProductListItem
                        title="iPhone 12"
                        desc="Description 12"
                        feature1="phone"
                        feature2="128GB"
                        price={1000}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <ProductListItem
                        title="iPhone 11 Pro"
                        desc="This is description 11 Pro"
                        feature1="phone(("
                        feature2="64GB"
                        price={900}
                    />
                </Grid>
            </Grid>
        </>
    )
}
export default ProductList
