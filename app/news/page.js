import Link from "next/link";

export default function NewsPage() {
    return (
        <>
            <h1>NewsPage</h1>
            <ul>
                <li>
                   <Link to="/news/first">First</Link>
                </li>
                <li>
                    <Link to="/news/second">Second</Link>
                </li>
                <li>
                    <Link to="/news/third">Third</Link>
                </li>

            </ul>

        </>


)
}