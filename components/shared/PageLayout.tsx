import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

type Props = {
  children: React.ReactNode;
};

export const PageLayout = ({ children }: Props) => {
  return (
    <main className="flex flex-col w-screen">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};
