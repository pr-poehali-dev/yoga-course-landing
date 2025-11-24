import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

export default function Index() {
  const scrollToEnroll = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/ad0f5deb-23d3-4a01-84f2-3dc5225eca52/files/be06e863-cd04-43d8-a3b7-15de180f2a2f.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.7)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background z-0" />
        
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
          <Badge className="mb-6 bg-primary/90 text-primary-foreground px-6 py-2 text-lg">
            Онлайн-курс йоги
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Йога для гармонии<br/>тела и духа
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
            Начните путь к здоровью и внутреннему равновесию прямо из дома
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-xl hover:scale-105 transition-transform"
            onClick={scrollToEnroll}
          >
            Записаться на курс
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Структура занятий
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Каждое занятие тщательно продумано для вашего комфорта и прогресса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: "Sunrise", title: "Разминка", desc: "10 минут мягкого пробуждения тела", time: "10 мин" },
              { icon: "Activity", title: "Асаны", desc: "30 минут практики поз с детальными объяснениями", time: "30 мин" },
              { icon: "Wind", title: "Дыхание", desc: "10 минут пранаямы для энергии и баланса", time: "10 мин" },
              { icon: "Sparkles", title: "Медитация", desc: "10 минут релаксации и осознанности", time: "10 мин" }
            ].map((item, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-all hover:scale-105 animate-scale-in border-2" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={item.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <Badge variant="secondary" className="mx-auto mt-2">{item.time}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Тарифные планы
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Выберите подходящий вариант и начните практику уже сегодня
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Пробный",
                price: "Бесплатно",
                desc: "Попробуйте йогу без обязательств",
                features: [
                  "3 вводных урока",
                  "Базовые асаны",
                  "Доступ на 7 дней",
                  "Общий чат поддержки"
                ],
                cta: "Начать бесплатно",
                popular: false
              },
              {
                name: "Стандарт",
                price: "2 990 ₽",
                period: "/месяц",
                desc: "Для регулярной практики",
                features: [
                  "20 уроков разного уровня",
                  "Новые уроки каждую неделю",
                  "Доступ к записям",
                  "Личная консультация раз в месяц",
                  "Закрытое сообщество практикующих"
                ],
                cta: "Выбрать план",
                popular: true
              },
              {
                name: "Премиум",
                price: "24 990 ₽",
                period: "/год",
                desc: "Полное погружение в практику",
                features: [
                  "Все уроки без ограничений",
                  "Индивидуальный план занятий",
                  "Еженедельные консультации",
                  "Прямые эфиры с инструктором",
                  "Доступ к мастер-классам",
                  "Сертификат об окончании курса",
                  "Бонусные медитации и лекции"
                ],
                cta: "Купить полный курс",
                popular: false
              }
            ].map((plan, idx) => (
              <Card 
                key={idx} 
                className={`relative hover:shadow-2xl transition-all hover:scale-105 animate-scale-in ${
                  plan.popular ? 'border-primary border-4 shadow-xl' : 'border-2'
                }`}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-accent text-accent-foreground px-4 py-1 text-sm font-semibold">
                      Популярный выбор
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-3">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                  </div>
                  <CardDescription className="text-base">{plan.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-primary hover:bg-primary/90' 
                        : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                    } py-6 text-base rounded-full`}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/ad0f5deb-23d3-4a01-84f2-3dc5225eca52/files/47181fc7-fea6-4de4-8ba1-7fa3d97ee90a.jpg"
                alt="Преимущества йоги"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Что вы получите, купив полный курс
              </h2>
              <div className="space-y-6">
                {[
                  { icon: "Users", title: "Сообщество единомышленников", desc: "Общайтесь, делитесь опытом и мотивируйте друг друга" },
                  { icon: "BookOpen", title: "Структурированная программа", desc: "От новичка до продвинутого уровня с пошаговым прогрессом" },
                  { icon: "Video", title: "Видеоуроки HD качества", desc: "Детальные инструкции с разных ракурсов для точного выполнения" },
                  { icon: "Calendar", title: "Гибкий график", desc: "Занимайтесь в удобное время, записи доступны без ограничений" },
                  { icon: "Heart", title: "Здоровье и энергия", desc: "Улучшите физическую форму, снизьте стресс и обретите баланс" },
                  { icon: "Award", title: "Сертификат", desc: "Подтвердите свои достижения официальным документом" }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={benefit.icon as any} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Начните свой путь к гармонии сегодня
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Присоединяйтесь к тысячам практикующих, которые уже изменили свою жизнь с помощью йоги
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg rounded-full shadow-xl hover:scale-105 transition-transform"
              onClick={scrollToEnroll}
            >
              Записаться на курс
              <Icon name="Sparkles" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-card border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="text-sm">
            © 2024 Онлайн-курс йоги. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
