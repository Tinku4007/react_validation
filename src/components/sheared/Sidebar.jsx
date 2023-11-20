import { Link, NavLink } from "react-router-dom"
import logo from '../../assets/logo.png'
import { useGlobalContext } from "../../context/GlobalProviders"
const Sidebar = () => {
    // const { sidebarOpen, setSidebarOpen } = useGlobalContext();

    const menu = [
        {
            title: 'Dashboard', to: '/admin/dashboard'
        },
        {
            title: 'Clients', to: '/admin/clients'
        },
        {
            title: 'Service Providers', src: "", to: '/admin/Service-provider'
        },
        {
            title: 'Review', src: "", to: '/admin/Review'
        },
        {
            title: 'Search List', src: "", to: '/admin/Search-List'
        },
        {
            title: 'Support Ticket', src: "", to: '/admin/Support-ticket'
        }
    ]
    return (
        <>
            <div className="bg-[#fce0e3] w-[208px] h-screen">
                <div className="logo">
                    <img className="w-20" src={logo} alt="" />
                </div>
                {menu.map((links, index) => (
                    <li key={index} className="list-none">
                        <NavLink to={links.to} className={({ isActive }) => `side-menu__item ${isActive && 'active'} whitespace-nowrap`}>
                            {/* <img src="" alt="" /> */}
                            <p>
                                {links.title}
                            </p>
                        </NavLink>
                    </li>
                ))

                }
            </div>
        </>
    )
};

export default Sidebar;