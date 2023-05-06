import {
  HeaderProducts,
  LastProduct,
  MarkList,
  ProductsList,
} from "../../components/ProductsComponents";

function Products() {
  return (
    <div className="body">
      <HeaderProducts />
      <LastProduct />
      <MarkList />
      <ProductsList />
    </div>
  );
}

export default Products;
