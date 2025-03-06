import ProductPage from "@/components/Organisms/ProductPage";
import { Suspense } from "react";

export default async function User({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const param = await params;
  const id = Number(param.id);

  return (
    <section className="grid place-items-center">
      <Suspense
        fallback={
          <div className="grid h-screen place-items-center">
            <div className="w-40 h-40 bg-transparent border-[20px] border-accent border-l-transparent animate-spin rounded-full"></div>
          </div>
        }
      >
        <ProductPage id={id} />
      </Suspense>
    </section>
  );
}
