import CartProviderWrapper from "@/components/CartProviderWrapper";
import { Geist, Geist_Mono, Roboto } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
export const metadata = {
  title: "E-commerce",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} `}>
        <CartProviderWrapper>{children}</CartProviderWrapper>
      </body>
    </html>
  );
}
