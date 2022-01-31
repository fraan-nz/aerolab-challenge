import React, { useState } from "react";
import { StyledProductsWrapper } from "./StyledProductsWrapper";
import { TitleL2 } from "../Titles/StyledTitle";
import Filter from "./Filter/Filter";
import Sort from "./Sort/Sort";
import PaginationButton from "./Pagination/PaginationButton";
import ProductList from "./ProductList/ProductList";
import TotalProducts from "../ProductsWrapper/Pagination/TotalProducts";

function ProductsWrapper({ products }) {
	return (
		<StyledProductsWrapper id="products-section">
			<div className="products__title">
				<TitleL2 color="gradient">tech</TitleL2>
				<TitleL2 color="black">products</TitleL2>
			</div>
			<div className="products__menu-top">
				<Filter />
				<Sort />
				<PaginationButton />
			</div>
			<ProductList products={products} />
			<div className="products__menu-bottom">
				<TotalProducts />
				<PaginationButton />
			</div>
		</StyledProductsWrapper>
	);
}

export default ProductsWrapper;
