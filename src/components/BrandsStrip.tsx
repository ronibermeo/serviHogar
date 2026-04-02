import Image from "next/image";
import { getMarcasSvgFiles, nombreVisibleMarca } from "@/lib/brandLogosFromPublic";

function LogoList({
  files,
  suffix,
  ariaHidden,
}: {
  files: string[];
  suffix: string;
  ariaHidden?: boolean;
}) {
  return (
    <ul
      className={
        "flex list-none items-stretch gap-4 pr-4 md:gap-5 md:pr-6 " +
        (ariaHidden ? "brands-marquee-duplicate" : "")
      }
      aria-hidden={ariaHidden}
    >
      {files.map((file) => (
        <li
          key={`${file}-${suffix}`}
          className="flex w-[6.75rem] shrink-0 items-center justify-center md:w-[7.25rem]"
        >
          <div className="flex h-16 w-full items-center justify-center rounded-2xl bg-white px-3 shadow-[0_1px_3px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/60 transition duration-300 hover:ring-[#2f4fb7]/25 hover:shadow-md md:h-[4.25rem]">
            <Image
              src={`/img/marcas/${file}`}
              alt={ariaHidden ? "" : nombreVisibleMarca(file)}
              width={112}
              height={40}
              unoptimized
              className="max-h-9 w-auto max-w-[5.5rem] object-contain object-center opacity-[0.92] md:max-h-10"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export async function BrandsStrip() {
  const files = getMarcasSvgFiles();

  if (files.length === 0) {
    return null;
  }

  return (
    <section
      className="border-t border-slate-200/60 bg-white py-10 md:py-12"
      aria-labelledby="marcas-atendidas-heading"
    >
      <div className="mx-auto max-w-6xl px-4 text-center md:px-5">
        <h2
          id="marcas-atendidas-heading"
          className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2f4fb7]"
        >
          Marcas
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-500">
          Equipos que reparamos · piezas compatibles y criterio de fabricante
        </p>
      </div>

      <div className="relative mt-8 md:mt-10">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent md:w-20"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent md:w-20"
          aria-hidden
        />

        <div className="overflow-hidden">
          <div className="brands-marquee-track">
            <LogoList files={files} suffix="a" />
            <LogoList files={files} suffix="b" ariaHidden />
          </div>
        </div>
      </div>
    </section>
  );
}
