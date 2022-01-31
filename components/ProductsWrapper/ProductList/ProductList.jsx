import React from "react";
import { useSort } from "../../../hooks/useSort";
import { StyledProductList } from "./StyledProductList";
import Product from "../../Product/Product";
import { useFilter } from "../../../hooks/useFilter";
import { usePagination } from "../../../hooks/usePagination";
import { motion } from "framer-motion";

function ProductList({ products }) {
	const { filteredProds } = useFilter();
	const { sorteredProds } = useSort();

	const filter = filteredProds(products);
	const sort = sorteredProds(filter);
	const { paginated } = usePagination(sort.length);
	const list = paginated(sort);

	return (
		<StyledProductList>
			{list.length > 0 &&
				list.map((product, index) => (
					<motion.div
						initial={{ opacity: 0, traslateX: -50, tralateY: -50 }}
						animate={{ opacity: 1, traslateX: 0, tralateY: 0 }}
						transition={{ duration: 0.1, delay: index * 0.1 }}
						key={product._id}
					>
						<Product {...product} />
					</motion.div>
				))}
		</StyledProductList>
	);
}

export default ProductList;
