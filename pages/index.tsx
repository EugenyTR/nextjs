import Link from 'next/link';
import Head from 'next/head';
import React from "react";
import {MainLayout} from "../components/MainLayout";

export default function Index() {
    return (
        <MainLayout title={'Home page'}>
            <h1>Next JS</h1>
            <p><Link href={'/about'}><a>About</a></Link></p>
            <p><Link href={'/posts'}><a>Posts</a></Link></p>
        </MainLayout>
    )
}
