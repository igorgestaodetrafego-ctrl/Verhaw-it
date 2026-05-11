import { useEffect, useState } from 'react';
import { 
  Shield, 
  Cpu, 
  Clock, 
  Users, 
  ArrowRight, 
  MessageCircle, 
  ChevronRight, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Award, 
  Zap,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const WHATSAPP_URL = "http://wa.me/+5517981781135";

const SectionTitle = ({ title, subtitle, light = true }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="mb-12">
    <p className={`text-sm font-semibold uppercase tracking-widest ${light ? 'text-cyan-400' : 'text-cyan-500'} mb-4`}>
      {subtitle}
    </p>
    <h2 className={`text-3xl md:text-5xl font-extrabold ${light ? 'text-white' : 'text-slate-100'}`}>
      {title}
    </h2>
  </div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
            <span className="text-slate-950 font-bold text-xl font-display">V</span>
          </div>
          <span className="font-display font-bold text-2xl tracking-tighter text-white">VERHAW<span className="text-cyan-400">IT</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#solucoes" className="hover:text-cyan-400 transition-colors">Soluções</a>
          <a href="#empresa" className="hover:text-cyan-400 transition-colors">A Empresa</a>
          <a href="#contato" className="hover:text-cyan-400 transition-colors">Contato</a>
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="no-referrer"
            className="bg-slate-800 text-white px-6 py-2.5 rounded-full hover:bg-slate-700 transition-all border border-slate-700/50"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </nav>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] -z-10" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full mb-8">
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Líder em Transformação Digital</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-[1] mb-8 text-white">
                Sua TI mais <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">estratégica</span> e segura.
              </h1>
              <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
                Especialistas em infraestrutura escalável, cibersegurança avançada e suporte especializado para empresas que não podem parar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={WHATSAPP_URL} 
                  target="_blank"
                  rel="no-referrer"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-xl shadow-cyan-500/20"
                >
                  Solicitar Consultoria Agora
                  <ArrowRight className="w-5 h-5" />
                </a>
                <button className="bg-slate-900 border border-slate-800 text-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors">
                  Conhecer Soluções
                </button>
              </div>
              
              <div className="mt-12 flex items-center gap-10 opacity-20 filter grayscale">
                <span className="font-display font-black text-2xl italic tracking-tighter">MICROSOFT</span>
                <span className="font-display font-black text-2xl italic tracking-tighter">AWS</span>
                <span className="font-display font-black text-2xl italic tracking-tighter">DELL</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-[4/3] bg-slate-900/50 rounded-3xl overflow-hidden relative border border-slate-800 shadow-2xl backdrop-blur-sm">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(6,182,212,0.1),transparent)]" />
                <div className="p-8 h-full flex flex-col justify-center gap-8">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: <Shield className="text-cyan-400" />, title: "Segurança", val: "Fortinet" },
                      { icon: <Zap className="text-blue-400" />, title: "Cloud", val: "AWS / Azure" },
                      { icon: <Users className="text-purple-400" />, title: "Suporte", val: "24x7" },
                      { icon: <Globe className="text-emerald-400" />, title: "Redes", val: "Cisco" },
                    ].map((item, i) => (
                      <div key={i} className="p-5 rounded-2xl bg-slate-950/50 border border-slate-800/50">
                        <div className="mb-3">{item.icon}</div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{item.title}</p>
                        <p className="text-lg font-bold text-white">{item.val}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating Stat Card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 bg-slate-900/90 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-slate-800 z-20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Uptime Garantido</p>
                    <p className="text-2xl font-bold text-white">99.9%</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar / Stats */}
      <section className="py-16 bg-slate-950 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Municípios Atendidos", val: "+800" },
              { label: "Parceiros Homologados", val: "+100" },
              { label: "Ativos Gerenciados", val: "+13k" },
              { label: "Prêmio Acirp", val: "2025" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">{stat.val}</p>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="solucoes" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            subtitle="Especialidades" 
            title="Soluções de TI sob medida para o seu negócio" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock />,
                title: "Suporte 24x7",
                desc: "Monitoramento e atendimento ininterrupto para que sua equipe foque no que realmente importa."
              },
              {
                icon: <Shield />,
                title: "Segurança de Dados",
                desc: "Firewalls de próxima geração e estratégias de backup resilientes contra ransomware."
              },
              {
                icon: <Cpu />,
                title: "DaaS (Desktop as a Service)",
                desc: "Equipamentos modernos por assinatura, reduzindo impostos e simplificando a gestão."
              },
              {
                icon: <Users />,
                title: "Consultoria Estratégica",
                desc: "Análise GAP e planejamento de longo prazo para eficiência operacional e redução de custos."
              },
              {
                icon: <Globe />,
                title: "Infraestrutura Híbrida",
                desc: "Integração perfeita entre servidores locais e as principais nuvens públicas (AWS/Azure)."
              },
              {
                icon: <CheckCircle2 />,
                title: "SLA de Próxima Geração",
                desc: "Tempos de resposta garantidos por contrato com total transparência em painéis de monitoramento."
              }
            ].map((service, i) => (
              <motion.div 
                whileHover={{ y: -10 }}
                key={i} 
                className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/30 hover:bg-slate-900/60 transition-all group"
              >
                <div className="w-14 h-14 bg-slate-950 border border-slate-800 rounded-2xl flex items-center justify-center text-cyan-400 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-8 text-sm">
                  {service.desc}
                </p>
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-widest">
                  Ver Detalhes <ChevronRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section / Conversion */}
      <section id="contato" className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-cyan-500/5 rounded-full blur-[200px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <SectionTitle 
                subtitle="Transformação" 
                title="Pronto para elevar o nível da sua tecnologia?" 
              />
              <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-lg">
                Fale com nossos consultores e receba uma análise GRATUITA da sua infraestrutura atual. Descubra onde sua empresa pode economizar e como ganhar performance.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-center gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-1">Central de Atendimento</p>
                    <p className="text-lg font-bold text-white">(17) 3512-6000</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-1">E-mail Comercial</p>
                    <p className="text-lg font-bold text-white">comercial@verhaw.com.br</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-900/80 backdrop-blur-2xl p-8 md:p-10 rounded-[2.5rem] border border-slate-800 shadow-2xl">
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-bold text-white mb-2">Análise Gratuita</h3>
                  <p className="text-slate-500 text-sm">Preencha os dados e entraremos em contato.</p>
                </div>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Nome</label>
                    <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 outline-none focus:border-cyan-500 text-slate-200 placeholder:text-slate-700 transition-all" placeholder="Nome completo" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">E-mail Corporativo</label>
                    <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 outline-none focus:border-cyan-500 text-slate-200 placeholder:text-slate-700 transition-all" placeholder="email@empresa.com.br" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Empresa</label>
                    <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 outline-none focus:border-cyan-500 text-slate-200 placeholder:text-slate-700 transition-all" placeholder="Nome da organização" />
                  </div>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-5 rounded-xl font-bold hover:scale-[1.02] transition-transform shadow-xl shadow-cyan-500/20 uppercase tracking-widest text-sm">
                    Solicitar Consultoria Agora
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="max-w-sm">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center">
                  <span className="text-slate-950 font-bold text-sm font-display">V</span>
                </div>
                <span className="font-display font-bold text-xl tracking-tighter text-white">VERHAW<span className="text-cyan-400">IT</span></span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Transformando tecnologia em vantagem competitiva. Infraestrutura, Segurança e Suporte com a excelência do prêmio Acirp 2025.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-24">
              <div>
                <h4 className="font-bold mb-6 uppercase text-[10px] tracking-[0.2em] text-slate-400">Navegação</h4>
                <ul className="space-y-3 text-sm">
                  <li><a href="#" className="text-slate-500 hover:text-cyan-400">Soluções</a></li>
                  <li><a href="#" className="text-slate-500 hover:text-cyan-400">Empresa</a></li>
                  <li><a href="#" className="text-slate-500 hover:text-cyan-400">Carreiras</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-6 uppercase text-[10px] tracking-[0.2em] text-slate-400">Suporte</h4>
                <ul className="space-y-3 text-sm">
                  <li><a href="#" className="text-slate-500 hover:text-cyan-400">Área do Cliente</a></li>
                  <li><a href="#" className="text-slate-500 hover:text-cyan-400">Status Page</a></li>
                  <li><a href="#" className="text-slate-500 hover:text-cyan-400">FAQ</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-900/50 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-600 text-xs">
              © 2026 Verhaw IT. Rua Pedro Pandin, 209 - São José do Rio Preto, SP.
            </p>
            <div className="flex gap-8 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
              <span className="flex items-center gap-2"><Award className="w-3 h-3" /> Prêmio Acirp 2025</span>
              <a href="#" className="hover:text-cyan-400">Termos</a>
              <a href="#" className="hover:text-cyan-400">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a 
        href={WHATSAPP_URL}
        target="_blank"
        rel="no-referrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-[60] bg-cyan-500 text-slate-950 p-4 rounded-2xl shadow-2xl shadow-cyan-500/20 flex items-center justify-center transition-all hover:bg-white"
      >
        <MessageCircle className="w-8 h-8" />
      </motion.a>
    </div>
  );
}
