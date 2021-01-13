import React from 'react';
import {MainLayout} from "../../components/MainLayout";
import Link from 'next/link';
import {useRouter} from "next/router";
import NextProgress from "../../components/NextProgress";
import {NextPageContext} from "next";
import {MyPost} from "../../interfaces/post";

interface PostPageProps {
   post: MyPost
}

export default function Post({ post: serverPost }: PostPageProps) {
    const [post, setPost] = React.useState(serverPost);
    const router = useRouter();

    React.useEffect(() => {
        async function Load() {
            const response = await fetch(`${process.env.API_URL}/posts/${router.query.id}`);
            const data = await response.json();
            setPost(data);
        }

        if (!serverPost) {
            Load();
        }
    }, []);

    if (!post) {
        return (
            <MainLayout>
                <NextProgress
                    options={{ easing: 'ease', speed: 1000 }}
                />
            </MainLayout>
        )
    }

    return (
        <MainLayout>
            <h1>{post.title}</h1>
            <hr />
            <p>{post.body}</p>
            <Link href={"/posts"}><a>Back to all posts</a></Link>
        </MainLayout>
    )
}


// Post.getInitialProps = async ({ query, req }) => {
//     if (!req) {
//         return {post: null}
//     }
//
//     const response = await fetch(`http://localhost:4200/posts/${query.id}`);
//     const post = await response.json();
//
//     return {
//         post
//     }
// };

interface PostNextPageContext extends NextPageContext {
    query: {
        id: string
    }
}

export async function getServerSideProps({ query, req }: PostNextPageContext) {
    if (!req) {
        return {post: null}
    }

    const response = await fetch(`${process.env.API_URL}/posts/${query.id}`);
    const post: MyPost = await response.json();

    return {props: post}
}