import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { projects } from "./projects";
import {
  Layout,
  Typography,
  List,
  Row,
  Col,
  Card,
  Image,
  PageHeader,
  Tag,
  Divider,
  Space,
} from "antd";
import styled from "styled-components";
import Cite from "citation-js";
import "./App.css";
import thumbHeadshot from "./images/JP_headshot_ischool_jwedit_thumb.jpg";
import thumbCitationVis from "./images/citationvis_thumb.png";
import thumbBookStacks from "./images/book_stacks_thumb.jpg";
import thumbSciSight from "./images/scisight1.png";
import thumbMathJargon from "./images/dendrogram_mathjargon_thumb.jpg";
import thumbSankey from "./images/sankey_thumb.png";
import thumbCortana from "./images/cortana_commitments.png";

const { Header, Footer, Content } = Layout;
const { Paragraph, Link, Title } = Typography;

const tags = [
  <Tag>network analysis</Tag>,
  <Tag>scholarly data</Tag>,
  <Tag>data science</Tag>,
];

const StyledLayout = styled(Layout)`
  background-color: #fff;
`;

const MyHeader = styled(Header)`
  background-color: white;
`;

const MyTitle = styled(Title)`
  &&& {
    // padding-top: 50%;
    font-size: 2.5em;
  }

  @media screen and (max-width: 800px) {
    &&& {
      font-size: 1.5em;
    }
  }
`;

// const ThumbnailImage = styled(Image)`
//   margin: auto;
// `;
const ThumbnailImage = (props: any) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Image
        src={props.src}
        preview={false}
        width="60%"
        // style={{ margin: "auto" }}
      />
    </div>
  );
};

const ThumbnailHeadshot = styled(Image)`
  text-align: center;
  width: 100%;
  max-width: 400px;
`;

const App: React.FC = () => {
  const [pubs, setPubs] = useState<any | null>(null);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/jp_publications.bib")
      .then((r) => r.text())
      .then((text) => {
        const myPubs = new Cite(text);
        setPubs(myPubs);
        const x = myPubs.format("bibliography", {
          entry: projects[0].citationKey,
          format: "html",
          // style: "csl",
          // type: "html",
        });
        console.log(x);
        console.log(typeof x);
        const x2 = myPubs.format("bibliography", {
          entry: projects[0].citationKey,
          format: "html",
          style: "citation-apa-no-doi-no-issue",
        });
        // const x2 = Cite.plugins.output.format(
        //   "bibliography",
        //   myPubs.format("data", { format: "object" })
        // );
        console.log(x2);
      });
  }, []); // this runs when the component first mounts

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jason Portenoy, PhD</title>
      </Helmet>
      <StyledLayout>
        {/* <MyHeader>
          <MyTitle>Jason Portenoy, PhD</MyTitle>
        </MyHeader> */}
        <Row gutter={32}>
          <Col sm={16}>
            <PageHeader
              title={<MyTitle>Jason Portenoy, PhD</MyTitle>}
              // tags={tags}
              backIcon={false}
              ghost={false}
            >
              <span>{tags}</span>
              <List>
                <a href="mailto: jason.portenoy@gmail.com">
                  ✉ jason.portenoy@gmail.com
                </a>
                <li>
                  <Link
                    href={`${process.env.PUBLIC_URL}/JasonPortenoy_resume20220720.pdf`}
                    target="_blank"
                  >
                    📄 Resume (one-pager)
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${process.env.PUBLIC_URL}/JasonPortenoy_CV20211216.pdf`}
                    target="_blank"
                  >
                    📜 Full CV
                  </Link>
                </li>
                <li>
                  Github:{" "}
                  <Link href="https://github.com/h1-the-swan" target="_blank">
                    h1-the-swan
                  </Link>
                </li>
                <li>
                  Twitter:{" "}
                  <Link href="http://twitter.com/jportenoy" target="_blank">
                    @jportenoy
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/jason-portenoy/"
                    target="_blank"
                  >
                    LinkedIn
                  </Link>
                </li>
              </List>
            </PageHeader>
          </Col>
          <Col sm={8}>
            <Card
              cover={<ThumbnailImage src={thumbHeadshot} />}
              bordered={false}
            ></Card>
          </Col>
        </Row>
        <Divider />

        <Content>
          <Title level={2}>Projects</Title>
          <Row gutter={32}>
            {projects.map((project) => (
              <Col md={12} lg={8}>
                <Card
                  id={`card-${project.label}`}
                  title={
                    <Title ellipsis={true} level={4}>
                      {project.name}
                    </Title>
                  }
                  cover={<ThumbnailImage src={project.img} />}
                  hoverable={false}
                  bordered={false}
                >
                  <Paragraph
                    ellipsis={{ rows: 4, expandable: true, symbol: "More" }}
                  >
                    {project.description}
                    {project.citationKey && pubs ? (
                      <>
                        <Divider style={{ margin: ".5em" }} />
                        <p
                          dangerouslySetInnerHTML={{
                            __html: pubs.format("bibliography", {
                              entry: project.citationKey,
                              format: "html",
                            }),
                          }}
                        ></p>
                        {project.citationURL ? (
                          <Link href={project.citationURL} target="_blank">
                            Download
                          </Link>
                        ) : null}
                      </>
                    ) : null}
                  </Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </Content>
        {/* <Footer>Footer</Footer> */}
      </StyledLayout>
    </div>
  );
};

export default App;
