/* Renders the site from window.SITE (data/content.js). No build step. */
(function () {
  "use strict";
  var S = window.SITE || {};
  var P = S.profile || {};
  var main = document.getElementById("main");

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function has(a) { return Array.isArray(a) ? a.length > 0 : !!a; }
  function ext(url) { return /^https?:\/\//.test(url) ? ' target="_blank" rel="noopener"' : ""; }

  var ICONS = {
    email: '<path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm.5 2v.3l8.5 5.6 8.5-5.6V7H3.5zm17 2.1-8 5.3a1 1 0 0 1-1 0l-8-5.3V17h17V9.1z"/>',
    scholar: '<path d="M12 3 1 9l11 6 9-4.9V17h2V9L12 3zm-6.8 9.6v3.6C6.9 18.4 9.3 20 12 20s5.1-1.6 6.8-3.8v-3.6L12 16.3l-6.8-3.7z"/>',
    github: '<path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/>',
    linkedin: '<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3V9.5zm6.5 0h3.8v1.6h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.1c0-1.22-.02-2.79-1.7-2.79-1.7 0-1.96 1.33-1.96 2.7V21h-4V9.5z"/>',
    twitter: '<path d="M17.8 3h3.1l-6.8 7.8L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.3-8.3L1.9 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z"/>',
    orcid: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM8.2 17H6.6V9.2h1.6V17zM7.4 8.1a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM17.6 13c0 2.4-1.7 4-4.1 4h-3.1V9.2h3.1c2.4 0 4.1 1.6 4.1 3.9zm-1.7 0c0-1.6-1-2.5-2.6-2.5H12v5h1.3c1.6 0 2.6-1 2.6-2.5z"/>',
    location: '<path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/>',
    link: '<path d="M10.6 13.4a1 1 0 0 1 0-1.4l3-3a1 1 0 1 1 1.4 1.4l-3 3a1 1 0 0 1-1.4 0zM7.8 19.1a3.5 3.5 0 0 1-2.5-6l2.1-2.1a1 1 0 1 1 1.4 1.4l-2.1 2.1a1.5 1.5 0 0 0 2.1 2.1l2.1-2.1a1 1 0 1 1 1.4 1.4l-2.1 2.1a3.5 3.5 0 0 1-2.4 1.1zm7.4-6.8a1 1 0 0 1-.7-1.7l2.1-2.1a1.5 1.5 0 0 0-2.1-2.1l-2.1 2.1a1 1 0 1 1-1.4-1.4l2.1-2.1a3.5 3.5 0 1 1 5 5l-2.2 2a1 1 0 0 1-.7.3z"/>',
  };
  function icon(name) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || ICONS.link) + "</svg>"; }

  var LINK_LABELS = {
    scholar: "Google Scholar", github: "GitHub", linkedin: "LinkedIn", twitter: "X / Twitter",
    orcid: "ORCID", semanticScholar: "Semantic Scholar", dblp: "DBLP", openreview: "OpenReview",
  };

  /* ---------- email (anti-scraping) ----------
   * The address never appears as text in the HTML/DOM: it is drawn onto a canvas
   * and shown as an <img>, and only assembled into a mailto: link on click. */
  function emailAddr() {
    var e = P.email;
    if (!e) return "";
    return typeof e === "string" ? e : e.user + String.fromCharCode(64) + e.domain;
  }
  function emailLink(cls) {
    return '<a href="#" class="email-link ' + (cls || "") + '" data-mail aria-label="Send an email to ' + esc(P.name) + '">' +
      '<img class="email-img" alt="Email address (shown as an image)"></a>';
  }
  function drawEmails() {
    var addr = emailAddr();
    if (!addr) return;
    var dpr = Math.max(2, window.devicePixelRatio || 1);
    document.querySelectorAll("[data-mail]").forEach(function (a) {
      var cs = getComputedStyle(a);
      var font = cs.fontWeight + " " + cs.fontSize + " " + cs.fontFamily;
      var size = parseFloat(cs.fontSize);
      var c = document.createElement("canvas"), ctx = c.getContext("2d");
      ctx.font = font;
      var w = Math.ceil(ctx.measureText(addr).width) + 2, h = Math.ceil(size * 1.4);
      c.width = w * dpr; c.height = h * dpr;
      ctx.scale(dpr, dpr);
      ctx.font = font; ctx.fillStyle = cs.color; ctx.textBaseline = "middle";
      ctx.fillText(addr, 1, h / 2);
      var img = a.querySelector("img");
      img.src = c.toDataURL("image/png");
      img.style.width = w + "px"; img.style.height = h + "px";
    });
  }

  /* ---------- sidebar ---------- */
  function initials(name) { return (name || "").split(/\s+/).map(function (w) { return w[0]; }).join("").slice(0, 2); }

  function renderSidebar() {
    var el = document.getElementById("sidebar");
    var links = P.links || {};
    var items = [];
    if (P.email) items.push("<li>" + emailLink().replace('<img', icon("email") + '<img') + "</li>");
    Object.keys(links).forEach(function (k) {
      if (links[k]) items.push('<li><a href="' + esc(links[k]) + '"' + ext(links[k]) + ">" + icon(k) + esc(LINK_LABELS[k] || k) + "</a></li>");
    });
    if (P.location) items.push("<li><span>" + icon("location") + esc(P.location) + "</span></li>");

    var m = P.metrics || {};
    var metrics = (m.citations || m.hIndex)
      ? '<div class="metrics">' +
          (m.citations ? '<div class="metric"><b>' + esc(m.citations) + "</b><span>Citations</span></div>" : "") +
          (m.hIndex ? '<div class="metric"><b>' + esc(m.hIndex) + "</b><span>h-index</span></div>" : "") +
        "</div>" +
        '<div class="metrics-note">' + (links.scholar ? '<a href="' + esc(links.scholar) + '" target="_blank" rel="noopener">Google Scholar</a>' : "Google Scholar") +
        (m.asOf ? ", " + esc(m.asOf) : "") + "</div>"
      : "";

    el.innerHTML =
      '<div class="avatar avatar-fallback" id="avatar" aria-hidden="true">' + esc(initials(P.name)) + "</div>" +
      '<div class="side-info">' +
      '<h1 class="side-name">' + esc(P.name) + (P.nameNative ? '<span class="side-native">' + esc(P.nameNative) + "</span>" : "") + "</h1>" +
      '<p class="side-title">' + esc(P.title) + "</p>" +
      '<p class="side-aff">' + (P.affiliationUrl ? '<a href="' + esc(P.affiliationUrl) + '"' + ext(P.affiliationUrl) + ">" + esc(P.affiliation) + "</a>" : esc(P.affiliation)) + "</p>" +
      (P.tagline ? '<p class="side-tag">' + esc(P.tagline) + "</p>" : "") +
      '<ul class="side-links">' + items.join("") + "</ul>" +
      (P.cv ? '<a class="side-cv" href="' + esc(P.cv) + '" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14" stroke-linecap="round" stroke-linejoin="round"/></svg>Download CV</a>' : "") +
      metrics + "</div>";

    // Swap in the photo only if it actually loads.
    if (P.photo) {
      var img = new Image();
      img.onload = function () {
        var a = document.getElementById("avatar");
        img.className = "avatar";
        img.alt = "Photo of " + (P.name || "");
        img.width = 136; img.height = 136; img.decoding = "async";
        a.replaceWith(img);
      };
      img.src = P.photo;
    }
  }

  /* ---------- section builders ---------- */
  var sections = []; // {id, label, html, after?}

  function add(id, label, html, opts) {
    if (!html) return;
    sections.push({ id: id, label: label, html: html, nav: !(opts && opts.nav === false), navLabel: opts && opts.navLabel });
  }

  function jobMarketHtml() {
    var jm = S.jobMarket;
    if (!jm || !jm.enabled) return "";
    var mats = (jm.materials || []).filter(function (m) { return m.url; }).map(function (m) {
      return '<a class="btn" href="' + esc(m.url) + '" target="_blank" rel="noopener">' + esc(m.label) + "</a>";
    }).join("");
    return '<div class="callout" role="note"><span class="callout-dot" aria-hidden="true"></span><div class="callout-body"><strong>' + esc(jm.headline) + "</strong><p>" + esc(jm.text) + "</p></div>" +
      (mats ? '<div class="callout-links">' + mats + "</div>" : "") + "</div>";
  }

  function educationHtml() {
    if (!has(S.education)) return "";
    return '<ul class="timeline">' + S.education.map(function (e) {
      return '<li><span class="when">' + esc(e.period) + '</span><div><div class="org">' + esc(e.school) + '</div><div class="role">' + esc(e.degree) + "</div>" + (e.detail ? "<p>" + esc(e.detail) + "</p>" : "") + "</div></li>";
    }).join("") + "</ul>";
  }

  function aboutHtml() {
    var h = jobMarketHtml();
    if (has(S.about)) h += '<div class="lead">' + S.about.map(function (p) { return "<p>" + p + "</p>"; }).join("") + "</div>";
    if (has(S.interests)) h += '<div class="chips" aria-label="Research interests">' + S.interests.map(function (t) { return '<span class="chip">' + esc(t) + "</span>"; }).join("") + "</div>";
    return h;
  }

  function newsHtml() {
    if (!has(S.news)) return "";
    var n = S.newsVisible || 6;
    var h = '<ul class="news">' + S.news.map(function (it, i) {
      return '<li class="' + (i >= n ? "is-hidden" : "") + '"><span class="when">' + esc(it.date) + "</span><span>" + it.text + "</span></li>";
    }).join("") + "</ul>";
    if (S.news.length > n) h += '<button class="btn more-btn" type="button" data-more="news">Show all ' + S.news.length + " updates</button>";
    return h;
  }

  var pubById = {};
  (S.publications || []).forEach(function (p) { if (p.id) pubById[p.id] = p; });

  function shortTitle(p) { return p.short || p.title.split(":")[0]; }

  function researchHtml() {
    if (!has(S.research)) return "";
    return '<div class="themes">' + S.research.map(function (t, i) {
      var papers = (t.papers || []).filter(function (id) { return pubById[id]; });
      return '<article class="theme"><span class="num">0' + (i + 1) + "</span><h3>" + esc(t.title) + "</h3><p>" + esc(t.text) + "</p>" +
        (papers.length ? '<div class="theme-papers">' + papers.map(function (id) {
          return '<a href="#pub-' + esc(id) + '" data-goto-pub="' + esc(id) + '">' + esc(shortTitle(pubById[id])) + "</a>";
        }).join("") + "</div>" : "") + "</article>";
    }).join("") + "</div>";
  }

  /* ---------- publications ---------- */
  var TYPE_LABELS = { conference: "Conference", journal: "Journal", workshop: "Workshop", preprint: "Preprint", patent: "Patent" };
  var state = { view: "selected", type: "all", topic: "", q: "" };

  function authorsHtml(list) {
    var me = (P.highlightName || P.name || "").toLowerCase();
    return (list || []).map(function (a) {
      var star = /\*$/.test(a); var name = a.replace(/\*$/, "");
      var txt = esc(name) + (star ? "<sup>*</sup>" : "");
      return name.toLowerCase() === me ? '<span class="me">' + txt + "</span>" : txt;
    }).join(", ");
  }

  function pubHtml(p) {
    return '<li class="pub" id="pub-' + esc(p.id) + '">' +
      '<div class="venue-tag">' + esc(p.venueShort || p.year) + "</div>" +
      "<div>" +
        '<div class="pub-title">' + esc(p.title) + "</div>" +
        '<div class="pub-authors">' + authorsHtml(p.authors) + "</div>" +
        '<div class="pub-venue">' + esc(p.venue) + "</div>" +
        (p.tldr ? '<p class="pub-tldr">' + esc(p.tldr) + "</p>" : "") +
      "</div></li>";
  }

  function filteredPubs() {
    var q = state.q.trim().toLowerCase();
    return (S.publications || []).filter(function (p) {
      if (state.view === "selected" && !p.selected) return false;
      if (state.view === "all" && state.type !== "all" && p.type !== state.type) return false;
      if (state.topic && (p.topics || []).indexOf(state.topic) < 0) return false;
      if (q) {
        var hay = [p.title, p.venue, p.venueShort, (p.authors || []).join(" "), p.tldr, (p.topics || []).join(" ")].join(" ").toLowerCase();
        if (hay.indexOf(q) < 0) return false;
      }
      return true;
    });
  }

  function renderPubList() {
    var box = document.getElementById("pub-list");
    if (!box) return;
    var list = filteredPubs();
    if (!list.length) { box.innerHTML = '<p class="empty">No publications match.</p>'; return; }
    if (state.view === "selected") { box.innerHTML = '<ol class="pubs">' + list.map(pubHtml).join("") + "</ol>"; return; }
    var years = {};
    list.forEach(function (p) { (years[p.year] = years[p.year] || []).push(p); });
    box.innerHTML = Object.keys(years).sort(function (a, b) { return b - a; }).map(function (y) {
      return '<div class="pub-group-title">' + esc(y) + '</div><ol class="pubs">' + years[y].map(pubHtml).join("") + "</ol>";
    }).join("");
  }

  function pubsHtml() {
    var pubs = S.publications || [];
    if (!pubs.length) return "";
    var counts = { all: pubs.length };
    pubs.forEach(function (p) { counts[p.type] = (counts[p.type] || 0) + 1; });
    var nSel = pubs.filter(function (p) { return p.selected; }).length;
    var topics = [];
    pubs.forEach(function (p) { (p.topics || []).forEach(function (t) { if (topics.indexOf(t) < 0) topics.push(t); }); });

    var typeBtns = ["all"].concat(Object.keys(TYPE_LABELS).filter(function (t) { return counts[t]; }));
    var hasEqual = pubs.some(function (p) { return (p.authors || []).some(function (a) { return /\*$/.test(a); }); });

    return '<div class="pub-tools">' +
        '<div class="seg" role="group" aria-label="View">' +
          '<button type="button" data-view="selected" aria-pressed="true">Selected<span class="count">' + nSel + "</span></button>" +
          '<button type="button" data-view="all" aria-pressed="false">All<span class="count">' + pubs.length + "</span></button>" +
        "</div>" +
        '<div class="seg" role="group" aria-label="Type" id="type-seg" hidden>' + typeBtns.map(function (t) {
          return '<button type="button" data-type="' + t + '" aria-pressed="' + (t === "all") + '">' + (t === "all" ? "Any type" : TYPE_LABELS[t]) + '<span class="count">' + counts[t] + "</span></button>";
        }).join("") + "</div>" +
        '<input class="pub-search" id="pub-search" type="search" placeholder="Search title, author, venue…" aria-label="Search publications">' +
      "</div>" +
      (topics.length ? '<div class="topic-row" role="group" aria-label="Topic">' + topics.map(function (t) {
        return '<button type="button" data-topic="' + esc(t) + '" aria-pressed="false">' + esc(t) + "</button>";
      }).join("") + "</div>" : "") +
      (hasEqual ? '<p class="pub-note"><sup>*</sup> Equal contribution.</p>' : "") +
      '<div id="pub-list"></div>';
  }

  function projectsHtml() {
    if (!has(S.projects)) return "";
    return '<div class="projects">' + S.projects.map(function (p) {
      var tag = p.url ? "a" : "div";
      return "<" + tag + ' class="project"' + (p.url ? ' href="' + esc(p.url) + '"' + ext(p.url) : "") + ">" +
        '<div class="project-top"><b>' + esc(p.name) + "</b>" + (p.stars ? '<span class="stars">★ ' + esc(p.stars) + "</span>" : "") + "</div>" +
        "<p>" + esc(p.description) + "</p>" +
        (has(p.tags) ? '<div class="chips">' + p.tags.map(function (t) { return '<span class="chip">' + esc(t) + "</span>"; }).join("") + "</div>" : "") +
        "</" + tag + ">";
    }).join("") + "</div>";
  }

  function experienceHtml() {
    if (!has(S.experience) && !has(S.education)) return "";
    var h = "";
    if (has(S.education)) h += '<h3 class="subhead first">Education</h3>' + educationHtml();
    if (has(S.experience)) h += '<h3 class="subhead">Research Experience</h3><ul class="timeline">' + S.experience.map(function (e) {
      return '<li><span class="when">' + esc(e.period) + '</span><div><div class="org">' + esc(e.org) + '</div>' + (e.role ? '<div class="role">' + esc(e.role) + "</div>" : "") + (e.text ? "<p>" + esc(e.text) + "</p>" : "") + "</div></li>";
    }).join("") + "</ul>";
    return h;
  }

  function datedList(items, fn) {
    return '<ul class="dated">' + items.map(function (it) { return '<li><span class="when">' + esc(it.date || it.term || it.period || "") + "</span><span>" + fn(it) + "</span></li>"; }).join("") + "</ul>";
  }

  function talksHtml() {
    if (!has(S.talks)) return "";
    return datedList(S.talks, function (t) {
      var extra = [t.url ? '<a href="' + esc(t.url) + '"' + ext(t.url) + ">link</a>" : "", t.slides ? '<a href="' + esc(t.slides) + '"' + ext(t.slides) + ">slides</a>" : ""].filter(Boolean).join(" · ");
      return "<b>" + esc(t.title) + '</b><span class="sub">' + esc(t.venue) + (extra ? " · " + extra : "") + "</span>";
    });
  }

  function teachingHtml() {
    if (!has(S.teaching)) return "";
    return datedList(S.teaching, function (t) {
      var name = t.url ? '<a href="' + esc(t.url) + '"' + ext(t.url) + ">" + esc(t.course) + "</a>" : esc(t.course);
      return "<b>" + name + '</b><span class="sub">' + esc([t.role, t.school].filter(Boolean).join(", ")) + "</span>";
    });
  }

  function peopleHtml(people) {
    if (!has(people)) return "";
    return '<ul class="people">' + people.map(function (m) {
      var name = m.url ? '<a href="' + esc(m.url) + '"' + ext(m.url) + ">" + esc(m.name) + "</a>" : esc(m.name);
      return "<li><b>" + name + "</b>" + (m.note ? '<span class="people-note">, ' + esc(m.note) + "</span>" : "") +
        (m.period ? '<span class="people-period">' + esc(m.period) + "</span>" : "") + "</li>";
    }).join("") + "</ul>";
  }

  function mentoringHtml() {
    if (!S.mentoringSummary && !has(S.mentees)) return "";
    var h = S.mentoringSummary ? "<p>" + esc(S.mentoringSummary) + "</p>" : "";
    h += peopleHtml(S.mentees);
    return h;
  }

  function serviceHtml() {
    if (!has(S.service)) return "";
    return '<div class="kv">' + S.service.map(function (s) {
      return '<div class="kv-row"><span class="k">' + esc(s.role) + '</span><span class="v">' + esc(s.items) + "</span></div>";
    }).join("") + "</div>";
  }

  function contactHtml() {
    var c = S.contact || {};
    if (!c.text && !P.email) return "";
    return '<div class="contact-box">' + (c.text ? "<p>" + esc(c.text) + "</p>" : "") +
      (P.email ? emailLink("email") : "") +
      (c.address ? "<address>" + esc(c.address) + "</address>" : "") + "</div>";
  }

  /* ---------- assemble ---------- */
  // Honors and press coverage share one chronological list.
  function recognitionHtml() {
    var items = (S.honors || []).slice();
    (S.media || []).forEach(function (m) {
      var title = m.url ? '<a href="' + esc(m.url) + '"' + ext(m.url) + ">" + esc(m.title) + "</a>" : esc(m.title);
      items.push({
        date: m.date,
        text: "<b>" + esc(m.outlet) + "</b>: " + title + (m.note ? '<span class="sub">' + esc(m.note) + "</span>" : ""),
      });
    });
    items.sort(function (a, b) { return String(b.date || "").localeCompare(String(a.date || "")); });
    return has(items) ? datedList(items, function (it) { return it.text; }) : "";
  }

  // Teaching and mentoring share a section; the nav label follows what exists.
  function teachingMentoringHtml() {
    var t = teachingHtml(), m = mentoringHtml();
    if (t && m) return '<h3 class="subhead first">Teaching</h3>' + t + '<h3 class="subhead">Mentoring</h3>' + m;
    return t || m;
  }
  var tmLabel = has(S.teaching) && (S.mentoringSummary || has(S.mentees)) ? "Teaching & Mentoring" : has(S.teaching) ? "Teaching" : "Mentoring";

  // Section order (highest priority for a hiring committee first).
  add("about", "About", aboutHtml());
  add("news", "News", newsHtml());
  add("research", "Research", researchHtml());
  add("publications", "Publications", pubsHtml());
  add("projects", "Open Source", projectsHtml());
  add("honors", "Honors & Media", recognitionHtml());
  add("talks", "Talks", talksHtml());
  add("teaching", tmLabel, teachingMentoringHtml(), { navLabel: has(S.teaching) ? "Teaching" : "Mentoring" });
  add("alumni", "Alumni", peopleHtml(S.alumni));
  add("experience", "Experience", experienceHtml());
  add("service", "Service", serviceHtml());
  add("contact", "Contact", contactHtml());

  renderSidebar();
  main.innerHTML = sections.map(function (s) {
    var heading = s.id === "about" ? '<h2 class="visually-about">About</h2>' : "<h2>" + esc(s.label) + "</h2>";
    return '<section class="section" id="' + s.id + '" aria-labelledby="h-' + s.id + '"><div class="section-head">' + heading.replace("<h2", '<h2 id="h-' + s.id + '"') + "</div>" + s.html + "</section>";
  }).join("");

  document.getElementById("nav").innerHTML = sections.filter(function (s) { return s.nav; }).map(function (s) {
    return '<a href="#' + s.id + '">' + esc(s.navLabel || s.label) + "</a>";
  }).join("");

  document.getElementById("footer").innerHTML =
    "<span>© " + new Date().getFullYear() + " " + esc(P.name) + "</span>" +
    (S.lastUpdated ? "<span>Last updated " + esc(S.lastUpdated) + "</span>" : "");

  renderPubList();

  /* ---------- interactions ---------- */
  function setPressed(selector, attr, value) {
    document.querySelectorAll(selector).forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute(attr) === value)); });
  }

  document.addEventListener("click", function (e) {
    var t = e.target.closest("button, a");
    if (!t) return;

    if (t.hasAttribute("data-mail")) {
      e.preventDefault();
      location.href = "mailto:" + emailAddr();
      return;
    }
    if (t.dataset.view) {
      state.view = t.dataset.view;
      setPressed("[data-view]", "data-view", state.view);
      document.getElementById("type-seg").hidden = state.view !== "all";
      renderPubList();
    } else if (t.dataset.type) {
      state.type = t.dataset.type;
      setPressed("[data-type]", "data-type", state.type);
      renderPubList();
    } else if (t.dataset.topic) {
      state.topic = state.topic === t.dataset.topic ? "" : t.dataset.topic;
      setPressed("[data-topic]", "data-topic", state.topic);
      renderPubList();
    } else if (t.dataset.more === "news") {
      document.querySelectorAll(".news li.is-hidden").forEach(function (li) { li.classList.remove("is-hidden"); });
      t.remove();
    } else if (t.dataset.gotoPub) {
      e.preventDefault();
      goToPub(t.dataset.gotoPub);
    }
  });

  function goToPub(id) {
    var target = document.getElementById("pub-" + id);
    if (!target) {
      // Not visible under current filters: switch to "All" and clear filters.
      state = { view: "all", type: "all", topic: "", q: "" };
      setPressed("[data-view]", "data-view", "all");
      setPressed("[data-type]", "data-type", "all");
      setPressed("[data-topic]", "data-topic", "");
      document.getElementById("type-seg").hidden = false;
      document.getElementById("pub-search").value = "";
      renderPubList();
      target = document.getElementById("pub-" + id);
    }
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    target.classList.remove("flash"); void target.offsetWidth; target.classList.add("flash");
  }

  var search = document.getElementById("pub-search");
  if (search) search.addEventListener("input", function () { state.q = search.value; renderPubList(); });

  // Theme toggle
  document.getElementById("theme-toggle").addEventListener("click", function () {
    var root = document.documentElement;
    var cur = root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    var next = cur === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (err) {}
    drawEmails();
  });

  // Mobile menu
  var nav = document.getElementById("nav");
  var menuBtn = document.getElementById("menu-toggle");
  menuBtn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
  });

  // Highlight current section in nav
  if ("IntersectionObserver" in window) {
    var navLinks = {};
    nav.querySelectorAll("a").forEach(function (a) { navLinks[a.getAttribute("href").slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && navLinks[en.target.id]) {
          Object.keys(navLinks).forEach(function (k) { navLinks[k].classList.remove("active"); });
          navLinks[en.target.id].classList.add("active");
        }
      });
    }, { rootMargin: "-30% 0px -65% 0px" });
    document.querySelectorAll(".section").forEach(function (s) { io.observe(s); });
  }

  // Honor deep links like #pub-foam-agent
  // Draw email images once web fonts are ready (so the image matches the text), and on theme changes.
  drawEmails();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(drawEmails);
  if (window.matchMedia) {
    var mq = matchMedia("(prefers-color-scheme: dark)");
    if (mq.addEventListener) mq.addEventListener("change", drawEmails);
  }

  // Sections are rendered by JS, so the browser can't jump to #hash on its own.
  if (/^#pub-/.test(location.hash)) goToPub(location.hash.slice(5));
  else if (location.hash.length > 1) {
    var sec = document.getElementById(location.hash.slice(1));
    if (sec) requestAnimationFrame(function () { sec.scrollIntoView({ behavior: "instant" }); });
  }
})();
