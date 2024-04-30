import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ToastProvider } from 'react-toast-notifications';

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'viem/chains'

const projectId = 'c6cc849231f0c9770267752c7251f2b5'

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum]
const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  enableAnalytics: true 
})

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains })


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
        <WagmiConfig config={wagmiConfig}>
     <ToastProvider
    autoDismiss
    autoDismissTimeout={6000}
    placement="bottom-center"
  >
            <App />
  </ToastProvider>
        </WagmiConfig>
  </React.StrictMode>
);
