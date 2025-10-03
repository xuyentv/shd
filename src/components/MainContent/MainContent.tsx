import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
class Record {
  constructor(no, title, code, content, status, commision) {
    this.no = no || "";
    this.code = code || "";
    this.title = title || "";
    this.content = content || "";
    this.status = status || "";
    this.commision = commision || "";
  }
}
const Maincontent = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vTtz0Uo2LaJ4ZXvLDBLsV35tLNT8LT4csRmkOffhx7L8ZL90itRlqKKBqnRSUliz2sZW9klRsVsako2/pub?output=xlsx";

        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        const data = new Uint8Array(arrayBuffer);

        // Đọc file Excel
        const workbook = XLSX.read(data, { type: "array" });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];

        // JSON từ sheet
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: "" });

        // Map sang class Record
        const mappedData = jsonData.map(
          (row) =>
            new Record(row.no, row.code, row.title, row.content, row.status, row.commision)
        );

        console.log("Dữ liệu:", mappedData);
        setRecords(mappedData);
      } catch (err) {
        console.error("Lỗi khi tải dữ liệu:", err);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="container py-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold fs-2">Browse by Category</h2>
          <p className="text-muted mt-2">
            Select a category to see more related content
          </p>
        </div>

        {/* Nút category */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          <button className="btn btn-dark rounded-pill px-4 py-2">
            All (20)
          </button>
          <button className="btn btn-outline-secondary rounded-pill px-4 py-2">
            Technology (03)
          </button>
          <button className="btn btn-outline-secondary rounded-pill px-4 py-2">
            Lifestyle (02)
          </button>
          <button className="btn btn-outline-secondary rounded-pill px-4 py-2">
            Travel (05)
          </button>
          <button className="btn btn-outline-secondary rounded-pill px-4 py-2">
            Health (09)
          </button>
          <button className="btn btn-outline-secondary rounded-pill px-4 py-2">
            Culture (01)
          </button>
        </div>

        {/* Grid bài viết */}
        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-4">
            <img
              className="img-fluid rounded mb-3"
              src="https://picsum.photos/600/400?1"
              alt=""
            />
            <h3 className="fs-5 fw-semibold mb-2">
              Stylish Kitchen And Dining Room With Functional Ideas
            </h3>
            <p className="text-muted small mb-3">
              Lorem Ipsum is simply dummy text of the print and typesetting
              industry...
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-2 text-muted small">
                <img
                  className="rounded-circle"
                  width="24"
                  height="24"
                  src="https://i.pravatar.cc/30"
                  alt="author"
                />
                <span>Adrio Devid · Sep 10, 2025</span>
              </div>
              <span className="badge bg-primary-subtle text-primary">
                Technology
              </span>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <img
              className="img-fluid rounded mb-3"
              src="https://picsum.photos/600/400?2"
              alt=""
            />
            <h3 className="fs-5 fw-semibold mb-2">
              Stylish Kitchen And Dining Room With Functional Ideas
            </h3>
            <p className="text-muted small mb-3">
              Lorem Ipsum is simply dummy text of the print and typesetting
              industry...
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-2 text-muted small">
                <img
                  className="rounded-circle"
                  width="24"
                  height="24"
                  src="https://i.pravatar.cc/31"
                  alt="author"
                />
                <span>Adrio Devid · Sep 10, 2025</span>
              </div>
              <span className="badge bg-primary-subtle text-primary">
                Technology
              </span>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <img
              className="img-fluid rounded mb-3"
              src="https://picsum.photos/600/400?3"
              alt=""
            />
            <h3 className="fs-5 fw-semibold mb-2">
              Stylish Kitchen And Dining Room With Functional Ideas
            </h3>
            <p className="text-muted small mb-3">
              Lorem Ipsum is simply dummy text of the print and typesetting
              industry...
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-2 text-muted small">
                <img
                  className="rounded-circle"
                  width="24"
                  height="24"
                  src="https://i.pravatar.cc/32"
                  alt="author"
                />
                <span>Adrio Devid · Sep 10, 2025</span>
              </div>
              <span className="badge bg-primary-subtle text-primary">
                Technology
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maincontent;
