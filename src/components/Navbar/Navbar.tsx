
interface Props {
    authenticated: boolean
}


function Navbar(props: Props) {



    return (
        <div className="bg-base-100 flex justify-around py-4
        backdrop-blur-md shadow-md w-full
        fixed top-0 left-0 right-0 z-10">
            <div className="navbar-center flex space-x-72">
                <div className="flex space-x-4">
                    <a className="btn btn-ghost normal-case text-3xl flex space-x-0.5">
                        <p className="text-[#0077b6] font-bold">Track</p><p className="text-[#00b4d8] font-bold">Packers</p>
                    </a>
                    <div>
                        <div className="relative">
                            <input type="text" placeholder="Search" className="input input-bordered pl-10"/>
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>                        
                        </div>
                    </div>
                </div>
                    {
                        props.authenticated ? (
                            <div className="flex space-x-4">
                                <a className="btn btn-primary text-white">Create post</a>
                                <div className="dropdown dropdown-end dropdown-hover">
                                    <label className="avatar" tabIndex={0}>
                                        <div className="w-12 rounded-full hover:ring hover:ring-primary">
                                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"/>
                                        </div>
                                    </label> 
                                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a>@Pieter03</a></li> 
                                        <div className="divider my-0"/>
                                        <li><a>FAQ</a></li>
                                        <li><a>Settings</a></li>
                                        <div className="divider my-0"/>
                                        <li><a>Sign out</a></li>
                                    </ul>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <a className="btn-primary btn text-white">Login</a>
                            </div>
                        )
                    }

            </div>
        </div>
    )
}

export default Navbar;