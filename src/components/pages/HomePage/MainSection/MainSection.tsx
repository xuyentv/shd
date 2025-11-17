import { Card, Typography, Tag, Row, Col, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Paragraph, Text } = Typography;

const MainSection = () => {
  const navigate = useNavigate();

  return (
    <Card className="main-hero-section" bodyStyle={{ padding: 0 }}>
      <Row gutter={24} align="middle">
        <Col xs={24} md={12}>
          <div className="hero-image">
            <img
              src="../../../../public/img/n8n.jpg"
              alt="n8n Workflow Automation Diagram"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "./../../../public/img/n8n.jpg";
              }}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </Col>

        <Col xs={24} md={12} style={{ padding: "24px" }}>
          <Tag color="blue">Automation & Workflow</Tag>

          {/* CLICK vào title để chuyển trang */}
          <Title
            level={2}
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/n8n")}
          >
            In-Depth Review: n8n - The Powerful Open-Source Workflow Automation Tool for Developers
          </Title>

          <Paragraph>
            n8n is a free and open-source workflow automation tool designed...
          </Paragraph>

          <div style={{ display: "flex", alignItems: "center", marginTop: "16px" }}>
            <Avatar icon={<UserOutlined />} size="small" />
            <Text>&nbsp;By Adrio David • Nov 18, 2025</Text>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default MainSection;
