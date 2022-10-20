import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Todos</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/comments">Comments</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>

    )
}

export default Layout;