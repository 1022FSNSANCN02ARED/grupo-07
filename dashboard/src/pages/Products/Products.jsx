import {
  HeaderProducts,
  LastProduct,
  BrandsList,
  ProductsList,
  TotalProducts,
  TotalBrands,
} from "../../components/ProductsComponents";

function Products() {
  return (
    <div className="body">
      <HeaderProducts />
      <LastProduct />
      <BrandsList />
      <ProductsList />
      <TotalProducts />
      <TotalBrands />
    </div>
  );
}

export default Products;
