import { Product } from "@/types/Product";
import ProductCardLogitech from "../Molecules/ProductCardLogitech";

interface Props {
  products: Product[];
}

export default function Products({ products }: Props) {
  return (
    <ul className="grid grid-cols-2 gap-4 xs:gap-10 xs:flex xs:justify-between">
      {products.map(
        (product) =>
          product.promo && (
            <li key={product.id}>
              <ProductCardLogitech product={product} />
            </li>
          )
      )}
    </ul>
  );
}
