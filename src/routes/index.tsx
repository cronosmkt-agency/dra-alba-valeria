import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Compass,
  Heart,
  Leaf,
  ShieldCheck,
  Smile,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  ChevronDown,
  Star,
  ArrowRight,
  Menu,
  X,
  Calendar,
  CheckCircle2,
  Stethoscope,
  Sparkles,
  Users,
  Sun,
  Activity,
  HeartHandshake
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: AlbaValeriaLandingPage,
});

export default function AlbaValeriaLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  // Simulator Form State
  const [patientName, setPatientName] = useState("");
  const [patientType, setPatientType] = useState("Para mim mesmo (Adulto)");
  const [consultReason, setConsultReason] = useState("Rinite, Sinusite ou Alergias Respiratórias");
  const [hasHomeoExperience, setHasHomeoExperience] = useState("Primeira vez com Homeopatia");
  const [preferredShift, setPreferredShift] = useState("Manhã");
  const [notes, setNotes] = useState("");

  const phone = "552127425940";
  const phoneDisplay = "(21) 2742-5940";
  const address = "New Fashion Shopping Center — R. Pref. Sebastião Teixeira, 20 - Sala 406, Várzea, Teresópolis - RJ";
  const hours = "Segunda a Sexta, das 09:00 às 18:00 (Com hora marcada)";

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, Dra. Alba Valéria! Vim pelo seu site oficial e gostaria de agendar uma consulta homeopática.

