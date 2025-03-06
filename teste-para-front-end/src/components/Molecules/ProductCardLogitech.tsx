import Image from "next/image";
import Card from "../Atoms/Card";
import Button from "../Atoms/Button";
import LogitechBadge from "../Atoms/LogitechBadge";
import { Product } from "@/types/Product";
import Link from "next/link";

interface Props {
  product: Product;
  buttonName?: string;
}

export default function ProductCardLogitech({
  product,
  buttonName = "COMPRAR",
}: Props) {
  const { productName, imageURL, price = "00,00", previousPrice } = product;

  return (
    <Card
      variant="logitech"
      className="flex flex-col text-logitech-text gap-4 w-fit xs:p-6"
    >
      <Image
        className="w-full min-w-[132px] xs:min-w-[262px] h-auto rounded-sm"
        alt={productName}
        src={imageURL}
        width={252}
        height={200}
      />
      <LogitechBadge />
      <div className="line-clamp-2 xs:line-clamp-3">
        <p className="text-sm xs:text-base font-bold tracking-tighter leading-[1.2em]">
          {productName}
        </p>
      </div>
      <div className="w-full">
        {previousPrice && (
          <p className="line-through text-xs xs:text-base">
            R$ {previousPrice}
          </p>
        )}
        <p className="text-2xl xs:text-[2rem] text-logitech-accent font-bold">
          R$ {price}
        </p>
      </div>
      <Link href={`/product/${product.id}`}>
        <Button variant="logitech" className="w-full">
          {buttonName}
        </Button>
      </Link>
    </Card>
  );
}
