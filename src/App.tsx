import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  Layout,
  Typography,
  Row,
  Col,
  Card,
  Image,
  PageHeader,
  Tag,
} from "antd";
import Cite from "citation-js";
import "./App.css";
import thumbCitationVis from "./images/citationvis_thumb.png";

const { Header, Footer, Content } = Layout;
const { Paragraph, Link, Title } = Typography;

interface Project {
  label: string;
  name: string;
  description: React.ReactNode | string;
  img?: any;
  imgAltText?: string;
  citationKey?: string;
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
];

const App: React.FC = () => {
  const [pubs, setPubs] = useState<any | null>(null);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/jp_publications.bib")
      .then((r) => r.text())
      .then((text) => {
        const myPubs = new Cite(text);
        setPubs(myPubs);
        console.log(myPubs);
        // const pub = pubs.format("bibliography", {
        //   entry: "portenoy_leveraging_2017",
        // });
        // console.log(pub);
      });
  }, []); // this runs when the component first mounts

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jason Portenoy, PhD</title>
      </Helmet>
      <Layout>
        <PageHeader
          title={<Title>Jason Portenoy, PhD</Title>}
          tags={tags}
          backIcon={false}
          ghost={true}
        />
        <Content>
          {projects.map((project) => (
            <Card title={project.name}>
              {project.citationKey && pubs ? (
                <p>
                  {pubs.format("bibliography", {
                    entry: project.citationKey,
                  })}
                </p>
              ) : null}
              <Row gutter={32}>
                <Col md={16}>
                  <Paragraph>{project.description}</Paragraph>
                </Col>
                <Col md={8}>
                  {project.img ? (
                    <Image
                      src={project.img}
                      alt={project.imgAltText ? project.imgAltText : ""}
                      preview={false}
                      style={{ maxWidth: "200px" }}
                    />
                  ) : (
                    <div></div>
                  )}
                </Col>
              </Row>
            </Card>
          ))}
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
};

export default App;
