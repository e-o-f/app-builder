import React from "react";
import { Menu, Layout } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

export function Toolbar() {
  return (
    <Sider width={65} className="siderbar">
      <Menu mode="inline" className="menu">
        <Menu.Item key="1">
          <UserOutlined />
        </Menu.Item>
        <Menu.Item key="2">
          <LaptopOutlined />
        </Menu.Item>
        <Menu.Item key="3">
          <PieChartOutlined />
        </Menu.Item>
        <Menu.Item key="4">
          <NotificationOutlined />
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
