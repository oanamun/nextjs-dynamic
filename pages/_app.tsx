import type { AppProps } from "next/app";
import { DynamicWalletProvider } from "../providers/DynamicProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Link from "next/link";

function Header() {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Link href="/">Home</Link>
      <Link href="/account">Account</Link>
      <Link href="/about">About</Link>
    </div>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <DynamicWalletProvider>
        <Header />
        <Component {...pageProps} />
      </DynamicWalletProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
