import {
  DynamicContextProvider,
  FilterChain,
} from "@dynamic-labs/sdk-react-core";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { createConfig, WagmiProvider } from "wagmi";
import { createClient, http } from "viem";
import { mainnet, base, bsc, opBNB, celo } from "viem/chains";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { SolanaWalletConnectors } from "@dynamic-labs/solana";
import { mergeNetworks } from "@dynamic-labs/sdk-react-core";
import {
  CosmosIcon,
  EthereumIcon,
  SolanaIcon,
  SuiIcon,
  StarknetIcon,
} from "@dynamic-labs/iconic";
import { CosmosWalletConnectors } from "@dynamic-labs/cosmos";
import { StarknetWalletConnectors } from "@dynamic-labs/starknet";
import { SuiWalletConnectors } from "@dynamic-labs/sui";

const config = createConfig({
  chains: [mainnet, base, bsc, opBNB, celo],
  multiInjectedProviderDiscovery: false,
  client({ chain }) {
    return createClient({
      chain,
      transport: http(),
    });
  },
});

export const DynamicWalletProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <DynamicContextProvider
      theme="dark"
      locale={{
        en: {
          dyn_login: {
            title: {
              all: "Connect your wallet",
            },
          },
        },
      }}
      settings={{
        environmentId: "",
        initialAuthenticationMode: "connect-only",
        walletConnectPreferredChains: ["eip155:1"],
        walletConnectors: [
          EthereumWalletConnectors,
          SolanaWalletConnectors,
          CosmosWalletConnectors,
          SuiWalletConnectors,
          StarknetWalletConnectors,
        ],

        overrides: {
          evmNetworks: (networks) => mergeNetworks(networks, customEvmNetworks),

          views: [
            {
              type: "wallet-list",
              tabs: {
                items: [
                  {
                    label: { text: "All chains" },
                  },
                  {
                    label: {
                      icon: <EthereumIcon />,
                    },
                    walletsFilter: FilterChain("EVM"),
                  },

                  {
                    label: { icon: <SolanaIcon /> },
                    walletsFilter: FilterChain("SOL"),
                  },

                  {
                    label: {
                      icon: <CosmosIcon />,
                    },
                    walletsFilter: FilterChain("COSMOS"),
                  },
                  {
                    label: {
                      icon: <SuiIcon />,
                    },
                    walletsFilter: FilterChain("SUI"),
                  },
                  {
                    label: {
                      icon: <StarknetIcon />,
                    },
                    walletsFilter: FilterChain("STARK"),
                  },
                ],
              },
            },
          ],
        },
      }}
    >
      <WagmiProvider config={config}>
        <DynamicWagmiConnector>{children}</DynamicWagmiConnector>
      </WagmiProvider>
    </DynamicContextProvider>
  );
};
