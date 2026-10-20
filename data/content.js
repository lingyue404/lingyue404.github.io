/* =====================================================================
 *  SITE CONTENT — this is the only file you normally need to edit.
 *
 *  - Every section is rendered from the data below.
 *  - A section whose list is empty ([]) is hidden automatically, together
 *    with its nav link. Fill it in later and it shows up.
 *  - Leave any link as "" to hide that button.
 *  - Author lists: your own name (profile.highlightName) is bolded
 *    automatically; add "*" after a name for equal contribution.
 * ===================================================================== */

window.SITE = {
  /* ---------------------------------------------------------------- */
  profile: {
    name: "Ling Yue",
    nameNative: "", // optional, e.g. Chinese name shown next to the English name
    highlightName: "Ling Yue",
    pronouns: "",
    title: "Ph.D. Student in Computer Science",
    affiliation: "Rensselaer Polytechnic Institute",
    affiliationUrl: "https://www.rpi.edu/",
    tagline: "AI for scientific discovery",
    // Square photo. Set to "" to show initials instead.
    photo: "assets/img/profile.jpg",
    location: "Troy, NY",
    // Split on purpose so scrapers can't regex it out of the source.
    // The page draws it as an image; clicking opens the mail client.
    email: { user: "yuel2", domain: "rpi.edu" },
    cv: "", // CV is private; do not publish it or add a download link.
    scholarUser: "EhgyJeYAAAAJ", // your Google Scholar user id
    links: {
      scholar: "https://scholar.google.com/citations?user=EhgyJeYAAAAJ&hl=en",
      github: "https://github.com/lingyue404",
      linkedin: "https://www.linkedin.com/in/lingyue666",
      twitter: "",
      orcid: "",
      semanticScholar: "",
      dblp: "",
      openreview: "",
    },
    // Shown in the sidebar. Update occasionally.
    metrics: {
      citations: 544,
      hIndex: 11,
      asOf: "Oct 2026",
    },
  },

  /* ---------------------------------------------------------------- */
  // Job-market banner. Set enabled:false once you've accepted a position.
  jobMarket: {
    enabled: true,
    headline: "Seeking postdoctoral opportunities in agentic AI and AI for Science.",
    text: "Ph.D. expected May 2027. Start date flexible.",
    materials: [],
  },

  /* ---------------------------------------------------------------- */
  // Paragraphs support inline HTML (links, <strong>, <em>).
  about: [
    "I am a Ph.D. student in Computer Science at <a href=\"https://www.rpi.edu/\">Rensselaer Polytechnic Institute</a>, advised by Prof. Shaowu Pan and Prof. Mark Shephard. I develop AI agents to accelerate scientific discovery. My research asks how scientific agents can use tools reliably, build on prior execution experience, and verify results.",
    "My work connects scientific tool use (<em>Foam-Agent</em>, <em>Code2MCP</em>), adaptive workflows and reusable skills (<em>FlowEvo</em>), and evidence-based claim verification (<em>FactReview</em>). I study these capabilities in computational fluid dynamics and biomedical research, including clinical trial outcome prediction (<em>ClinicalAgent</em>).",
    "My goal is to help scientists spend less time on repetitive implementation and more time formulating questions and interpreting evidence. Before my Ph.D., I was a visiting researcher at Tsinghua University, working on knowledge graph learning and biomedical applications.",
  ],

  interests: [
    "AI for Science",
    "Scientific Agents",
    "Agent Workflows and Skills",
    "Execution-Based Verification",
  ],

  education: [
    {
      period: "Jan 2024 – May 2027 (expected)",
      degree: "Ph.D. in Computer Science",
      school: "Rensselaer Polytechnic Institute",
      detail: "Advisors: Prof. Shaowu Pan & Prof. Mark Shephard",
    },
    {
      period: "Sept 2015 – June 2019",
      degree: "Bachelor’s degree in Software Engineering",
      school: "Taiyuan University of Technology",
      detail: "",
    },
  ],

  /* ---------------------------------------------------------------- */
  // Newest first. "date" is free text. Shows `newsVisible` items, rest behind "Show more".
  // BioMamba: accepted 2026-05-12 in the publisher-deposited history.
  // FoamGPT: listed as accepted; the workshop's notification date was 2025-09-22.
  // TrialDura: use ACM's verified online publication month, not a guessed acceptance month.
  // Source details are recorded in README.md.
  newsVisible: 4,
  news: [
    { date: "2026.09", text: "Received the COLM Travel Grant." },
    { date: "2026.08", text: "“From Static Templates to Dynamic Runtime Graphs: A Survey of Workflow Optimization for LLM Agents” has been accepted to Findings of EMNLP 2026." },
    { date: "2026.07", text: "“Position: AI Agents in Scientific Teams Should Be Studied as Human-Agent Systems” has been accepted to the COLM Workshop on Language Models for Scientific Discovery." },
    { date: "2026.07", text: "“FlowEvo: Self-Evolving Agents through the Co-Evolution of Workflows and Executable Skills” has been accepted to COLM 2026." },
    { date: "2026.07", text: "“Foam-Agent: A Large Language Model-Based Multi-Agent Framework for Automating Computational Fluid Dynamics Workflows” has been accepted for publication in Computer Methods in Applied Mechanics and Engineering." },
    { date: "2026.06", text: "Featured in <a href=\"https://graduate.rpi.edu/people/ling-yue-computer-science\">RPI’s Graduate Student Spotlight</a>." },
    { date: "2026.05", text: "“Code2MCP: Transforming Code Repositories into MCP Services” has been accepted to KDD 2026." },
    { date: "2026.05", text: "“BioMamba: Domain-Adaptive Biomedical Language Models” has been accepted for publication in Health Data Science." },
    { date: "2026.05", text: "Started a second research internship at IBM Research (T. J. Watson) on activation steering for instruction following." },
    { date: "2026.04", text: "“Building MCP-Native Hierarchical AI Scientist Ecosystems: A Perspective on Scaling Multi-Agent Scientific Discovery” has been accepted for publication in Frontiers in Artificial Intelligence." },
    { date: "2026.02", text: "Foam-Agent and CFDLLMBench featured in <a href=\"https://news.rpi.edu/2026/02/18/rpi-researchers-harness-agentic-ai-smarter-faster-aerospace-design\">RPI News</a>." },
    { date: "2026.02", text: "“CFDLLMBench: A Benchmark Suite for Evaluating Large Language Models in Computational Fluid Dynamics” has been accepted for publication in the Journal of Data-centric Machine Learning Research (DMLR)." },
    { date: "2025.09", text: "“FoamGPT: Fine-Tuning Large Language Model for Agentic Automation of CFD Simulations with OpenFOAM” has been accepted to the NeurIPS Workshop on Machine Learning and the Physical Sciences." },
    { date: "2025.05", text: "Joined IBM Research as a research intern, working on multi-agent de novo protein design." },
    { date: "2025.01", text: "Started working with Prof. Shaowu Pan and Prof. Mark Shephard as my Ph.D. advisors at RPI." },
    { date: "2024.12", text: "“TrialDura: Hierarchical Attention Transformer for Interpretable Clinical Trial Duration Prediction” has been published in the proceedings of ACM BCB 2024." },
    { date: "2024.09", text: "“ClinicalAgent: Clinical Trial Multi-Agent System with Large Language Model-based Reasoning” and “TrialEnroll: Predicting Clinical Trial Enrollment Success with Deep & Cross Network and Large Language Models” have been accepted to ACM BCB 2024. ClinicalAgent will be presented orally." },
    { date: "2024.01", text: "Joined Rensselaer Polytechnic Institute as a Ph.D. student in Computer Science, advised by Prof. Tianfan Fu." },
  ],

  /* ---------------------------------------------------------------- */
  // Research themes. `papers` lists publication ids (see `publications` below).
  research: [
    {
      title: "Scientific Tools and Execution",
      text: "I develop agents that set up and run scientific computations, and study how scientific software can become reusable tools for research workflows. Applications include CFD simulations and biomedical research.",
      papers: ["foam-agent", "code2mcp", "foamgpt", "toolrosella", "clinicalagent"],
    },
    {
      title: "Adaptive Workflows and Skills",
      text: "I study how agents can organize multi-step tasks, reuse successful execution experience, and adapt workflows to new problems. My work connects workflow optimization, executable skill libraries, and execution cost prediction.",
      papers: ["flowevo", "workflow-survey", "evoflux", "tokencast"],
    },
    {
      title: "Verification and Evaluation",
      text: "I study how to ground research claims in literature and executable evidence, and evaluate agents on scientific tasks. Benchmarks and scientific-document resources help make these capabilities easier to inspect and compare.",
      papers: ["factreview", "cfdllmbench", "ai-cfd-scientist", "diagrambank"],
    },
  ],

  /* ---------------------------------------------------------------- */
  // type: "conference" | "journal" | "workshop" | "preprint" | "patent"
  // Displayed in this editorial order: work central to Ling's research and
  // contributions first, then other peer-reviewed work, preprints, and the patent application.
  // The list displays titles, authors, venues, and optional short descriptions.
  // Scholar ids and resource metadata are retained for reference, not displayed.
  publications: [
    {
      id: "foam-agent",
      type: "journal",
      year: 2026,
      title: "Foam-Agent: A Large Language Model-Based Multi-Agent Framework for Automating Computational Fluid Dynamics Workflows",
      authors: ["Ling Yue", "Nithin Somasekharan", "Tingwen Zhang", "Yadi Cao", "Zhangze Chen", "Shimin Di", "Shaowu Pan"],
      venue: "Computer Methods in Applied Mechanics and Engineering (CMAME), vol. 461, 119271",
      venueShort: "CMAME 2026",
      badges: ["IF 7.6", "336★ GitHub"],
      tldr: "Automates OpenFOAM case setup and execution with stage-specific retrieval, dependency-aware case generation, and iterative repair of simulation errors.",
      scholar: "ULOm3_A8WrAC",
      links: { code: "https://github.com/csml-rpi/Foam-Agent" },
      topics: ["AI for Science", "Agents"],
    },
    {
      id: "flowevo",
      type: "conference",
      year: 2026,
      title: "FlowEvo: Self-Evolving Agents through the Co-Evolution of Workflows and Executable Skills",
      authors: ["Zeyu Ren*", "Ling Yue*", "Ran Li", "Yishu Wang", "Shengxiang Xu", "Hanmo Liu", "Shaowu Pan", "Shimin Di"],
      venue: "Conference on Language Modeling (COLM)",
      venueShort: "COLM 2026",
      badges: [],
      tldr: "Compiles successful agent workflows into executable skills, reuses them across tasks, and suppresses skills that harm performance without updating model weights.",
      scholar: "aqlVkmm33-oC",
      links: {},
      topics: ["Agent Workflow Optimization"],
    },
    {
      id: "code2mcp",
      type: "conference",
      year: 2026,
      title: "Code2MCP: Transforming Code Repositories into MCP Services",
      authors: ["Chaoqian Ouyang*", "Ling Yue*", "Shimin Di", "Libin Zheng", "Linan Yue", "Shaowu Pan", "Jian Yin", "Min-Ling Zhang"],
      venue: "ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD), pp. 3835–3846",
      venueShort: "KDD 2026",
      badges: ["CORE A*", "135★ GitHub"],
      tldr: "Converts code repositories into MCP services using agents for code analysis, environment setup, interface generation, and iterative testing and repair.",
      scholar: "3fE2CSJIrl8C",
      links: { code: "https://github.com/DEFENSE-SEU/Code2MCP" },
      topics: ["Agents", "AI for Science"],
    },
    {
      id: "relens",
      type: "conference",
      year: 2023,
      title: "Relation-aware Ensemble Learning for Knowledge Graph Embedding",
      authors: ["Ling Yue*", "Yongqi Zhang*", "Quanming Yao", "Yong Li", "Xian Wu", "Ziheng Zhang", "Zhenxi Lin", "Yefeng Zheng"],
      venue: "Conference on Empirical Methods in Natural Language Processing (EMNLP), pp. 16620–16631",
      venueShort: "EMNLP 2023",
      badges: ["CORE A*", "#1 on OGB leaderboards"],
      tldr: "Learns relation-specific combinations of knowledge graph embedding models by independently searching ensemble weights for each relation.",
      scholar: "2osOgNQ5qMEC",
      links: {},
      topics: ["Graph Learning"],
    },
    {
      id: "emergnn",
      short: "EmerGNN",
      type: "journal",
      year: 2023,
      title: "Emerging Drug Interaction Prediction Enabled by a Flow-Based Graph Neural Network with Biomedical Network",
      authors: ["Yongqi Zhang", "Quanming Yao", "Ling Yue", "Xian Wu", "Ziheng Zhang", "Zhenxi Lin", "Yefeng Zheng"],
      venue: "Nature Computational Science, 3(12): 1023–1033",
      venueShort: "Nature Computational Science 2023",
      badges: ["IF 20.3"],
      tldr: "Predicts interactions for emerging drugs by tracing and weighting paths through a biomedical knowledge graph with a flow-based graph neural network.",
      scholar: "qjMakFHDy7sC",
      links: {},
      topics: ["Graph Learning", "Biomedical AI"],
    },
    {
      id: "workflow-survey",
      short: "Workflow Optimization Survey",
      type: "conference",
      year: 2026,
      title: "From Static Templates to Dynamic Runtime Graphs: A Survey of Workflow Optimization for LLM Agents",
      authors: ["Ling Yue", "Kushal Raj Bhandari", "Ching-Yun Ko", "Dhaval Patel", "Shuxin Lin", "Nianjun Zhou", "Jianxi Gao", "Pin-Yu Chen", "Shaowu Pan"],
      venue: "Findings of the Association for Computational Linguistics: EMNLP",
      venueShort: "EMNLP Findings 2026",
      badges: ["CORE A*"],
      tldr: "Organizes LLM agent workflow optimization by when graph structure is determined, which components are changed, and what feedback guides the changes.",
      scholar: "4TOpqqG69KYC",
      links: {},
      topics: ["Agent Workflow Optimization"],
    },
    {
      id: "cfdllmbench",
      type: "journal",
      year: 2026,
      title: "CFDLLMBench: A Benchmark Suite for Evaluating Large Language Models in Computational Fluid Dynamics",
      authors: ["Nithin Somasekharan", "Ling Yue", "Yadi Cao", "Weichao Li", "Patrick Emami", "Pochinapeddi Sai Bhargav", "Anurag Acharya", "Xingyu Xie", "Shaowu Pan"],
      venue: "Journal of Data-centric Machine Learning Research (DMLR), 3(13): 1–40",
      venueShort: "DMLR 2026",
      tldr: "Evaluates language models on CFD knowledge, numerical code generation, and OpenFOAM simulation workflows through checks of executability, solution accuracy, and numerical convergence.",
      scholar: "hqOjcs7Dif8C",
      links: {},
      topics: ["AI for Science"],
    },
    {
      id: "biomamba",
      type: "journal",
      year: 2026,
      title: "BioMamba: Domain-Adaptive Biomedical Language Models",
      authors: ["Ling Yue", "Mingzhi Zhu", "Sixue Xing", "Yunning Cao", "Yanbo Wang", "Vijil Chenthamarakshan", "Shaowu Pan", "Payel Das", "Tianfan Fu"],
      venue: "Health Data Science, vol. 6, 0454",
      venueShort: "Health Data Science 2026",
      badges: ["IF 4.8"],
      tldr: "Adapts Mamba2 language models to biomedical text through continued pretraining on mixed-domain data, while evaluating biomedical performance and retention of general-language capabilities.",
      scholar: "mVmsd5A6BfQC",
      links: {},
      topics: ["Biomedical AI"],
    },
    {
      id: "clinicalagent",
      type: "conference",
      year: 2024,
      title: "ClinicalAgent: Clinical Trial Multi-Agent System with Large Language Model-based Reasoning",
      authors: ["Ling Yue", "Sixue Xing", "Jintai Chen", "Tianfan Fu"],
      venue: "ACM International Conference on Bioinformatics, Computational Biology and Health Informatics (BCB)",
      venueShort: "ACM BCB 2024",
      badges: ["Oral"],
      note: "Oral presentation.",
      tldr: "Combines GPT-4 agents, stepwise reasoning, and external biomedical tools to support clinical trial outcome prediction.",
      scholar: "_FxGoFyzp5QC",
      links: {},
      topics: ["Biomedical AI", "Agents"],
    },
    {
      id: "trialenroll",
      type: "conference",
      year: 2024,
      title: "TrialEnroll: Predicting Clinical Trial Enrollment Success with Deep & Cross Network and Large Language Models",
      authors: ["Ling Yue", "Sixue Xing", "Jintai Chen", "Tianfan Fu"],
      venue: "ACM International Conference on Bioinformatics, Computational Biology and Health Informatics (BCB)",
      venueShort: "ACM BCB 2024",
      tldr: "Combines language-model representations of trial eligibility criteria with a deep and cross network to predict enrollment success and highlight influential text.",
      scholar: "Tyk-4Ss8FVUC",
      links: {},
      topics: ["Biomedical AI"],
    },
    {
      id: "trialdura",
      type: "conference",
      year: 2024,
      title: "TrialDura: Hierarchical Attention Transformer for Interpretable Clinical Trial Duration Prediction",
      authors: ["Ling Yue", "Sixue Xing", "Jonathan Li", "Md Zabirul Islam", "Bolun Xia", "Jintai Chen", "Tianfan Fu"],
      venue: "ACM International Conference on Bioinformatics, Computational Biology and Health Informatics (BCB)",
      venueShort: "ACM BCB 2024",
      note: "Also presented at the NeurIPS 2024 Workshop on AI for New Drug Modalities.",
      tldr: "Estimates clinical trial duration with hierarchical attention over disease, drug, trial phase, and eligibility features, supporting interpretation of their contributions to predictions.",
      scholar: "UeHWp8X0CEIC",
      links: {},
      topics: ["Biomedical AI"],
    },
    {
      id: "mcp-perspective",
      short: "MCP-Native AI Scientists",
      type: "journal",
      year: 2026,
      title: "Building MCP-Native Hierarchical AI Scientist Ecosystems: A Perspective on Scaling Multi-Agent Scientific Discovery",
      authors: ["Ling Yue", "Ching-Yun Ko", "Pin-Yu Chen", "Shimin Di", "Shaowu Pan"],
      venue: "Frontiers in Artificial Intelligence, vol. 9, 1820375",
      venueShort: "Frontiers in Artificial Intelligence 2026",
      badges: ["IF 6.7"],
      tldr: "Proposes a roadmap for scaling scientific agent ecosystems through standardized tool interfaces, hierarchical coordination, and shared research artifacts.",
      scholar: "_kc_bZDykSQC",
      links: {},
      topics: ["Agents", "AI for Science"],
    },
    {
      id: "foamgpt",
      type: "workshop",
      year: 2025,
      title: "FoamGPT: Fine-Tuning Large Language Model for Agentic Automation of CFD Simulations with OpenFOAM",
      authors: ["Ling Yue", "Peijing Xu", "Tingwen Zhang", "Nithin Somasekharan", "Shaowu Pan"],
      venue: "NeurIPS 2025 Workshop on Machine Learning and the Physical Sciences",
      venueShort: "NeurIPS-W 2025",
      tldr: "Fine-tunes language models on curated OpenFOAM tutorial cases to generate simulation configuration files within an agent workflow.",
      scholar: "5nxA0vEk-isC",
      links: {},
      topics: ["AI for Science"],
    },
    {
      id: "position-human-agent",
      type: "workshop",
      year: 2026,
      title: "Position: AI Agents in Scientific Teams Should Be Studied as Human-Agent Systems",
      authors: ["Patrick Emami", "Sameera Horawalavithana", "Truc Nguyen", "Gihan Panapitiya", "Bruno Jacob", "Siddhisanket Raskar", "Saumya Sinha", "Jared D. Willard", "Andrew Glaws", "Nithin Somasekharan", "Ling Yue", "Brian Lu", "Shaowu Pan", "Jason Eisner"],
      venue: "2nd Workshop on Language Models for Scientific Discovery at COLM",
      venueShort: "COLM-W 2026",
      tldr: "Argues for studying scientific AI agents as human-agent teams, focusing on sustained human participation, complementary capabilities, and the risks of increasing automation.",
      scholar: "hC7cP41nSMkC",
      links: {},
      topics: ["Agents", "AI for Science"],
    },
    {
      id: "factreview",
      type: "preprint",
      year: 2026,
      title: "FactReview: Evidence-Grounded Peer Review with Execution-Based Claim Verification",
      authors: ["Ling Yue*", "Chaoqian Ouyang*", "Hang Xu*", "Ruijun Huang", "Yuchen Liu", "Libin Zheng", "Wei Liu", "Shaowu Pan", "Shimin Di", "Min-Ling Zhang"],
      venue: "arXiv preprint arXiv:2604.04074",
      venueShort: "arXiv 2026",
      badges: [],
      tldr: "Audits research claims against related literature, reference checks, and, when code is available, execution evidence from released artifacts.",
      scholar: "M3ejUd6NZC8C",
      links: {},
      topics: ["Agents", "AI for Science"],
    },
    {
      id: "ai-cfd-scientist",
      type: "preprint",
      year: 2026,
      title: "AI CFD Scientist: Toward Open-Ended Computational Fluid Dynamics Discovery with Physics-Aware AI Agents",
      authors: ["Nithin Somasekharan", "Rabi Pathak", "Manushri Dhanakoti", "Tingwen Zhang", "Ling Yue", "Andy Zhu", "Shaowu Pan"],
      venue: "arXiv preprint arXiv:2605.06607",
      venueShort: "arXiv 2026",
      tldr: "Combines literature-grounded ideation, OpenFOAM experiments, visual checks of simulated flow fields, and manuscript generation in an inspectable CFD research workflow.",
      scholar: "4DMP91E08xMC",
      links: {},
      topics: ["AI for Science", "Agents"],
    },
    {
      id: "evoflux",
      type: "preprint",
      year: 2026,
      title: "EvoFlux: Inference-Time Evolution of Executable Tool Workflows for Compact Agents",
      authors: ["Kushal Raj Bhandari", "Ling Yue", "Ching-Yun Ko", "Dhaval Patel", "Shaowu Pan", "Pin-Yu Chen", "Jianxi Gao"],
      venue: "arXiv preprint arXiv:2606.12674",
      venueShort: "arXiv 2026",
      tldr: "Repairs tool workflows for compact language-model agents through inference-time evolutionary search guided by execution errors and tool feedback.",
      scholar: "qUcmZB5y_30C",
      links: {},
      topics: ["Agent Workflow Optimization"],
    },
    {
      id: "tokencast",
      type: "preprint",
      year: 2026,
      title: "TokenCast: Forecasting Token Consumption During LLM Agent Execution",
      authors: ["Chaoqian Ouyang*", "Ling Yue*", "Libin Zheng", "Hanghui Guo", "Shengxiang Xu", "Yishu Wang", "Ran Li", "Jian Yin", "Shaowu Pan", "Shimin Di"],
      venue: "arXiv preprint arXiv:2609.35760",
      venueShort: "arXiv 2026",
      tldr: "Forecasts token use during agent execution by modeling the cost of individual steps and accumulated context, then updating estimates as execution progresses.",
      scholar: "hFOr9nPyWt4C",
      links: {},
      topics: ["Agents"],
    },
    {
      id: "diagrambank",
      type: "preprint",
      year: 2026,
      title: "DiagramBank: A Quality-Audited Dataset of Scientific Schematic Diagrams with Multi-Level Document Context",
      authors: ["Ling Yue", "Tingwen Zhang", "Jiaying Wang", "Zhen Xu", "Shaowu Pan"],
      venue: "arXiv preprint arXiv:2604.20857",
      venueShort: "arXiv 2026",
      tldr: "Provides a quality-audited dataset of scientific schematic diagrams linked to captions and paper context for diagram retrieval and scientific document analysis.",
      scholar: "Zph67rFs4hoC",
      links: {},
      topics: ["AI for Science"],
    },
    {
      id: "toolrosella",
      type: "preprint",
      year: 2026,
      title: "ToolRosella: Translating Code Repositories into Standardized Tools for Scientific Agents",
      authors: ["Shimin Di", "Xujie Yuan", "Hanghui Guo", "Chaoqian Ouyang", "Yongxu Liu", "Ling Yue", "Zhangze Chen", "Libin Zheng", "Jia Zhu", "Shaowu Pan", "Jian Yin", "Yong Rui", "Min-Ling Zhang"],
      venue: "arXiv preprint arXiv:2603.09290",
      venueShort: "arXiv 2026",
      tldr: "Converts scientific code repositories into standardized, agent-callable tools through repository analysis, interface construction, execution testing, and iterative repair.",
      scholar: "L8Ckcad2t8MC",
      links: {},
      topics: ["Agents", "AI for Science"],
    },
    {
      id: "fea-agents",
      short: "AbaqusAgent",
      type: "preprint",
      year: 2026,
      title: "A Multi-AI-Agent Framework Enabling End-to-End Finite Element Analysis for Solid Mechanics Problems",
      authors: ["Titu Ranjan Sarker", "Muhammed Jawaad Zulqernine", "Ling Yue", "Shaowu Pan", "Chenxi Wang", "Shiyao Lin"],
      venue: "arXiv preprint arXiv:2606.00138",
      venueShort: "arXiv 2026",
      tldr: "Coordinates specialized agents to generate, run, and review Abaqus finite element analyses from natural-language instructions, with automated setup and result visualization.",
      scholar: "IWHjjKOFINEC",
      links: {},
      topics: ["AI for Science", "Agents"],
    },
    {
      id: "assetopsbench",
      type: "preprint",
      year: 2026,
      title: "Results and Retrospective Analysis of the CODS 2025 AssetOpsBench Challenge",
      authors: ["Dhaval Patel", "Chathurangi Shyalika", "Suryanarayana Reddy Yarrabothula", "Ling Yue", "Shuxin Lin", "Nianjun Zhou", "James Rayfield"],
      venue: "arXiv preprint arXiv:2605.08518",
      venueShort: "arXiv 2026",
      tldr: "Analyzes the AssetOpsBench challenge to examine how evaluation design, public and hidden rankings, and system design choices affect comparisons of industrial agent workflows.",
      scholar: "Wp0gIr-vW9MC",
      links: {},
      topics: ["Agents"],
    },
    {
      id: "digital-twin-review",
      type: "preprint",
      year: 2024,
      title: "Artificial Intelligence-Aided Digital Twin Design: A Systematic Review",
      authors: ["Nan Hao", "Yuangang Li", "Kecheng Liu", "Songtao Liu", "Yingzhou Lu", "Bohao Xu", "Chenhao Li", "Jintai Chen", "Ling Yue", "Tianfan Fu", "Xiyang Hu", "Xiao Wang", "Yue Zhao"],
      venue: "Preprints, version 1 (2024)",
      venueShort: "Preprints 2024",
      tldr: "Reviews how AI methods support digital twin design across application domains, covering data generation, modeling, evaluation, privacy, and fairness.",
      scholar: "YsMSGLbcyi4C",
      links: {},
      topics: ["AI for Science"],
    },
    {
      id: "genocraft",
      type: "preprint",
      year: 2023,
      title: "GenoCraft: A Comprehensive, User-Friendly Web-Based Platform for High-Throughput Omics Data Analysis and Visualization",
      authors: ["Yingzhou Lu", "Minjie Shen", "Ling Yue", "Chenhao Li", "Lulu Chen", "Fan Meng", "Xiao Wang", "David Herrington", "Yue Wang", "Yue Zhao", "Tianfan Fu", "Capucine Van Rechem"],
      venue: "arXiv preprint arXiv:2312.14249",
      venueShort: "arXiv 2023",
      tldr: "Integrates omics data normalization, differential analysis, network and pathway analysis, and visualization into a web platform for end-to-end data exploration.",
      scholar: "WF5omc3nYNoC",
      links: {},
      topics: ["Biomedical AI"],
    },
    {
      id: "automl-patent",
      type: "patent",
      year: 2023,
      title: "Method, Device and Apparatus for Execution of Automated Machine Learning Process",
      authors: ["Zihui Lv", "Yusen Wang", "Ling Yue", "Xiawei Guo", "Zhen Guo", "Yu Zhang", "Yuchen Gu"],
      venue: "U.S. Patent Application Pub. US20230162051A1, May 25, 2023",
      venueShort: "US Patent App. 2023",
      tldr: "Describes an automated machine learning process that separates model training and prediction into independent operators and connects trained models to prediction services.",
      scholar: "LkGwnXOMwfcC",
      links: {},
      topics: ["AutoML"],
    },
  ],

  /* ---------------------------------------------------------------- */
  projects: [
    {
      name: "Foam-Agent",
      description: "Multi-agent framework that turns natural-language requests into running OpenFOAM CFD simulations.",
      url: "https://github.com/csml-rpi/Foam-Agent",
      stars: "336",
      tags: ["LLM agents", "CFD", "OpenFOAM"],
    },
    {
      name: "Code2MCP",
      description: "Automatically converts code repositories into Model Context Protocol (MCP) services for agents.",
      url: "https://github.com/DEFENSE-SEU/Code2MCP",
      stars: "135",
      tags: ["MCP", "Tool use"],
    },
    {
      name: "FactReview",
      description: "Checks research claims against related work and runs released code to verify empirical results.",
      url: "https://github.com/DEFENSE-SEU/FactReview",
      stars: "74",
      tags: ["Peer review", "Claim verification"],
    },
  ],

  /* ---------------------------------------------------------------- */
  experience: [
    {
      period: "2026.05 – 2026.08",
      org: "IBM Research, T. J. Watson Research Center",
      role: "Research Intern",
      text: "Developed and evaluated activation-steering methods for instruction following in vLLM.",
    },
    {
      period: "2025.05 – 2025.08",
      org: "IBM Research, T. J. Watson Research Center",
      role: "Research Intern",
      text: "Developed multi-agent methods for de novo protein design.",
    },
    {
      period: "2022.07 – 2023.12",
      org: "Tsinghua University",
      role: "Visiting Researcher",
      text: "Worked on knowledge graph learning and biomedical applications, including RelEns (EMNLP) and EmerGNN (Nature Computational Science).",
    },
    {
      period: "2018.03 – 2018.11",
      org: "Microsoft Research Asia, System Group",
      role: "Research Intern",
      text: "",
    },
  ],

  /* ---------------------------------------------------------------- */
  honors: [
    { date: "2026.09", text: "COLM Travel Grant" },
    { date: "2026.06", text: "Featured in <a href=\"https://graduate.rpi.edu/people/ling-yue-computer-science\">RPI’s Graduate Student Spotlight</a>" },
  ],

  /* ---------------------------------------------------------------- */
  // Invited talks, seminars, job talks. Example:
  // { date: "2026.11", title: "Self-Improving Agents for Science", venue: "XYZ University CS Seminar", url: "", slides: "" },
  talks: [],

  /* ---------------------------------------------------------------- */
  // Courses taught / TA'd. Example:
  // { term: "Spring 2027", course: "CSCI 4100 Machine Learning", role: "Teaching Assistant", school: "RPI", url: "" },
  teaching: [],

  /* ---------------------------------------------------------------- */
  mentoringSummary: "",
  // Optional individual entries. Example:
  // { name: "Jane Doe", period: "2025–2026", note: "RPI undergrad → Ph.D. at RPI", url: "" },
  mentees: [
    { name: "Chaoqian Ouyang", note: "Sun Yat-sen University" },
    { name: "Zeyu Ren", note: "Southeast University" },
    { name: "Ruijun Huang", note: "Southeast University" },
    { name: "Hang Xu", note: "Southeast University" },
    { name: "Jiaying Wang", note: "Rensselaer Polytechnic Institute" },
  ],

  alumni: [
    { name: "Sixue Xing", note: "Ph.D. at University of Notre Dame" },
    { name: "Peijing Xu", note: "Master’s at Carnegie Mellon University" },
    { name: "Tingwen Zhang", note: "Ph.D. at Rensselaer Polytechnic Institute" },
  ],

  /* ---------------------------------------------------------------- */
  service: [
    { role: "Program Committee / Reviewer", items: "NeurIPS, ICML, ICLR, COLM, ACL, KDD, AAAI, EMNLP, IJCAI, WWW, ACM MM, ICASSP, ECAI, IJCNN, ACML, PAKDD, NLPCC, ACM CAIS" },
    { role: "Journal Reviewer", items: "IEEE TNNLS, IEEE TMM, MELBA" },
    { role: "Competition Co-organizer", items: "AutoML competitions at NeurIPS, KDD, PAKDD, and WSDM" },
  ],

  /* ---------------------------------------------------------------- */
  media: [
    {
      date: "2026.02",
      outlet: "RPI News",
      title: "RPI Researchers Harness Agentic AI for Smarter, Faster Aerospace Design",
      note: "Featuring Foam-Agent and CFDLLMBench. Syndicated by SAE's Mobility Engineering & Technology.",
      url: "https://news.rpi.edu/2026/02/18/rpi-researchers-harness-agentic-ai-smarter-faster-aerospace-design",
    },
  ],

  lastUpdated: "October 2026",
};
