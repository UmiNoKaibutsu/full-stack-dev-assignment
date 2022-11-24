import Navbar from "./Navbar";
import Head from "next/head"

const Layout = ({children}) => {
    return (
        <div className="layout">
            <Navbar/>
            {children}
        </div>
    )
}
export default Layout