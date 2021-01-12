import React from 'react';
import Router from 'next/router';
import Head from "next/head";
import {MainLayout} from "../../components/MainLayout";

export default function About() {

    const linkClickHandler = () => {
        Router.push('/')
    }

    return (
        <MainLayout title={'About page'}>
            <Head>
                <title>About page title | Next js</title>
            </Head>
            <h2>About</h2>

            <button onClick={linkClickHandler}>Go back to main page</button>
            <button onClick={() => Router.push('/posts')}>Go posts page</button>
        </MainLayout>
    )
}
