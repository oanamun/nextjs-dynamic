import Head from "next/head";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

export default function Home() {
  const { primaryWallet, handleLogOut, setShowAuthFlow } = useDynamicContext();

  return (
    <div>
      <Head>
        <title>Home | Next.js Wallet App</title>
        <meta name="description" content="Next.js app with wallet connection" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Test Wallet App</h1>

        <div>
          <h2>Connect Your Wallet</h2>
          <p>
            This app demonstrates wallet connection using Dynamic and Next.js.
          </p>

          {primaryWallet ? (
            <div>
              <p>✓ Wallet connected: {primaryWallet?.address}</p>
              <button onClick={() => handleLogOut()}>Disconnect Wallet</button>
            </div>
          ) : (
            <button onClick={() => setShowAuthFlow(true)}>
              Connect Wallet
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
