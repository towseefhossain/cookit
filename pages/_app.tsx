import { useState, useEffect } from 'react';
import Head from 'next/head';
import { AuthProvider } from '../context/authContext';
import Navigation from '../components/Navigation';
import ThemeProvider from '../components/ThemeProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: { Component: React.FC; pageProps: any }) {
    return (
        <AuthProvider>
            <ThemeProvider>
                {({ darkMode, handleToggleDarkMode }) => (
                    <>
                        <Head>
                            <title>Cook It 🍳</title>
                        </Head>
                        <Navigation darkMode={darkMode} handleToggleDarkMode={handleToggleDarkMode} />
                        <div className="main-content">
                            <Component {...pageProps} />
                        </div>
                    </>
                )}
            </ThemeProvider>
        </AuthProvider>
    );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
    let pageProps = {};
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
};

export default MyApp;
