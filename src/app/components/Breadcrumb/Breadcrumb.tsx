import { Breadcrumb, BreadcrumbProps, ConfigProvider } from "antd";
import { AnyObject } from "antd/es/_util/type";
import { JSX } from "react";

export default function CustomBreadcrumb(
  props: JSX.IntrinsicAttributes & BreadcrumbProps<AnyObject>
) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Breadcrumb: {
            lastItemColor: "white",
            itemColor: "#6C6C6C",
            separatorColor: "#6C6C6C",
          },
        },
      }}
    >
      <div
        style={{
          padding: 15,
          background: "#0D1219",
          borderBottom: "1px solid #555555",
        }}
      >
        <Breadcrumb items={props.items} {...props} separator=">" />
      </div>
    </ConfigProvider>
  );
}
