import React from 'react'
import Head from 'next/head'

import '../styles/global.css'
import '../styles/recipe-navigator.css'
import '../styles/recipe.css'

export default function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>Forsyth Fanciness</title>
            </Head>

            <Component {...pageProps} />
        </div>
    )
}