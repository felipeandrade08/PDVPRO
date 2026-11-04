"use client";

import {
  Activity, ArrowDownRight, ArrowUpRight, Bell, Box, CalendarDays,
  ChevronDown, CircleDollarSign, ClipboardList, CreditCard, LayoutDashboard,
  LogOut, Menu, Package, Plus, Search, Settings, ShoppingBag, ShoppingCart,
  Sparkles, TrendingUp, Users, Wallet, X,
} from "lucide-react";
import { useState } from "react";

const navigation = [
  { label: "Visão geral", icon: LayoutDashboard, active: true },
  { label: "Frente de caixa", icon: ShoppingCart },
  { label: "Vendas", icon: ClipboardList },
  { label: "Produtos", icon: Package },
  { label: "Estoque", icon: Box },
  { label: "Clientes", icon: Users },
  { label: "Financeiro", icon: Wallet },
];

const transactions = [
  { id: "#VD-0248", customer: "Mariana Costa", time: "14:32", method: "Pix", amount: "R$ 289,90", status: "Concluída", initials: "MC", tone: "violet" },
  { id: "#VD-0247", customer: "Lucas Ferreira", time: "14:18", method: "Cartão de crédito", amount: "R$ 159,00", status: "Concluída", initials: "LF", tone: "blue" },
  { id: "#VD-0246", customer: "Ana Oliveira", time: "13:56", method: "Dinheiro", amount: "R$ 78,50", status: "Concluída", initials: "AO", tone: "orange" },
  { id: "#VD-0245", customer: "Pedro Santos", time: "13:41", method: "Pix", amount: "R$ 420,00", status: "Concluída", initials: "PS", tone: "green" },
];

const chart = [32, 46, 39, 58, 47, 68, 52, 74, 62, 83, 69, 92, 76, 64, 86, 72, 96, 78, 88, 68, 82, 59, 73, 91];

function MetricCard({ title, value, change, icon: Icon, positive = true }: {
  title: string; value: string; change: string; icon: typeof ShoppingBag; positive?: boolean;
}) {
  return (
    <article className="metric-card">
      <div className="metric-top"><span>{title}</span><span className="metric-icon"><Icon size={18} /></span></div>
      <div className="metric-value">{value}</div>
      <div className="metric-foot"><span className={positive ? "trend positive" : "trend negative"}>{positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}{change}</span><span>vs. mês anterior</span></div>
    </article>
  );
}

