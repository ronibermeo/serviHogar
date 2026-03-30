type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export function SectionHeading({ title, subtitle, centered }: SectionHeadingProps) {
  return (
    <header className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-4 text-lg text-slate-600">{subtitle}</p> : null}
    </header>
  );
}
