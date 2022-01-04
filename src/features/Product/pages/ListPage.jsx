import { Box, Container, Grid, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import productApi from '../../../api/productApi';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';

function ListPage() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const params = { _limit: 50, _page: 1 };
        const productList = await productApi.getAll(params);
        setProductList(productList);
      } catch (error) {
        console.log('Fail to fetch product list: ', error);
      }

      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <Box>
      <Container>
        <Grid container spacing={0.5}>
          <Grid
            item
            sx={{
              width: '250px',
            }}
          >
            <Paper elevation={0}>Left column</Paper>
          </Grid>
          <Grid
            item
            sx={{
              flex: '1 1 0',
            }}
          >
            <Paper elevation={0}>
              {loading ? (
                <ProductSkeletonList />
              ) : (
                <ProductList data={productList.data} />
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

ListPage.propTypes = {};

export default ListPage;