export default function DashboardPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [period, setPeriod] = useState("Últimos 7 dias");
  const [activeNav, setActiveNav] = useState("Visão geral");

  return (
    <main className="app-shell">
      {menuOpen && <button className="mobile-backdrop" aria-label="Fechar menu" onClick={() => setMenuOpen(false)} />}
      <aside className={`sidebar ${menuOpen ? "sidebar-open" : ""}`}>
        <div className="brand"><div className="brand-mark"><ShoppingCart size={21} strokeWidth={2.5} /></div><span>PDV<span className="brand-accent">PRO</span></span><button className="close-menu" onClick={() => setMenuOpen(false)} aria-label="Fechar menu"><X size={19} /></button></div>
        <div className="store-switch"><div className="store-avatar">L</div><div className="store-copy"><strong>Loja principal</strong><span>Plano profissional</span></div><ChevronDown size={15} /></div>
        <div className="nav-label">MENU PRINCIPAL</div>
        <nav className="navigation">{navigation.map((item) => <button key={item.label} className={`nav-item ${activeNav === item.label ? "nav-active" : ""}`} onClick={() => { setActiveNav(item.label); setMenuOpen(false); }}><item.icon size={18} /><span>{item.label}</span>{item.label === "Frente de caixa" && <span className="nav-live" />}</button>)}</nav>
        <div className="nav-label tools-label">PREFERÊNCIAS</div>
        <button className={`nav-item ${activeNav === "Configurações" ? "nav-active" : ""}`} onClick={() => setActiveNav("Configurações")}><Settings size={18} /><span>Configurações</span></button>
        <div className="sidebar-bottom"><div className="help-card"><div className="help-icon"><Sparkles size={17} /></div><strong>Precisa de ajuda?</strong><p>Acesse nossa central de suporte.</p><button onClick={() => alert("Central de suporte em breve.")}>Acessar suporte <span>→</span></button></div><div className="profile"><div className="profile-avatar">FA</div><div className="profile-copy"><strong>Felipe Andrade</strong><span>Administrador</span></div><button aria-label="Sair"><LogOut size={17} /></button></div></div>
      </aside>

      <section className="main-area">
        <header className="topbar"><div className="topbar-left"><button className="mobile-menu" onClick={() => setMenuOpen(true)} aria-label="Abrir menu"><Menu size={21} /></button><div className="breadcrumb">Painel <span>/</span> <strong>{activeNav}</strong></div></div><div className="topbar-actions"><div className="search-box"><Search size={17} /><input placeholder="Buscar..." aria-label="Buscar" /><kbd>⌘ K</kbd></div><button className="icon-button notification-button" aria-label="Notificações"><Bell size={18} /><i /></button><div className="topbar-divider" /><div className="user-mini"><div className="profile-avatar">FA</div><ChevronDown size={15} /></div></div></header>

        <div className="page-content">
          <div className="welcome-row"><div><div className="eyebrow"><span className="status-dot" /> TERÇA-FEIRA, 03 DE NOVEMBRO</div><h1>Visão geral</h1><p>Acompanhe o desempenho da sua loja em tempo real.</p></div><button className="primary-button" onClick={() => setActiveNav("Frente de caixa")}><Plus size={17} /> Nova venda</button></div>

          <div className="metrics-grid"><MetricCard title="Vendas hoje" value="R$ 4.285,90" change="+12,8%" icon={CircleDollarSign} /><MetricCard title="Pedidos realizados" value="48" change="+8,2%" icon={ShoppingBag} /><MetricCard title="Ticket médio" value="R$ 89,29" change="+4,6%" icon={CreditCard} /><MetricCard title="Clientes atendidos" value="36" change="-2,4%" icon={Users} positive={false} /></div>

          <div className="content-grid"><section className="panel sales-panel"><div className="panel-heading"><div><h2>Visão de vendas</h2><p>Resumo do desempenho comercial</p></div><label className="period-select"><CalendarDays size={15} /><select value={period} onChange={(event) => setPeriod(event.target.value)}><option>Últimos 7 dias</option><option>Últimos 30 dias</option><option>Este ano</option></select><ChevronDown size={14} /></label></div><div className="sales-summary"><div><span>Faturamento no período</span><strong>R$ 28.490,50</strong></div><span className="summary-growth"><TrendingUp size={15} /> 18,6%</span></div><div className="chart-wrap"><div className="chart-y"><span>R$ 8 mil</span><span>R$ 6 mil</span><span>R$ 4 mil</span><span>R$ 2 mil</span><span>R$ 0</span></div><div className="chart-main"><div className="chart-gridlines"><i /><i /><i /><i /><i /></div><div className="bar-chart">{chart.map((height, index) => <div key={index} className={`chart-bar ${index === 16 ? "chart-bar-highlight" : ""}`} style={{ height: `${height}%` }} title={`Dia ${index + 1}`} />)}</div><div className="chart-x"><span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sáb</span><span>Dom</span></div></div></div></section>

          <section className="panel quick-panel"><div className="panel-heading"><div><h2>Ações rápidas</h2><p>Atalhos para sua rotina</p></div><span className="sparkle-badge"><Sparkles size={15} /></span></div><div className="quick-actions"><button onClick={() => setActiveNav("Frente de caixa")}><span className="quick-icon cyan"><ShoppingCart size={19} /></span><span><strong>Nova venda</strong><small>Abrir frente de caixa</small></span><span className="quick-arrow">→</span></button><button onClick={() => setActiveNav("Produtos")}><span className="quick-icon purple"><Package size={19} /></span><span><strong>Cadastrar produto</strong><small>Adicionar ao catálogo</small></span><span className="quick-arrow">→</span></button><button onClick={() => setActiveNav("Clientes")}><span className="quick-icon orange"><Users size={19} /></span><span><strong>Novo cliente</strong><small>Adicionar cadastro</small></span><span className="quick-arrow">→</span></button><button onClick={() => setActiveNav("Estoque")}><span className="quick-icon green"><Box size={19} /></span><span><strong>Movimentar estoque</strong><small>Entrada ou saída</small></span><span className="quick-arrow">→</span></button></div></section></div>

          <section className="panel transactions-panel"><div className="panel-heading"><div><h2>Vendas recentes</h2><p>Últimas movimentações da sua loja</p></div><button className="text-button" onClick={() => setActiveNav("Vendas")}>Ver todas <span>→</span></button></div><div className="table-scroll"><table><thead><tr><th>VENDA</th><th>CLIENTE</th><th>HORÁRIO</th><th>PAGAMENTO</th><th>VALOR</th><th>STATUS</th></tr></thead><tbody>{transactions.map((item) => <tr key={item.id}><td className="transaction-id">{item.id}</td><td><div className="customer-cell"><span className={`customer-avatar ${item.tone}`}>{item.initials}</span>{item.customer}</div></td><td className="muted-cell">{item.time}</td><td className="muted-cell">{item.method}</td><td className="amount-cell">{item.amount}</td><td><span className="completed-pill"><i />{item.status}</span></td></tr>)}</tbody></table></div></section>
          <footer className="page-footer"><span>© 2026 PDVPRO. Todos os direitos reservados.</span><span><Activity size={13} /> Sistema operacional <i /></span></footer>
        </div>
      </section>
    </main>
  );
}
