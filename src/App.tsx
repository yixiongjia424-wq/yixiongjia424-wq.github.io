import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Menu, X, Sun, Moon, ChevronRight, ExternalLink, Mail, MapPin, Calendar,
  Users, Newspaper, BookOpen, GraduationCap, FileText, Github, Building2,
} from 'lucide-react';

// =========================
// 可编辑的数据区（按需替换）
// =========================
const LAB = {
  nameCn: "电气装备与电力系统课题组",
  nameEn: "Electrical Equipment & Power Systems Laboratory (EEPSL)",
  short: "EEPSL",
  affiliation: "江南大学 · 物联网工程学院",
  email: "y.zhou@jiangnan.edu.cn",
  addressCn: "中国 · 无锡 · 蠡湖 大道 1800 号 · 邮编 214122",
  addressEn: "Jiangnan University, no.1800, lihu avenue, WuXi, China, 214122",
  lastUpdated: "Sep 2025",
  hero: {
    title: "面向新型电力系统的计算与智能",
    subtitle:
      "我们聚焦综合能源系统规划运行、电碳耦合技术和先进电气装备等方向的研究，强调将物理先验与数据驱动进行融合。",
    ctaText: "加入我们",
    ctaHref: "#openings",
    bgUrl:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=1600&auto=format&fit=crop",
  },
};

const NAV = [
  { id: "home", label: "首页" },
  { id: "news", label: "新闻" },
  { id: "research", label: "研究" },
  { id: "people", label: "团队" },
  { id: "publications", label: "论文" },
  { id: "courses", label: "课程" },
  { id: "resources", label: "资源" },
  { id: "collab", label: "合作" },
  { id: "openings", label: "招募" },
  { id: "contact", label: "联系" },
];

const NEWS = [
  { date: "2024-11-26", title: "荣获2024年中国江苏人才创新创业大赛（国内赛）二等奖", href: "https://iot.jiangnan.edu.cn/info/1006/4045.htm", tag: "Award" },
  // { date: "2025-06-30", title: "团队在省赛“电力AI挑战”获一等奖", href: "#", tag: "Award" },
  // { date: "2025-05-10", title: "开源电力系统图学习库 IPEIL-OPF 发布", href: "#", tag: "Release" },
];

const RESEARCH = [
  { title: "综合能源系统建模", desc: "利用神经网络等技术实现综合能源系统的动态精确建模" },
  { title: "电-碳耦合系统", desc: "探索电力系统与碳排放的协同规划与运行评估。" },
  { title: "新能源电力系统运行优化及边界建模", desc: "将物理模型与深度学习结合，提升泛化性、可解释性与鲁棒性。" },
  { title: "电力系统状态估计", desc: "融合物理-AI，实现配/输电网的动态状态估计与参数在线辨识。" },
];

import HcLogo from './assets/student/Hc.jpg';
import LfLogo from './assets/student/Lf.jpg';
import LrLogo from './assets/student/Lr.jpg';
import QjxLogo from './assets/student/Qjx.jpg';
import ZqyLogo from './assets/student/Zqy.jpg';
import CxdLogo from './assets/student/Cxd.jpg';
import LxfLogo from './assets/student/Lxf.jpg';
import GrzLogo from './assets/student/Grz.jpg';
import LcfLogo from './assets/student/Lcf.jpg';
import FwxLogo from './assets/student/Fwx.jpg';

