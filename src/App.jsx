import { useState, useEffect } from 'react'
import './App.css'

// Icons as components
const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
)

const ChartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
)

const RobotIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="10" rx="2"/>
    <circle cx="12" cy="5" r="2"/>
    <path d="M12 7v4"/>
    <line x1="8" y1="16" x2="8" y2="16"/>
    <line x1="16" y1="16" x2="16" y2="16"/>
  </svg>
)

const TargetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
)

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
)

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
)

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)

const ZapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)

const EyeOffIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
)

const SyncIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10"/>
    <polyline points="1 20 1 14 7 14"/>
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
  </svg>
)

const TrophyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
    <path d="M4 22h16"/>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
  </svg>
)

const RepeatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="17 1 21 5 17 9"/>
    <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
    <polyline points="7 23 3 19 7 15"/>
    <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
  </svg>
)

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
)

const LayersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
  </svg>
)

// Header Component
function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#" className="logo">
          <img src="/logo.png" alt="E-lances" className="logo-img" />
        </a>
        
        <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#diferenciais" onClick={() => setIsMobileMenuOpen(false)}>Diferenciais</a></li>
            <li><a href="#funcionalidades" onClick={() => setIsMobileMenuOpen(false)}>Funcionalidades</a></li>
            <li><a href="#vantagens" onClick={() => setIsMobileMenuOpen(false)}>Vantagens</a></li>
            <li><a href="#contato" onClick={() => setIsMobileMenuOpen(false)}>Contato</a></li>
          </ul>
        </nav>

        <a href="#contato" className="cta-button header-cta">
          Solicitar Demo
        </a>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  )
}

// Hero Component
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-grid"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge animate-fade-in">
            <ZapIcon />
            <span>Automação Inteligente para ComprasNet</span>
          </div>
          
          <h1 className="hero-title animate-fade-in-up">
            <span className="hero-title-accent">VENÇA LICITAÇÕES</span>
            <br />
            COM PRECISÃO
            <br />
            <span className="hero-title-highlight">CIRÚRGICA</span>
          </h1>
          
          <p className="hero-subtitle animate-fade-in-up delay-2">
            A disputa no ComprasNet não é apenas sobre o menor preço, é sobre <strong>estratégia e tempo</strong>. 
            Nosso robô foi desenvolvido para empresas que não querem perder contratos por milésimos de segundo 
            e nem sacrificar sua <strong>margem de lucro</strong> por erro humano.
          </p>
          
          <div className="hero-cta animate-fade-in-up delay-3">
            <a href="#contato" className="cta-button primary">
              <span>Começar Agora</span>
              <ArrowRightIcon />
            </a>
            <a href="#diferenciais" className="cta-button secondary">
              Conhecer Recursos
            </a>
          </div>
          
          <div className="hero-stats animate-fade-in-up delay-4">
            <div className="stat-item">
              <span className="stat-value">99.9%</span>
              <span className="stat-label">Precisão</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">&lt;10ms</span>
              <span className="stat-label">Tempo de Reação</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">24/7</span>
              <span className="stat-label">Monitoramento</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual animate-slide-in-right delay-2">
          <div className="dashboard-preview">
            <div className="dashboard-card main-card">
              <div className="card-header">
                <span className="card-title">Pregão #45678</span>
                <span className="status-badge active">Ao Vivo</span>
              </div>
              <div className="card-content">
                <div className="metric-row">
                  <span className="metric-label">Seu Lance Atual:</span>
                  <span className="metric-value">R$ 127.500,00</span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Melhor Lance:</span>
                  <span className="metric-value highlight">R$ 128.000,00</span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Sua Posição:</span>
                  <span className="metric-value success">1º Lugar</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '75%'}}></div>
                </div>
                <span className="progress-label">Stop-Loss: R$ 125.000,00</span>
              </div>
            </div>
            
            <div className="dashboard-card side-card timer-card">
              <div className="timer-icon">
                <ClockIcon />
              </div>
              <div className="timer-content">
                <span className="timer-label">Próximo Lance em</span>
                <span className="timer-value">00:08</span>
              </div>
              <div className="timer-status sniper">Modo Sniper Ativo</div>
            </div>
            
            <div className="dashboard-card side-card strategy-card">
              <div className="strategy-header">
                <span className="strategy-title">Estratégia Ativa</span>
              </div>
              <div className="strategy-item active">
                <CheckIcon />
                <span>Blindagem de Margem</span>
              </div>
              <div className="strategy-item active">
                <CheckIcon />
                <span>Lance Automático</span>
              </div>
              <div className="strategy-item">
                <CheckIcon />
                <span>Modo Stealth</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Role para explorar</span>
      </div>
    </section>
  )
}

