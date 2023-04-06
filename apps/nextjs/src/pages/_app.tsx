import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "@components/Navbar";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Session, SessionContextProvider } from "@supabase/auth-helpers-react";
import { api } from "@utils/api";
import { AppProps } from "next/app";
import { useState } from "react";
import { theme } from "src/theme";

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
