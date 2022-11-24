import Link from "next/link"
import Styles from "../styles/Navbar.module.css"


const Navbar = () => {
    return (
        <nav className={Styles.nav}>
            <div className={Styles.container + " container"}>
                <div className={Styles.logo}>MyAssignment</div>
                <ul>
                    <li>
                        <Link href="/">Language</Link>
                    </li>
                    <li>
                        <Link href="/">Cart</Link>
                    </li>
                </ul>

            </div>
        </nav>
     );
}

export default Navbar;