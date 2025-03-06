import Image from "next/image";
import Card from "../Atoms/Card";
import Button from "../Atoms/Button";

interface Props {
  productName: string;
  imageURL: string;
  previousPrice?: string;
  price: string;
  info?: string;
  buttonName?: string;
}

export default function ProductCard({
  productName,
  imageURL,
  price = "00,00",
  previousPrice,
  info,
  buttonName = "COMPRAR",
}: Props) {
  return (
    <Card className="flex flex-col text-text gap-6 w-fit">
      <Image
        className="w-[132px] xs:w-[200px] h-auto rounded-sm"
        alt={productName}
        src={imageURL}
        width={200}
        height={200}
        sizes="100vw"
      />
      <div className="line-clamp-2 xs:line-clamp-3 w-[132px] xs:w-[200px]">
        <p className="text-sm xs:text-base font-bold tracking-tighter leading-[1.2em]">
          {productName}
        </p>
      </div>
      <div className="w-full">
        {previousPrice && (
          <p className="line-through text-xs xs:text-sm">R$ {previousPrice}</p>
        )}
        <p className="text-lg font-bold">R$ {price}</p>
        {info && (
          <p className="text-xs xs:text-sm leading-[1.2em] text-accent -tracking-[.02em]">
            {info}
          </p>
        )}
      </div>
      <Button className="w-[132px] xs:w-[200px]">{buttonName}</Button>
    </Card>
  );
}
