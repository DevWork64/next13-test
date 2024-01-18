"use client";

import { Card, Button, Row, Col } from "antd";
import QueueAnim from "rc-queue-anim";
import { useEffect, useState } from "react";

export default function AnimationPage() {
  const [open, setOpen] = useState(true);
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <>
      {domLoaded && (
        <>
          {" "}
          <Button onClick={() => setOpen(!open)}>test</Button>
          {/* <QueueAnim>{open && <Card>test</Card>}</QueueAnim> */}
          <Row gutter={[12, 12]}>
            {/* <QueueAnim> */}
            {open ? (
              <Col span={6}>
                <QueueAnim
                  leaveReverse={true}
                  interval={[100, 200]}
                  delay={[0, 1000]}
                  duration={[500, 2000]}
                  type={["left", "right"]}
                  ease={["easeOutBack", "easeInOutCirc"]}
                >
                  {open ? <Card key="a">test</Card> : null}
                </QueueAnim>
              </Col>
            ) : null}
            <Col
              key="b"
              span={open ? 18 : 24}
              style={{ transition: "width 1s ease-in-out" }}
            >
              <QueueAnim
                duration={900}
                delay={100}
                ease={["easeOutQuart", "easeInOutQuart"]}
              >
                <Card key="b">test</Card>{" "}
              </QueueAnim>
            </Col>
            {/* </QueueAnim> */}
          </Row>
          {/* <Row gutter={[12, 12]}>
              {open ? <Card key="a">test</Card> : null}
              <Col key="b" span={open ? 18 : 24}>
                <Card>23asa</Card>
              </Col>
            </Row> */}
          {/* {open ? <Card key="a">test</Card> : null} */}
        </>
      )}
    </>
  );
}
