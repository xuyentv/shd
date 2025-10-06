import { Card, Typography, Tag, Row, Col, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./MainSection.css";

const { Title, Paragraph, Text } = Typography;

const MainSection = () => {
  return (
    <Card className="main-hero-section" bodyStyle={{ padding: 0 }}>
      <Row gutter={24} align="middle">
        <Col xs={24} md={12}>
          <div className="hero-image">
            <img
              src="https://picsum.photos/600/400?random=2"
              alt="Modern buildings"
            />
          </div>
        </Col>
        <Col xs={24} md={12} className="hero-content">
          <Tag color="purple" className="category-tag">
            Lifestyle
          </Tag>
          <Title level={2}>
            Begin here to obtain a brief summary encompassing all the essential
          </Title>
          <Paragraph>
            This comprehensive post serves as your chief sheet to swiftly
            familiarize yourself with Ghost. Packed with crucial...
          </Paragraph>

          <div className="author-info">
            <Avatar icon={<UserOutlined />} size="small" />
            <Text>&nbsp;By Adrio David&nbsp;•&nbsp;Sep 10, 2025</Text>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default MainSection;
