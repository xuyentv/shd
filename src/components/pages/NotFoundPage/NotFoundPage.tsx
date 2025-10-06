import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
const NotFoundPage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "70vh",
                textAlign: "center",
                padding: 20,
            }}
        >
            <h1 style={{ fontSize: 72, margin: 0, color: "#0ea5e9" }}>404</h1>
            <p style={{ fontSize: 24, margin: "16px 0", color: "#374151" }}>
                Page Not Found
            </p>
            <Button type="primary" onClick={() => navigate("/")}>
                Go to Home
            </Button>
        </div>
    );
};

export default NotFoundPage;