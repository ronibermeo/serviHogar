import { navItems, siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <h2 className="text-xl font-black text-slate-900">{siteConfig.nombreEmpresa}</h2>
          <p className="mt-3 text-slate-600">
            Servicio tecnico de electrodomesticos a domicilio con enfoque en rapidez, confianza y
            resultados.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-slate-900">Enlaces</h3>
          <ul className="mt-3 space-y-2 text-slate-700">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-sky-700">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-slate-900">Contacto</h3>
          <ul className="mt-3 space-y-2 text-slate-700">
            <li>{siteConfig.telefono}</li>
            <li>{siteConfig.email}</li>
            <li>{siteConfig.direccion}</li>
            <li>{siteConfig.horario}</li>
            <li>{siteConfig.cobertura}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 text-sm text-slate-600 md:px-6">
          <p>© {new Date().getFullYear()} {siteConfig.nombreEmpresa}. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-sky-700">
              Aviso legal
            </a>
            <a href="#" className="hover:text-sky-700">
              Privacidad
            </a>
            <a href="#" className="hover:text-sky-700">
              Terminos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
