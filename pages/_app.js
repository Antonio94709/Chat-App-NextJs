import "../styles/auth.css";
import "../styles/chats.css";
import "../styles/index.css";
import "../styles/tailwind.css";

import { ContextProvider } from "../Context";

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}
