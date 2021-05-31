import React from "react";
import { Layout, Card } from "antd";
import "./App.css";

const { Header, Footer, Content } = Layout;

interface Project {
  name: string;
  description: React.ReactNode | string;
}

const projects: Project[] = [
  {
    name: "Visualizing scholarly influence",
    description: (
      <React.Fragment>
        The scholarly literature is a vast store of formalized human knowledge,
        interconnected by citations between publications. Looking at these
        citations is one way to measure the influence of scholarly research.
        <a
          href="http://scholar.eigenfactor.org/"
          target="_blank"
          rel="noreferrer"
        >
          Scholar.eigenfactor.org
        </a>
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
      <Header>Header</Header>
      <Content>
        {projects.map((project) => (
          <Card title={project.name}>
            <p>{project.description}</p>
          </Card>
        ))}
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  </div>
);

export default App;
