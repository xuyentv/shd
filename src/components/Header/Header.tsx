import { Menu, Dropdown, Space } from "antd";
import { DownOutlined, RightOutlined } from "@ant-design/icons";
import SocialSubscrible from "../SocialSubscrible/SocialSubscrible";
import "./Header.css";

const Header = () => {
  // Định nghĩa menu hosting có cấp con
  const hostingMenuItems = [
    {
      key: "shared",
      label: <a href="/pages/shared-hosting">Shared Hosting</a>,
    },
    {
      key: "vps",
      label: <a href="/pages/vps">VPS</a>,
    },
    {
      key: "dedicated",
      label: "Dedicated Server",
      children: [
        {
          key: "windows",
          label: <a href="/pages/dedicated/windows">Windows Server</a>,
        },
        {
          key: "linux",
          label: <a href="/pages/dedicated/linux">Linux Server</a>,
        },
      ],
    },
  ];

  return (
    <header className="header">
      <a href="/" className="logo">
        <span className="logo-icon">SHDMedia.net</span>
      </a>

      <nav className="nav">
        <Space size="large">
          <a href="/">Home</a>

          {/* Dropdown Web Hosting */}
          <Dropdown
            menu={{ items: hostingMenuItems }}
            placement="bottom"
            trigger={["hover"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              Web Hosting <DownOutlined />
            </a>
          </Dropdown>

          <a href="/reviews">Review</a>
          <a href="/blog">Blog</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </Space>
      </nav>

      <SocialSubscrible />
    </header>
  );
};

export default Header;
