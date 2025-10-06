import React, { useEffect, useState } from "react";
import { Row, Col, Card, Tag, Button, Space, Pagination } from "antd";
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
  image: string;
}

class Record implements IRecord {
  no: string;
  code: string;
  title: string;
  content: string;
  status: string;
  commision: string;
  image: string;

  constructor(
    no: string = "",
    code: string = "",
    title: string = "",
    content: string = "",
    status: string = "",
    commision: string = "",
    image: string = ""
  ) {
    this.no = no;
    this.code = code;
    this.title = title;
    this.content = content;
    this.status = status;
    this.commision = commision;
    this.image = image;
  }
}

interface ICategory {
  no: string;
  code: string;
  name: string;
  status: string;
  position: string;
  description: string;
  color: string;
}

class Category implements ICategory {
  no: string;
  code: string;
  name: string;
  status: string;
  position: string;
  description: string;
  color: string;

  constructor(
    no: string = "",
    code: string = "",
    name: string = "",
    status: string = "",
    position: string = "",
    description: string = "",
    color: string = ""
  ) {
    this.no = no;
    this.code = code;
    this.name = name;
    this.status = status;
    this.position = position;
    this.description = description;
    this.color = color;
  }
}

const Maincontent: React.FC = () => {
  const [records, setRecords] = useState<Record[]>([]);
  const [category, setCategory] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(6);

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

        const jsonDataPrograms: any[] = XLSX.utils.sheet_to_json(
          worksheetPrograms,
          { defval: "" }
        );
        const mappedDataPrograms: Record[] = jsonDataPrograms.map(
          (row) =>
            new Record(
              row.no,
              row.code,
              row.title,
              row.content,
              row.status,
              row.commision,
              row.image
            )
        );
        setRecords(mappedDataPrograms);

        const jsonDataCategories: any[] = XLSX.utils.sheet_to_json(
          worksheetCategories,
          { defval: "" }
        );
        const mappedDataCategories: Category[] = jsonDataCategories.map(
          (row) =>
            new Category(
              row.no,
              row.code,
              row.name,
              row.status,
              row.position,
              row.description,
              row.color
            )
        );
        setCategory(mappedDataCategories);
      } catch (err) {
        console.error("Lỗi khi tải dữ liệu:", err);
      }
    };

    fetchData();
  }, []);

  // Lấy tên loại từ category code
  function getType(code: string) {
    const found = category.find((c) => c.code === code);
    return found ? found.name : "Unknown";
  }
  function getColor(code: string) {
    const found = category.find((c) => c.code === code);
    return found ? found.color : "#000";
  }

  // Lọc dữ liệu theo category đang chọn
  const filteredRecords =
    activeCategory === "all"
      ? records
      : records.filter((r) => r.code === activeCategory);

  // Dữ liệu phân trang
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = filteredRecords.slice(
    startIndex,
    startIndex + pageSize
  );

  return (
    <div className="main-container">
      <div className="main-header">
        <h2>Affiliate Programs 2025</h2>
        <p>Select a program to explore details and start earning commissions</p>
      </div>

      {/* Filter */}
      <div className="filter-buttons">
        <Space wrap>
          <Button
            type={activeCategory === "all" ? "primary" : "default"}
            shape="round"
            onClick={() => {
              setActiveCategory("all");
              setCurrentPage(1);
            }}
          >
            All ({records.length})
          </Button>

          {category.map((cat) => (
            <Button
              key={cat.code}
              type={activeCategory === cat.code ? "primary" : "default"}
              shape="round"
              onClick={() => {
                setActiveCategory(cat.code);
                setCurrentPage(1);
              }}
            >
              {cat.name}
            </Button>
          ))}
        </Space>
      </div>

      {/* Danh sách Card */}
      <Row gutter={[24, 24]}>
        {paginatedData.length > 0 ? (
          paginatedData.map((i) => (
            <Col key={`${i.no}-${i.code}`} xs={24} sm={12} lg={8}>
              <Card
                hoverable
                cover={
                  <img alt="program" src={i.image} className="card-image" />
                }
              >
                <Meta title={i.title} description={i.content} />
                <div className="card-footer">
                  <div className="author">
                    <img
                      src={`https://i.pravatar.cc/30?img=${i.no}`}
                      alt="author"
                      className="author-avatar"
                    />
                    <span>Adrio David · Sep 10, 2025</span>
                  </div>
                  <Tag color={getColor(i.code)}>{getType(i.code)}</Tag>
                </div>
              </Card>
            </Col>
          ))
        ) : (
          <Col span={24} style={{ textAlign: "center", padding: "60px 0" }}>
            <h3 style={{ color: "#888" }}>No items found</h3>
            <p style={{ color: "#aaa" }}>
              Try selecting another category or check back later.
            </p>
          </Col>
        )}
      </Row>

      {/* Phân trang */}
      <div style={{ textAlign: "center", marginTop: 30 }}>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredRecords.length}
          onChange={(page) => setCurrentPage(page)}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default Maincontent;
