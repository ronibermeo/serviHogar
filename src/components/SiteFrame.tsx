import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";

type SiteFrameProps = {
  children: React.ReactNode;
};

export function SiteFrame({ children }: SiteFrameProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
