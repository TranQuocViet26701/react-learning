import { Box, Container, Grid, Pagination, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import productApi from '../../../api/productApi';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';

function ListPage() {
  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    total: 12,
  });
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 12,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, pagination } = await productApi.getAll(filters);

        // set data and pagination
        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Fail to fetch product list: ', error);
      }

      setLoading(false);
    };

    fetchProducts();
  }, [filters]);

  const handlePageChange = (event, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _page: value,
    }));
  };

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
                <ProductSkeletonList length={filters.limit} />
              ) : (
                <ProductList data={productList} />
              )}
            </Paper>

            <Pagination
              color="primary"
              count={Math.ceil(pagination.total / pagination.limit)}
              page={pagination.page}
              onChange={handlePageChange}
              defaultPage={6}
              sx={[
                {
                  my: '14px',
                },
                {
                  '& ul': {
                    justifyContent: 'flex-end',
                  },
                },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

ListPage.propTypes = {};

export default ListPage;
