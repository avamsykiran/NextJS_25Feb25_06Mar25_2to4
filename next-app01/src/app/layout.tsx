import Header from "@/components/Header";
import "./globals.css";

const RootLayout = ({ children }: { children: React.ReactNode; }) => (
  <html lang="en">
    <body>
      <Header appTitle="NextJs App 001" />
      {children}
    </body>
  </html>
);

export default RootLayout;