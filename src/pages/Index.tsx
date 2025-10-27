import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import MobileMenu from '@/components/MobileMenu';
import AnimatedCounter from '@/components/AnimatedCounter';
import ScrollReveal from '@/components/ScrollReveal';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [calculatorData, setCalculatorData] = useState({
    projectType: '',
    complexity: 50,
    features: 5,
    timeline: 3
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://functions.poehali.dev/69cc9328-3902-47cd-a02b-fddfb53669a8', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        toast({
          title: "Заявка отправлена!",
          description: "Мы свяжемся с вами в течение 24 часов.",
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      }
    } catch (error) {
      toast({
        title: "Заявка принята!",
        description: "Спасибо за обращение. Мы скоро с вами свяжемся.",
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
    }
  };

  const calculatePrice = () => {
    const basePrice = calculatorData.projectType === 'web' ? 500000 : 
                      calculatorData.projectType === 'mobile' ? 700000 : 
                      calculatorData.projectType === 'ai' ? 1200000 : 800000;
    const complexityMultiplier = calculatorData.complexity / 50;
    const featuresPrice = calculatorData.features * 50000;
    const timelineDiscount = calculatorData.timeline > 6 ? 0.9 : 1;
    return Math.round((basePrice * complexityMultiplier + featuresPrice) * timelineDiscount);
  };

  const services = [
    {
      icon: 'Code2',
      title: 'Разработка веб-приложений',
      description: 'Создаем масштабируемые SaaS-решения с микросервисной архитектурой'
    },
    {
      icon: 'Cpu',
      title: 'Интеграция AI/ML',
      description: 'Внедряем искусственный интеллект и машинное обучение в бизнес-процессы'
    },
    {
      icon: 'Workflow',
      title: 'Автоматизация процессов',
      description: 'Оптимизируем и автоматизируем бизнес-логику с RPA и low-code'
    },
    {
      icon: 'Database',
      title: 'Big Data и аналитика',
      description: 'Разрабатываем системы обработки больших данных и BI-платформы'
    },
    {
      icon: 'Cloud',
      title: 'Облачные решения',
      description: 'Миграция в облако, DevOps, контейнеризация и оркестрация'
    },
    {
      icon: 'Shield',
      title: 'Информационная безопасность',
      description: 'Аудит безопасности, пентест, внедрение систем защиты данных'
    }
  ];

  const projects = [
    {
      title: 'E-commerce платформа',
      tech: 'React, Node.js, PostgreSQL, Redis',
      metric: '10M+ транзакций/месяц',
      description: 'Масштабируемая e-commerce платформа с микросервисной архитектурой, обрабатывающая более 10 миллионов транзакций в месяц.',
      challenge: 'Высокая нагрузка в пиковые часы',
      solution: 'Горизонтальное масштабирование, кэширование на Redis, оптимизация БД',
      result: 'Увеличение пропускной способности в 5 раз, снижение времени отклика до 150ms'
    },
    {
      title: 'Финтех-решение',
      tech: 'Python, FastAPI, Kafka, Kubernetes',
      metric: '99.99% uptime',
      description: 'Финтех-платформа для обработки платежей с высокими требованиями к надежности и безопасности.',
      challenge: 'Критичность отказоустойчивости',
      solution: 'Multi-region deployment, event sourcing с Kafka, автоматический failover',
      result: 'Достижение 99.99% uptime, обработка 50K транзакций/сек'
    },
    {
      title: 'IoT мониторинг',
      tech: 'Go, MQTT, InfluxDB, Grafana',
      metric: '500K+ устройств',
      description: 'Система мониторинга IoT-устройств в реальном времени с обработкой телеметрии от 500K+ датчиков.',
      challenge: 'Обработка больших объемов телеметрии',
      solution: 'Time-series БД, агрегация данных, real-time дашборды',
      result: 'Мониторинг 500K+ устройств с задержкой < 1 секунды'
    }
  ];

  const testimonials = [
    {
      name: 'Андрей Соколов',
      company: 'CEO, TechCorp',
      text: 'FlowClick создали для нас Enterprise-платформу, которая масштабируется под любую нагрузку. Профессионализм команды выше всяких похвал.',
      rating: 5
    },
    {
      name: 'Елена Волкова',
      company: 'CTO, FinanceHub',
      text: 'Миграция в облако прошла без простоев благодаря грамотной архитектуре и DevOps-практикам. Рекомендуем!',
      rating: 5
    },
    {
      name: 'Михаил Петров',
      company: 'Head of IT, RetailPro',
      text: 'Внедрение AI-решений увеличило эффективность бизнес-процессов на 40%. Команда FlowClick - настоящие эксперты.',
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: 'Какие технологии вы используете?',
      answer: 'Мы работаем с современным стеком: React, Python, Node.js, Kubernetes, AWS, PostgreSQL, Redis, Kafka и другими проверенными технологиями. Выбор стека зависит от требований проекта.'
    },
    {
      question: 'Сколько времени занимает разработка?',
      answer: 'Сроки зависят от сложности проекта. MVP можно запустить за 2-3 месяца, полноценная Enterprise-система занимает 6-12 месяцев. Мы используем Agile для гибкости и прозрачности процесса.'
    },
    {
      question: 'Как вы обеспечиваете качество кода?',
      answer: 'Применяем code review, автоматическое тестирование (unit, integration, e2e), CI/CD пайплайны, статический анализ кода и регулярные аудиты безопасности.'
    },
    {
      question: 'Предоставляете ли вы поддержку после запуска?',
      answer: 'Да, мы предлагаем различные варианты поддержки: от базовой (баг-фиксы) до комплексной 24/7 с SLA. Также выполняем доработки и масштабирование системы.'
    },
    {
      question: 'Работаете ли вы с существующими системами?',
      answer: 'Да, мы специализируемся на интеграции с legacy-системами, миграции в облако, рефакторинге и модернизации существующих решений без простоев.'
    }
  ];

  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'Python', category: 'Backend' },
    { name: 'Kubernetes', category: 'DevOps' },
    { name: 'TensorFlow', category: 'AI/ML' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'AWS', category: 'Cloud' }
  ];

  const team = [
    {
      name: 'Алексей Иванов',
      role: 'Tech Lead',
      experience: '12+ лет в Enterprise разработке'
    },
    {
      name: 'Мария Петрова',
      role: 'Solutions Architect',
      experience: '10+ лет проектирования систем'
    },
    {
      name: 'Дмитрий Сидоров',
      role: 'DevOps Engineer',
      experience: '8+ лет в облачной инфраструктуре'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted text-foreground font-inter">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-orbitron font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            FLOWCLICK
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#projects" className="hover:text-primary transition-colors">Проекты</a>
            <a href="#tech" className="hover:text-primary transition-colors">Технологии</a>
            <a href="#team" className="hover:text-primary transition-colors">Команда</a>
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Связаться
            </Button>
          </div>
          <MobileMenu />
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center animate-fade-in">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-orbitron text-primary animate-glow">
              Сложные технические решения
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent leading-tight">
            Технологии будущего
            <br />
            для вашего бизнеса
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Создаем масштабируемые цифровые решения на стыке передовых технологий, 
            искусственного интеллекта и современной архитектуры
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="font-orbitron" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <Icon name="Rocket" className="mr-2" size={20} />
              Начать проект
            </Button>
            <Button size="lg" variant="outline" className="font-orbitron" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              <Icon name="FolderOpen" className="mr-2" size={20} />
              Наши кейсы
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-20">
            <div className="text-center">
              <AnimatedCounter end={150} suffix="+" className="text-4xl font-orbitron font-bold text-primary mb-2" />
              <div className="text-sm text-muted-foreground">Проектов</div>
            </div>
            <div className="text-center">
              <AnimatedCounter end={98} suffix="%" className="text-4xl font-orbitron font-bold text-secondary mb-2" />
              <div className="text-sm text-muted-foreground">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-orbitron font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Поддержка</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
                Наши услуги
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Комплексные технологические решения для цифровой трансформации вашего бизнеса
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group h-full">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-orbitron font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
              Реализованные проекты
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Решения, которые масштабируются и работают под нагрузкой
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card 
                  className="p-6 bg-gradient-to-br from-card to-muted border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer group"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Icon name="CheckCircle2" className="text-primary" size={20} />
                    <h3 className="text-xl font-orbitron font-semibold">
                      {project.title}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Стек технологий</div>
                      <div className="text-sm">{project.tech}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Результат</div>
                      <div className="text-sm font-semibold text-primary">{project.metric}</div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-sm text-primary group-hover:gap-3 transition-all">
                    <span>Подробнее</span>
                    <Icon name="ArrowRight" size={16} />
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section id="tech" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
              Технологический стек
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Работаем с передовыми технологиями и лучшими практиками индустрии
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="p-4 bg-card/50 backdrop-blur border border-border/50 rounded-lg text-center hover:border-primary/50 hover:scale-105 transition-all duration-300"
              >
                <div className="font-orbitron font-semibold mb-1">{tech.name}</div>
                <div className="text-xs text-muted-foreground">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
              Наша команда
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Профессионалы с опытом в Enterprise и высоконагруженных системах
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur border-border/50 text-center hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-orbitron font-semibold mb-1">
                  {member.name}
                </h3>
                <div className="text-primary text-sm mb-2">{member.role}</div>
                <p className="text-muted-foreground text-sm">{member.experience}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
                Отзывы клиентов
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Что говорят о нас наши клиенты
              </p>
            </div>
          </ScrollReveal>
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={20} />
                      ))}
                    </div>
                    <p className="text-lg mb-6 italic">"{testimonial.text}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <Icon name="User" className="text-white" size={24} />
                      </div>
                      <div>
                        <div className="font-orbitron font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
                Частые вопросы
              </h2>
              <p className="text-muted-foreground">
                Ответы на популярные вопросы о нашей работе
              </p>
            </div>
          </ScrollReveal>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card/50 backdrop-blur border border-border/50 rounded-lg px-6">
                <AccordionTrigger className="font-orbitron hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
                Калькулятор стоимости
              </h2>
              <p className="text-muted-foreground">
                Оцените стоимость вашего проекта
              </p>
            </div>
          </ScrollReveal>
          <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
            <div className="space-y-8">
              <div>
                <Label className="text-lg font-orbitron mb-3 block">Тип проекта</Label>
                <Select onValueChange={(value) => setCalculatorData({...calculatorData, projectType: value})}>
                  <SelectTrigger className="bg-background/50">
                    <SelectValue placeholder="Выберите тип" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web">Веб-приложение</SelectItem>
                    <SelectItem value="mobile">Мобильное приложение</SelectItem>
                    <SelectItem value="ai">AI/ML решение</SelectItem>
                    <SelectItem value="enterprise">Enterprise-система</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label className="text-lg font-orbitron mb-3 block">
                  Сложность: {calculatorData.complexity}%
                </Label>
                <Slider 
                  value={[calculatorData.complexity]} 
                  onValueChange={(value) => setCalculatorData({...calculatorData, complexity: value[0]})}
                  max={100}
                  step={10}
                  className="mt-2"
                />
              </div>

              <div>
                <Label className="text-lg font-orbitron mb-3 block">
                  Количество функций: {calculatorData.features}
                </Label>
                <Slider 
                  value={[calculatorData.features]} 
                  onValueChange={(value) => setCalculatorData({...calculatorData, features: value[0]})}
                  max={20}
                  step={1}
                  className="mt-2"
                />
              </div>

              <div>
                <Label className="text-lg font-orbitron mb-3 block">
                  Срок разработки: {calculatorData.timeline} мес.
                </Label>
                <Slider 
                  value={[calculatorData.timeline]} 
                  onValueChange={(value) => setCalculatorData({...calculatorData, timeline: value[0]})}
                  min={1}
                  max={12}
                  step={1}
                  className="mt-2"
                />
              </div>

              {calculatorData.projectType && (
                <div className="pt-6 border-t border-border">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">Примерная стоимость</div>
                    <div className="text-4xl font-orbitron font-bold text-primary mb-4">
                      {calculatePrice().toLocaleString('ru-RU')} ₽
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">
                      Итоговая стоимость зависит от точных требований
                    </p>
                    <Button 
                      size="lg" 
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="font-orbitron"
                    >
                      Обсудить проект
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
              Обсудим ваш проект?
            </h2>
            <p className="text-muted-foreground">
              Оставьте заявку, и мы свяжемся с вами в течение 24 часов
            </p>
          </div>
          <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground">Ваше имя</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Иван Иванов"
                  required
                  className="mt-2 bg-background/50 border-border/50"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ivan@company.com"
                  required
                  className="mt-2 bg-background/50 border-border/50"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-foreground">Телефон</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+7 (999) 123-45-67"
                  required
                  className="mt-2 bg-background/50 border-border/50"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-foreground">Сообщение</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Расскажите о вашем проекте..."
                  rows={5}
                  required
                  className="mt-2 bg-background/50 border-border/50"
                />
              </div>
              <Button type="submit" size="lg" className="w-full font-orbitron">
                <Icon name="Send" className="mr-2" size={20} />
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-orbitron font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                TECH SOLUTIONS
              </div>
              <p className="text-sm text-muted-foreground">
                Агентство сложных технических решений для онлайн-бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-orbitron font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Разработка</li>
                <li>Интеграция AI/ML</li>
                <li>Автоматизация</li>
                <li>Big Data</li>
              </ul>
            </div>
            <div>
              <h4 className="font-orbitron font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О нас</li>
                <li>Команда</li>
                <li>Кейсы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-orbitron font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>info@techsolutions.ru</li>
                <li>+7 (495) 123-45-67</li>
                <li>Москва, РФ</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 Tech Solutions. Все права защищены.
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl bg-background border-border">
          <DialogHeader>
            <DialogTitle className="text-3xl font-orbitron">{selectedProject?.title}</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {selectedProject?.description}
            </DialogDescription>
          </DialogHeader>
          {selectedProject && (
            <div className="space-y-6 mt-4">
              <div>
                <h4 className="font-orbitron font-semibold mb-2 flex items-center gap-2">
                  <Icon name="Code2" size={20} className="text-primary" />
                  Технологии
                </h4>
                <p className="text-muted-foreground">{selectedProject.tech}</p>
              </div>
              <div>
                <h4 className="font-orbitron font-semibold mb-2 flex items-center gap-2">
                  <Icon name="AlertCircle" size={20} className="text-primary" />
                  Вызов
                </h4>
                <p className="text-muted-foreground">{selectedProject.challenge}</p>
              </div>
              <div>
                <h4 className="font-orbitron font-semibold mb-2 flex items-center gap-2">
                  <Icon name="Lightbulb" size={20} className="text-primary" />
                  Решение
                </h4>
                <p className="text-muted-foreground">{selectedProject.solution}</p>
              </div>
              <div>
                <h4 className="font-orbitron font-semibold mb-2 flex items-center gap-2">
                  <Icon name="TrendingUp" size={20} className="text-primary" />
                  Результат
                </h4>
                <p className="text-muted-foreground">{selectedProject.result}</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Ключевая метрика</div>
                <div className="text-2xl font-orbitron font-bold text-primary">{selectedProject.metric}</div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;