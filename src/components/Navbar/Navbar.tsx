import { auth } from '../../utils/Firebase/Init';
import CreatePost from '../Modals/createPost';

interface Props {
  authenticated: boolean;
}

function Navbar(props: Props) {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 flex justify-around w-full py-4 shadow-md bg-base-100 backdrop-blur-md">
      <div className="flex navbar-center space-x-72">
        <div className="flex space-x-4">
          <div className="btn btn-ghost normal-case text-3xl flex space-x-0.5">
            <p className="text-[#0077b6] font-bold">Track</p>
            <p className="text-[#00b4d8] font-bold">Packers</p>
          </div>
          <div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 input input-bordered"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {props.authenticated ? (
          <div className="flex space-x-4">
            <label
              htmlFor="new-post-modal"
              className="text-white btn btn-primary"
            >
              Create post
            </label>
            <div className="dropdown dropdown-end dropdown-hover">
              <label className="avatar" tabIndex={0}>
                <div className="w-12 rounded-full hover:ring hover:ring-primary">
                  <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="p-2 shadow dropdown-content menu bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>{auth.currentUser?.displayName}</a>
                </li>
                <div className="my-0 divider" />
                <li>
                  <a>FAQ</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <div className="my-0 divider" />
                <li>
                  <a
                    onClick={() => {
                      auth.signOut();
                    }}
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div>
            <a
              className="text-white btn-primary btn"
              onClick={() => {
                window.location.href = '/auth';
              }}
            >
              Login
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
