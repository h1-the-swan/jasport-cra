import React from "react";
import thumbCitationVis from "./images/citationvis_thumb.png";
import thumbBookStacks from "./images/book_stacks_thumb.jpg";
import thumbSciSight from "./images/scisight1.png";
import thumbInfomap from "./images/infomap_diagram_thumb.jpg";
import thumbCoauthor from "./images/coauthorship_thumb.png";
import thumbMathJargon from "./images/dendrogram_mathjargon_thumb.jpg";
import thumbSankey from "./images/sankey_thumb.png";
import thumbCortana from "./images/cortana_commitments.png";
import thumbGrantExplorer from "./images/grantexplorer_thumb.png";
import { Typography } from "antd";
const { Paragraph, Link, Title } = Typography;

interface Project {
  label: string;
  name: string;
  citationKey?: string;
  citationURL?: string;
  description: React.ReactNode | string;
  img?: any;
  imgAltText?: string;
}

export const projects: Project[] = [
  {
    label: "autoreview",
    name: "Automated literature review",
    citationKey: "portenoy_constructing_2020",
    citationURL:
      process.env.PUBLIC_URL +
      "/Portenoy_West_2020_Constructing and evaluating automated literature review systems.pdf",
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
    name: "SciSight / Bridger",
    citationKey: "portenoy_bursting_2022",
    citationURL: "https://arxiv.org/pdf/2108.05669.pdf",
    img: thumbSciSight,
    description: (
      <React.Fragment>
        Scientific silos can hinder innovation. These information "filter
        bubbles" and the growing challenge of information overload limit
        awareness across the literature, making it difficult to keep track of
        even narrow areas of interest, let alone discover new ones.
        SciSight/Bridger is a project focused on facilitating discovery of
        scholars and their work, by locating commonalities and contrasts between
        scientists. This work was published in the CHI 2022 conference.{" "}
        <Link
          href="https://dl.acm.org/doi/10.1145/3491102.3501905#sec-supp"
          target="_blank"
        >
          Video of the presentation can be found here.
        </Link>{" "}
        I am continuing to develop these methods to deploy them in a production
        setting.
      </React.Fragment>
    ),
  },
  {
    label: "grantexplorer",
    name: "GrantExplorer",
    img: thumbGrantExplorer,
    description: (
      <React.Fragment>
        <Link href="https://www.grantexplorer.org/" target="_blank">
          GrantExplorer
        </Link>{" "}
        is a free, open-source tool for examining the phrases funded by U.S.
        federal agencies. This includes more than a half-million grants from the
        National Science Foundation (NSF), National Institutes of Health (NIH),
        and Department of Defense (DoD). The tool uses React, D3, and FastAPI
        for interactive visualizations, and Elasticsearch and Gensim language
        models to intelligently assist with keyword queries. The source code is
        available{" "}
        <Link href="https://github.com/jessecoleman/nsf-viz" target="_blank">
          on GitHub
        </Link>
        .
      </React.Fragment>
    ),
  },
  {
    label: "scaling",
    name: "Community detection on large networks",
    img: thumbInfomap,
    description: (
      <React.Fragment>
        Community detection, or clustering, algorithms can reveal patterns and
        relationships in complex citation networks. There are many algorithms
        available that can be used to detect communities in networks,
        representing several different approaches to the problem. These
        algorithms are often computationally difficult and with the continually
        increasing number of publications, the challenge is to adapt these
        algorithms to very large networks. To address these issues, I have
        developed new methods to cluster very large citation networks. Using
        several parallel processing techniques, I am able to perform clustering
        on networks with hundreds of millions of publications and over 1 billion
        citation links. The code is available{" "}
        <Link
          href="https://github.com/h1-the-swan/infomap_large_network"
          target="_blank"
        >
          on GitHub
        </Link>
        .
      </React.Fragment>
    ),
  },
  {
    label: "nautilus",
    name: "Visualizing scholarly influence",
    citationKey: "portenoy_leveraging_2017",
    citationURL:
      "https://www.frontiersin.org/articles/10.3389/frma.2017.00008/full",
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
    label: "misinfo",
    name: "Mapping Misinformation Research",
    img: thumbCoauthor,
    description: (
      <React.Fragment>
        I applied tools for visualizing and analyzing the research publications
        in the emerging fields of Misinformation and Science Communication.
        Starting with sets of seed papers representing some key recent research
        in these fields, I provided tools to examine author relationships,
        influence from outside fields, and related research identified by
        machine learning. These tools are collected at{" "}
        <Link href="http://www.misinformationresearch.org" target="_blank">
          misinformationresearch.org
        </Link>
        , as part of a report for the National Academy of Sciences.
      </React.Fragment>
    ),
  },
  {
    label: "mathjargon",
    name: "Mathematical Jargon",
    citationKey: "west_delineating_2016",
    citationURL:
      process.env.PUBLIC_URL +
      "/West_Portenoy_2016_Delineating Fields Using Mathematical Jargon.pdf",
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
    citationURL: "https://patents.google.com/patent/US20190129749A1/en",
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
