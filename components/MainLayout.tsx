import React from 'react';
import Link from 'next/link';
import Head from "next/head";

export function MainLayout({ children, title = 'Some application' }) {
    return (
        <React.Fragment>
            <Head>
                <title>{title} | NextJS</title>
                <meta charSet='utf-8' />
                <meta name='keywords' content='testing meta keywords from Next js' />
                <meta name='description' content='testing meta description from Next js' />
            </Head>
            <nav>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/posts"><a>Posts</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>
                {`                 
                    nav {
                      position: fixed;
                      left: 0;
                      right: 0;
                      top: 0;
                      width: 90%;
                      padding: 1% 5%;
                      background-color: #000;  
                    }
                    
                    nav a {
                        margin: 0 1%;
                        color: #fff;
                        text-decoration: none;
                    }
                    
                    main {
                        margin-top: 5%;
                        padding: 1rem;
                    }
                `}
            </style>
        </React.Fragment>
    );
}
