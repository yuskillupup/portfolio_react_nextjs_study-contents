import Link from 'next/link'
import Head from 'next/head';
import Layout from '../../components/layout'

export default function signup(){
    return(
        <Layout>
            <Head>
                <title>signup</title>
            </Head>
            <h1>signup</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    )
}       