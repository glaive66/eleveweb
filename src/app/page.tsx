"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Code2, LayoutTemplate, MonitorSmartphone, Mail, Phone } from "lucide-react";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-black selection:text-white flex flex-col">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-bold text-2xl tracking-tighter">eleveweb.</div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-600">
            <Link href="#about" className="hover:text-black transition-colors">About</Link>
            <Link href="#services" className="hover:text-black transition-colors">Services</Link>
            <Link href="#portfolio" className="hover:text-black transition-colors">Portfolio</Link>
          </nav>
          <Link href="#contact" className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors">
            무료 상담하기
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="pt-40 pb-20 md:pt-52 md:pb-32 px-6">
          <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-6">
                당신의 비즈니스를 돋보이게 할<br />
                <span className="text-zinc-400">단 하나의 웹사이트</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-500 mb-10 max-w-2xl mx-auto">
                트렌디한 디자인과 최적화된 퍼포먼스로 브랜드의 가치를 높입니다.<br className="hidden md:block" />기획부터 개발까지 eleveweb과 함께하세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#contact" className="bg-black text-white px-8 py-4 rounded-full text-base font-medium hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
                  프로젝트 의뢰하기 <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#portfolio" className="bg-zinc-100 text-black px-8 py-4 rounded-full text-base font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center">
                  포트폴리오 보기
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-zinc-50 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">왜 eleveweb인가요?</h2>
              <p className="text-zinc-500">우리는 단순한 코딩을 넘어 비즈니스 성장을 위한 솔루션을 만듭니다.</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "프리미엄 디자인", desc: "시선을 사로잡는 모던하고 트렌디한 UI/UX 디자인을 제공합니다." },
                { title: "압도적인 퍼포먼스", desc: "최신 기술 스택을 활용하여 빠르고 최적화된 웹사이트를 구축합니다." },
                { title: "합리적인 프로세스", desc: "투명한 소통과 체계적인 기획으로 불필요한 비용과 시간을 줄입니다." }
              ].map((item, i) => (
                <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.2, duration: 0.6 }} className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100">
                  <CheckCircle2 className="w-10 h-10 text-black mb-6" />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-6 bg-black text-white">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeIn} className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">제공 서비스</h2>
              <p className="text-zinc-400">목적에 맞는 최적의 형태를 제안해 드립니다.</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: LayoutTemplate, title: "랜딩 페이지", desc: "하나의 페이지에서 강력한 설득력을 발휘하는 프로모션 및 이벤트 페이지 구축" },
                { icon: MonitorSmartphone, title: "기업용 웹사이트", desc: "브랜드의 신뢰도를 높이는 깔끔하고 전문적인 기업 홍보용 공식 홈페이지" },
                { icon: Code2, title: "커스텀 웹 서비스", desc: "복잡한 비즈니스 로직과 데이터 처리가 필요한 맞춤형 웹 애플리케이션 개발" }
              ].map((item, i) => (
                <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.2, duration: 0.6 }} className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <item.icon className="w-10 h-10 text-white mb-6" />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">포트폴리오</h2>
              <p className="text-zinc-500">eleveweb이 만들어온 성공적인 프로젝트 결과물입니다.</p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((item, i) => (
                <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1, duration: 0.6 }} className="group relative aspect-video bg-zinc-100 rounded-2xl overflow-hidden cursor-pointer border border-zinc-200">
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-400 font-medium bg-zinc-100">
                    Portfolio Image {item}
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-bold text-2xl mb-2">프로젝트 {item}</h3>
                      <p className="text-sm text-zinc-300">웹사이트 구축 및 디자인</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 bg-zinc-50 border-t border-zinc-100">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeIn} className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-zinc-100 text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">지금 바로 프로젝트를 시작해 보세요</h2>
              <p className="text-zinc-500 mb-10 text-lg">간단한 정보만 남겨주시면, 담당자가 빠르게 연락드리겠습니다.</p>
              
              <div className="flex flex-col md:flex-row justify-center gap-8 text-left max-w-2xl mx-auto">
                <a href="mailto:hello@eleveweb.com" className="flex items-center gap-4 bg-zinc-50 hover:bg-zinc-100 transition-colors p-6 rounded-2xl flex-1 border border-zinc-100 cursor-pointer">
                  <div className="bg-black text-white p-3 rounded-full flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500 font-medium mb-1">이메일 문의</div>
                    <div className="font-bold text-lg">hello@eleveweb.com</div>
                  </div>
                </a>
                <a href="tel:010-0000-0000" className="flex items-center gap-4 bg-zinc-50 hover:bg-zinc-100 transition-colors p-6 rounded-2xl flex-1 border border-zinc-100 cursor-pointer">
                  <div className="bg-black text-white p-3 rounded-full flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500 font-medium mb-1">전화 문의</div>
                    <div className="font-bold text-lg">010-0000-0000</div>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-bold text-2xl tracking-tighter">eleveweb.</div>
          <div className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} eleveweb. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-zinc-400">
            <Link href="#" className="hover:text-white transition-colors">이용약관</Link>
            <Link href="#" className="hover:text-white transition-colors">개인정보처리방침</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
