import React from "react";
import { Button, ConfigProvider } from "antd";
import theme from "../theme/themeConfig";
import PageHeader from "./components/PageHeader";

const HomePage = () => (
  <div className="App">
    <div style={{ padding: 20 }}>
      <PageHeader title="Search Person" />
      <Button type="primary">hoho</Button>
    </div>
  </div>
);

export default HomePage;
