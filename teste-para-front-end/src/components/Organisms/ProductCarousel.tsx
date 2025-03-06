import { Product } from "@/types/Product";
import ProductCard from "../Molecules/ProductCard";

interface Props {
  products: Product[];
}

export default function ProductCarousel({ products }: Props) {
  return (
    <ul className="flex gap-4 xs:gap-10 w-full overflow-x-scroll xs:overflow-auto  ">
      {products.map(
        (product) =>
          !product.promo && (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          )
      )}
    </ul>
  );
}