const PEOPLE = {
  pi: [
    {
      name: "周尧",
      role: "教授",
      email: "y.zhou@jiangnan.edu.cn",
      avatar:
        "https://iot.jiangnan.edu.cn/__local/2/D2/3F/B04466EACEDF6024ED06CD14C50_839D8A55_12700.jpg",
      links: [{ label: "个人主页", href: "https://iot.jiangnan.edu.cn/info/1141/3540.htm" }],
    },
    {
      name: "雷星雨",
      role: "副教授",
      email: "y.zhou@jiangnan.edu.cn",
      avatar:
        "https://iot.jiangnan.edu.cn/__local/0/FB/87/283AF8BDA5FE20AD4D8AAEA8E2E_DEC4D21A_3791F.png",
      links: [{ label: "个人主页", href: "https://iot.jiangnan.edu.cn/info/1142/4098.htm" }],
    },
    {
      name: "贾亦雄",
      role: "讲师",
      email: "jiayx@connect.hku.hk",
      avatar:
        "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=RNBArdAAAAAJ&citpid=1",
      links: [{ label: "个人主页", href: "https://scholar.google.com/citations?user=RNBArdAAAAAJ&hl=en&oi=ao" }],
    },
  ],

  members: [
    {
      name: "蔡许多",
      role: "硕士生（2023-）",
      avatar:
        CxdLogo,
    },
    {
      name: "李雄飞",
      role: "硕士生（2024-）",
      avatar:
        LxfLogo,
    },
    {
      name: "耿仁正",
      role: "硕士生（2025-）",
      avatar:
        GrzLogo,
    },
    {
      name: "刘晨飞",
      role: "硕士生（2025-）",
      avatar:
        LcfLogo,
    },
    {
      name: "方望鑫",
      role: "硕士生（2025-）",
      avatar:
        FwxLogo,
    },
    {
      name: "祝启尧",
      role: "硕士生（2025-）",
      avatar:
        ZqyLogo,
    },
    {
      name: "李凡",
      role: "硕士生（2025-）",
      avatar:
        LfLogo,
    },
    {
      name: "李锐",
      role: "硕士生（2025-）",
      avatar:
        LrLogo,
    },
    {
      name: "钱佳欣",
      role: "硕士生（2025-）",
      avatar:
        QjxLogo,
    },
    {
      name: "杭铖",
      role: "硕士生（2025-）",
      avatar:
        HcLogo,
    },
  ],
  // alumni: [
  //   { name: "赵六", role: "硕士 2022 → 某研究院" },
  //   { name: "钱七", role: "本科 2023 → 海外读博" },
  // ],
};

const PUBLICATIONS = [
  {
    year: 2024,
    title: "Surrogate Formulation for Chance-Constrained DC Optimal Power Flow With Affine Control Policy",
    authors: ["X. Lei", "Z. Yang", "J. Zhao", "J. Yu", "W. Li"],
    venue: "IEEE Transactions on Power Systems",
    links: [{ label: "WEB", href: "https://ieeexplore-ieee-org.eproxy.lib.hku.hk/document/10214321" }],
  },
  {
    year: 2025,
    title: "OptNet-Embedded Data-Driven Approach for Optimal Power Flow Proxy",
    authors: ["Y. JIA", "Y. SU", "C. Wang", "Y. Wang"],
    venue: "IEEE Transactions on Industry Applications",
    links: [{ label: "WEB", href: "https://ieeexplore-ieee-org.eproxy.lib.hku.hk/document/10681578" }],
  },
  {
    year: 2025,
    title: "A Two-Stage Approach for Topology Change-Aware Data-Driven OPF",
    authors: ["Y. JIA", "X. Wu", "Z. Yang", "Y. Wang"],
    venue: "IEEE Transactions on Power Systems",
    links: [{ label: "WEB", href: "https://ieeexplore-ieee-org.eproxy.lib.hku.hk/document/10645322" }],
  },
];

const COURSES = [
  { term: "Fall 2025", title: "神经网络", link: "#" },
  { term: "Spring 2025", title: "智能电网与机器学习", link: "#" },
];

const RESOURCES = [
  { label: "课题组Github", href: "#", icon: Github },
  { label: "数据集", href: "#", icon: FileText },
  { label: "阅读清单", href: "#", icon: BookOpen },
];

import TsinghuaLogo from './assets/partners/Tsinghua.png';
import HKULogo from './assets/partners/HKU.png';
import WuxiLogo from './assets/partners/Wuxi.png';