// Features Section
function Features() {
  const features = [
    {
      icon: <ShieldIcon />,
      title: "Blindagem de Margem",
      subtitle: "Stop-Loss Inteligente",
      description: "Você define o seu limite. O sistema é programado para nunca ultrapassar o seu valor mínimo, garantindo que todo contrato ganho seja, acima de tudo, lucrativo."
    },
    {
      icon: <ClockIcon />,
      title: "Sniper de Último Segundo",
      subtitle: "Timing Perfeito",
      description: "A tecnologia de lances nos momentos finais (1 min, 30s ou 10s) evita a 'queima de preço' antecipada e garante que você dê o lance decisivo no momento em que a concorrência não tem tempo de reação."
    },
    {
      icon: <ChartIcon />,
      title: "Intervalo Dinâmico",
      subtitle: "Inteligência Adaptativa",
      description: "O robô lê automaticamente o intervalo mínimo do ComprasNet, mas permite que você configure saltos maiores para desestabilizar os concorrentes e acelerar a descida do preço."
    },
    {
      icon: <RobotIcon />,
      title: "Autonomia Total ou Agressiva",
      subtitle: "Controle Estratégico",
      description: "Escolha entre 'cozinhar' a disputa para entrar apenas no fim ou marcar presença desde o início para intimidar outros licitantes."
    }
  ]

  return (
    <section id="diferenciais" className="features-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Diferenciais Estratégicos</span>
          <h2 className="section-title">
            The <span className="highlight">Edge</span> que você precisa
          </h2>
          <p className="section-subtitle">
            Recursos exclusivos desenvolvidos para maximizar suas chances de vitória
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <div className="feature-content">
                <span className="feature-subtitle">{feature.subtitle}</span>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
              <div className="feature-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Functionalities Table Section
function Functionalities() {
  const functionalities = [
    {
      icon: <SyncIcon />,
      title: "Sincronização ComprasNet",
      description: "Puxa regras e intervalos direto da fonte, sem erros manuais."
    },
    {
      icon: <TrophyIcon />,
      title: "Melhor Posição Possível",
      description: "O robô não briga apenas pelo 1º lugar; ele busca a melhor colocação dentro do seu limite de preço."
    },
    {
      icon: <RepeatIcon />,
      title: "Lance sobre Lance",
      description: "Estratégia avançada de auto-cobertura nos segundos finais para garantir a liderança absoluta."
    },
    {
      icon: <EyeOffIcon />,
      title: "Modo Stealth (Furtivo)",
      description: "Monitora a disputa em silêncio e ataca apenas no fechamento do cronômetro."
    }
  ]

  return (
    <section id="funcionalidades" className="functionalities-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Funcionalidades</span>
          <h2 className="section-title">
            Tudo que você precisa para <span className="highlight">vencer</span>
          </h2>
        </div>
        
        <div className="func-grid">
          {functionalities.map((func, index) => (
            <div key={index} className="func-card">
              <div className="func-icon">
                {func.icon}
              </div>
              <div className="func-content">
                <h3 className="func-title">{func.title}</h3>
                <p className="func-description">{func.description}</p>
              </div>
              <div className="func-arrow">
                <ArrowRightIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Why Automate Section
function WhyAutomate() {
  const benefits = [
    {
      icon: <UsersIcon />,
      title: "Elimine o Fator Humano",
      description: "Sem nervosismo, sem erros de digitação e sem atrasos de conexão manual."
    },
    {
      icon: <LayersIcon />,
      title: "Escalabilidade",
      description: "Dispute vários itens e pregões simultaneamente com a mesma precisão."
    },
    {
      icon: <LockIcon />,
      title: "Segurança e Compliance",
      description: "Desenvolvido com foco em estabilidade e segurança para operar dentro das normas do portal gov.br."
    }
  ]

  return (
    <section id="vantagens" className="why-section">
      <div className="container">
        <div className="why-content">
          <div className="why-text">
            <span className="section-badge">Por que automatizar?</span>
            <h2 className="section-title">
              Sua operação no <span className="highlight">próximo nível</span>
            </h2>
            
            <div className="quote-box">
              <p className="quote-text">
                "Quem chega primeiro bebe água limpa, mas quem dá o <strong>último lance</strong> leva o contrato."
              </p>
            </div>
            
            <div className="benefits-list">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <div className="benefit-icon">
                    {benefit.icon}
                  </div>
                  <div className="benefit-content">
                    <h4 className="benefit-title">{benefit.title}</h4>
                    <p className="benefit-description">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="why-visual">
            <div className="visual-card">
              <div className="visual-header">
                <span className="visual-title">Resultado Real</span>
                <span className="visual-badge">Case de Sucesso</span>
              </div>
              <div className="visual-metrics">
                <div className="visual-metric">
                  <span className="vm-value up">+340%</span>
                  <span className="vm-label">Taxa de Vitória</span>
                </div>
                <div className="visual-metric">
                  <span className="vm-value up">+18.5%</span>
                  <span className="vm-label">Margem Preservada</span>
                </div>
                <div className="visual-metric">
                  <span className="vm-value down">-95%</span>
                  <span className="vm-label">Erros Humanos</span>
                </div>
              </div>
              <div className="visual-chart">
                <div className="chart-bar" style={{height: '30%'}}><span>Antes</span></div>
                <div className="chart-bar highlight" style={{height: '85%'}}><span>Depois</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Next Steps / CTA Section
function NextSteps() {
  const steps = [
    {
      number: "01",
      title: "Validação em Operação Real",
      description: "Teste controlado para garantir performance no seu ambiente."
    },
    {
      number: "02",
      title: "Customização de Estratégia",
      description: "Ajuste fino dos tempos e intervalos para o seu nicho de atuação."
    },
    {
      number: "03",
      title: "Escalonamento",
      description: "Expansão para múltiplos pregões simultâneos com suporte dedicado."
    }
  ]

  return (
    <section id="contato" className="cta-section">
      <div className="container">
        <div className="cta-content">
          <span className="section-badge light">Próximos Passos</span>
          <h2 className="cta-title">
            Pronto para <span className="highlight">dominar</span> as licitações?
          </h2>
          <p className="cta-subtitle">
            Nossa implementação é dividida em etapas para garantir o máximo resultado
          </p>
          
          <div className="steps-timeline">
            {steps.map((step, index) => (
              <div key={index} className="step-item">
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h4 className="step-title">{step.title}</h4>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cta-actions">
            <a href="mailto:contato@e-lances.com.br" className="cta-button primary large">
              <span>Solicitar Demonstração</span>
              <ArrowRightIcon />
            </a>
            <p className="cta-note">Implementação rápida • Suporte especializado • ROI garantido</p>
          </div>
        </div>
      </div>
      
      <div className="cta-decoration">
        <div className="decoration-circle"></div>
        <div className="decoration-circle small"></div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img src="/logo.png" alt="E-lances" className="logo-img" />
            </a>
            <p className="footer-tagline">
              Automação inteligente para licitações no ComprasNet
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Navegação</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#diferenciais">Diferenciais</a></li>
                <li><a href="#funcionalidades">Funcionalidades</a></li>
                <li><a href="#vantagens">Vantagens</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Contato</h4>
              <ul>
                <li><a href="mailto:contato@e-lances.com.br">contato@e-lances.com.br</a></li>
                <li><a href="tel:+5511999999999">(11) 99999-9999</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 E-lances. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

// Main App
function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Features />
        <Functionalities />
        <WhyAutomate />
        <NextSteps />
      </main>
      <Footer />
    </div>
  )
}

export default App
