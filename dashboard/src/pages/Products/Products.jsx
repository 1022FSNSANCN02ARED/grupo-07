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
      <div className="lists">
      <div className="products">
        <TotalProducts />
        <ProductsList />
      </div>
      <div className="brands">
        <TotalBrands />
        <BrandsList />
      </div>
      </div>
    </div>
  );
}

export default Products;
