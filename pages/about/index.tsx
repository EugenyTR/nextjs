import React from 'react';
import Router from 'next/router';
import Head from "next/head";
import {MainLayout} from "../../components/MainLayout";
import {NextPageContext} from "next";

interface AboutPage {
    title: string
}

export default function About({title}: AboutPage) {

    const linkClickHandler = () => {
        Router.push('/')
    }

    return (
        <MainLayout title={'About page'}>
            <Head>
                <title>{title}</title>
            </Head>
            <h2>About</h2>

            <button onClick={linkClickHandler}>Go back to main page</button>
            <button onClick={() => Router.push('/posts')}>Go posts page</button>
        </MainLayout>
    )
}

About.getInitialProps = async ({}: NextPageContext) => {
    const response = await fetch(`${process.env.API_URL}/about`);
    const data = await response.json();

    return {
        title: data.title
    }
};
