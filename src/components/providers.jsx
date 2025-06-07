import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Environment, ParaProvider } from "@getpara/react-sdk";
import "@getpara/react-sdk/styles.css";

const queryClient = new QueryClient();

export function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ParaProvider
        paraClientConfig={{
          apiKey: import.meta.env.VITE_PARA_API_KEY || "",
          env: Environment.BETA,
        }}
        config={{
          appName: "TradeTalk"
        }}
        paraModalConfig={{
          // ParaModal config
          logo: "https://imgs.search.brave.com/ov2Xlf1tgGNGEuNaX8cuXj78P79Sex8WDgNFOm7AhAg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzlmL0pvaG5fQ2Vu/YV8xMzQ2MTYuanBn",
          // ... other modal config
          theme: { foregroundColor: "#0f24ad", backgroundColor: "#9ddbee", font: "Roboto", borderRadius: "none" },
          oAuthMethods: ["GOOGLE", "TWITTER", "APPLE", "DISCORD", "FARCASTER", "TELEGRAM"],
          authLayout: ["AUTH:FULL", "EXTERNAL:FULL"],
          recoverySecretStepEnabled: true,
          onRampTestMode: true
        }}
        externalWalletConfig={{
          appName: "TradeTalk",
          wallets: ["PHANTOM", "GLOW", "BACKPACK"],
          solanaConnector: {
            config: {
              endpoint: "https://api.devnet.solana.com", // Set to your desired Solana endpoint
              chain: "devnet" // or "mainnet-beta" as needed
            }
          }
        }}
      >
        {children}
      </ParaProvider>
    </QueryClientProvider>
  );
}