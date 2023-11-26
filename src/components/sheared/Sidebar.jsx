import { Link, NavLink } from "react-router-dom"
import logo from '../../assets/logo.png'
import { useGlobalContext } from "../../context/GlobalProviders"
import { useStore } from "../../store/Store";


const Sidebar = () => {
    const {sidebarService , toggle} = useStore()
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
            <div className={`${sidebarService ? 'w-[100px]' : 'w-[208px]' } bg-[#fce0e3] relative h-screen pl-4`}>
        <div className="" onClick={toggle}>
            click me
        </div>
                <div className="logo">
                    <img className="w-20 mx-auto" src={logo} alt="" />
                </div>
                {menu.map((links, index) => (
                    <li key={index} className="list-none">
                        <NavLink to={links.to}>
                            {/* <span className='shape1' />
                            <span className='shape2' /> */}
                            {/* <img src="" alt="" /> */}
                            <p className="m-2 mr-0 py-3 px-3 rounded-s-full">
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