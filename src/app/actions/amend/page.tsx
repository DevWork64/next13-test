"use client";
import CustomBreadcrumb from "@/app/components/Breadcrumb/Breadcrumb";
import { Button, ConfigProvider, List, Table } from "antd";
import { useState } from "react";
import { Collapse } from "react-collapse";

function sampleData() {
  return [
    {
      changes: 2,
      poi: "TAN TECK HOW",
      section: "CTI(A)",
      expanded: false,
    },
    {
      changes: 5,
      poi: "LEE AO WR",
      section: "CTI(B)",
      expanded: false,
    },
    {
      changes: 8,
      poi: "POH POL D",
      section: "CTI(A)",
      expanded: false,
    },
  ];
}

const columns = [
  {
    title: "Changes",
    dataIndex: "changes",
  },
  {
    title: "POI",
    dataIndex: "poi",
  },
  {
    title: "Req Section",
    dataIndex: "section",
  },
];

export default function CT9AmendListings() {
  const [expanded, setExpanded] = useState(false);
  const [data, setData] = useState(() => sampleData());
  return (
    <ConfigProvider
      theme={{
        components: {
          List: {
            itemPadding: "0px",
          },
        },
      }}
    >
      <div>
        <CustomBreadcrumb
          items={[{ title: "CT9 Actions" }, { title: "Amend Listing" }]}
        />
        <div style={{ background: "#1F2936", height: "calc(100vh - 53px)" }}>
          <div
            style={{
              width: "85%",
              margin: "auto",
            }}
          >
            <div style={{ paddingTop: 20 }}>
              <List
                bordered={true}
                style={{
                  background: "#0D1219",
                }}
                dataSource={data}
                renderItem={(item) => (
                  <List.Item
                    onClick={() => {
                      console.log(item);
                      const newData = data.map((listitem) => {
                        if (listitem.poi === item.poi) {
                          return {
                            ...listitem,
                            expanded: !item.expanded,
                          };
                        } else {
                          return listitem;
                        }
                      });
                      console.log(newData);
                      setData(newData);
                    }}
                    //   extra={[
                    //     <Button
                    //       onClick={() => {
                    //         console.log(item);
                    //         const newData = data.map((listitem) => {
                    //           if (listitem.poi === item.poi) {
                    //             return { ...listitem, expanded: !item.expanded };
                    //           } else {
                    //             return listitem;
                    //           }
                    //         });
                    //         console.log(newData);
                    //         setData(newData);
                    //       }}
                    //     >
                    //       Show
                    //     </Button>,
                    //   ]}
                  >
                    <List.Item.Meta
                      title={
                        <div style={{ padding: "20px 20px 0px 20px" }}>
                          {item.poi}
                        </div>
                      }
                      description={
                        <>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              padding: "0px 20px 20px 20px",
                            }}
                          >
                            <div>
                              REQUESTING SECTION: {item.section}
                              <br />
                              {item.changes} changes
                            </div>
                            <div>
                              <Button
                                onClick={() => {
                                  console.log(item);
                                  const newData = data.map((listitem) => {
                                    if (listitem.poi === item.poi) {
                                      return {
                                        ...listitem,
                                        expanded: !item.expanded,
                                      };
                                    } else {
                                      return listitem;
                                    }
                                  });
                                  console.log(newData);
                                  setData(newData);
                                }}
                              >
                                Show
                              </Button>
                            </div>
                          </div>
                          <Collapse isOpened={item.expanded}>
                            <div
                              style={{
                                background: "#070A0F",
                                borderTop: "1px solid #424242",
                              }}
                            >
                              <div style={{ padding: 20 }}>
                                <Button type="primary">Approve Listing</Button>
                                <Table
                                  dataSource={sampleData()}
                                  columns={columns}
                                  size={"small"}
                                />
                              </div>
                            </div>
                          </Collapse>
                        </>
                      }
                    />
                  </List.Item>
                )}
              ></List>
              {/* <Table
            dataSource={data()}
            rowKey={(record) =>
              data().findIndex((item) => item.poi === record.poi)
            }
            columns={columns}
            pagination={{ size: "small" }}
            bordered={false}
            style={{ paddingTop: 20 }}
            size={"small"}
            expandable={{
              expandedRowRender: (record) => <p>{record.changes}</p>,
            }}
          /> */}
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}
