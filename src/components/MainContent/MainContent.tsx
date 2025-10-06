// MainContent.tsx
import React, { useEffect, useState, useMemo, useRef } from "react";
import {
  Row,
  Col,
  Card,
  Tag,
  Button,
  Space,
  Pagination,
  Spin,
  Empty,
} from "antd";
import * as XLSX from "xlsx";
import "./MainContent.css";

const { Meta } = Card;

interface IRecord {
  id: string;
  no: string;
  code: string;
  title: string;
  content: string;
  status: string;
  commision: string;
  image: string;
}

interface ICategory {
  id: string;
  no: string;
  code: string;
  name: string;
  status: string;
  position: string;
  description: string;
  color: string;
}

const Maincontent: React.FC = () => {
  const [records, setRecords] = useState<IRecord[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize] = useState<number>(6);
  const [loading, setLoading] = useState<boolean>(true);

  const listRef = useRef<HTMLDivElement>(null);

  // Fetch dữ liệu
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const url =
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vTtz0Uo2LaJ4ZXvLDBLsV35tLNT8LT4csRmkOffhx7L8ZL90itRlqKKBqnRSUliz2sZW9klRsVsako2/pub?output=xlsx";
        const res = await fetch(url);
        const arrayBuffer = await res.arrayBuffer();
        const workbook = XLSX.read(new Uint8Array(arrayBuffer), {
          type: "array",
        });

        const sheetPrograms = workbook.Sheets[workbook.SheetNames[0]];
        const sheetCategories = workbook.Sheets[workbook.SheetNames[1]];

        const jsonPrograms: any[] = XLSX.utils.sheet_to_json(sheetPrograms, {
          defval: "",
        });
        const jsonCategories: any[] = XLSX.utils.sheet_to_json(
          sheetCategories,
          { defval: "" }
        );

        const mappedRecords: IRecord[] = jsonPrograms.map((row, idx) => ({
          id: `${row.no ?? "r"}-${idx}`,
          no: String(row.no ?? ""),
          code: String(row.code ?? "").trim().toLowerCase(),
          title: String(row.title ?? ""),
          content: String(row.content ?? ""),
          status: String(row.status ?? ""),
          commision: String(row.commision ?? ""),
          image: String(row.image ?? ""),
        }));

        const mappedCategories: ICategory[] = jsonCategories.map((row, idx) => ({
          id: `${row.no ?? "c"}-${idx}`,
          no: String(row.no ?? ""),
          code: String(row.code ?? "").trim().toLowerCase(),
          name: String(row.name ?? ""),
          status: String(row.status ?? ""),
          position: String(row.position ?? ""),
          description: String(row.description ?? ""),
          color: String(row.color ?? "#666"),
        }));

        setRecords(mappedRecords);
        setCategories(mappedCategories);
      } catch (err) {
        console.error("❌ Lỗi khi tải dữ liệu:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Reset page khi activeCategory thay đổi
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // Filter
  const filteredRecords = useMemo(() => {
    if (!records.length) return [];
    if (activeCategory === "all") return records;
    return records.filter((r) => r.code === activeCategory);
  }, [records, activeCategory]);

  // Pagination slice
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = useMemo(
    () => filteredRecords.slice(startIndex, startIndex + pageSize),
    [filteredRecords, startIndex, pageSize]
  );

  // Scroll đến thẻ đầu tiên khi đổi page hoặc category
  useEffect(() => {
    if (!paginatedData.length) return;
    const firstItemId = paginatedData[0].id;
    const el = document.getElementById(firstItemId);
    if (el) {
      const rect = el.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset + rect.top - window.innerHeight / 2 + rect.height / 2;
      window.scrollTo({ top: scrollTop, behavior: "smooth" });
    }
  }, [paginatedData]);

  const getCategoryName = (code: string) =>
    categories.find((c) => c.code === code)?.name || "Unknown";
  const getCategoryColor = (code: string) =>
    categories.find((c) => c.code === code)?.color || "#666";

  if (loading) {
    return (
      <div className="loading-container">
        <Spin size="large" tip="Đang tải dữ liệu..." />
      </div>
    );
  }

  return (
    <div className="main-container">
      <div className="main-header">
        <h2>Affiliate Programs 2025</h2>
        <p>Khám phá các chương trình tiếp thị hấp dẫn và nhận hoa hồng dễ dàng!</p>
      </div>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <Space wrap>
          <Button
            type={activeCategory === "all" ? "primary" : "default"}
            shape="round"
            onClick={() => setActiveCategory("all")}
          >
            All ({records.length})
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat.id}
              type={activeCategory === cat.code ? "primary" : "default"}
              shape="round"
              onClick={() => setActiveCategory(cat.code)}
            >
              {cat.name}
            </Button>
          ))}
        </Space>
      </div>

      {/* Cards */}
      <Row gutter={[24, 24]} ref={listRef}>
        {paginatedData.length > 0 ? (
          paginatedData.map((item) => (
            <Col key={item.id} id={item.id} xs={24} sm={12} lg={8}>
              <Card
                hoverable
                className="program-card"
                cover={<img alt={item.title} src={item.image} className="card-image" />}
              >
                <Meta title={item.title} description={item.content} />
                <div className="card-footer">
                  <div className="author">
                    <img
                      src={`https://i.pravatar.cc/30?img=${item.no}`}
                      alt="author"
                      className="author-avatar"
                    />
                    <span>Adrio David · Sep 10, 2025</span>
                  </div>
                  <Tag color={getCategoryColor(item.code)}>
                    {getCategoryName(item.code)}
                  </Tag>
                </div>
              </Card>
            </Col>
          ))
        ) : (
          <Col span={24} style={{ textAlign: "center", padding: "80px 0" }}>
            <Empty description="Không có chương trình nào trong danh mục này" />
          </Col>
        )}
      </Row>

      {/* Pagination */}
      {filteredRecords.length > pageSize && (
        <div style={{ textAlign: "center", marginTop: 30 }}>
          <Pagination
            key={`${activeCategory}-${filteredRecords.length}`}
            current={currentPage}
            pageSize={pageSize}
            total={filteredRecords.length}
            onChange={(page) => setCurrentPage(page)}
            showSizeChanger={false}
          />
        </div>
      )}
    </div>
  );
};

export default Maincontent;
