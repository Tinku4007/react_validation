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
        // {
        //     title: 'Service Providers', src: "", to: '/admin/dashboard'
        // },
        // {
        //     title: 'Review', src: "", to: '/admin/dashboard'
        // },
        // {
        //     title: 'Support Tickets', src: "", to: '/admin/dashboard'
        // },
        // {
        //     title: 'Search List', src: "", to: '/admin/dashboard'
        // }
    ]
    return (
        <>
            <div className="bg-[#fce0e3] w-[208px] h-screen">
                <div className="logo">
                    <img className="w-20" src={logo} alt="" />
                </div>
                {menu.map((links, index) => (
                    <li key={index} className="list-none">
                        <NavLink to={links.to}>
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