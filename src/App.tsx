import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
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

interface Project {
  label: string;
  name: string;
  citationKey?: string;
  description: React.ReactNode | string;
  img?: any;
  imgAltText?: string;
}

const tags = [
  <Tag>network analysis</Tag>,
  <Tag>scholarly data</Tag>,
  <Tag>data science</Tag>,
];

const projects: Project[] = [
  {
    label: "autoreview",
    name: "Automated literature review",
    citationKey: "portenoy_constructing_2020",
    img: thumbBookStacks,
    description: (
      <React.Fragment>
        <em>Autoreview</em> is a framework for building and evaluating systems
        to automatically select relevant publications for literature reviews,
        starting from small sets of seed papers. These automated methods have
        the potential to help researchers save time and effort when keeping up
        with relevant literature, as well as surfacing papers that more manual
        methods may miss. I show that this approach can work to recommend
        relevant literature, and can also be used to systematically compare
        different features used in the recommendations.
      </React.Fragment>
    ),
  },
  {
    label: "scisight",
    name: "SciSight",
    citationKey: "hope_scisight_2020",
    img: thumbSciSight,
    description: (
      <React.Fragment>
        We extend the SciSight literature visualization platform to support
        exploratory search over the network of scholarly collaborations in
        computer science, gleaned from a corpus of 10M papers. We represent
        authors with author cards displaying the main tasks, methods, materials
        and metrics extracted from their papers. We embed each extracted facet
        with a language model tuned for semantic similarity, allowing us to find
        interesting relations and gaps across authors and research groups: for
        example, showing authors who work on similar problems, but use very
        different methods.
      </React.Fragment>
    ),
  },
  {
    label: "nautilus",
    name: "Visualizing scholarly influence",
    citationKey: "portenoy_leveraging_2017",
    img: thumbCitationVis,
    description: (
      <React.Fragment>
        The scholarly literature is a vast store of formalized human knowledge,
        interconnected by citations between publications. Looking at these
        citations is one way to measure the influence of scholarly research.{" "}
        <Link href="http://scholar.eigenfactor.org/" target="_blank">
          Scholar.eigenfactor.org
        </Link>{" "}
        is a collection of tools I built to use citations to measure and
        visualize the influence of collections of papers. These collections can
        represent, for example, individual scholars, or journals, academic
        departments, or fields of study.
      </React.Fragment>
    ),
  },
  {
    label: "mathjargon",
    name: "Mathematical Jargon: Calculating differences between fields",
    citationKey: "west_delineating_2016",
    img: thumbMathJargon,
    description: (
      <React.Fragment>
        We analyze the mathematical language used in hundreds of thousands of
        scientific papers, comparing the use of math across different
        disciplines. By comparing the distributions of mathematical symbols and
        terms across fields, we quantify the "jargon barriers" between these
        fields—the difficulty any two fileds might have communicating based on
        how different their use of mathematical language is. We find that
        characterizing fields by their use of mathematical language causes them
        to group in intuitive ways, and we explore how this approach could be
        used for recommendations in the scholarly literature, and for helping to
        bridge knowledge gaps in science.
      </React.Fragment>
    ),
  },
  {
    label: "dssg",
    name: "Predictors of permanent housing for homeless families",
    img: thumbSankey,
    description: (
      <React.Fragment>
        As a{" "}
        <Link href="https://escience.washington.edu/dssg/" target="_blank">
          Data Science for Social Good
        </Link>{" "}
        summer fellow at the University of Washington's eScience Institute, I
        worked on a team collaborating with the Bill and Melinda Gates
        Foundation and other organizations to help understand and address the{" "}
        <Link
          href="http://escience.washington.edu/research-project/predictors-of-permanent-housing-for-homeless-families/"
          target="_blank"
        >
          problem of family homelessness in western Washington state.
        </Link>{" "}
        Our contributions included analyzing data, building models, and creating
        interactive visualizations.
      </React.Fragment>
    ),
  },
  {
    label: "commitments",
    name: "Commitments in written communication",
    citationKey: "white_automated_2019",
    img: thumbCortana,
    description: (
      <React.Fragment>
        As an intern at Microsoft Research, I worked on a project to help
        Microsoft's personal digital assistant, Cortana, identify when people
        make commitments in their outgoing emails, and understand what kinds of
        commitments they make.
      </React.Fragment>
    ),
  },
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
    font-size: 2em;
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
        width="70%"
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
          <Col span={16}>
            <PageHeader
              title={<MyTitle>Jason Portenoy, PhD</MyTitle>}
              // tags={tags}
              backIcon={false}
              ghost={false}
            >
              <span>{tags}</span>
              <List>
                <li>jporteno[@]uw[.]edu</li>
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
          <Col span={8}>
            <Card
              cover={<ThumbnailImage src={thumbHeadshot} />}
              bordered={false}
            ></Card>
          </Col>
        </Row>
        <Divider />

        <Content>
          <Row gutter={32}>
            {projects.map((project) => (
              <Col md={12} lg={8}>
                <Card
                  id={`card-${project.label}`}
                  title={project.name}
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
