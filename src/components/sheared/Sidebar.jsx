import { Link, NavLink } from "react-router-dom"
import logo from '../../assets/logo.png'
import { useStore } from "../../store/Store";
import dashboard from '../../assets/icon/dashboard-sidebar.png';
import client from '../../assets/client.png';
import serviceProvider from '../../assets/ss.png';
import review from '../../assets/review.png';
import supportticket from '../../assets/st.png';
import searchList from '../../assets/sl.png';

const Sidebar = () => {
    const { sidebarService, toggle } = useStore()
    const menu = [
        {
            title: 'Dashboard', to: '/admin/dashboard', src: dashboard
        },
        {
            title: 'Clients', to: '/admin/clients' , src: client
        },
        {
            title: 'Service Providers', src: serviceProvider , to: '/admin/Service-provider'
        },
        {
            title: 'Review', src: review , to: '/admin/Review'
        },
        {
            title: 'Support Ticket', src: supportticket , to: '/admin/Support-ticket'
        },
        {
            title: 'Search List', src: searchList , to: '/admin/Search-List'
        },
    ]
    return (
        <>
            <div className={`${sidebarService ? 'w-[100px]' : 'w-[208px]'} bg-[#fce0e3] relative h-screen pl-4`}>
                <div className="" onClick={toggle}>
                    click me
                </div>
                <div className="logo">
                    <img className="w-16 mx-auto" src={logo} alt="" />
                </div>
                {menu.map((links, index) => (
                    <li key={index} className="list-none">
                        <NavLink to={links.to} className='side-menu__item relative'>
                            <span className='shape1' />
                            <span className='shape2' />
                            <p className="m-2 mr-0 py-4 px-3 text-xs text-[#906f76] font-medium link-nav rounded-s-full flex items-center">
                                <img className="w-4 h-4 ml-1 mr-3" src={links.src} alt="" />
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