*Nome do Solicitante:* ${patientName || "Não informado"}
*Paciente:* ${patientType}
*Motivo Principal:* ${consultReason}
*Experiência Prévia:* ${hasHomeoExperience}
*Turno de Preferência:* ${preferredShift}
${notes ? `*Observações adicionais:* ${notes}` : ""}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const defaultWhatsAppLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Olá! Vim pelo site oficial da Dra. Alba Valéria e gostaria de informações sobre agendamento de consulta homeopática."
  )}`;

  const holisticPillars = [
    {
      title: "Anamnese & Consulta Homeopática Integral",
      tag: "Cuidado Individualizado",
      icon: Compass,
      desc: "Avaliação minuciosa que investiga não apenas o sintoma físico isolado, mas sua história de vida, constituição emocional, sono, estresse e rotina diária para encontrar o medicamento que equilibra o organismo por completo."
    },
    {
      title: "Tratamento de Alergias & Imunidade",
      tag: "Respiratório & Imunológico",
      icon: Leaf,
      desc: "Estímulo das defesas orgânicas para superar crises recorrentes de rinite alérgica, sinusite, bronquite e baixa imunidade típica do clima serrano, reduzindo o uso excessivo de corticoides e descongestionantes."
    },
    {
      title: "Manejo do Estresse, Ansiedade & Sono",
      tag: "Equilíbrio Emocional",
      icon: Sun,
      desc: "Terapêutica suave para desacelerar a mente, restabelecer a qualidade do sono reparador e harmonizar o sistema nervoso diante das pressões cotidianas, sem provocar dependência ou sonolência residual."
    },
    {
      title: "Homeopatia para Crianças & Bebês",
      tag: "Pediatria Suave",
      icon: Heart,
      desc: "Abordagem afetuosa para os pequenos: fortalecimento da imunidade na entrada escolar, controle de cólicas, alergias de pele e suporte respiratório com medicamentos suaves e bem aceitos pelas crianças."
    },
    {
      title: "Distúrbios Digestivos & Dores Crônicas",
      tag: "Saúde Gastrointestinal",
      icon: Activity,
      desc: "Acompanhamento integrativo para refluxo, gastrites de fundo nervoso, constipação intestinal, enxaquecas e dores articulares, atuando na causa raiz do desequilíbrio inflamatório."
    },
    {
      title: "Acompanhamento Familiar de Longo Prazo",
      tag: "+20 Anos de Vínculo",
      icon: HeartHandshake,
      desc: "O carinho e a segurança de um médico de família dedicado. Pacientes e gerações que encontram na Dra. Alba uma relação sólida de confiança, escuta atenta e zelo contínuo pela vida."
    }
  ];

  const homeopathyBenefits = [
    {
      title: "Trata a Causa, Não Apenas o Sintoma",
      desc: "Investigação aprofundada da raiz do desequilíbrio biológico e emocional, estimulando a capacidade de autorrecuperação do próprio corpo."
    },
    {
      title: "Sem Efeitos Colaterais Agressivos",
      desc: "Medicamentos dinamizados que não sobrecarregam o fígado, rins ou estômago, ideais para pacientes de todas as idades."
    },
    {
      title: "Consultas Humanizadas com Tempo",
      desc: "Escuta atenta e sem pressa. No consultório da Dra. Alba, você é acolhido como ser humano integral, nunca como um número."
    },
    {
      title: "Mais de 20 Anos de Relação e Confiança",
      desc: "Famílias inteiras em Teresópolis acompanhadas ao longo de décadas com zelo, simpatia e acompanhamento médico ininterrupto."
    }
  ];

  const testimonials = [
    {
      name: "Catia Chirley Moreira",
      tag: "Paciente há mais de 20 anos • Google Local Guide",
      stars: 5,
      content: "Dra. Alba Valéria nos acompanha a mais de duas décadas... É muito mais que uma médica, é uma verdadeira amiga, daquelas que todos deveriam ter na vida: CONFIÁVEL, COMPETENTE, CARINHOSA!"
    },
    {
      name: "Paty Rebello",
      tag: "Paciente Verificada • Google Local Guide",
      stars: 5,
      content: "Especializada em homeopatia, a Dra. Alba é a pessoa certa. Médica de excelência e qualidade de atendimento. Sempre disposta e de alta estima, a Dra. Alba lhe atende com a maior simpatia e carinho do mundo."
    },
    {
      name: "Mariana Rodrigues",
      tag: "Paciente de Família • Google Maps",
      stars: 5,
      content: "Maravilhosa, é minha médica e de toda a minha família. Um ser humano de luz e uma profissional extremamente capacitada, que te põe pra cima, mas que puxa a orelha com todo carinho quando necessário!"
    }
  ];

  const faqs = [
    {
      q: "O que é a Homeopatia e como ela funciona?",
      a: "A Homeopatia é uma especialidade médica reconhecida pelo Conselho Federal de Medicina (CFM) desde 1980. Ela se baseia no princípio da semelhança ('o semelhante cura o semelhante') e utiliza substâncias altamente dinamizadas que estimulam a resposta imune e a energia vital do próprio organismo a se reequilibrar naturalmente."
    },
    {
      q: "A Homeopatia substitui os remédios alopáticos que já tomo?",
      a: "Não é necessário suspender nenhum medicamento contínuo previamente prescrito pelo seu médico. A abordagem homeopática e integrativa atua de forma harmoniosa e complementar. Conforme seu organismo for recuperando o equilíbrio e a saúde, qualquer ajuste em outras medicações é avaliado com segurança médica."
    },
    {
      q: "Como é a primeira consulta com a Dra. Alba Valéria?",
      a: "A consulta é um momento de acolhimento e escuta profunda. A Dra. Alba conversa detalhadamente sobre suas queixas físicas, histórico de doenças na família, padrões de sono, sensibilidade a fatores climáticos (frio, calor), alimentação e aspectos emocionais, construindo um retrato holístico para a escolha precisa do medicamento."
    },
    {
      q: "Crianças e bebês podem fazer tratamento homeopático?",
      a: "Sim, e com excelentes resultados! Por serem preparados de forma suave e dinamizada, os medicamentos homeopáticos são extremamente seguros para recém-nascidos, crianças e gestantes, sem causar gastrite ou sobrecarga aos órgãos em desenvolvimento."
    },
    {
      q: "Onde fica localizado o consultório da Dra. Alba?",
      a: "O consultório está no New Fashion Shopping Center — R. Pref. Sebastião Teixeira, 20 - Sala 406, no coração da Várzea, em Teresópolis. O shopping possui localização central, elevadores e ambiente seguro e tranquilo."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-900 selection:bg-lime-100 selection:text-lime-900 pb-24 lg:pb-0">
      {/* 1. NAVBAR - HEADER LIMPA SEM ÍCONE */}
      <header className="sticky top-0 z-50 border-b border-lime-900/10 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          {/* Apenas o nome da profissional, sem ícone ao lado */}
          <a href="#" className="group flex flex-col justify-center">
            <span className="text-xl font-bold tracking-tight text-slate-900 transition group-hover:text-lime-800 sm:text-2xl">
              Dra. Alba Valéria
            </span>
            <span className="text-[11px] font-semibold tracking-wider text-lime-800 uppercase sm:text-xs">
              Homeopatia Clínica & Medicina Integrativa • New Fashion Shopping
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            <a href="#diferenciais" className="text-sm font-medium text-slate-600 transition hover:text-lime-800">
              Diferenciais
            </a>
            <a href="#sobre-homeopatia" className="text-sm font-medium text-slate-600 transition hover:text-lime-800">
              A Homeopatia
            </a>
            <a href="#especialidades" className="text-sm font-medium text-slate-600 transition hover:text-lime-800">
              Áreas de Cuidado
            </a>
            <a href="#consultorio" className="text-sm font-medium text-slate-600 transition hover:text-lime-800">
              O Consultório
            </a>
            <a href="#depoimentos" className="text-sm font-medium text-slate-600 transition hover:text-lime-800">
              Depoimentos
            </a>
            <a href="#triagem" className="text-sm font-medium text-slate-600 transition hover:text-lime-800">
              Agendamento
            </a>
            <a href="#faq" className="text-sm font-medium text-slate-600 transition hover:text-lime-800">
              Dúvidas
            </a>
          </nav>

          {/* Direct WhatsApp CTA Button */}
          <div className="hidden items-center gap-3 sm:flex">
            <a
              href={defaultWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#3F6212] px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-lime-900 active:scale-95"
            >
              <MessageCircle className="h-4 w-4 text-lime-300" />
              <span>Agendar Consulta</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-xl p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="border-b border-slate-200 bg-white px-4 pt-3 pb-6 lg:hidden">
            <div className="flex flex-col gap-3">
              <a
                href="#diferenciais"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-lime-50 hover:text-lime-800"
              >
                Diferenciais do Cuidado
              </a>
              <a
                href="#sobre-homeopatia"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-lime-50 hover:text-lime-800"
              >
                O Que É a Homeopatia
              </a>
              <a
                href="#especialidades"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-lime-50 hover:text-lime-800"
              >
                Áreas de Atuação Integrativa
              </a>
              <a
                href="#consultorio"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-lime-50 hover:text-lime-800"
              >
                Consultório (Sala 406)
              </a>
              <a
                href="#depoimentos"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-lime-50 hover:text-lime-800"
              >
                Depoimentos de 20 Anos
              </a>
              <a
                href="#triagem"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-lime-50 hover:text-lime-800"
              >
                Agendamento Pré-Filtrado
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-lime-50 hover:text-lime-800"
              >
                Perguntas Frequentes
              </a>
              <div className="mt-2 pt-2 border-t border-slate-100">
                <a
                  href={defaultWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#3F6212] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-lime-900"
                >
                  <MessageCircle className="h-4 w-4 text-lime-300" />
                  <span>Falar no WhatsApp: (21) 2742-5940</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION COM ACOLHIMENTO E SERENIDADE */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F7FEE7]/40 to-[#FAF8F5] pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Texto Principal */}
            <div className="lg:col-span-7">
              {/* Badge de Confiança Histórica */}
              <div className="inline-flex items-center gap-2 rounded-full border border-lime-300 bg-lime-50/90 px-3.5 py-1.5 text-xs font-semibold text-lime-950 shadow-sm">
                <div className="flex text-amber-500">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <Star className="h-3.5 w-3.5 fill-current" />
                </div>
                <span>Mais de 2 Décadas Cuidando de Famílias • 100% 5 Estrelas</span>
              </div>

              <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-tight">
                Uma medicina que olha para você por{" "}
                <span className="text-[#3F6212]">inteiro</span>: afeto, escuta e equilíbrio natural.
              </h1>

              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                Consultas acolhedoras e sem pressa no <strong>New Fashion Shopping Center (Sala 406)</strong>. A <strong>Dra. Alba Valéria</strong> alia a ciência da Homeopatia Clínica ao cuidado integrativo para tratar a causa dos sintomas, fortalecendo a imunidade, aliviando alergias respiratórias e restabelecendo a serenidade emocional de crianças, adultos e idosos.
              </p>

              {/* Botões de Ação */}
              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <a
                  href="#triagem"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#3F6212] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-lime-900 active:scale-95"
                >
                  <Calendar className="h-4 w-4 text-lime-300" />
                  <span>Agendar Consulta Homeopática</span>
                </a>
                <a
                  href={defaultWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 active:scale-95"
                >
                  <MessageCircle className="h-4 w-4 text-lime-700" />
                  <span>WhatsApp do Consultório: {phoneDisplay}</span>
                </a>
              </div>

              {/* Badges de Confiança */}
              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-slate-200/80 pt-6 sm:grid-cols-4">
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-lime-900">+20 Anos</span>
                  <span className="text-xs text-slate-600 font-medium">De Confiança Familiar</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-lime-900">5,0 ★</span>
                  <span className="text-xs text-slate-600 font-medium">Nota Máxima no Google</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-lime-900">Sala 406</span>
                  <span className="text-xs text-slate-600 font-medium">New Fashion Shopping</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-lime-900">Holístico</span>
                  <span className="text-xs text-slate-600 font-medium">Corpo, Mente e Emoções</span>
                </div>
              </div>
            </div>

            {/* Card Visual Destacado */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md rounded-3xl border border-lime-200/80 bg-white p-6 shadow-xl shadow-lime-900/5 sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-lg bg-lime-50 px-3 py-1 text-xs font-semibold text-lime-950">
                  <Compass className="h-3.5 w-3.5 text-lime-700" />
                  <span>Cuidado Médico Integrado</span>
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  O que torna o atendimento da Dra. Alba tão especial:
                </h3>

                <ul className="mt-5 space-y-4 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-lg bg-lime-100 p-1 text-lime-800">
                      <Clock className="h-4 w-4" />
                    </div>
                    <span><strong>Escuta Atenta e sem Relógio na Mesa:</strong> tempo para contar tudo o que sente, seus medos, rotina e histórico completo de saúde.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-lg bg-lime-100 p-1 text-lime-800">
                      <Leaf className="h-4 w-4" />
                    </div>
                    <span><strong>Tratamento Suave e Sem Agressões:</strong> medicamentos homeopáticos dinamizados que não agridem estômago, fígado ou rins.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-lg bg-lime-100 p-1 text-lime-800">
                      <HeartHandshake className="h-4 w-4" />
                    </div>
                    <span><strong>Vínculo Verdadeiro de Amizade:</strong> uma profissional humana que acolhe, apoia e acompanha gerações da mesma família.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-lg bg-lime-100 p-1 text-lime-800">
                      <Sun className="h-4 w-4" />
                    </div>
                    <span><strong>Harmonia Entre Mente e Corpo:</strong> atenção especial ao impacto do estresse, ansiedade e angústias no seu organismo.</span>
                  </li>
                </ul>

                <div className="mt-6 rounded-2xl bg-slate-50 p-4 border border-slate-200/80">
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    "Nos acompanha há mais de duas décadas... É muito mais que a médica, é uma verdadeira amiga: CONFIÁVEL, COMPETENTE, CARINHOSA!"
                  </p>
                  <p className="mt-2 text-right text-xs font-semibold text-lime-900">
                    — Catia Chirley Moreira & Paty Rebello (Google)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO SOBRE A HOMEOPATIA */}
      <section id="sobre-homeopatia" className="py-16 bg-white border-y border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-lime-800 uppercase">
              Saúde com Suavidade e Eficácia
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              O Que a Homeopatia Pode Fazer Por Você?
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              A Homeopatia estimula a imunidade inata do corpo para restaurar a saúde em seu sentido mais amplo.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homeopathyBenefits.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:border-lime-300 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-50 text-lime-800">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ÁREAS DE CUIDADO INTEGRAL */}
      <section id="especialidades" className="py-16 bg-[#FAF8F5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-lime-800 uppercase">
              Cuidado para Todas as Fases
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Tratamentos & Áreas de Atuação
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Soluções integrativas para queixas comuns e crônicas de crianças, jovens, adultos e idosos.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {holisticPillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:border-lime-300 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime-100 text-lime-800">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <span className="rounded-full bg-lime-50 px-2.5 py-1 text-[11px] font-semibold text-lime-900">
                        {pillar.tag}
                      </span>
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-slate-900">{pillar.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">{pillar.desc}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <a
                      href="#triagem"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-lime-800 hover:text-lime-900"
                    >
                      <span>Solicitar agendamento</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CONSULTÓRIO & LOCALIZAÇÃO (NEW FASHION SHOPPING - SALA 406) */}
      <section id="consultorio" className="py-16 bg-white border-y border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold tracking-widest text-lime-800 uppercase">
                Acolhimento no Coração da Várzea
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Consultório no New Fashion Shopping (Sala 406)
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                Localizado no <strong>New Fashion Shopping Center</strong>, em ponto nobre e de fácil acesso na Várzea. 
                Um refúgio de calma e privacidade para suas consultas médicas:
              </p>

              <div className="mt-6 space-y-3.5 text-sm text-slate-700">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-lime-100 p-1.5 text-lime-800">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span><strong>Endereço:</strong> R. Pref. Sebastião Teixeira, 20 - Sala 406 - Várzea, Teresópolis - RJ</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-lime-100 p-1.5 text-lime-800">
                    <Clock className="h-4 w-4" />
                  </div>
                  <span><strong>Atendimento:</strong> Segunda a Sexta, das 09:00 às 18:00 (Com hora marcada)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-lime-100 p-1.5 text-lime-800">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span><strong>Telefone Oficial:</strong> {phoneDisplay}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-lime-100 p-1.5 text-lime-800">
                    <Heart className="h-4 w-4" />
                  </div>
                  <span><strong>Ambiente Acolhedor:</strong> Espaço silencioso, iluminado e pensado para sua paz interior</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-xs font-semibold text-white shadow-sm transition hover:bg-slate-800"
                >
                  <MapPin className="h-4 w-4" />
                  <span>Ver Rotas no Google Maps</span>
                </a>
                <a
                  href={defaultWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-lime-300 bg-lime-50 px-5 py-3 text-xs font-semibold text-lime-950 transition hover:bg-lime-100"
                >
                  <MessageCircle className="h-4 w-4 text-lime-800" />
                  <span>WhatsApp do Consultório: (21) 2742-5940</span>
                </a>
              </div>
            </div>

            {/* Mapa Embutido Interativo */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-slate-200/80 shadow-md">
                <iframe
                  title="Localização Dra Alba Valeria - New Fashion Shopping"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.7788410214354!2d-42.97341992383561!3d-22.41857942154406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99b45781a7ee5f%3A0x8898165cf25dc8be!2sR.%20Pref.%20Sebasti%C3%A3o%20Teixeira%2C%2020%20-%20V%C3%A1rzea%2C%20Teres%C3%B3polis%20-%20RJ%2C%2025953-000!5e0!3m2!1spt-BR!2sbr!4v1715000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="380"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROVA SOCIAL: 2 DÉCADAS DE AFETO E NOTA 5.0 */}
      <section id="depoimentos" className="py-16 bg-[#FAF8F5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1 text-amber-500 mb-2">
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
            </div>
            <span className="block text-xs font-bold tracking-widest text-lime-800 uppercase">
              Relatos Espontâneos no Google Maps
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Gerações Cuidadas com Zelo e Amor
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              A certeza de ser atendido por uma médica que conhece sua família e cuida da sua saúde com dedicação incondicional.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm"
              >
                <div>
                  <div className="flex text-amber-400">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-slate-600 italic">
                    "{t.content}"
                  </p>
                </div>
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="text-sm font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-lime-800 font-medium">{t.tag}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-xl bg-lime-50 px-4 py-2 border border-lime-200/70 text-xs font-medium text-lime-950">
              <Sparkles className="h-4 w-4 text-lime-700" />
              <span>Destaque das avaliações: "Profissional maravilhosa, muito amorosa e humana. A melhor médica de Teresópolis!"</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SIMULADOR DE TRIAGEM & AGENDAMENTO PRÉ-FILTRADO */}
      <section id="triagem" className="py-16 bg-white border-t border-slate-200/80">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-lime-200/80 bg-gradient-to-b from-[#F7FEE7]/40 to-white p-6 shadow-lg sm:p-10">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold tracking-widest text-lime-800 uppercase">
                Agendamento Confortável & Direto
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Triagem para Consulta Homeopática
              </h2>
              <p className="mt-3 text-xs text-slate-600 sm:text-sm">
                Preencha as informações para encaminhar sua mensagem pré-formatada diretamente para o WhatsApp do consultório, facilitando a escolha do melhor horário.
              </p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="mt-8 space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="Ex: Catia Chirley"
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-lime-600 focus:outline-none focus:ring-1 focus:ring-lime-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Para Quem É a Consulta?
                  </label>
                  <select
                    value={patientType}
                    onChange={(e) => setPatientType(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-lime-600 focus:outline-none focus:ring-1 focus:ring-lime-600"
                  >
                    <option value="Para mim mesmo (Adulto)">Para mim mesmo (Adulto)</option>
                    <option value="Para meu filho / Criança">Para meu filho / Criança</option>
                    <option value="Para um idoso / Familiar">Para um idoso / Familiar</option>
                    <option value="Consulta Familiar Conjunta">Consulta Familiar Conjunta</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Principal Motivo do Contato
                  </label>
                  <select
                    value={consultReason}
                    onChange={(e) => setConsultReason(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-lime-600 focus:outline-none focus:ring-1 focus:ring-lime-600"
                  >
                    <option value="Rinite, Sinusite ou Alergias Respiratórias">Rinite, Sinusite ou Alergias Respiratórias</option>
                    <option value="Fortalecimento de Imunidade (Geral / Infantil)">Fortalecimento de Imunidade (Geral / Infantil)</option>
                    <option value="Estresse, Ansiedade ou Distúrbios do Sono">Estresse, Ansiedade ou Distúrbios do Sono</option>
                    <option value="Refluxo, Gastrite ou Problemas Digestivos">Refluxo, Gastrite ou Problemas Digestivos</option>
                    <option value="Enxaquecas e Dores Crônicas">Enxaquecas e Dores Crônicas</option>
                    <option value="Consulta Geral / Check-up Homeopático">Consulta Geral / Check-up Homeopático</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Já Fez Tratamento Homeopático?
                  </label>
                  <select
                    value={hasHomeoExperience}
                    onChange={(e) => setHasHomeoExperience(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-lime-600 focus:outline-none focus:ring-1 focus:ring-lime-600"
                  >
                    <option value="Primeira vez com Homeopatia">Primeira vez com Homeopatia</option>
                    <option value="Já me trato com Homeopatia há algum tempo">Já me trato com Homeopatia há algum tempo</option>
                    <option value="Já fui paciente da Dra. Alba anteriormente">Já fui paciente da Dra. Alba anteriormente</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Turno de Preferência
                </label>
                <div className="mt-2 flex gap-4">
                  {["Manhã", "Tarde", "Qualquer Horário"].map((shift) => (
                    <label
                      key={shift}
                      className={`flex flex-1 cursor-pointer items-center justify-center rounded-xl border py-2.5 text-xs font-medium transition ${
                        preferredShift === shift
                          ? "border-lime-700 bg-lime-50 text-lime-950 font-bold"
                          : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="preferredShift"
                        value={shift}
                        checked={preferredShift === shift}
                        onChange={() => setPreferredShift(shift)}
                        className="sr-only"
                      />
                      <span>{shift}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Conte um Pouco Sobre Seus Sintomas (Opcional)
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ex: Gostaria de tratar rinite alérgica constante ou melhorar a qualidade do sono sem remédios pesados."
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-lime-600 focus:outline-none focus:ring-1 focus:ring-lime-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#3F6212] py-4 text-sm font-bold text-white shadow-md transition hover:bg-lime-900 active:scale-95 flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5 text-lime-300" />
                <span>Enviar Solicitação para o WhatsApp: (21) 2742-5940</span>
              </button>

              <p className="text-center text-[11px] text-slate-500">
                Atendimento de segunda a sexta até às 18:00 com hora marcada.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* 8. FAQ ESCLARECEDOR */}
      <section id="faq" className="py-16 bg-[#FAF8F5] border-t border-slate-200/80">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-lime-800 uppercase">
              Tire Suas Dúvidas
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Perguntas Frequentes sobre Homeopatia
            </h2>
          </div>

          <div className="mt-10 space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = faqOpen === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden transition"
                >
                  <button
                    type="button"
                    onClick={() => setFaqOpen(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm font-bold text-slate-900 hover:text-lime-800"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-lime-700" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. RODAPÉ INSTITUCIONAL */}
      <footer className="border-t border-slate-200 bg-white py-12 text-slate-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <span className="text-base font-bold text-slate-900">
                Dra. Alba Valéria
              </span>
              <p className="mt-1 text-xs text-lime-800 font-semibold">
                Homeopatia Clínica & Medicina Integrativa
              </p>
              <p className="mt-3 text-xs leading-relaxed text-slate-500">
                Mais de duas décadas cuidando de gerações de famílias em Teresópolis. Uma medicina que olha para o ser humano por inteiro com afeto e rigor científico.
              </p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                O Consultório
              </span>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                New Fashion Shopping Center<br />
                R. Pref. Sebastião Teixeira, 20 - Sala 406<br />
                Várzea, Teresópolis - RJ, 25953-000
              </p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Atendimento & Contato
              </span>
              <p className="mt-2 text-xs text-slate-600">
                Telefone / WhatsApp: {phoneDisplay}<br />
                Segunda a Sexta, das 09:00 às 18:00<br />
                Atendimento com agendamento prévio
              </p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Informações Legais
              </span>
              <p className="mt-2 text-xs text-slate-600">
                CRM-RJ • Especialista em Homeopatia CFM<br />
                Consultas particulares com recibo médico para reembolso no plano de saúde.
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-400">
            <p>© {new Date().getFullYear()} Dra. Alba Valéria — Homeopatia Clínica e Medicina Integrativa. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* 10. BARRA FLUTUANTE FIXA MOBILE */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-lime-900/10 bg-white/95 p-3 shadow-lg backdrop-blur-md lg:hidden">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <span className="block text-xs font-bold text-slate-900">Dra. Alba Valéria</span>
            <span className="block text-[11px] text-lime-800 font-medium">Homeopatia & Medicina Integrativa</span>
          </div>
          <a
            href={defaultWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#3F6212] px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-lime-900 active:scale-95"
          >
            <MessageCircle className="h-4 w-4 text-lime-300" />
            <span>Agendar Consulta</span>
          </a>
        </div>
      </div>
    </div>
  );
}
