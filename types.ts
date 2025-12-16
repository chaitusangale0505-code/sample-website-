import React from 'react';

export interface TherapyArea {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface ProductItem {
  name: string;
  chemical: string;
}

export interface ProductCategory {
  category: string;
  items: ProductItem[];
}