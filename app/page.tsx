"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Todos");
  const [activeSport, setActiveSport] = useState("Futebol");

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((r) => obs.observe(r));
    return () => obs.disconnect();
  }, []);

  const sports = [
    { icon: "⚽", name: "Futebol", count: "248 jogos" },
    { icon: "🏀", name: "Basquete", count: "84 jogos" },
    { icon: "🎾", name: "Tênis", count: "156 jogos" },
    { icon: "🏈", name: "NFL", count: "32 jogos" },
    { icon: "🥊", name: "MMA/UFC", count: "18 eventos" },
    { icon: "🏎️", name: "Fórmula 1", count: "12 eventos" },
    { icon: "🎮", name: "E-Sports", count: "64 jogos" },
    { icon: "🏐", name: "Vôlei", count: "42 jogos" },
  ];

  const games = [
    { icon: "🎰", bg: "g1", name: "Gates of Olympus", provider: "Pragmatic Play", hot: true },
    { icon: "🃏", bg: "g2", name: "Blackjack VIP", provider: "Evolution", hot: false },
    { icon: "🎲", bg: "g3", name: "Sweet Bonanza", provider: "Pragmatic Play", hot: true },
    { icon: "🚀", bg: "g4", name: "Aviator", provider: "Spribe", hot: false },
    { icon: "🎡", bg: "g5", name: "Roleta Brasileira", provider: "Evolution", hot: false },
    { icon: "💎", bg: "g6", name: "Big Bass Bonanza", provider: "Pragmatic Play", hot: false, isNew: true },
  ];

  const tabs = ["Todos", "Slots", "Ao Vivo", "Roleta", "Blackjack", "Crash"];

  return (
    <>
      {/* NAV */}
      <nav>
        <div className="logo">GIRO<span>BET</span></div>
        <ul className="nav-links">
          <li><a href="#">Esportes</a></li>
          <li><a href="#">Cassino</a></li>
          <li><a href="#">Ao Vivo</a></li>
          <li><a href="#">Promoções</a></li>
        </ul>
        <div className="nav-cta">
          <button className="btn-ghost">Entrar</button>
          <button className="btn-primary">Cadastrar</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-content">
          <div>
            <div className="hero-tag">
              <span className="pulse-dot" />
              Apostas ao vivo disponíveis
            </div>
            <h1>
              APOSTE<br />
              NOS <span className="accent">MELHORES</span><br />
              <span className="green">JOGOS</span>
            </h1>
            <p className="hero-sub">
              A maior plataforma de apostas esportivas do Brasil. Odds competitivas, pagamento rápido e suporte 24h.
            </p>
            <div className="hero-btns">
              <button className="btn-hero">Criar Conta Grátis</button>
              <button className="btn-hero-outline">Ver Jogos Ao Vivo</button>
            </div>
            <div className="hero-stats">
              <div>
                <div className="stat-num">500K+</div>
                <div className="stat-label">Usuários ativos</div>
              </div>
              <div>
                <div className="stat-num">R$2M+</div>
                <div className="stat-label">Pagos hoje</div>
              </div>
              <div>
                <div className="stat-num">1000+</div>
                <div className="stat-label">Eventos/dia</div>
              </div>
            </div>
          </div>
          <div>
            <div className="match-card">
              <div className="match-header">
                <span className="match-league">⚽ Brasileirão Série A</span>
                <span className="match-live">● AO VIVO</span>
              </div>
              <div className="match-teams">
                <div className="team">
                  <div className="team-badge">🔴</div>
                  <div className="team-name">Flamengo</div>
                </div>
                <div className="match-score">
                  <div className="score">2 : 1</div>
                  <div className="score-min">● 67&apos;</div>
                </div>
                <div className="team">
                  <div className="team-badge">🔵</div>
                  <div className="team-name">Grêmio</div>
                </div>
              </div>
              <div className="match-odds">
                <div className="odd-btn">
                  <span className="odd-label">1 — FLA</span>
                  <span className="odd-val">1.42</span>
                </div>
                <div className="odd-btn">
                  <span className="odd-label">Empate</span>
                  <span className="odd-val">4.20</span>
                </div>
                <div className="odd-btn">
                  <span className="odd-label">2 — GRE</span>
                  <span className="odd-val">5.80</span>
                </div>
              </div>
            </div>
            <div className="mini-card">
              <div className="mini-icon">💰</div>
              <div className="mini-text">
                <strong>Carlos S. ganhou R$ 4.280</strong>
                <span>Acumulador · Futebol · Há 3 minutos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPORTS */}
      <div className="section bg2">
        <div className="section-inner">
          <div className="section-header reveal">
            <div className="section-tag">Esportes</div>
            <h2 className="section-title">ESCOLHA SEU ESPORTE</h2>
            <p className="section-sub">Mais de 30 modalidades com as melhores odds do mercado</p>
          </div>
          <div className="sports-grid reveal">
            {sports.map((s) => (
              <div
                key={s.name}
                className={`sport-card${activeSport === s.name ? " active" : ""}`}
                onClick={() => setActiveSport(s.name)}
              >
                <span className="sport-icon">{s.icon}</span>
                <div className="sport-name">{s.name}</div>
                <div className="sport-count">{s.count}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="section">
        <div className="section-inner">
          <div className="section-header reveal">
            <div className="section-tag">Por que a GiroBet?</div>
            <h2 className="section-title">FEITO PARA QUEM APOSTA DE VERDADE</h2>
          </div>
          <div className="features-grid reveal">
            {[
              { ico: "⚡", title: "Saque em Minutos", text: "Retire seus ganhos via PIX em menos de 10 minutos, direto na sua conta bancária.", green: false },
              { ico: "📱", title: "App Exclusivo", text: "Aposte em qualquer lugar com nosso aplicativo otimizado para iOS e Android.", green: true },
              { ico: "🏆", title: "Melhores Odds", text: "Comparamos com as principais casas e garantimos odds superiores em futebol brasileiro.", green: false },
              { ico: "🔒", title: "100% Seguro", text: "Plataforma licenciada e regulamentada. Seus dados e dinheiro protegidos com criptografia.", green: true },
            ].map((f) => (
              <div key={f.title} className="feature-card">
                <div className={`feature-ico${f.green ? " green" : ""}`}>{f.ico}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BONUS */}
      <div className="section">
        <div className="bonus-banner reveal">
          <div className="bonus-glow" />
          <div>
            <div className="bonus-label">🎁 Bônus de boas-vindas</div>
            <div className="bonus-title">ATÉ <span className="amt">R$500</span><br />NO SEU<br />1º DEPÓSITO</div>
            <p className="bonus-sub">Deposite qualquer valor e ganhe até 100% de bônus para usar em apostas esportivas e cassino.</p>
            <p className="bonus-terms">*Sujeito a rollover 5x. Válido por 7 dias. T&C aplicáveis.</p>
          </div>
          <div>
            <button className="btn-bonus">Resgatar Bônus →</button>
            <p className="bonus-note">Sem código. Automático no cadastro.</p>
          </div>
        </div>
      </div>

      {/* GAMES */}
      <div className="section bg2">
        <div className="section-inner">
          <div className="section-header reveal">
            <div className="section-tag">Cassino</div>
            <h2 className="section-title">JOGOS EM DESTAQUE</h2>
            <p className="section-sub">Slots, roleta, blackjack e muito mais dos melhores provedores</p>
          </div>
          <div className="games-tabs reveal">
            {tabs.map((t) => (
              <button
                key={t}
                className={`tab${activeTab === t ? " active" : ""}`}
                onClick={() => setActiveTab(t)}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="games-grid reveal">
            {games.map((g) => (
              <div key={g.name} className="game-card">
                <div className={`game-bg ${g.bg}`}>{g.icon}</div>
                {(g.hot || g.isNew) && (
                  <div className="game-hot">{g.isNew ? "NEW" : "HOT"}</div>
                )}
                <div className="game-info">
                  <div className="game-name">{g.name}</div>
                  <div className="game-provider">{g.provider}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <div className="logo">GIRO<span>BET</span></div>
              <p>A plataforma de apostas mais confiável do Brasil. Licenciada, segura e com os melhores odds do mercado.</p>
            </div>
            <div className="footer-col">
              <h4>Esportes</h4>
              <a href="#">Futebol</a>
              <a href="#">Basquete</a>
              <a href="#">Tênis</a>
              <a href="#">E-Sports</a>
            </div>
            <div className="footer-col">
              <h4>Cassino</h4>
              <a href="#">Slots</a>
              <a href="#">Ao Vivo</a>
              <a href="#">Roleta</a>
              <a href="#">Crash</a>
            </div>
            <div className="footer-col">
              <h4>Suporte</h4>
              <a href="#">Central de Ajuda</a>
              <a href="#">Chat ao Vivo</a>
              <a href="#">Termos de Uso</a>
              <a href="#">Jogo Responsável</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 GiroBet. Todos os direitos reservados.</p>
            <div className="responsible">
              <div className="badge-18">+18</div>
              <span>Aposte com responsabilidade</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
