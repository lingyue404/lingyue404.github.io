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
    tagline: "Autonomous scientific discovery",
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
      citations: 539,
      hIndex: 11,
      asOf: "Oct 2026",
    },
  },

  /* ---------------------------------------------------------------- */
  // Job-market banner. Set enabled:false once you've accepted a position.
  jobMarket: {
    enabled: true,
    headline: "I am looking for postdoctoral opportunities.",
    text: "Ph.D. expected May 2027.",
    materials: [],
  },

  /* ---------------------------------------------------------------- */
  // Paragraphs support inline HTML (links, <strong>, <em>).
  about: [
    "I am a Ph.D. student in Computer Science at <a href=\"https://www.rpi.edu/\">Rensselaer Polytechnic Institute</a>, advised by Prof. Shaowu Pan and Prof. Mark Shephard. I work on <strong>autonomous scientific discovery</strong>, building AI scientists that automate research workflows.",
    "I develop agents for CFD simulations (<em>Foam-Agent</em>) and clinical trial outcome prediction (<em>ClinicalAgent</em>). I also study how agents can improve their workflows and reuse executable skills (<em>FlowEvo</em>). In <em>FactReview</em>, we check claims in research papers by running their code. My work has appeared at KDD, COLM, and EMNLP, and in DMLR, <em>Nature Computational Science</em>, and <em>CMAME</em>.",
    "My goal is to let agents take on more of the scientific research process, from planning experiments to evaluating results. Before my Ph.D., I worked on knowledge graph research at Tsinghua University. Earlier, I worked on machine learning research at Microsoft Research Asia, 4Paradigm, Alibaba, and Shopee.",
  ],

  interests: [
    "AI Scientists",
    "Agent Workflow Optimization",
    "Autonomous Research",
    "LLM Post-training",
    "CFD",
    "Clinical Trials",
    "Knowledge Graphs",
  ],

  education: [
    {
      period: "2024 – May 2027 (expected)",
      degree: "Ph.D. in Computer Science",
      school: "Rensselaer Polytechnic Institute",
      detail: "Advisors: Prof. Shaowu Pan & Prof. Mark Shephard",
    },
  ],

  /* ---------------------------------------------------------------- */
  // Newest first. "date" is free text. Shows `newsVisible` items, rest behind "Show more".
  // Dates follow Ling's review and email timeline. TODO marks remaining uncertainty.
  // BioMamba uses May within the April–May estimate. FoamGPT uses provisional September.
  // TrialDura keeps its October placeholder because no acceptance date was found.
  newsVisible: 6,
  news: [
    { date: "2026.10", text: "Received conference travel support from the <strong>RPI Department of Computer Science</strong>." }, // TODO: confirm October and whether this support was for COLM. The screenshot identifies RPI support, not a confirmed COLM grant.
    { date: "2026.08", text: "Our survey on <strong>workflow optimization for LLM agents</strong> accepted to <strong>Findings of EMNLP 2026</strong>." },
    { date: "2026.08", text: "<strong>Foam-Agent</strong> published online in <em>Computer Methods in Applied Mechanics and Engineering</em>." },
    { date: "2026.07", text: "Our position paper on <strong>human-agent scientific teams</strong> accepted to the <strong>COLM Workshop on Language Models for Scientific Discovery</strong>." },
    { date: "2026.07", text: "<strong>FlowEvo</strong> accepted to <strong>COLM 2026</strong>." },
    { date: "2026.07", text: "<strong>Foam-Agent</strong> accepted to <em>Computer Methods in Applied Mechanics and Engineering</em>." },
    { date: "2026.06", text: "Named an RPI <strong>Graduate Student Spotlight</strong>." },
    { date: "2026.05", text: "<strong>Code2MCP</strong> accepted to <strong>KDD 2026</strong>." },
    { date: "2026.05", text: "<strong>BioMamba</strong> accepted to <em>Health Data Science</em>." }, // TODO: confirm acceptance month, estimated April–May from the email timeline.
    { date: "2026.05", text: "Started a second research internship at <strong>IBM Research</strong> (T. J. Watson) on activation steering for instruction following." },
    { date: "2026.04", text: "Our perspective on <strong>MCP-native AI scientists</strong> accepted to <em>Frontiers in Artificial Intelligence</em>." },
    { date: "2026.02", text: "Foam-Agent and CFDLLMBench featured in <a href=\"https://news.rpi.edu/2026/02/18/rpi-researchers-harness-agentic-ai-smarter-faster-aerospace-design\">RPI News</a>." },
    { date: "2026.02", text: "<strong>CFDLLMBench</strong> accepted to the <em>Journal of Data-centric Machine Learning Research (DMLR)</em>." },
    { date: "2025.09", text: "<strong>FoamGPT</strong> accepted to the <strong>NeurIPS Workshop on Machine Learning and the Physical Sciences</strong>." }, // TODO: confirm the September acceptance email refers to FoamGPT.
    { date: "2025.05", text: "Joined <strong>IBM Research</strong> as a research intern, working on multi-agent de novo protein design." },
    { date: "2025.01", text: "Started working with <strong>Prof. Shaowu Pan</strong> and <strong>Prof. Mark Shephard</strong> as my Ph.D. advisors at RPI." },
    { date: "2024.10", text: "<strong>TrialDura</strong> accepted to the <strong>NeurIPS Workshop on AI for New Drug Modalities</strong>." }, // TODO: confirm acceptance date, no acceptance email found in the reviewed timeline.
    { date: "2024.09", text: "<strong>ClinicalAgent</strong> and <strong>TrialEnroll</strong> accepted to <strong>ACM BCB 2024</strong>. ClinicalAgent was selected for an oral presentation." },
    { date: "2024.01", text: "Joined <strong>Rensselaer Polytechnic Institute</strong> as a Ph.D. student in Computer Science, advised by <strong>Prof. Tianfan Fu</strong>." },
  ],

  /* ---------------------------------------------------------------- */
  // Research themes. `papers` lists publication ids (see `publications` below).
  research: [
    {
      title: "Autonomous Research",
      text: "I build agents that carry out research tasks, run experiments, and check results. My goal is to connect these steps into a complete scientific research process.",
      papers: ["ai-cfd-scientist", "factreview", "diagrambank"],
    },
    {
      title: "Agent Workflows and Tools",
      text: "I study how agents organize their work and use scientific software. This includes optimizing workflows, reusing executable skills, and turning code repositories into tools that agents can call.",
      papers: ["flowevo", "workflow-survey", "evoflux", "code2mcp", "toolrosella", "tokencast"],
    },
    {
      title: "AI for Science and Engineering",
      text: "I apply these methods to CFD simulations, clinical trials, and biomedical research. I also develop benchmarks to evaluate scientific capabilities and use knowledge graphs to model biomedical relationships.",
      papers: ["foam-agent", "foamgpt", "cfdllmbench", "clinicalagent", "trialenroll", "emergnn"],
    },
  ],

  /* ---------------------------------------------------------------- */
  // type: "conference" | "journal" | "workshop" | "preprint" | "patent"
  // selected: true → appears under "Selected".
  // The list displays titles, authors, venues, and optional short descriptions.
  // Scholar ids and resource metadata are retained for reference, not displayed.
  publications: [
    {
      id: "foam-agent",
      selected: true,
      type: "journal",
      year: 2026,
      title: "Foam-Agent: A Large Language Model-Based Multi-Agent Framework for Automating Computational Fluid Dynamics Workflows",
      authors: ["Ling Yue", "Nithin Somasekharan", "Tingwen Zhang", "Yadi Cao", "Zhangze Chen", "Shimin Di", "Shaowu Pan"],
      venue: "Computer Methods in Applied Mechanics and Engineering (CMAME), vol. 461, 119271",
      venueShort: "CMAME 2026",
      badges: ["IF 7.6", "336★ GitHub"],
      tldr: "Turns a natural-language request into a running OpenFOAM simulation, using stage-specific retrieval, dependency-aware generation of case files, and a reviewer loop that repairs failed runs.",
      scholar: "ULOm3_A8WrAC",
      links: { code: "https://github.com/csml-rpi/Foam-Agent" },
      topics: ["AI for Science", "Agents"],
    },
    {
      id: "flowevo",
      selected: true,
      type: "conference",
      year: 2026,
      title: "FlowEvo: Self-Evolving Agents through the Co-Evolution of Workflows and Executable Skills",
      authors: ["Zeyu Ren*", "Ling Yue*", "Ran Li", "Yishu Wang", "Shengxiang Xu", "Hanmo Liu", "Shaowu Pan", "Shimin Di"],
      venue: "Conference on Language Modeling (COLM)",
      venueShort: "COLM 2026",
      badges: [],
      tldr: "Compiles successful workflows into reusable skills for new tasks and suppresses skills that cause negative transfer. No model training is required.",
      scholar: "aqlVkmm33-oC",
      links: {},
      topics: ["Agent Workflow Optimization"],
    },
    {
      id: "code2mcp",
      selected: true,
      type: "conference",
      year: 2026,
      title: "Code2MCP: Transforming Code Repositories into MCP Services",
      authors: ["Chaoqian Ouyang*", "Ling Yue*", "Shimin Di", "Libin Zheng", "Linan Yue", "Shaowu Pan", "Jian Yin", "Min-Ling Zhang"],
      venue: "ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD), pp. 3835–3846",
      venueShort: "KDD 2026",
      badges: ["CORE A*", "135★ GitHub"],
      tldr: "Agents analyze a repository, set up its environment, and create tool functions that they test and repair. We apply this approach to scientific libraries in bioinformatics, mathematics, and fluid dynamics.",
      scholar: "3fE2CSJIrl8C",
      links: { code: "https://github.com/DEFENSE-SEU/Code2MCP" },
      topics: ["Agents", "AI for Science"],
    },
    {
      id: "workflow-survey",
      short: "Workflow Optimization Survey",
      selected: true,
      type: "conference",
      year: 2026,
      title: "From Static Templates to Dynamic Runtime Graphs: A Survey of Workflow Optimization for LLM Agents",
      authors: ["Ling Yue", "Kushal Raj Bhandari", "Ching-Yun Ko", "Dhaval Patel", "Shuxin Lin", "Nianjun Zhou", "Jianxi Gao", "Pin-Yu Chen", "Shaowu Pan"],
      venue: "Findings of the Association for Computational Linguistics: EMNLP",
      venueShort: "EMNLP Findings 2026",
      badges: ["CORE A*"],
      tldr: "Classifies methods by when the workflow structure is fixed and by what signal drives its optimization.",
      scholar: "4TOpqqG69KYC",
      links: {},
      topics: ["Agent Workflow Optimization"],
    },
    {
      id: "clinicalagent",
      selected: true,
      type: "conference",
      year: 2024,
      title: "ClinicalAgent: Clinical Trial Multi-Agent System with Large Language Model-based Reasoning",
      authors: ["Ling Yue", "Sixue Xing", "Jintai Chen", "Tianfan Fu"],
      venue: "ACM International Conference on Bioinformatics, Computational Biology and Health Informatics (BCB)",
      venueShort: "ACM BCB 2024",
      badges: ["Oral"],
      tldr: "Breaks clinical trial outcome prediction into subproblems for GPT-4 agents that call DrugBank, Hetionet, and risk models.",
      scholar: "_FxGoFyzp5QC",
      links: {},
      topics: ["Biomedical AI", "Agents"],
    },
    {
      id: "factreview",
      selected: true,
      type: "preprint",
      year: 2026,
      title: "FactReview: Evidence-Grounded Peer Review with Execution-Based Claim Verification",
      authors: ["Ling Yue*", "Chaoqian Ouyang*", "Hang Xu*", "Ruijun Huang", "Yuchen Liu", "Libin Zheng", "Wei Liu", "Shaowu Pan", "Shimin Di", "Min-Ling Zhang"],
      venue: "arXiv preprint arXiv:2604.04074",
      venueShort: "arXiv 2026",
      badges: [],
      tldr: "Extracts a paper's key claims, checks them against related work, and runs the released code to test empirical ones.",
      scholar: "M3ejUd6NZC8C",
      links: {},
      topics: ["Agents", "AI for Science"],
    },

    /* ---- Conference & workshop papers ---- */
    {
      id: "relens",
      type: "conference",
      year: 2023,
      title: "Relation-aware Ensemble Learning for Knowledge Graph Embedding",
      authors: ["Ling Yue", "Yongqi Zhang", "Quanming Yao", "Yong Li", "Xian Wu", "Ziheng Zhang", "Zhenxi Lin", "Yefeng Zheng"],
      venue: "Conference on Empirical Methods in Natural Language Processing (EMNLP), pp. 16620–16631",
      venueShort: "EMNLP 2023",
      badges: ["CORE A*", "#1 on OGB leaderboards"],
      scholar: "2osOgNQ5qMEC",
      links: {},
      topics: ["Graph Learning"],
    },
    {
      id: "trialenroll",
      type: "conference",
      year: 2024,
      title: "TrialEnroll: Predicting Clinical Trial Enrollment Success with Deep & Cross Network and Large Language Models",
      authors: ["Ling Yue", "Sixue Xing", "Jintai Chen", "Tianfan Fu"],
      venue: "ACM International Conference on Bioinformatics, Computational Biology and Health Informatics (BCB)",
      venueShort: "ACM BCB 2024",
      scholar: "Tyk-4Ss8FVUC",
      links: {},
      topics: ["Biomedical AI"],
    },
    {
      id: "foamgpt",
      type: "workshop",
      year: 2025,
      title: "FoamGPT: Fine-Tuning Large Language Model for Agentic Automation of CFD Simulations with OpenFOAM",
      authors: ["Ling Yue", "Peijing Xu", "Tingwen Zhang", "Nithin Somasekharan", "Shaowu Pan"],
      venue: "NeurIPS 2025 Workshop on Machine Learning and the Physical Sciences",
      venueShort: "NeurIPS-W 2025",
      scholar: "5nxA0vEk-isC",
      links: {},
      topics: ["AI for Science"],
    },
    {
      id: "trialdura",
      type: "workshop",
      year: 2024,
      title: "TrialDura: Hierarchical Attention Transformer for Interpretable Clinical Trial Duration Prediction",
      authors: ["Ling Yue", "Sixue Xing", "Jonathan Li", "Md Zabirul Islam", "Bolun Xia", "Tianfan Fu", "Jintai Chen"],
      venue: "NeurIPS 2024 Workshop on AI for New Drug Modalities",
      venueShort: "NeurIPS-W 2024",
      scholar: "UeHWp8X0CEIC",
      links: {},
      topics: ["Biomedical AI"],
    },
    {
      id: "position-human-agent",
      type: "workshop",
      year: 2026,
      title: "Position: AI Agents in Scientific Teams Should Be Studied as Human-Agent Systems",
      authors: ["Patrick Emami", "Sameera Horawalavithana", "Truc Nguyen", "Gihan Panapitiya", "Bruno Jacob", "Siddhisanket Raskar", "Saumya Sinha", "Jared D. Willard", "Andrew Glaws", "Nithin Somasekharan", "Ling Yue", "Brian Lu", "Shaowu Pan", "Jason Eisner"],
      venue: "2nd Workshop on Language Models for Scientific Discovery at COLM",
      venueShort: "COLM-W 2026",
      scholar: "hC7cP41nSMkC",
      links: {},
      topics: ["Agents", "AI for Science"],
    },

    /* ---- Journal articles ---- */
    {
      id: "emergnn",
      short: "EmerGNN",
      type: "journal",
      year: 2023,
      title: "Emerging Drug Interaction Prediction Enabled by a Flow-Based Graph Neural Network with Biomedical Network",
      authors: ["Yongqi Zhang", "Quanming Yao", "Ling Yue", "Xian Wu", "Ziheng Zhang", "Zhenxi Lin", "Yefeng Zheng"],
      venue: "Nature Computational Science, 3(12): 1023–1033",
      venueShort: "Nat. Comput. Sci. 2023",
      badges: ["IF 20.3"],
      scholar: "qjMakFHDy7sC",
      links: {},
      topics: ["Graph Learning", "Biomedical AI"],
    },
    {
      id: "mcp-perspective",
      short: "MCP-Native AI Scientists",
      type: "journal",
      year: 2026,
      title: "Building MCP-Native Hierarchical AI Scientist Ecosystems: A Perspective on Scaling Multi-Agent Scientific Discovery",
      authors: ["Ling Yue", "Ching-Yun Ko", "Pin-Yu Chen", "Shimin Di", "Shaowu Pan"],
      venue: "Frontiers in Artificial Intelligence, vol. 9, 1820375",
      venueShort: "Front. AI 2026",
      badges: ["IF 6.7"],
      scholar: "_kc_bZDykSQC",
      links: {},
      topics: ["Agents", "AI for Science"],
    },
    {
      id: "biomamba",
      type: "journal",
      year: 2026,
      title: "BioMamba: Domain-Adaptive Biomedical Language Models",
      authors: ["Ling Yue", "Mingzhi Zhu", "Sixue Xing", "Yunning Cao", "Yanbo Wang", "Vijil Chenthamarakshan", "Shaowu Pan", "Payel Das", "Tianfan Fu"],
      venue: "Health Data Science, 0454",
      venueShort: "Health Data Sci. 2026",
      badges: ["IF 4.8"],
      scholar: "mVmsd5A6BfQC",
      links: {},
      topics: ["Biomedical AI"],
    },
    {
      id: "cfdllmbench",
      type: "journal",
      year: 2026,
      title: "CFDLLMBench: A Benchmark Suite for Evaluating Large Language Models in Computational Fluid Dynamics",
      authors: ["Nithin Somasekharan", "Ling Yue", "Yadi Cao", "Weichao Li", "Patrick Emami", "Pochinapeddi Sai Bhargav", "Anurag Acharya", "Xingyu Xie", "Shaowu Pan"],
      venue: "Journal of Data-centric Machine Learning Research (DMLR), 3(13): 1–40",
      venueShort: "DMLR 2026",
      scholar: "hqOjcs7Dif8C",
      links: {},
      topics: ["AI for Science"],
    },

    /* ---- Preprints ---- */
    {
      id: "tokencast",
      type: "preprint",
      year: 2026,
      title: "TokenCast: Forecasting Token Consumption During LLM Agent Execution",
      authors: ["Chaoqian Ouyang*", "Ling Yue*", "Libin Zheng", "Hanghui Guo", "Shengxiang Xu", "Yishu Wang", "Ran Li", "Jian Yin", "Shaowu Pan", "Shimin Di"],
      venue: "arXiv preprint arXiv:2609.35760",
      venueShort: "arXiv 2026",
      scholar: "hFOr9nPyWt4C",
      links: {},
      topics: ["Agents"],
    },
    {
      id: "evoflux",
      type: "preprint",
      year: 2026,
      title: "Evoflux: Inference-Time Evolution of Executable Tool Workflows for Compact Agents",
      authors: ["Kushal Raj Bhandari", "Ling Yue", "Ching-Yun Ko", "Dhaval Patel", "Shaowu Pan", "Pin-Yu Chen", "Jianxi Gao"],
      venue: "arXiv preprint arXiv:2606.12674",
      venueShort: "arXiv 2026",
      scholar: "qUcmZB5y_30C",
      links: {},
      topics: ["Agent Workflow Optimization"],
    },
    {
      id: "ai-cfd-scientist",
      type: "preprint",
      year: 2026,
      title: "AI CFD Scientist: Toward Open-Ended Computational Fluid Dynamics Discovery with Physics-Aware AI Agents",
      authors: ["Nithin Somasekharan", "Rabi Pathak", "Manushri Dhanakoti", "Tingwen Zhang", "Ling Yue", "Andy Zhu", "Shaowu Pan"],
      venue: "arXiv preprint arXiv:2605.06607",
      venueShort: "arXiv 2026",
      scholar: "4DMP91E08xMC",
      links: {},
      topics: ["AI for Science", "Agents"],
    },
    {
      id: "diagrambank",
      type: "preprint",
      year: 2026,
      title: "DiagramBank: A Quality-Audited Dataset of Scientific Schematic Diagrams with Multi-Level Document Context",
      authors: ["Ling Yue", "Tingwen Zhang", "Jiaying Wang", "Zhen Xu", "Shaowu Pan"],
      venue: "arXiv preprint arXiv:2604.20857",
      venueShort: "arXiv 2026",
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
      scholar: "L8Ckcad2t8MC",
      links: {},
      topics: ["Agents", "AI for Science"],
    },
    {
      id: "fea-agents",
      type: "preprint",
      year: 2026,
      title: "A Multi-AI-Agent Framework Enabling End-to-End Finite Element Analysis for Solid Mechanics Problems",
      authors: ["Titu Ranjan Sarker", "Muhammed Jawaad Zulqernine", "Ling Yue", "Shaowu Pan", "Chenxi Wang", "Shiyao Lin"],
      venue: "arXiv preprint arXiv:2606.00138",
      venueShort: "arXiv 2026",
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
      venue: "Preprints",
      venueShort: "Preprints 2024",
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
      scholar: "WF5omc3nYNoC",
      links: {},
      topics: ["Biomedical AI"],
    },

    /* ---- Patents ---- */
    {
      id: "automl-patent",
      type: "patent",
      year: 2023,
      title: "Method, Device and Apparatus for Execution of Automated Machine Learning Process",
      authors: ["Zihui Lv", "Yusen Wang", "Ling Yue", "Xiawei Guo", "Zhen Guo", "Yu Zhang", "Yuchen Gu"],
      venue: "U.S. Patent Application Pub. US20230162051A1, May 25, 2023",
      venueShort: "US Patent App. 2023",
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
      text: "Developed a training-free activation-steering method in vLLM that improves instruction following throughout generation, targeting format drift, unintended language switching, and safety violations.",
    },
    {
      period: "2025.05 – 2025.08",
      org: "IBM Research, T. J. Watson Research Center",
      role: "Research Intern",
      text: "Built a multi-agent framework for de novo protein design in which generator and critic LLM agents iteratively refine sequences against predicted structures.",
    },
    {
      period: "2022.07 – 2023.12",
      org: "Tsinghua University",
      role: "",
      text: "Developed a relation-aware ensemble for knowledge graph embedding that ranked first on OGB leaderboards (EMNLP). Worked on a flow-based GNN for drug interaction prediction (Nature Computational Science).",
    },
    {
      period: "2018.03 – 2018.11",
      org: "Microsoft Research Asia, System Group",
      role: "Research Intern",
      text: "Contributed core HPO and NAS algorithms to NNI, an open-source AutoML toolkit (14k+ GitHub stars).",
    },
  ],

  /* ---------------------------------------------------------------- */
  honors: [
    { date: "2026.10", text: "Conference travel support, RPI Department of Computer Science" }, // TODO: confirm month alongside the corresponding News entry.
    { date: "2026.06", text: "Graduate Student Spotlight, Rensselaer Polytechnic Institute" },
    { date: "2024", text: "Oral presentation, ACM BCB 2024 (ClinicalAgent)" },
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

  /* ---------------------------------------------------------------- */
  contact: {
    text: "I am happy to talk about research collaborations, postdoctoral opportunities, or speaking invitations. Email is the best way to reach me.",
    address: "Department of Computer Science, Rensselaer Polytechnic Institute, 110 8th Street, Troy, NY 12180",
  },

  lastUpdated: "October 2026",
};
