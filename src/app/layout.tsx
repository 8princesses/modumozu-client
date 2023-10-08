import StyledComponentsRegistry from "@/lib/registry";
import QueryProviders from "@/lib/Providers";
import type { Metadata } from "next";
import localFont from "next/font/local";
import RootLayoutStyle from "@/components/common/RootLayout";
import "./globals.css";

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: "./PretendardVariable.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Modumozu",
  description: "Modumozu",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={myFont.className}>
      <body>
        <QueryProviders>
          <StyledComponentsRegistry>
            <RootLayoutStyle>{children}</RootLayoutStyle>
          </StyledComponentsRegistry>
        </QueryProviders>
      </body>
    </html>
  );
}
