import React from 'react'
import FindGame from './Layout/FindGame'
import Footer from './Layout/Footer'
import NavBar from './Layout/NavBar'


function Page() {
    return (
        <React.Fragment>
            <NavBar />
            <FindGame />
            <Footer />
        </React.Fragment>
    )
}

export default Page