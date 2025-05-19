
import classes from './main-header.module.css'
import Link from "next/link";

export default function MainHeader() {
    return (
        <>

            <header className={classes.header}>

                    <ul>
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/news'}>News</Link></li>
                    </ul>
            </header>
        </>
    );
}