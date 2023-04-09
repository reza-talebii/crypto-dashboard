import dynamic from "next/dynamic";
import { Metadata } from "next";
import localFont from "next/font/local";

const StyledComponentsRegistry = dynamic(() => import("@/lib/registry"));
const ConfigProviders = dynamic(() => import("./ConfigProviders"));
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Crypto",
    template: "%s | Crypto",
  },
  description: "crypto dashboard",
};

// const font = localFont({
//   src: '../public/assets/fonts/TradeGothicLTRegular.ttf',
//   variable: '--font-TradeGothicLTRegular',
// })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ConfigProviders>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ConfigProviders>
      </body>
    </html>
  );
}
