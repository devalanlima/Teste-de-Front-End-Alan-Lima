import Image from "next/image";
import { Product } from "@/types/Product";
import Products from "@/components/Organisms/Products";
import HardwareBadge from "@/components/Atoms/HardwareBadge";
import ProductCarousel from "@/components/Organisms/ProductCarousel";

export default async function TemplateHome() {
  const response = await fetch("http://localhost:3000/api/products");
  const products: Product[] = await response.json();

  return (
    <main>
      <div className="flex flex-col gap-10 xs:w-fit xl:w-full  ">
        <section className="bg-[#010101] w-fit xl:w-full">
          <div className="p-4 max-w-[1440px] flex flex-col xs:gap-8 gap-4 xs:p-10 mx-auto">
            <Image
              className="w-full rounded-sm hidden xs:block"
              alt="Banner"
              src="/Banner-lg.png"
              width={1360}
              height={366}
              sizes="100vw"
              priority
              placeholder="empty"
            />
            <Image
              className="w-full rounded-sm xs:hidden"
              alt="Banner"
              src="/Banner.png"
              width={1360}
              height={366}
              sizes="100vw"
              priority
              placeholder="empty"
            />
            <Products products={products} />
          </div>
        </section>
        <section className="xs:grid xs:place-items-center w-full">
          <div className="flex xs:max-w-[1440px] flex-col gap-4 px-4">
            <h2 className="font-medium text-xl xs:text-2xl flex gap-2 items-center">
              Placas de vídeo
              <HardwareBadge />
            </h2>
            <ProductCarousel products={products} />
          </div>
        </section>
      </div>
    </main>
  );
}
