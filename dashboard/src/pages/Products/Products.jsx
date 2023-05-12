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
      <div className="mainProducts">
      <LastProduct />
      <div className="productsBrandsTotal">
      <TotalProducts />
      <TotalBrands />
      </div>  
      </div>
      <div className="products">
        <ProductsList />
        <BrandsList />
      </div>
      <div className="brands"></div>
    </div>
  );
}

export default Products;
