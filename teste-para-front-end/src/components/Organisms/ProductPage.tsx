import { Product } from "@/types/Product";
import Button from "../Atoms/Button";
import Image from "next/image";

interface Props {
  id: number;
}

export default async function ProductInfo({ id }: Props) {
  const response = await fetch(`http://localhost:3000/api/products?id=${id}`);

  const { imageURL, price, productName, promo, info, previousPrice }: Product =
    await response.json();

  return (
    <div className="px-4 py-8 flex flex-col gap-10 items-center lg:flex-row lg:px-16 lg:py-32 max-w-[1440px]">
      <Image
        className="min-w-[343px] md:min-w-[500px] max-w-[624px] w-full h-auto rounded-sm"
        alt={productName}
        src={imageURL}
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <p className="text-2xl font-bold tracking-tighter leading-[1.2em]">
            {productName}
          </p>
          <div>
            {promo && (
              <p>
                vendido e entregue por
                <span className="text-logitech-accent font-bold">
                  {" "}
                  Logitech Brasil
                </span>
              </p>
            )}
            <p className="text-accent font-bold">Em estoque</p>
          </div>
          <div className="w-full">
            {previousPrice && (
              <p className="line-through">R$ {previousPrice}</p>
            )}
            <p className="text-5xl text-accent font-bold">R$ {price}</p>
            {info && (
              <p className="leading-[1.2em] -tracking-[.02em]">{info}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <Button className="py-3">COMPRAR</Button>
          <Button className="py-3" outline>
            ADICIONAR AO CARRINHO
          </Button>
        </div>
      </div>
    </div>
  );
}
