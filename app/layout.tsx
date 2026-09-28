import type { Metadata } from "next";
import "./globals.css";
import LeftMenu from "@/components/organisms/LeftMenu";
import MobileNavbar from "@/components/organisms/MobileNavbar";
import RightMenu from "@/components/organisms/RightMenu";
import ScrollProgress from "@/components/atoms/ScrollProgress";

export const metadata: Metadata = {
  title: "Jesús Torres | Portafolio",
  description:
    "Hoja de vida y portafolio de Jesús Estiven Torres Quintero, estudiante de Ingeniería de Sistemas e ingeniero de datos junior.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Aplica el tema guardado antes de pintar la página para evitar un parpadeo */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("tema")==="oscuro")document.documentElement.classList.add("dark")}catch(e){}`,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-fondo text-negro dark:bg-fondo-oscuro dark:text-blanco transition-colors duration-300">
        <ScrollProgress />

        {/* En pantallas grandes se muestran los dos menús fijos; en celular, la barra superior */}
        <div className="block lg:hidden">
          <MobileNavbar />
        </div>

        <aside className="hidden lg:block fixed top-0 left-0 z-30 h-screen w-80 overflow-y-auto scroll-fino bg-blanco px-8 py-10 shadow-sm dark:bg-panel-oscuro">
          <LeftMenu />
        </aside>

        <aside className="hidden lg:block fixed top-0 right-0 z-30 h-screen w-24 bg-blanco shadow-sm dark:bg-panel-oscuro">
          <RightMenu />
        </aside>

        <main className="lg:ml-80 lg:mr-24 px-4 py-6 md:px-8 lg:px-12 lg:py-10">{children}</main>
      </body>
    </html>
  );
}
