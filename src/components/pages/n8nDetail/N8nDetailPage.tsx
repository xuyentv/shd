import { Typography, Row, Col, Divider, Tag, Space, Avatar, Anchor, Card } from "antd";
import { UserOutlined, CalendarOutlined, SolutionOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

// Mock data for the table of contents
const tocItems = [
  { key: '#what-is-n8n', href: '#what-is-n8n', title: '1. What is n8n?' },
  { key: '#open-source-advantage', href: '#open-source-advantage', title: '2. The Open-Source Advantage' },
  { key: '#key-features', href: '#key-features', title: '3. Key Features for Developers' },
  { key: '#n8n-vs-zapier', href: '#n8n-vs-zapier', title: '4. n8n vs. Zapier/Integromat' },
];

const N8nDetailPage = () => {
  const ArticleContent = (
    <>
      <section id="what-is-n8n">
        <Title level={2}>1. What is n8n? (The Core Engine)</Title>
        <Paragraph>
          **n8n** (Node-based workflow automation) is a powerful, self-hosted, and **open-source automation tool** that allows developers to connect various services and applications. Unlike fully managed SaaS solutions, n8n gives you complete ownership of your workflow data. It operates on a node-based system, meaning complex processes are built visually by chaining together different nodes (triggers, actions, data transformation). This provides immense flexibility for intricate business logic and specific integration needs, making it a favorite among engineering teams and tech-savvy users.
        </Paragraph>
        <Paragraph>
          <Text strong>SEO Focus:</Text> Keywords like "open-source automation," "workflow automation," and "self-hosted" are crucial here.
        </Paragraph>
      </section>

      <Divider />

      <section id="open-source-advantage">
        <Title level={2}>2. The Open-Source Advantage (Control and Customization)</Title>
        <Paragraph>
          The open-source nature of n8n is its biggest draw for developers. It eliminates vendor lock-in and allows for extensive customization. Developers can create **custom nodes** using JavaScript/TypeScript to integrate with proprietary or niche internal tools. This level of control is impossible with proprietary tools. Furthermore, running n8n on your own infrastructure (self-hosting) ensures **data privacy and compliance**, especially critical for handling sensitive customer data or internal API keys.
        </Paragraph>
      </section>

      <Divider />

      <section id="key-features">
        <Title level={2}>3. Key Features for Developers</Title>
        <Title level={3}>3.1. Code Node for Custom Logic</Title>
        <Paragraph>
          The **Code Node** is a game-changer. It allows developers to execute JavaScript code directly within the workflow. This is perfect for complex data manipulation, applying custom validation rules, or implementing advanced branching logic that standard no-code nodes cannot handle. This feature bridges the gap between low-code and full-code development, providing the best of both worlds.
        </Paragraph>
        <Title level={3}>3.2. Extensive Native Integrations</Title>
        <Paragraph>
          n8n boasts hundreds of pre-built integrations (or 'nodes') for popular services like Slack, Stripe, Google Sheets, and GitHub. This speeds up development considerably. If a native node doesn't exist, the generic HTTP Request node or the custom Code Node can easily fill the gap, thanks to its developer-first architecture.
        </Paragraph>
      </section>
      
      <Divider />

      <section id="n8n-vs-zapier">
        <Title level={2}>4. n8n vs. Zapier/Integromat (When to choose n8n)</Title>
        <Paragraph>
          While Zapier and Make (formerly Integromat) are excellent entry points for simple automation, **n8n excels in enterprise-level complexity and cost efficiency**. Zapier's pricing can quickly escalate with high volume and multi-step workflows. Because n8n is self-hosted, the primary cost is your infrastructure, offering significantly better value for high-volume, continuous automation tasks. Choose n8n if you prioritize **cost control, data sovereignty, complex logic, and deep customization**.
        </Paragraph>
      </section>
    </>
  );

  return (
    <div style={{ padding: '24px', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <Row justify="center">
        <Col xs={24} lg={18} xl={14}>
          <Card style={{ marginBottom: 24, borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            {/* Header / Hero Section (High SEO Value) */}
            <Title level={1} style={{ marginBottom: 8 }}>
              In-Depth Review: n8n - The Powerful Open-Source Workflow Automation Tool for Developers
            </Title>
            
            <Space size="large" style={{ marginBottom: 24, color: '#8c8c8c' }}>
              <Text>
                <Avatar icon={<UserOutlined />} size="small" style={{ marginRight: 8 }} />
                Adrio David
              </Text>
              <Text>
                <CalendarOutlined style={{ marginRight: 8 }} />
                Published: Nov 18, 2025
              </Text>
              <Tag color="blue" icon={<SolutionOutlined />}>
                Automation & Dev Tools
              </Tag>
            </Space>

            <Divider style={{ margin: '16px 0' }}/>
            
            {/* Featured Image */}
            <img
              src="https://picsum.photos/1200/500?random=n8n-detail-hero"
              alt="Detailed illustration of an n8n workflow"
              style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: 24 }}
              onError={(e) => { 
                const target = e.target as HTMLImageElement;
                target.onerror = null; 
                target.src = "https://placehold.co/1200x500/1890ff/FFFFFF?text=n8n+Detail+Page+Hero"; 
              }}
            />
            
            {/* Lead Paragraph / Summary */}
            <Paragraph style={{ fontSize: '1.15em', lineHeight: '1.8', marginBottom: 32, borderLeft: '4px solid #1890ff', paddingLeft: '16px', backgroundColor: '#e6f7ff' }}>
              For developers seeking an enterprise-grade automation solution without the constraints of proprietary platforms, **n8n** presents the definitive open-source answer. This in-depth review breaks down its architecture, developer-centric features, and crucial advantages over competitors like Zapier, highlighting why n8n is the superior choice for high-volume, complex, and data-sensitive workflows.
            </Paragraph>

            <Row gutter={24}>
              {/* Main Content Area */}
              <Col xs={24} md={18}>
                {ArticleContent}
              </Col>
              
              {/* Sidebar / Table of Contents (Sticky for better UX) */}
              <Col xs={24} md={6}>
                <Card title="Table of Contents" size="small" style={{ position: 'sticky', top: 24 }}>
                  <Anchor 
                    affix={false}
                    showInkInFixed
                    items={tocItems}
                  />
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default N8nDetailPage;