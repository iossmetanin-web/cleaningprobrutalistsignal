"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  CheckCircle2,
  Star,
  ChevronRight,
  Menu,
  X,
  Sparkles,
  Zap,
  Heart,
  Calendar,
  Activity,
  RefreshCw,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// ============ NAVBAR ============
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#E8E4DD]/80 backdrop-blur-xl border border-[#D1CEC7] text-[#111111]"
          : "bg-transparent text-white"
      } rounded-full px-2 py-2 shadow-lg`}
    >
      <div className="flex items-center gap-2 md:gap-6">
        {/* Logo */}
        <a
          href="#"
          className={`font-bold text-lg md:text-xl tracking-tight px-4 ${
            isScrolled ? "text-[#111111]" : "text-white"
          }`}
        >
          Cleaning<span className="text-[#E63B2E]">PRO</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {["Услуги", "О нас", "Отзывы", "Контакты"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all lift-hover ${
                isScrolled
                  ? "text-[#111111] hover:bg-[#111111]/10"
                  : "text-white/90 hover:bg-white/10"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#запись"
          className="hidden md:flex items-center gap-2 bg-[#E63B2E] text-white px-5 py-2.5 rounded-full font-semibold text-sm btn-magnetic"
        >
          Рассчитать стоимость
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 rounded-full ${
            isScrolled ? "text-[#111111]" : "text-white"
          }`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-[#E8E4DD] rounded-3xl p-4 shadow-xl border border-[#D1CEC7]">
          {["Услуги", "О нас", "Отзывы", "Контакты"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="block px-4 py-3 text-[#111111] font-medium rounded-2xl hover:bg-[#111111]/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#запись"
            className="block mt-2 bg-[#E63B2E] text-white text-center px-4 py-3 rounded-2xl font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Рассчитать стоимость
          </a>
        </div>
      )}
    </nav>
  );
}

// ============ HERO ============
function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current?.children || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.3,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100dvh] flex items-end pb-20 md:pb-32 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-transparent" />

      {/* Content */}
      <div ref={contentRef} className="relative z-10 px-6 md:px-12 lg:px-20 max-w-5xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 bg-[#E63B2E] rounded-full animate-pulse-dot" />
          <span className="text-white/80 text-sm font-medium">
            Москва и область
          </span>
        </div>

        {/* Hero Text */}
        <h1 className="mb-6">
          <span className="block text-white text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2">
            Уборка без контроля:
          </span>
          <span className="block font-drama text-[#E63B2E] text-4xl md:text-6xl lg:text-8xl leading-tight">
            принимайте результат.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
          Фиксируем цену до выезда клинера. Если на месте сумма изменится хотя
          бы на рубль — уберем квартиру за наш счет.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#запись"
            className="inline-flex items-center justify-center gap-2 bg-[#E63B2E] text-white px-8 py-4 rounded-2xl font-bold text-lg btn-magnetic"
          >
            Рассчитать стоимость
            <ChevronRight size={20} />
          </a>
          <a
            href="tel:+74951234567"
            className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-semibold text-lg border border-white/20 lift-hover"
          >
            <Phone size={20} />
            +7 (495) 123-45-67
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs tracking-widest uppercase">Прокрутите</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

// ============ INTERACTIVE FEATURES ============
function InteractiveFeatures() {
  const featuresRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".interactive-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
          },
        }
      );
    }, featuresRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={featuresRef}
      id="о-нас"
      className="py-24 md:py-32 bg-[#F5F3EE] px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#E63B2E] font-mono text-sm tracking-widest uppercase mb-4">
            Доверие = Факты
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111111] mb-6">
            Цифры, которые говорят сами за себя
          </h2>
        </div>

        {/* Interactive Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 - Diagnostic Shuffler */}
          <DiagnosticShuffler />

          {/* Card 2 - Telemetry Typewriter */}
          <TelemetryTypewriter />

          {/* Card 3 - Scheduler */}
          <CursorScheduler />
        </div>
      </div>
    </section>
  );
}

