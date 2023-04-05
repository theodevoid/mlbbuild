import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";

import { AppProps } from "next/app";
import { Session, SessionContextProvider } from "@supabase/auth-helpers-react";
import { api } from "src/utils/api";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "src/theme";
import Navbar from "@components/Navbar";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";

const MyApp = ({
  Component,
  pageProps,
}: AppProps<{ initialSession: Session }>) => {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      <ChakraProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionContextProvider>
  );
};

export default api.withTRPC(MyApp);
