import StyledComponentsRegistry from "@/lib/registry";
import QueryProviders from "@/lib/Providers";
import type { Metadata } from "next";
import localFont from "next/font/local";
import RootLayoutStyle from "@/components/common/RootLayout";
import "./globals.css";
import RecoilRootWrapper from "@/lib/RecoilRootWrapper";
import Script from "next/script";

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: "./PretendardVariable.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "모두모주",
  description: "모두를 위한 공모주",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={myFont.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <Script src="https://developers.kakao.com/sdk/js/kakao.js"></Script>
      </head>
      <body>
        <RecoilRootWrapper>
          <QueryProviders>
            <StyledComponentsRegistry>
              <RootLayoutStyle>{children}</RootLayoutStyle>
            </StyledComponentsRegistry>
          </QueryProviders>
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
