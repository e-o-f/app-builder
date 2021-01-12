import React, { FunctionComponent } from "react";
import { Layout } from "antd";

export interface WrapperProps {}

export const Wrapper: FunctionComponent<WrapperProps> = ({ children }) => {
  return (
    <Layout className="bg-white" style={{ minHeight: "100vh" }}>
      <Layout>{children}</Layout>
    </Layout>
  );
};
