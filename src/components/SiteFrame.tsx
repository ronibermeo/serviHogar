import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";

type SiteFrameProps = {
  children: React.ReactNode;
};

export function SiteFrame({ children }: SiteFrameProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingContactButtons />
    </>
  );
}
