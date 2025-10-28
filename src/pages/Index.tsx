import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const specs = [
    { icon: 'Gauge', label: 'Двигатель', value: 'V8 6.2L LS3' },
    { icon: 'Zap', label: 'Мощность', value: '426 л.с.' },
    { icon: 'Gauge', label: 'Крутящий момент', value: '569 Н⋅м' },
    { icon: 'Timer', label: '0-100 км/ч', value: '4.7 сек' },
    { icon: 'Gauge', label: 'Макс. скорость', value: '250 км/ч' },
    { icon: 'Fuel', label: 'Расход', value: '14.7 л/100км' },
  ];

  const modifications = [
    {
      name: 'LS',
      engine: 'V6 3.6L',
      power: '312 л.с.',
      description: 'Базовая комплектация с атмосферным V6',
      badge: 'Base',
    },
    {
      name: 'LT',
      engine: 'V6 3.6L',
      power: '323 л.с.',
      description: 'Улучшенная версия с расширенным оснащением',
      badge: 'Popular',
    },
    {
      name: 'SS',
      engine: 'V8 6.2L LS3',
      power: '426 л.с.',
      description: 'Легендарный V8 с выдающейся динамикой',
      badge: 'Performance',
    },
    {
      name: 'ZL1',
      engine: 'V8 6.2L LSA',
      power: '580 л.с.',
      description: 'Топовая версия с наддувом и трековыми настройками',
      badge: 'Ultimate',
    },
  ];

  const gallery = [
    {
      url: 'https://cdn.poehali.dev/projects/850eaaf2-7cc9-42b4-8e88-654bd8300e1c/files/f7fbed9a-f33d-4821-96ec-95965bf88e12.jpg',
      title: 'Фронтальный вид',
    },
    {
      url: 'https://cdn.poehali.dev/projects/850eaaf2-7cc9-42b4-8e88-654bd8300e1c/files/4796b5a3-79cb-4db1-a7db-ac57d4fe7bd3.jpg',
      title: 'Профиль',
    },
    {
      url: 'https://cdn.poehali.dev/projects/850eaaf2-7cc9-42b4-8e88-654bd8300e1c/files/b139878f-16be-4a3c-87a4-39ccad99be75.jpg',
      title: 'Двигатель',
    },
    {
      url: 'https://cdn.poehali.dev/projects/850eaaf2-7cc9-42b4-8e88-654bd8300e1c/files/05b955b1-df4a-4679-83e4-441e748d231c.jpg',
      title: 'Задний ракурс',
    },
    {
      url: 'https://cdn.poehali.dev/projects/850eaaf2-7cc9-42b4-8e88-654bd8300e1c/files/16095d87-c1cf-4214-8efa-b83f00bb0d81.jpg',
      title: 'Салон',
    },
    {
      url: 'https://cdn.poehali.dev/projects/850eaaf2-7cc9-42b4-8e88-654bd8300e1c/files/03ecadf1-e48b-4605-8280-1853f0822ec2.jpg',
      title: 'Решётка радиатора',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-primary/20 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-primary tracking-wider flex items-center gap-2">
              <span className="text-4xl">🏁</span>
              CAMARO SS
            </h1>
            <div className="hidden md:flex gap-6">
              <button
                onClick={() => setActiveSection('home')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'home' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                ГЛАВНАЯ
              </button>
              <button
                onClick={() => setActiveSection('specs')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'specs' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                ХАРАКТЕРИСТИКИ
              </button>
              <button
                onClick={() => setActiveSection('mods')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'mods' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                МОДИФИКАЦИИ
              </button>
              <button
                onClick={() => setActiveSection('gallery')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'gallery' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                ГАЛЕРЕЯ
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          {activeSection === 'home' && (
            <div className="animate-fade-in">
              <div className="relative overflow-hidden rounded-lg mb-12">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
                <img
                  src="https://cdn.poehali.dev/projects/850eaaf2-7cc9-42b4-8e88-654bd8300e1c/files/f6f0d123-94c1-4075-ab05-5a8f23b33ad7.jpg"
                  alt="Chevrolet Camaro SS"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 p-12">
                  <div className="max-w-3xl">
                    <h2 className="text-6xl md:text-8xl font-bold text-primary mb-4 drop-shadow-lg">
                      CAMARO
                    </h2>
                    <p className="text-2xl md:text-3xl text-foreground/90 mb-6">
                      Пятое поколение • 2010-2015
                    </p>
                    <div className="flex gap-4 flex-wrap">
                      <Badge className="bg-primary text-primary-foreground px-4 py-2 text-lg">
                        426 Л.С.
                      </Badge>
                      <Badge className="bg-accent text-accent-foreground px-4 py-2 text-lg">
                        V8 LS3
                      </Badge>
                      <Badge className="bg-secondary text-secondary-foreground px-4 py-2 text-lg">
                        MUSCLE CAR
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="Zap" className="text-primary" size={32} />
                      <CardTitle className="text-2xl">МОЩЬ</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      Легендарный атмосферный V8 с чистым звуком американского мускула
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="Gauge" className="text-primary" size={32} />
                      <CardTitle className="text-2xl">СКОРОСТЬ</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      Разгон до 100 км/ч всего за 4.7 секунды — адреналин в чистом виде
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name="Award" className="text-primary" size={32} />
                      <CardTitle className="text-2xl">СТИЛЬ</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      Агрессивный дизайн, вдохновленный гоночным наследием Camaro
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>

              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
                <CardHeader>
                  <CardTitle className="text-3xl mb-4">ВОЗРОЖДЕНИЕ ЛЕГЕНДЫ</CardTitle>
                  <CardDescription className="text-lg leading-relaxed text-foreground/80">
                    Пятое поколение Chevrolet Camaro стало триумфальным возвращением легендарного
                    американского muscle car после 7-летнего перерыва. Представленный в 2009 году,
                    он мгновенно завоевал сердца энтузиастов ретро-дизайном, отсылающим к
                    культовым моделям 1960-х, и современными технологиями. Версия SS с двигателем
                    V8 LS3 объемом 6.2 литра выдает 426 лошадиных сил, предлагая классический
                    опыт вождения заднеприводного купе с механической коробкой передач.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          )}

          {activeSection === 'specs' && (
            <div className="animate-fade-in">
              <h2 className="text-5xl font-bold text-primary mb-8 text-center">
                ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {specs.map((spec, index) => (
                  <Card
                    key={index}
                    className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover:scale-105"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/20 p-3 rounded-lg">
                          <Icon name={spec.icon} className="text-primary" size={28} />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground uppercase tracking-wide">
                            {spec.label}
                          </p>
                          <p className="text-2xl font-bold text-foreground">{spec.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-card/50 backdrop-blur border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-2xl mb-4">ДВИГАТЕЛЬ LS3</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between border-b border-primary/10 pb-2">
                      <span className="text-muted-foreground">Тип:</span>
                      <span className="font-medium">V8, атмосферный</span>
                    </div>
                    <div className="flex justify-between border-b border-primary/10 pb-2">
                      <span className="text-muted-foreground">Объем:</span>
                      <span className="font-medium">6.2 литра (6162 см³)</span>
                    </div>
                    <div className="flex justify-between border-b border-primary/10 pb-2">
                      <span className="text-muted-foreground">Мощность:</span>
                      <span className="font-medium">426 л.с. при 5900 об/мин</span>
                    </div>
                    <div className="flex justify-between border-b border-primary/10 pb-2">
                      <span className="text-muted-foreground">Крутящий момент:</span>
                      <span className="font-medium">569 Н⋅м при 4600 об/мин</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Клапанов:</span>
                      <span className="font-medium">16 (OHV)</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-2xl mb-4">ТРАНСМИССИЯ И ШАССИ</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between border-b border-primary/10 pb-2">
                      <span className="text-muted-foreground">КПП:</span>
                      <span className="font-medium">6-ступ. МКПП / 6-ступ. АКПП</span>
                    </div>
                    <div className="flex justify-between border-b border-primary/10 pb-2">
                      <span className="text-muted-foreground">Привод:</span>
                      <span className="font-medium">Задний</span>
                    </div>
                    <div className="flex justify-between border-b border-primary/10 pb-2">
                      <span className="text-muted-foreground">Подвеска передняя:</span>
                      <span className="font-medium">Независимая, MacPherson</span>
                    </div>
                    <div className="flex justify-between border-b border-primary/10 pb-2">
                      <span className="text-muted-foreground">Подвеска задняя:</span>
                      <span className="font-medium">Независимая, многорычажная</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Тормоза:</span>
                      <span className="font-medium">Дисковые вентилируемые</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeSection === 'mods' && (
            <div className="animate-fade-in">
              <h2 className="text-5xl font-bold text-primary mb-8 text-center">
                МОДИФИКАЦИИ И КОМПЛЕКТАЦИИ
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {modifications.map((mod, index) => (
                  <Card
                    key={index}
                    className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover:scale-105"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-3xl">{mod.name}</CardTitle>
                        <Badge
                          variant={mod.name === 'SS' ? 'default' : 'secondary'}
                          className={
                            mod.name === 'SS'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-secondary text-secondary-foreground'
                          }
                        >
                          {mod.badge}
                        </Badge>
                      </div>
                      <CardDescription className="text-base">{mod.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Icon name="Settings" className="text-primary" size={20} />
                          <div>
                            <p className="text-sm text-muted-foreground">Двигатель</p>
                            <p className="font-medium">{mod.engine}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Icon name="Zap" className="text-primary" size={20} />
                          <div>
                            <p className="text-sm text-muted-foreground">Мощность</p>
                            <p className="font-medium">{mod.power}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-8 bg-gradient-to-br from-accent/10 to-primary/10 border-accent/30">
                <CardHeader>
                  <CardTitle className="text-2xl mb-4">ОСОБЕННОСТИ ВЕРСИИ SS</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-foreground/80">
                    Camaro SS — это квинтэссенция американского muscle car. Помимо мощного V8 LS3,
                    версия SS получила усиленную тормозную систему Brembo с 4-поршневыми
                    суппортами, спортивную подвеску с настройками FE3, дифференциал повышенного
                    трения, 20-дюймовые легкосплавные диски, агрессивный аэродинамический обвес и
                    уникальные значки SS. Доступна опция Performance Package с ещё более жёсткой
                    подвеской и улучшенной аэродинамикой для трековых заездов.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          )}

          {activeSection === 'gallery' && (
            <div className="animate-fade-in">
              <h2 className="text-5xl font-bold text-primary mb-8 text-center">
                ГАЛЕРЕЯ ФОТОГРАФИЙ
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gallery.map((image, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover:scale-105"
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-64 object-cover"
                    />
                    <CardHeader>
                      <CardTitle className="text-xl">{image.title}</CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              <Card className="mt-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
                <CardHeader>
                  <CardTitle className="text-3xl mb-4 text-center">
                    ЖЕЛТЫЙ — ЦВЕТ ПОБЕДИТЕЛЕЙ
                  </CardTitle>
                  <CardDescription className="text-lg leading-relaxed text-center text-foreground/80">
                    Rally Yellow — один из самых культовых цветов Camaro, символизирующий скорость,
                    энергию и дерзость. Этот яркий оттенок желтого был представлен на пятом
                    поколении и мгновенно стал любимым среди энтузиастов, подчеркивая агрессивные
                    линии кузова и спортивный характер автомобиля.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          )}
        </div>
      </section>

      <footer className="border-t border-primary/20 py-8 px-4 mt-16">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            Chevrolet Camaro SS — Американская легенда на дорогах
          </p>
          <p className="text-sm text-muted-foreground mt-2">2010-2015 • Пятое поколение</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;