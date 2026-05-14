import { legalIdentity, navItems, siteConfig } from "@/config/site";

const telHref = `tel:${siteConfig.telefono.replace(/\s/g, "")}`;
const mailHref = `mailto:${siteConfig.email}`;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <h2 className="text-xl font-black text-slate-900">{siteConfig.nombreEmpresa}</h2>
          <p className="mt-3 text-slate-600">
            Servicio técnico de electrodomésticos a domicilio. Actividad a nombre de{" "}
            <span className="font-medium text-slate-800">{legalIdentity.titularNombreCompleto}</span> (
            {legalIdentity.titularTipo}), {legalIdentity.ubicacionLarga}.
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
            <li>
              <span className="font-medium text-slate-900">Dirección:</span> {siteConfig.direccion},{" "}
              {legalIdentity.ciudad}, {legalIdentity.departamento}
            </li>
            <li>
              <a href={telHref} className="hover:text-sky-700">
                Teléfono / WhatsApp: {siteConfig.telefono}
              </a>
            </li>
            <li>
              <a href={mailHref} className="hover:text-sky-700">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 bg-slate-50/80">
        <div className="mx-auto max-w-7xl space-y-4 px-4 py-5 md:px-6">
          <p className="text-sm font-medium leading-relaxed text-slate-800">
            © {year} {legalIdentity.atribucionOperador}
          </p>
          <p className="text-sm leading-relaxed text-slate-700">
            <span className="font-semibold text-slate-900">Atención al cliente:</span>{" "}
            <a href={telHref} className="text-sky-800 underline-offset-2 hover:underline">
              {siteConfig.telefono}
            </a>
            {" · "}
            <a href={mailHref} className="text-sky-800 underline-offset-2 hover:underline">
              {siteConfig.email}
            </a>
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-600">
            <a href="/quienes-somos" className="hover:text-sky-700">
              Quiénes somos
            </a>
            <a href="/contacto" className="hover:text-sky-700">
              Contacto
            </a>
            <a href="/aviso-legal" className="hover:text-sky-700">
              Aviso legal
            </a>
            <a href="/privacidad" className="hover:text-sky-700">
              Privacidad
            </a>
            <a href="/terminos" className="hover:text-sky-700">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
