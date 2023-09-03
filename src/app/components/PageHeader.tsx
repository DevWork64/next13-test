"use client";

import { Breadcrumb, Typography } from "antd";
import React from "react";

export default function PageHeader(props: { title: string }) {
  return (
    <div>
      <Breadcrumb />
      <Typography.Title level={4}>{props.title}</Typography.Title>
    </div>
  );
}
