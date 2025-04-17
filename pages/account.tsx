import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

export default function Account() {
  const { primaryWallet } = useDynamicContext();

  return (
    <div>
      <main>
        <h1>Your Account</h1>

        <div>
          <h2>Wallet Information</h2>

          {primaryWallet ? (
            <div>
              <div>
                <div>
                  <h3>Connected Address</h3>
                  <p>{primaryWallet.address}</p>
                </div>
              </div>
            </div>
          ) : (
            <p>Wallet data not available. Please reconnect your wallet.</p>
          )}
        </div>
      </main>
    </div>
  );
}
