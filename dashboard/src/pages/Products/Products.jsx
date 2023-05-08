import {
  HeaderProducts,
  LastProduct,
  MarkList,
  ProductsList,
  TotalProducts,
} from "../../components/ProductsComponents";

function Products() {
  return (
    <div className="body">
      <HeaderProducts />
      <LastProduct />
      <MarkList />
      <ProductsList />
      <TotalProducts />
    </div>
  );
}

export default Products;
