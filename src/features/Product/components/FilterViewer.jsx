import { Box, Chip, Link } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

const services = [
  'Thời trang',
  'Khẩu trang',
  'Làm đẹp',
  'Laptop',
  'Ổ cứng',
  'Điện thoại',
];

const FILTER_LIST = [
  {
    id: 1,
    getLabel: () => 'FREESHIP',
    isVisible: () => true,
    isActive: (filters) => Boolean(filters.isFreeShip),
    isDeletable: false,
    onRemove: null,
    onToggle: (filters) => {
      const newFilters = { ...filters };

      if (newFilters.isFreeShip) {
        delete newFilters.isFreeShip;
      } else {
        newFilters.isFreeShip = true;
      }

      return newFilters;
    },
  },
  {
    id: 2,
    getLabel: () => 'Có khuyến mãi',
    isVisible: (filters) =>
      Object.keys(filters).includes('isPromotion') &&
      Boolean(filters.isPromotion),
    isActive: (filters) => Boolean(filters.isPromotion),
    isDeletable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };

      if (newFilters.isPromotion) {
        delete newFilters.isPromotion;
      }

      return newFilters;
    },
    onToggle: null,
  },
  {
    id: 3,
    getLabel: (filters) => services[filters['category.id'] - 1],
    isVisible: (filters) => Object.keys(filters).includes('category.id'),
    isActive: (filters) => Object.keys(filters).includes('category.id'),
    isDeletable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };

      if (newFilters['category.id']) {
        delete newFilters['category.id'];
      }

      return newFilters;
    },
    onToggle: null,
  },
  {
    id: 4,
    getLabel: (filters) =>
      `${new Intl.NumberFormat('de-DE').format(
        filters.salePrice_gte
      )}đ đến ${new Intl.NumberFormat('de-DE').format(filters.salePrice_lte)}đ`,
    isVisible: (filters) =>
      Object.keys(filters).includes('salePrice_gte') &&
      Object.keys(filters).includes('salePrice_lte'),
    isActive: (filters) =>
      Object.keys(filters).includes('salePrice_gte') &&
      Object.keys(filters).includes('salePrice_lte'),
    isDeletable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };

      if (
        Object.keys(newFilters).includes('salePrice_gte') &&
        Object.keys(newFilters).includes('salePrice_lte')
      ) {
        delete newFilters.salePrice_gte;
        delete newFilters.salePrice_lte;
      }

      return newFilters;
    },
    onToggle: null,
  },
];

function FilterViewer({ filters = {}, onChange = null }) {
  const visibleFilterList = useMemo(() => {
    return FILTER_LIST.filter((x) => x.isVisible(filters));
  }, [filters]);

  const handleRemoveAll = (filters) => {
    if (!onChange) return;

    const newFilters = {
      _page: 1,
      _limit: filters._limit,
      _sort: filters._sort,
    };

    onChange(newFilters);
  };

  const isShowRemoveAllBtn = (filters) => {
    const keys = Object.keys(filters);

    return (
      keys.includes('isFreeShip') ||
      keys.includes('isPromotion') ||
      keys.includes('category.id') ||
      keys.includes('salePrice_gte')
    );
  };

  return (
    <Box sx={{ py: 2, ml: 2 }}>
      {visibleFilterList.map((filter) => (
        <Chip
          key={filter.id}
          label={filter.getLabel(filters)}
          onClick={
            filter.isDeletable
              ? null
              : () => {
                  const newFilters = filter.onToggle(filters);

                  if (onChange) onChange(newFilters);
                }
          }
          onDelete={
            filter.isDeletable
              ? () => {
                  const newFilters = filter.onRemove(filters);

                  if (onChange) onChange(newFilters);
                }
              : null
          }
          color={filter.isActive(filters) ? 'primary' : 'default'}
          size="small"
          sx={{
            mr: 1,
          }}
        />
      ))}
      {isShowRemoveAllBtn(filters) && (
        <Link
          component="button"
          variant="body2"
          color="primary.dark"
          underline="none"
          onClick={() => handleRemoveAll(filters)}
        >
          Xoá tất cả
        </Link>
      )}
    </Box>
  );
}

FilterViewer.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

export default FilterViewer;
