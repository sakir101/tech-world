import { Dropdown, Layout, Menu, Space } from "antd";
import Link from "next/link";
const { Header, Content, Footer } = Layout;
import styles from "@/styles/Home.module.css";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";

const items = [
  {
    key: "1",
    label: <Link href="/">CPU / Processor</Link>,
  },
  {
    key: "2",
    label: <Link href="/">Motherboard</Link>,
  },
  {
    key: "3",
    label: <Link href="/">RAM</Link>,
  },
  {
    key: "4",
    label: <Link href="/">Power Supply Unit</Link>,
  },
  {
    key: "5",
    label: <Link href="/">Storage Device</Link>,
  },
  {
    key: "6",
    label: <Link href="/">Monitor</Link>,
  },
  {
    key: "7",
    label: <Link href="/">Others</Link>,
  },
];

const RootLayout = ({ children }) => {
  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="demo-logo">
          <h1>
            <Link
              href="/"
              style={{
                color: "white",
                backgroundColor: "#404040",
                padding: "5px 10px",
                borderRadius: "3px",
              }}
            >
              Tech World
            </Link>
          </h1>
        </div>
        <Menu
          theme="dark"
          style={{ background: "transparent" }}
          mode="vertical"
          className={styles.menu_items}
        >
          <items
            style={{
              paddingRight: "10px",
            }}
          >
            <Dropdown
              menu={{
                items,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Catagories
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </items>
          <Link href="/contact">
            <items
              style={{
                backgroundImage: "linear-gradient(to right, #007bff, #00aaff)",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundImage =
                  "linear-gradient(to right, #00aaff, #007bff)")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundImage =
                  "linear-gradient(to right, #007bff, #00aaff)")
              }
            >
              PC Builder
            </items>
          </Link>
        </Menu>
      </Header>
      <Content
        style={{
          padding: "0 24px",
          minHeight: "100vh",
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
