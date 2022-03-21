import React from 'react'
import App from './app'
import Footer from './footer'
function Convert({ children }) {
    return (
        <main>
            {children}
            <Footer />
        </main>
    )
}

export default Convert