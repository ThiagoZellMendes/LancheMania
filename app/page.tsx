import Image from "next/image";
import { CategoryList } from "./_components/categoryList";
import { Header } from "./_components/header";
import { SearchInput } from "./_components/searchInput";

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <SearchInput />
      </div>

      <div className="px-5 pt-6">
        <CategoryList />
      </div>
      <div className="px-5">
        <Image
          src={"/promo-banner-01.png"}
          alt="Até 30% de Desconto em pizza"
          height={0}
          width={0}
          className="h-auto w-full object-contain"
          sizes="100vw"
          quality={100}
        />
      </div>
    </>
  );
}