// 合作单位（名称、链接、图标）
const COLLABS: { name: string; url: string; logo?: string }[] = [
  {
    name: "清华大学",
    url: "https://www.eea.tsinghua.edu.cn/",
    logo: TsinghuaLogo, // 建议放到 public/partners/jnu.png
  },
  {
    name: "香港大学",
    url: "http://www.eeyiwang.com/index.html",
    logo: HKULogo,
  },
  {
    name: "国网无锡供电公司",
    url: "http://www.js.sgcc.com.cn/wx/",
    logo: WuxiLogo,
  },
  // …按需继续添加
];

const OPENINGS = {
  zh:
    "长期招收硕士生与优秀本科生实习。欢迎具备电气工程、控制、计算机、数学等背景的同学加入（有数据/编程基础更佳）。申请请附简历、成绩单与个人陈述，邮件标题注明【应聘-姓名-方向】。",
  en:
    "We are hiring Masters and motivated undergraduates. Backgrounds in EE, Control, CS, or Math are welcome. Please email your CV, transcript, and a brief statement with subject [Application-Name-Area].",
};

// ===============
// 工具函数
// ===============
function classNames(...xs: (string | false | null | undefined)[]) {
  return xs.filter(Boolean).join(" ");
}

/** 中心列容器：居中 + 限宽 + 侧边距 */
function Container({ children, className = "" }: { children: any; className?: string }) {
  return (
    <div className={classNames("mx-auto max-w-screen-xl px-4 sm:px-6 xl:px-10", className)}>
      {children}
    </div>
  );
}

function useDarkMode() {
  const [dark, setDark] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('__ipeil_dark__');
      if (saved === '1') return true;
      if (saved === '0') return false;
      return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
    } catch { return false; }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
    try { localStorage.setItem('__ipeil_dark__', dark ? '1' : '0'); } catch {}
  }, [dark]);

  return { dark, setDark };
}

function useYears(publications: { year: number }[]) {
  return useMemo(() => {
    const ys = Array.from(new Set(publications.map((p) => p.year))).sort((a, b) => b - a);
    return ys;
  }, [publications]);
}

