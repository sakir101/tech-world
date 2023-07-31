import { Dropdown, Layout, Space } from "antd";
import Link from "next/link";
import { useSelector } from "react-redux";
const { Content, Footer } = Layout;
import { DownOutlined } from "@ant-design/icons";

const RootLayout = ({ children }) => {
  const { categories } = useSelector((state) => state.product);
  console.log(categories[0]);
  const items = categories[0]?.data?.map((category, index) => ({
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`/categories/${category?._id}`}
      >
        {category.title}{" "}
      </a>
    ),
    key: `${index}`,
  }));
  const menuItems = (
    <>
      <li>
        <Dropdown
          menu={{
            items,
          }}
          trigger={["click"]}
        >
          <a onClick={(e) => e.preventDefault()} className="mt-3">
            <Space className="text-white">
              Categories
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </li>
      <li>
        <Link href="/">
          <button className="btn btn-primary">PC Builder</button>
        </Link>
      </li>

      <div className="dropdown dropdown-end  hidden lg:block">
        <label
          tabIndex={0}
          className="btn m-1 bg-transparent border-transparent hover:bg-transparent hover:border-transparent"
        >
          <div className="avatar">
            <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={`https://www.seekpng.com/png/small/46-463314_v-th-h-user-profile-icon.png`}
              />
            </div>
          </div>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-blue-500 rounded-box w-32 text-black"
        >
          <li>
            <Link href="/signup" className="text-white mx-0">
              Sign up
            </Link>
          </li>
          <li className="text-white mx-4">Logout</li>
        </ul>
      </div>
      <p className="text-base font-bold mt-3 text-white hidden lg:block"></p>
    </>
  );

  return (
    <Layout>
      <div>
        <div className="navbar bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500">
          <div className="w-full lg:w-1/2 flex justify-between lg:justify-between items-center">
            <div className="flex">
              <div className="dropdown">
                <label tabIndex={2} className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white font-bold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={2}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-500 rounded-box w-52 text-xl text-black z-50"
                >
                  {menuItems}
                </ul>
              </div>
              <Link
                href="/"
                className="btn btn-ghost normal-case text-xl text-white hidden lg:block"
              >
                Hongkong Book Stall
              </Link>
            </div>
            <div className="flex justify-between lg:hidden">
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="btn m-1 bg-transparent border-transparent hover:bg-transparent hover:border-transparent"
                >
                  <div className="avatar">
                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img
                        src={`https://www.seekpng.com/png/small/46-463314_v-th-h-user-profile-icon.png`}
                      />
                    </div>
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-16 text-black"
                >
                  <li>
                    <Link href="/signup">Sign up</Link>
                  </li>
                  <li>Logout</li>
                </ul>
              </div>
              <div className="hidden lg:block">
                <p className="text-base font-bold mt-3 text-white"></p>
              </div>
            </div>
          </div>
          <div className="navbar-end hidden lg:flex ">
            <ul className="menu menu-horizontal p-0 ">{menuItems}</ul>
          </div>
        </div>
      </div>
      <Content
        style={{
          padding: "0 0px",
          minHeight: "100vh",
          backgroundColor: "white",
        }}
      >
        {children}
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default RootLayout;
