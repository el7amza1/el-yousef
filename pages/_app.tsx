import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { createBrowserSupabaseClient, Session } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { Provider } from 'react-redux';
import { store } from '../redux/app/store';

function MyApp({ Component, pageProps }: AppProps<{ initialSession: Session }>

) {
  const router = useRouter();
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      {/* <button
        onClick={async () => {
          await supabaseClient.auth.signOut();
          router.push('/');
        }}
      >
        Logout
      </button> */}
      <Provider store={store}>

      <Layout>
        <Component {...pageProps} />
      </Layout>
      </Provider>
    </SessionContextProvider>
  );
}

export default MyApp