import labMark from './assets/icon1.jpg'; // 或 .png
// ===============
// UI 组件
// ===============
function Header() {
  const [open, setOpen] = useState(false);
  const { dark, setDark } = useDarkMode();

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-neutral-900/70 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            {/* 关键：固定高度 + 宽度自适应，不裁切 */}
            <img
                src={labMark}
                alt={LAB.short}
                className="h-9 w-auto object-contain shrink-0"  // h-7 可换成 h-8/h-9
            />
            <div className="leading-tight min-w-0">
              <div className="text-sm text-neutral-500 dark:text-neutral-400 truncate">{LAB.nameEn}</div>
              <div className="font-semibold text-neutral-900 dark:text-white truncate">{LAB.nameCn}</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((n) => (
                <a
                    key={n.id}
                    href={`#${n.id}`}
                    className="px-3 py-2 text-sm rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200"
                >
                  {n.label}
                </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* 主题切换按钮（直接操作 <html> 的 .dark） */}
            <button
                onClick={() => {
                  const root = document.documentElement;
                  const next = !root.classList.contains('dark');
                  root.classList.toggle('dark', next);                    // 立即切换
                  try {
                    localStorage.setItem('__ipeil_dark__', next ? '1' : '0');
                  } catch {
                  }
                  setDark(next);                                           // 同步状态以更新图标
                }}
                className="inline-flex items-center justify-center rounded-xl p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                aria-label="Toggle theme"
                aria-pressed={dark}
                title="切换主题"
            >
              {dark ? <Sun className="h-5 w-5"/> : <Moon className="h-5 w-5"/>}
            </button>

            <button
                onClick={() => setOpen(!open)}
                className="md:hidden inline-flex items-center justify-center rounded-xl p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                aria-label="Open menu"
            >
              {open ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
            </button>
          </div>
        </div>

        {open && (
            <div className="md:hidden pb-4">
              <div className="grid grid-cols-2 gap-2">
                {NAV.map((n) => (
                    <a
                        key={n.id}
                        href={`#${n.id}`}
                        onClick={() => setOpen(false)}
                        className="px-3 py-2 text-sm rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200"
                    >
                      {n.label}
                    </a>
              ))}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}


function Hero() {
  return (
    <section id="home" className="relative">
      {/* 背景全屏铺满 */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${LAB.hero.bgUrl})` }}
      />
      <div className="absolute inset-0 -z-10 bg-white/70 dark:bg-black/60" />

      {/* 内容列居中 */}
      <Container className="py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black px-3 py-1 text-xs font-medium shadow">
            <span>{LAB.short}</span>
            <span className="opacity-70">{LAB.affiliation}</span>
          </div>
          <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            {LAB.hero.title}
          </h1>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300 max-w-3xl">
            {LAB.hero.subtitle}
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={LAB.hero.ctaHref}
              className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium bg-neutral-900 text-white dark:bg-white dark:text-black shadow hover:shadow-lg"
            >
              {LAB.hero.ctaText}
              <ChevronRight className="h-4 w-4" />
            </a>
            <a
              href="#publications"
              className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium bg-white/70 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-200 hover:bg-white/90"
            >
              最新论文
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function SectionTitle({ icon: Icon, title, subtitle }: { icon: any; title: string; subtitle?: string }) {
  return (
    <div className="flex items-center gap-3">
      {Icon && <Icon className="h-5 w-5 text-neutral-500" />}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">{title}</h2>
        {subtitle && (
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

function News() {
  return (
    <section id="news" className="py-12 sm:py-16">
      <Container>
        <SectionTitle icon={Newspaper} title="新闻 News" subtitle="近期动态与里程碑" />
        <div className="mt-6 divide-y divide-neutral-200 dark:divide-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden">
          {NEWS.map((n, i) => (
            <a
              key={i}
              href={n.href}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 px-5 py-4 hover:bg-neutral-50 dark:hover:bg-neutral-800"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                  {n.tag}
                </span>
                <span className="text-neutral-900 dark:text-white">{n.title}</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 text-sm">
                <Calendar className="h-4 w-4" />
                {n.date}
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Research() {
  return (
    <section id="research" className="py-12 sm:py-16 bg-neutral-50 dark:bg-neutral-950">
      <Container>
        <SectionTitle icon={BookOpen} title="研究方向 Research" subtitle="主要研究问题" />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {RESEARCH.map((r, i) => (
            <div key={i} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm">
              <h3 className="font-semibold text-neutral-900 dark:text-white">{r.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{r.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function People() {
  return (
    <section id="people" className="py-12 sm:py-16">
      <Container>
        <SectionTitle icon={Users} title="团队成员 People" subtitle="PI · 研究生 · 校友" />

        <div className="mt-6">
          <h3 className="text-sm font-semibold tracking-wider text-neutral-500">PI</h3>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PEOPLE.pi.map((p, i) => (
              <div key={i} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5">
                <div className="flex items-center gap-4">
                  <img src={p.avatar} alt={p.name} className="h-16 w-16 rounded-2xl object-cover" />
                  <div>
                    <div className="font-semibold text-neutral-900 dark:text-white">{p.name}</div>
                    <div className="text-sm text-neutral-500">{p.role}</div>
                    <a href={`mailto:${p.email}`} className="text-sm inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 mt-1">
                      <Mail className="h-3.5 w-3.5" /> {p.email}
                    </a>
                  </div>
                </div>
                {p.links?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.links.map((l, j) => (
                      <a
                        key={j}
                        href={l.href}
                        className="text-xs inline-flex items-center gap-1 px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200"
                      >
                        <ExternalLink className="h-3 w-3" /> {l.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-sm font-semibold tracking-wider text-neutral-500">在读硕士</h3>
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {PEOPLE.members.map((m, i) => (
              <div key={i} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 text-center">
                <img src={m.avatar} alt={m.name} className="h-20 w-20 rounded-2xl object-cover mx-auto" />
                <div className="mt-2 font-medium text-neutral-900 dark:text-white">{m.name}</div>
                <div className="text-xs text-neutral-500">{m.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/*<div className="mt-10">*/}
        {/*  <h3 className="text-sm font-semibold tracking-wider text-neutral-500">校友</h3>*/}
        {/*  <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">*/}
        {/*    {PEOPLE.alumni.map((a, i) => (*/}
        {/*      <li key={i} className="text-sm text-neutral-600 dark:text-neutral-300">• {a.name} — {a.role}</li>*/}
        {/*    ))}*/}
        {/*  </ul>*/}
        {/*</div>*/}
      </Container>
    </section>
  );
}

function Publications() {
  const years = useYears(PUBLICATIONS);
  const [activeYear, setActiveYear] = useState<number | "all">("all");
  const pubs = PUBLICATIONS.filter((p) => activeYear === "all" || p.year === activeYear);

  return (
    <section id="publications" className="py-12 sm:py-16 bg-neutral-50 dark:bg-neutral-950">
      <Container>
        <SectionTitle icon={FileText} title="论文 Publications" />
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveYear("all")}
            className={classNames(
              "px-3 py-1.5 text-sm rounded-full border",
              activeYear === "all"
                ? "bg-neutral-900 text-white border-neutral-900 dark:bg-white dark:text-black dark:border-white"
                : "border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            )}
          >
            全部
          </button>
          {years.map((y) => (
            <button
              key={y}
              onClick={() => setActiveYear(y)}
              className={classNames(
                "px-3 py-1.5 text-sm rounded-full border",
                activeYear === y
                  ? "bg-neutral-900 text-white border-neutral-900 dark:bg-white dark:text-black dark:border-white"
                  : "border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              )}
            >
              {y}
            </button>
          ))}
        </div>

        <ol className="mt-6 space-y-4">
          {pubs.map((p, i) => (
            <li key={i} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5">
              <div className="text-sm text-neutral-500">{p.year}</div>
              <div className="mt-1 font-medium text-neutral-900 dark:text-white">{p.title}</div>
              <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{p.authors.join(", ")}</div>
              <div className="mt-1 text-sm text-neutral-500">{p.venue}</div>
              {p.links?.length ? (
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.links.map((l, j) => (
                    <a
                      key={j}
                      href={l.href}
                      className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200"
                    >
                      <ExternalLink className="h-3 w-3" /> {l.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function Courses() {
  return (
    <section id="courses" className="py-12 sm:py-16">
      <Container>
        <SectionTitle icon={GraduationCap} title="课程 Courses" subtitle="面向本科生/研究生的课程教学" />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {COURSES.map((c, i) => (
            <a
              key={i}
              href={c.link}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 hover:shadow"
            >
              <div className="text-sm text-neutral-500">{c.term}</div>
              <div className="mt-1 font-medium text-neutral-900 dark:text-white">{c.title}</div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Resources() {
  return (
    <section id="resources" className="py-12 sm:py-16 bg-neutral-50 dark:bg-neutral-950">
      <Container>
        <SectionTitle icon={BookOpen} title="资源 Resources" subtitle="代码 · 数据 · 学习资料" />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {RESOURCES.map((r, i) => (
            <a
              key={i}
              href={r.href}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 hover:shadow flex items-center gap-3"
            >
              {r.icon ? <r.icon className="h-5 w-5 text-neutral-500" /> : null}
              <span className="font-medium text-neutral-900 dark:text-white">{r.label}</span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Collaborations() {
  return (
    <section id="collab" className="py-12 sm:py-16">
      <Container>
        <SectionTitle
          icon={Building2}
          title="合作单位 Collaborations"
          subtitle="联合课题 · 共建项目 · 产学研合作"
        />
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {COLLABS.map((c, i) => (
            <a
              key={i}
              href={c.url}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-neutral-200 dark:border-neutral-800
                         bg-white dark:bg-neutral-900 p-4 hover:shadow transition"
              title={c.name}
            >
              <div className="h-16 flex items-center justify-center">
                {c.logo ? (
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="max-h-12 w-auto object-contain"
                  />
                ) : (
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500" />
                )}
              </div>
              <div
                className="mt-3 text-center text-sm font-medium
                           text-neutral-900 dark:text-white
                           group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
              >
                {c.name}
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}


function Openings() {
  return (
    <section id="openings" className="py-12 sm:py-16">
      <Container>
        <SectionTitle icon={Users} title="招募 Openings" subtitle="We are hiring!" />
        <div className="mt-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
          <p className="text-neutral-800 dark:text-neutral-200">{OPENINGS.zh}</p>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300 text-sm">{OPENINGS.en}</p>
          <a
            href={`mailto:${LAB.email}`}
            className="mt-4 inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium bg-neutral-900 text-white dark:bg-white dark:text-black shadow hover:shadow-lg"
          >
            <Mail className="h-4 w-4" /> 发送申请邮件
          </a>
        </div>
      </Container>
    </section>
  );
}

function osmEmbedSrc(lat: number, lon: number, d = 0.009) {
  const bbox = `${lon - d},${lat - d},${lon + d},${lat + d}`;
  return `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(bbox)}&layer=mapnik&marker=${lat}%2C${lon}`;
}

// ====== 江南大学（右侧用）======
const JNU = {
  name: "江南大学（无锡）",
  addressCn: "江苏省无锡市滨湖区蠡湖大道 1800 号",
  addressEn: "Jiangnan University, 1800 Lihu Ave, Binhu District, Wuxi, Jiangsu, China",
  lat: 31.4857,   // 可微调
  lon: 120.2665,  // 可微调
  zoom: 0.0009,
};

function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 bg-neutral-50 dark:bg-neutral-950">
      <Container>
        <SectionTitle icon={Mail} title="联系 Contact" subtitle={LAB.affiliation} />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
            <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
              <Mail className="h-4 w-4" />
              <a href={`mailto:${LAB.email}`} className="hover:underline">{LAB.email}</a>
            </div>
            <div className="mt-3 flex items-start gap-2 text-neutral-700 dark:text-neutral-300">
              <MapPin className="h-4 w-4 flex-shrink-0 mt-1" />
              <div>
                <div>{LAB.addressCn}</div>
                <div className="text-sm text-neutral-500">{LAB.addressEn}</div>
              </div>
            </div>
          </div>
          {/* 右侧：江南大学 地址 + 地图 */}
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden">
            <div className="p-4 border-b border-neutral-200 dark:border-neutral-800">
              <div className="font-medium text-neutral-900 dark:text-white">{JNU.name}</div>
              <div className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">{JNU.addressCn}</div>
              <div className="text-xs text-neutral-500">{JNU.addressEn}</div>
            </div>

            <iframe
              title="JNU map"
              className="w-full h-72"
              src={osmEmbedSrc(JNU.lat, JNU.lon, 0.0009)} // d=0.02 为视野范围，觉得太大/太小可调
              loading="lazy"
            />

            <div className="px-4 py-2 text-right">
              <a
                href={`https://www.openstreetmap.org/?mlat=${JNU.lat}&mlon=${JNU.lon}#map=${JNU.zoom}/${JNU.lat}/${JNU.lon}`}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-neutral-500 hover:underline"
              >
                {/*在 OpenStreetMap 中查看*/}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t border-neutral-200 dark:border-neutral-800">
      <Container>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="font-semibold text-neutral-900 dark:text-white">{LAB.nameCn}</div>
            <div className="text-sm text-neutral-500">© {new Date().getFullYear()} {LAB.short}. All rights reserved.</div>
          </div>
          <div className="text-sm text-neutral-500">Last updated: {LAB.lastUpdated}</div>
        </div>
      </Container>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <Header />
      <main>
        <Hero />
        <News />
        <Research />
        <People />
        <Publications />
        <Courses />
        <Resources />
        <Collaborations />
        <Openings />
        <Contact />
      </main>
      <Footer />

      <a
        href="#home"
        className="fixed bottom-6 right-6 inline-flex items-center justify-center h-11 w-11 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow hover:shadow-lg"
        aria-label="返回顶部"
        title="返回顶部"
      >
        ↑
      </a>
    </div>
  );
}