// Card 1 - Diagnostic Shuffler
function DiagnosticShuffler() {
  const [items, setItems] = useState([
    { label: "Дезинфекция ручек", status: "done" },
    { label: "Очистка радиаторов", status: "progress" },
    { label: "Мытьё вытяжки", status: "pending" },
  ]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => {
        const newArr = [...prev];
        const last = newArr.pop();
        if (last) newArr.unshift(last);
        return newArr;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { y: -20, opacity: 0.5 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" }
      );
    }
  }, [items]);

  return (
    <div className="interactive-card bg-[#E8E4DD] rounded-[2rem] p-8 border border-[#D1CEC7] shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-[#E63B2E] rounded-xl flex items-center justify-center">
          <RefreshCw className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#111111]">Чек-лист</h3>
          <p className="text-[#525252] text-sm">80 пунктов контроля</p>
        </div>
      </div>

      {/* Stacking Cards */}
      <div ref={containerRef} className="relative h-36 mb-6">
        {items.map((item, index) => (
          <div
            key={item.label}
            className="absolute left-0 right-0 bg-white rounded-xl p-4 border border-[#D1CEC7] transition-all duration-500"
            style={{
              top: index * 8,
              zIndex: 3 - index,
              opacity: 1 - index * 0.2,
              transform: `scale(${1 - index * 0.03})`,
            }}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-[#111111]">{item.label}</span>
              {item.status === "done" && (
                <CheckCircle2 className="w-5 h-5 text-green-500" />
              )}
              {item.status === "progress" && (
                <div className="w-5 h-5 border-2 border-[#E63B2E] border-t-transparent rounded-full animate-spin" />
              )}
              {item.status === "pending" && (
                <div className="w-5 h-5 border-2 border-[#D1CEC7] rounded-full" />
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="text-[#525252] text-sm leading-relaxed">
        Клинер отмечает каждый этап: от дезинфекции дверных ручек до удаления пыли с верхних петель дверей.
      </p>
    </div>
  );
}

// Card 2 - Telemetry Typewriter
function TelemetryTypewriter() {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const messages = [
    "Страховое покрытие: 5 000 000 ₽",
    "Проверка персонала: ✓ Пройдена",
    "Обучение: 120 часов",
    "Рейтинг клинера: 4.9/5.0",
    "NDA подписан: ✓",
  ];
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const fullText = messages[messageIndex];
    
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentText("");
        setCurrentIndex(0);
        setMessageIndex((prev) => (prev + 1) % messages.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, messageIndex, messages]);

  return (
    <div className="interactive-card bg-[#E8E4DD] rounded-[2rem] p-8 border border-[#D1CEC7] shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-[#111111] rounded-xl flex items-center justify-center">
          <Activity className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#111111]">Live Feed</h3>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-dot" />
            <span className="text-[#525252] text-sm">Активно</span>
          </div>
        </div>
      </div>

      {/* Telemetry Display */}
      <div className="bg-[#111111] rounded-xl p-4 font-mono text-sm mb-6 min-h-[100px]">
        <div className="text-[#E63B2E] mb-2">{'>'} СИСТЕМА БЕЗОПАСНОСТИ</div>
        <div className="text-white">
          {currentText}
          <span className="animate-blink text-[#E63B2E]">▋</span>
        </div>
      </div>

      <p className="text-[#525252] text-sm leading-relaxed">
        Сумма страхового покрытия любого ущерба. Мы юридически отвечаем за сохранность вашего имущества.
      </p>
    </div>
  );
}

// Card 3 - Cursor Scheduler
function CursorScheduler() {
  const [activeDay, setActiveDay] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 10, y: 10 });
  const [phase, setPhase] = useState(0);
  const days = ["С", "П", "В", "С", "Ч", "П", "Ш", "В"];

  useEffect(() => {
    const phases = [
      { pos: { x: 10, y: 50 }, delay: 0 },
      { pos: { x: 60, y: 50 }, delay: 1000, active: 2 },
      { pos: { x: 180, y: 100 }, delay: 2500, save: true },
      { pos: { x: 10, y: 50 }, delay: 4000, reset: true },
    ];

    const timers: NodeJS.Timeout[] = [];

    phases.forEach((p, i) => {
      const timer = setTimeout(() => {
        setCursorPos(p.pos);
        if (p.active !== undefined) {
          setActiveDay(p.active);
        }
        if (p.reset) {
          setActiveDay(null);
          setPhase(0);
        } else {
          setPhase(i);
        }
      }, p.delay);
      timers.push(timer);
    });

    return () => timers.forEach(clearTimeout);
  }, [phase]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase(0);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="interactive-card bg-[#E8E4DD] rounded-[2rem] p-8 border border-[#D1CEC7] shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-[#E63B2E] rounded-xl flex items-center justify-center">
          <Calendar className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#111111]">Расписание</h3>
          <p className="text-[#525252] text-sm">94% возвращаются</p>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="relative bg-white rounded-xl p-4 mb-6 min-h-[120px]">
        {/* Days */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {days.map((day, i) => (
            <div
              key={i}
              className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-medium transition-all duration-300 ${
                activeDay === i
                  ? "bg-[#E63B2E] text-white scale-95"
                  : "bg-[#F5F3EE] text-[#525252]"
              }`}
            >
              {day}
            </div>
          ))}
        </div>

        {/* Save Button */}
        <div className="flex justify-end mt-2">
          <div
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
              phase === 2
                ? "bg-[#E63B2E] text-white scale-95"
                : "bg-[#F5F3EE] text-[#525252]"
            }`}
          >
            Сохранить
          </div>
        </div>

        {/* Animated Cursor */}
        <svg
          className="absolute w-4 h-4 transition-all duration-500 ease-out"
          style={{ left: cursorPos.x, top: cursorPos.y }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#E63B2E"
          strokeWidth="2"
        >
          <path d="M4 4l7 17 2.5-6.5L20 12 4 4z" />
        </svg>
      </div>

      <p className="text-[#525252] text-sm leading-relaxed">
        Клиенты заказывают повторно в течение двух месяцев. Мы бережем доверие постоянных клиентов.
      </p>
    </div>
  );
}

// ============ PHILOSOPHY SECTION ============
function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".philosophy-line",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-48 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-[#111111]" />

      {/* Content */}
      <div ref={textRef} className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="philosophy-line text-white/50 text-xl md:text-2xl mb-8 max-w-3xl">
          Большинство клининговых сервисов фокусируются на:
          <span className="text-white/70"> скорости и низкой цене.</span>
        </div>
        <div className="philosophy-line">
          <span className="text-white text-2xl md:text-4xl font-bold">
            Мы фокусируемся на:
          </span>
          <span className="font-drama text-[#E63B2E] text-4xl md:text-6xl lg:text-7xl block mt-4">
            качестве и доверии.
          </span>
        </div>
      </div>
    </section>
  );
}

// ============ SERVICES ============
function Services() {
  const servicesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 70%",
          },
        }
      );
    }, servicesRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Sparkles,
      title: "Генеральный клининг",
      pain: "«Визуально чисто, но в углах и под диваном осталась пыль»",
      result:
        "Мы отодвигаем мебель, очищаем радиаторы внутри и вымываем жир с вытяжки. Вы получаете дом, в котором пахнет свежестью, а не «дешевой химией».",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Zap,
      title: "Уборка после ремонта",
      pain: "«Строительная пыль оседает снова через два дня»",
      result:
        "Промышленные HEPA-пылесосы удаляют взвесь из розеток и швов. Даем гарантию 48 часов: если пыль проявится снова — приедем и переделаем бесплатно.",
      image:
        "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Heart,
      title: "Поддерживающий сервис",
      pain: "«Неловко находиться дома с чужим человеком»",
      result:
        "Клинеры работают по «протоколу невидимости» — без лишних разговоров и телефона. 3 часа работы, и ваша квартира готова к приему гостей.",
      image:
        "https://images.unsplash.com/photo-1558317374-067fb5f30001?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section
      ref={servicesRef}
      id="услуги"
      className="py-24 md:py-32 bg-[#111111] px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#E63B2E] font-mono text-sm tracking-widest uppercase mb-4">
            Услуги
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Решение конкретных проблем
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Каждая услуга закрывает реальную боль клиента, а не просто
            «убирает пыль»
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group bg-[#1A1A1A] rounded-[2rem] overflow-hidden border border-[#2A2A2A] hover:border-[#E63B2E]/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-[#E63B2E] rounded-xl flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                {/* Pain Point */}
                <div className="bg-[#111111] rounded-xl p-4 mb-4 border-l-4 border-[#E63B2E]/50">
                  <p className="text-white/50 text-sm italic">{service.pain}</p>
                </div>

                {/* Result */}
                <p className="text-white/70 leading-relaxed mb-6">
                  {service.result}
                </p>

                <a
                  href="#запись"
                  className="inline-flex items-center gap-2 text-[#E63B2E] font-semibold hover:gap-4 transition-all"
                >
                  Заказать <ChevronRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ TEAM ============
function Team() {
  const teamRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".team-card",
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 75%",
          },
        }
      );
    }, teamRef);

    return () => ctx.revert();
  }, []);

  const team = [
    {
      name: "Анна",
      role: "Эксперт Surface Expert",
      specialization: "Специализируется на работе с натуральным камнем и латунью. Знает уровень pH для каждого типа покрытий.",
      result: "450+ сохраненных столешниц из мрамора без разводов и ожогов от химии.",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Елена",
      role: "Мастер «контроля углов»",
      specialization: "Старший клинер с опытом 8 лет. Лично разработала систему проверки труднодоступных мест.",
      result: "0 претензий от клиентов за последние 3 года работы при среднем чеке 15 000 ₽.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Марина",
      role: "Профи послестроя",
      specialization: "Управляет бригадами на объектах площадью от 200 м². Знает, как вывести затирку, не поцарапав плитку.",
      result: "Лично подготовила к заселению 120 квартир в ЖК «Сити» и «Хамовники».",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <section
      ref={teamRef}
      className="py-24 md:py-32 bg-[#F5F3EE] px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#E63B2E] font-mono text-sm tracking-widest uppercase mb-4">
            Команда
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111111] mb-6">
            Мастера своего дела
          </h2>
          <p className="text-[#525252] text-lg max-w-2xl mx-auto">
            Не просто клинеры — эксперты с подтвержденными результатами
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="team-card bg-[#E8E4DD] rounded-[2rem] overflow-hidden border border-[#D1CEC7] shadow-lg"
            >
              {/* Image */}
              <div className="relative h-64">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${member.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#E8E4DD] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 -mt-16 relative">
                <h3 className="text-2xl font-bold text-[#111111] mb-1">
                  {member.name}
                </h3>
                <p className="text-[#E63B2E] font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-[#525252] text-sm leading-relaxed mb-4">
                  {member.specialization}
                </p>

                {/* Result Badge */}
                <div className="bg-[#111111] rounded-xl p-4">
                  <span className="text-white/50 text-xs uppercase tracking-wider">
                    Результат
                  </span>
                  <p className="text-white font-medium mt-1">{member.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ TESTIMONIALS ============
function Testimonials() {
  const testimonialsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testimonial-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: "top 80%",
          },
        }
      );
    }, testimonialsRef);

    return () => ctx.revert();
  }, []);

  const reviews = [
    {
      name: "Артём Г.",
      rating: 5,
      text: "Заказывал после ремонта. Главный страх был за новый паркет, но ребята приехали со своими средствами под дерево. Залезли в каждую щель, даже за радиаторы. На следующий день пыль не вылезла. Цена как в калькуляторе, без сюрпризов.",
    },
    {
      name: "Мария Р.",
      rating: 5,
      text: "Первый сервис, где клинер не пытался со мной поговорить. Работала молча, по чек-листу. Я в это время работала в кабинете и её вообще не замечала. В доме пахнет отелем 5*, а не хлоркой. Очень достойно.",
    },
    {
      name: "Игорь В.",
      rating: 5,
      text: "Проверил пальцем верх шкафа в прихожей после уборки — чисто. Для меня это показатель. Обычно везде «протирают», а тут реально моют. Приятно, что не нужно стоять над душой и тыкать пальцем в недочеты.",
    },
  ];

  return (
    <section
      ref={testimonialsRef}
      id="отзывы"
      className="py-24 md:py-32 bg-[#E8E4DD] px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#E63B2E] font-mono text-sm tracking-widest uppercase mb-4">
            Отзывы
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111111] mb-6">
            Что говорят клиенты
          </h2>
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="testimonial-card bg-white rounded-[2rem] p-8 shadow-lg border border-[#D1CEC7]"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#E63B2E] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-[#111111]">{review.name}</div>
                    <div className="text-[#525252] text-sm">Клиент</div>
                  </div>
                </div>
                {/* Rating */}
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#E63B2E] fill-[#E63B2E]"
                    />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <p className="text-[#525252] leading-relaxed">«{review.text}»</p>

              {/* Source Badge */}
              <div className="mt-6 pt-6 border-t border-[#D1CEC7] flex items-center gap-2">
                <div className="w-5 h-5 bg-[#E63B2E] rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Я</span>
                </div>
                <span className="text-[#525252] text-sm">Яндекс Карты</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ BOOKING FORM ============
