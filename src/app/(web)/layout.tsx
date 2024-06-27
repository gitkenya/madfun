import Navbar from "@/app/(web)/modules/shared/navbar/Navbar";
import Footer from "@/app/(web)/modules/shared/footer/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
