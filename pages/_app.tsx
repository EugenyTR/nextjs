import React from 'react';
import '../styles/main.css';
import NextNprogress from 'nextjs-progressbar';

export default function MyApp({ Component, pageProps  }) {
    return (
        <React.Fragment>
            <NextNprogress
                color="#29D"
                startPosition={0.3}
                stopDelayMs={200}
                height="3"
            />
            <Component { ...pageProps } />
        </React.Fragment>
    )
}
