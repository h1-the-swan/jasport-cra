import React from "react";
import { Layout, Typography, Card, Image, PageHeader } from "antd";
import "./App.css";
import thumbCitationVis from "./images/citationvis_thumb.png";

const { Header, Footer, Content } = Layout;
const { Paragraph, Link } = Typography;

interface Project {
  label: string;
  name: string;
  description: React.ReactNode | string;
  img?: any;
  imgAltText?: string;
}

const projects: Project[] = [
  {
    label: "autoreview",
    name: "Automated literature review",
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
    description: <React.Fragment></React.Fragment>,
  },
  {
    label: "nautilus",
    name: "Visualizing scholarly influence",
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

const App: React.FC = () => (
  <div className="App">
    <Layout>
      <PageHeader title="Jason Portenoy" backIcon={false} ghost={true} />
      <Content>
        {projects.map((project) => (
          <Card title={project.name}>
            {project.img ? (
              <Image
                src={project.img}
                alt={project.imgAltText ? project.imgAltText : ""}
                preview={false}
              />
            ) : null}
            <Paragraph>{project.description}</Paragraph>
          </Card>
        ))}
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  </div>
);

export default App;