function BookingForm() {
  const formRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    area: "",
    rooms: "",
    type: "general",
    name: "",
    phone: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".form-element",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 75%",
          },
        }
      );
    }, formRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо! Мы свяжемся с вами в течение 5 минут.");
  };

  return (
    <section
      ref={formRef}
      id="запись"
      className="py-24 md:py-32 bg-[#111111] px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#E63B2E] font-mono text-sm tracking-widest uppercase mb-4">
            Запись
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Узнайте точную стоимость за 30 секунд
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Введите параметры квартиры, чтобы зафиксировать цену в договоре и
            исключить доплаты на месте.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#1A1A1A] rounded-[2rem] p-8 md:p-12 border border-[#2A2A2A]"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Area */}
            <div className="form-element">
              <label className="block text-white/60 text-sm mb-2">
                Площадь квартиры (м²)
              </label>
              <input
                type="number"
                value={formData.area}
                onChange={(e) =>
                  setFormData({ ...formData, area: e.target.value })
                }
                placeholder="Например: 75"
                className="w-full bg-[#111111] border border-[#2A2A2A] rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:border-[#E63B2E] focus:outline-none transition-colors"
              />
            </div>

            {/* Rooms */}
            <div className="form-element">
              <label className="block text-white/60 text-sm mb-2">
                Количество комнат
              </label>
              <input
                type="number"
                value={formData.rooms}
                onChange={(e) =>
                  setFormData({ ...formData, rooms: e.target.value })
                }
                placeholder="Например: 2"
                className="w-full bg-[#111111] border border-[#2A2A2A] rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:border-[#E63B2E] focus:outline-none transition-colors"
              />
            </div>

            {/* Cleaning Type */}
            <div className="form-element md:col-span-2">
              <label className="block text-white/60 text-sm mb-2">
                Тип уборки
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: "general", label: "Генеральная" },
                  { value: "renovation", label: "После ремонта" },
                  { value: "maintenance", label: "Поддерживающая" },
                ].map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, type: type.value })
                    }
                    className={`py-3 px-4 rounded-xl font-medium transition-all ${
                      formData.type === type.value
                        ? "bg-[#E63B2E] text-white"
                        : "bg-[#111111] border border-[#2A2A2A] text-white/60 hover:border-[#E63B2E]/50"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Name */}
            <div className="form-element">
              <label className="block text-white/60 text-sm mb-2">
                Ваше имя
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Как к вам обращаться?"
                className="w-full bg-[#111111] border border-[#2A2A2A] rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:border-[#E63B2E] focus:outline-none transition-colors"
              />
            </div>

            {/* Phone */}
            <div className="form-element">
              <label className="block text-white/60 text-sm mb-2">
                Телефон
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="+7 (___) ___-__-__"
                className="w-full bg-[#111111] border border-[#2A2A2A] rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:border-[#E63B2E] focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Bonus Banner */}
          <div className="form-element mt-6 bg-[#E63B2E]/10 border border-[#E63B2E]/30 rounded-xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-[#E63B2E] rounded-full flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-white font-semibold">
                +500 бонусов при записи сегодня
              </div>
              <div className="text-white/50 text-sm">
                Гайд по уходу за премиальными материалами в подарок
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="form-element w-full mt-8 bg-[#E63B2E] text-white py-4 rounded-xl font-bold text-lg btn-magnetic flex items-center justify-center gap-2"
          >
            Получить расчёт в WhatsApp
            <ChevronRight size={20} />
          </button>

          {/* Privacy */}
          <p className="form-element text-center text-white/40 text-sm mt-4">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
          </p>
        </form>
      </div>
    </section>
  );
}

// ============ FOOTER ============
function Footer() {
  return (
    <footer
      id="контакты"
      className="bg-[#0A0A0A] rounded-t-[4rem] pt-16 pb-8 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="text-2xl font-bold text-white mb-4 block">
              Cleaning<span className="text-[#E63B2E]">PRO</span>
            </a>
            <p className="text-white/50 max-w-md mb-6 leading-relaxed">
              Профессиональный клининг в Москве и Московской области. Уборка без
              контроля — принимайте результат.
            </p>

            {/* Status */}
            <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-dot" />
              <span className="text-white/60 font-mono text-sm">
                Система активна
              </span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Навигация</h4>
            <ul className="space-y-3">
              {["Услуги", "О нас", "Отзывы", "Контакты"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+74951234567"
                  className="flex items-center gap-2 text-white/50 hover:text-white transition-colors"
                >
                  <Phone size={16} />
                  +7 (495) 123-45-67
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@cleaningpro.ru"
                  className="flex items-center gap-2 text-white/50 hover:text-white transition-colors"
                >
                  <Mail size={16} />
                  info@cleaningpro.ru
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-white/50">
                  <MapPin size={16} />
                  Москва и область
                </span>
              </li>
              <li>
                <span className="flex items-center gap-2 text-white/50">
                  <Clock size={16} />
                  Ежедневно 9:00–21:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © 2026 CleaningPRO. Все права защищены.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 text-sm hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-white/30 text-sm hover:text-white transition-colors">
              Договор оферты
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============ NOISE OVERLAY ============
function NoiseOverlay() {
  return (
    <svg className="noise-overlay">
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="4"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  );
}

// ============ MAIN PAGE ============
export default function Page() {
  return (
    <main className="bg-[#F5F3EE] min-h-screen">
      <NoiseOverlay />
      <Navbar />
      <Hero />
      <InteractiveFeatures />
      <Philosophy />
      <Services />
      <Team />
      <Testimonials />
      <BookingForm />
      <Footer />
    </main>
  );
}
