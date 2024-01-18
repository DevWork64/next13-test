"use client";

import { Card, Button, Row, Col } from "antd";
import QueueAnim from "rc-queue-anim";
import { useState } from "react";

export default function AnimationPage() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Button onClick={() => setOpen(!open)}>test</Button>
      {/* <QueueAnim>{open && <Card>test</Card>}</QueueAnim> */}
      <div style={{ padding: 30 }}>
        <Row gutter={[12, 12]}>
          {open ? (
            <Col span={6}>
              <Card>test</Card>
            </Col>
          ) : null}
          <Col span={open ? 18 : 24}>
            <Card>test2</Card>
          </Col>
        </Row>
        {/* {open ? <Card key="a">test</Card> : null} */}
      </div>
    </>
  );
}
