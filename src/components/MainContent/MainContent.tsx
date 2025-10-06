import React, { useEffect, useState } from "react";
import { Row, Col, Card, Tag, Button, Space } from "antd";
import * as XLSX from "xlsx";
import "./MainContent.css";

const { Meta } = Card;

// Interface
interface IRecord {
  no: string;
  code: string;
  title: string;
  content: string;
  status: string;
  commision: string;
}

class Record implements IRecord {
  no: string;
  code: string;
  title: string;
  content: string;
  status: string;
  commision: string;

  constructor(
    no: string = "",
    code: string = "",
    title: string = "",
    content: string = "",
    status: string = "",
    commision: string = ""
  ) {
    this.no = no;
    this.code = code;
    this.title = title;
    this.content = content;
    this.status = status;
    this.commision = commision;
  }
}

interface ICategory {
  no: string;
  code: string;
  name: string;
  status: string;
  position: string;
  description: string;
}

class Category implements ICategory {
  no: string;
  code: string;
  name: string;
  status: string;
  position: string;
  description: string;

  constructor(
    no: string = "",
    code: string = "",
    name: string = "",
    status: string = "",
    position: string = "",
    description: string = ""
  ) {
    this.no = no;
    this.code = code;
    this.name = name;
    this.status = status;
    this.position = position;
    this.description = description;
  }
}

const Maincontent: React.FC = () => {
  const [records, setRecords] = useState<Record[]>([]);
  const [category, setCategory] = useState<Category[]>([]);
 const [activeCategory, setActiveCategory] = useState("all");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vTtz0Uo2LaJ4ZXvLDBLsV35tLNT8LT4csRmkOffhx7L8ZL90itRlqKKBqnRSUliz2sZW9klRsVsako2/pub?output=xlsx";

        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        const data = new Uint8Array(arrayBuffer);

        const workbook = XLSX.read(data, { type: "array" });
        const worksheetPrograms = workbook.Sheets[workbook.SheetNames[0]];
        const worksheetCategories = workbook.Sheets[workbook.SheetNames[1]];

        const jsonDataPrograms: any[] = XLSX.utils.sheet_to_json(worksheetPrograms, { defval: "" });
        const mappedDataPrograms: Record[] = jsonDataPrograms.map(
          (row) =>
            new Record(
              row.no,
              row.code,
              row.title,
              row.content,
              row.status,
              row.commision
            )
        );
        setRecords(mappedDataPrograms);

        const jsonDataCategories: any[] = XLSX.utils.sheet_to_json(worksheetCategories, { defval: "" });
        const mappedDataCategories: Category[] = jsonDataCategories.map(
          (row) =>
            new Category(
              row.no,
              row.code,
              row.name,
              row.status,
              row.position,
              row.description
            )
        );
        setCategory(mappedDataCategories);
      } catch (err) {
        console.error("Lỗi khi tải dữ liệu:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="main-container">
      <div className="main-header">
        <h2>Affiliate Programs 2025</h2>
        <p>Select a program to explore details and start earning commissions</p>
      </div>

      <div className="filter-buttons">
        <Space wrap>
          {category.map((cat) => (
          <Button
            key={cat.code}
            type={activeCategory === cat.code ? "primary" : "default"}
            shape="round"
            onClick={() => setActiveCategory(cat.code)}
          >
            {cat.name} ({String(cat.name).padStart(2, "0")})
          </Button>
        ))}
        </Space>
      </div>

      <Row gutter={[24, 24]}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <Col key={i} xs={24} sm={12} lg={8}>
            <Card
              hoverable
              cover={
                <img
                  alt="program"
                  src={`https://picsum.photos/600/400?random=${i}`}
                  className="card-image"
                />
              }
            >
              <Meta
                title="Stylish Kitchen And Dining Room With Functional Ideas"
                description="Lorem Ipsum is simply dummy text of the print and typesetting industry..."
              />
              <div className="card-footer">
                <div className="author">
                  <img
                    src={`https://i.pravatar.cc/30?img=${i}`}
                    alt="author"
                    className="author-avatar"
                  />
                  <span>Adrio David · Sep 10, 2025</span>
                </div>
                <Tag color="blue">Technology</Tag>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Maincontent;
