import React from "react";
import { Row, Col, Typography, Form, Input, Button, Space } from "antd";
import { FacebookFilled, TwitterSquareFilled } from "@ant-design/icons";

const { Title, Text, Link, Paragraph } = Typography;

const Footer = () => {
    const companyInfo = {
        name: "SHDMEDIA TECHNOLOGY JOINT STOCK COMPANY",
        address: "5th Floor, Innovation Building, Tan Chanh Hiep Ward, District 12, Ho Chi Minh City",
        phone: "+84 28 66 888 999",
        email: "contact@shdmedia.net",
        taxCode: "0312345678",
        registrationDate: "May 20th, 2020",
    };

    const onFinish = (values: any) => {
        console.log("Subscribe email: ", values);
    };

    return (
        <footer className="footer-container" style={{ backgroundColor: "#111827", color: "#bfbfbf", padding: "40px 20px", borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>
            <div className="container">
                <Row gutter={[32, 32]}>
                    <Col xs={24} sm={12} md={6}>
                        <Title level={5} style={{ color: "#40a9ff" }}>CONTACT INFORMATION</Title>
                        <Paragraph strong style={{ color: "#ffffff" }}>{companyInfo.name}</Paragraph>
                        <Paragraph>
                            <Text strong style={{ color: "#ffffff" }}>Address:</Text> <br />
                            <Text style={{ color: "#ffffff" }}>{companyInfo.address}</Text>
                        </Paragraph>
                        <Paragraph>
                            <Text strong style={{ color: "#ffffff" }}>Phone:</Text> <Link href={`tel:${companyInfo.phone}`} style={{ color: "#40a9ff" }}>{companyInfo.phone}</Link>
                        </Paragraph>
                        <Paragraph>
                            <Text strong style={{ color: "#ffffff" }}>Email:</Text> <Link href={`mailto:${companyInfo.email}`} style={{ color: "#40a9ff" }}>{companyInfo.email}</Link>
                        </Paragraph>
                        <Paragraph>
                            <Text strong style={{ color: "#ffffff" }}>Tax Code:</Text> {companyInfo.taxCode}
                        </Paragraph>
                    </Col>

                    <Col xs={24} sm={12} md={6}>
                        <Title level={5} style={{ color: "#40a9ff" }}>OUR SERVICES</Title>
                        <Space direction="vertical">
                            <Link href="#" style={{ color: "#bfbfbf" }}>High-Speed Web Hosting</Link>
                            <Link href="#" style={{ color: "#bfbfbf" }}>Website Design</Link>
                            <Link href="#" style={{ color: "#bfbfbf" }}>Business Email Solutions</Link>
                            <Link href="#" style={{ color: "#bfbfbf" }}>Domain Registration</Link>
                        </Space>
                    </Col>

                    <Col xs={24} sm={12} md={6}>
                        <Title level={5} style={{ color: "#40a9ff" }}>SUPPORT & POLICIES</Title>
                        <Space direction="vertical">
                            <Link href="#" style={{ color: "#bfbfbf" }}>Support Center</Link>
                            <Link href="#" style={{ color: "#bfbfbf" }}>Privacy Policy</Link>
                            <Link href="#" style={{ color: "#bfbfbf" }}>Terms of Service</Link>
                            <Link href="#" style={{ color: "#bfbfbf" }}>Sitemap</Link>
                        </Space>
                    </Col>

                    <Col xs={24} sm={12} md={6}>
                        <Title level={5} style={{ color: "#40a9ff" }}>FOLLOW US</Title>
                        <Paragraph style={{ color: "#bfbfbf" }}>Subscribe to get the latest tech news.</Paragraph>
                        <Form layout="inline" onFinish={onFinish}>
                            <Form.Item name="email" rules={[{ required: true, message: "Please enter your email!" }, { type: "email", message: "Invalid email" }]}>
                                <Input placeholder="Your email..." />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">Submit</Button>
                            </Form.Item>
                        </Form>
                        <Space size="middle" style={{ marginTop: 16 }}>
                            <Link href="#" aria-label="Facebook"><FacebookFilled style={{ fontSize: 24, color: "#bfbfbf" }} /></Link>
                            <Link href="#" aria-label="Twitter"><TwitterSquareFilled style={{ fontSize: 24, color: "#bfbfbf" }} /></Link>
                        </Space>
                    </Col>
                </Row>

                <Row className="footer-bottom">
                    <Col>
                        <Text>
                            &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
                        </Text>
                    </Col>
                    <Col>
                        <Text>
                            Accepted Payments:
                            <span className="highlight"> VISA</span> /
                            <span className="highlight"> MASTER</span> /
                            <span className="highlight"> MOMO</span>
                        </Text>
                    </Col>
                </Row>
            </div>
        </footer >
    );
};

export default Footer;
