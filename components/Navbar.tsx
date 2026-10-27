"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { navigation } from "@/app/data";

export function Navbar() {
  const [active, setActive] = useState("projects");

  useEffect(() => {
    const sections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-22% 0px -62% 0px", threshold: [0, 0.1, 0.3] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="site-nav" aria-label="页面导航">
      <div className="nav-inner">
        <a className="nav-signature" href="#top" aria-label="返回页面顶部">
          <span>WZH</span>
          <i aria-hidden="true" />
        </a>
        <div className="nav-links" role="list">
          {navigation.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={active === item.id ? "active" : ""} aria-current={active === item.id ? "location" : undefined}>
              {item.label}
            </a>
          ))}
        </div>
        <a className="nav-resume" href="/resume/wu-zhongheng-resume-2027-ai.pdf" download>
          <Download size={16} aria-hidden="true" />
          <span>下载简历</span>
        </a>
      </div>
    </nav>
  );
}
