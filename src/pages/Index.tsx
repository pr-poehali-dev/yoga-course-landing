import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  inStock: boolean;
}

const products: Product[] = [
  { id: 1, name: "Набор пряжи «Радуга» (10 мотков)", price: 1290, category: "Пряжа", image: "https://cdn.poehali.dev/projects/ad0f5deb-23d3-4a01-84f2-3dc5225eca52/files/0b0b5de8-a0b0-411a-a1f8-c43cab847bdd.jpg", inStock: true },
  { id: 2, name: "Профессиональные спицы (набор 5 шт)", price: 890, category: "Инструменты", image: "https://cdn.poehali.dev/projects/ad0f5deb-23d3-4a01-84f2-3dc5225eca52/files/3981b389-787e-492e-8325-eb9c5a1bd318.jpg", inStock: true },
  { id: 3, name: "Пяльцы для вышивания 3 размера", price: 650, category: "Инструменты", image: "https://cdn.poehali.dev/projects/ad0f5deb-23d3-4a01-84f2-3dc5225eca52/files/1832d0a2-191a-46e0-b6ba-d6fcd9076ca8.jpg", inStock: true },
  { id: 4, name: "Нитки мулине DMC (50 цветов)", price: 2490, category: "Нитки", image: "https://cdn.poehali.dev/projects/ad0f5deb-23d3-4a01-84f2-3dc5225eca52/files/3981b389-787e-492e-8325-eb9c5a1bd318.jpg", inStock: true },
  { id: 5, name: "Хлопковая пряжа «Лето» 500г", price: 890, category: "Пряжа", image: "https://cdn.poehali.dev/projects/ad0f5deb-23d3-4a01-84f2-3dc5225eca52/files/0b0b5de8-a0b0-411a-a1f8-c43cab847bdd.jpg", inStock: false },
  { id: 6, name: "Крючки для вязания (набор 8 шт)", price: 750, category: "Инструменты", image: "https://cdn.poehali.dev/projects/ad0f5deb-23d3-4a01-84f2-3dc5225eca52/files/3981b389-787e-492e-8325-eb9c5a1bd318.jpg", inStock: true },
  { id: 7, name: "Ткань для пэчворка (набор 20 шт)", price: 1650, category: "Ткани", image: "https://cdn.poehali.dev/projects/ad0f5deb-23d3-4a01-84f2-3dc5225eca52/files/1832d0a2-191a-46e0-b6ba-d6fcd9076ca8.jpg", inStock: true },
  { id: 8, name: "Шерстяная пряжа «Альпака» 200г", price: 1890, category: "Пряжа", image: "https://cdn.poehali.dev/projects/ad0f5deb-23d3-4a01-84f2-3dc5225eca52/files/0b0b5de8-a0b0-411a-a1f8-c43cab847bdd.jpg", inStock: true },
];

export default function Index() {
  const [cart, setCart] = useState<{[key: number]: number}>({});
  const [selectedCategory, setSelectedCategory] = useState<string>("Все");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["Все", "Пряжа", "Инструменты", "Нитки", "Ткани"];

  const addToCart = (productId: number) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => {
      const newCart = {...prev};
      if (newCart[productId] > 1) {
        newCart[productId]--;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, count) => sum + count, 0);
  };

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((sum, [id, count]) => {
      const product = products.find(p => p.id === Number(id));
      return sum + (product ? product.price * count : 0);
    }, 0);
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "Все" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Icon name="Scissors" size={20} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">РукоДелие</h1>
                <p className="text-xs text-muted-foreground">Всё для творчества</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Icon name="Heart" size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="relative">
                <Icon name="ShoppingCart" size={20} />
                {getTotalItems() > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-primary text-xs">
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section 
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/ad0f5deb-23d3-4a01-84f2-3dc5225eca52/files/3981b389-787e-492e-8325-eb9c5a1bd318.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl animate-fade-in">
            <Badge className="mb-4 bg-primary/90">Новинка сезона</Badge>
            <h2 className="text-5xl font-bold mb-6 text-foreground">
              Творите с удовольствием
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Большой выбор качественных материалов для вязания, вышивания, шитья и других видов рукоделия
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Смотреть каталог
              <Icon name="ArrowRight" className="ml-2" size={18} />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 border-b bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "Truck", title: "Доставка", desc: "По всей России" },
              { icon: "ShieldCheck", title: "Гарантия", desc: "Качество товара" },
              { icon: "Percent", title: "Скидки", desc: "До 30% на наборы" },
              { icon: "Headphones", title: "Поддержка", desc: "Онлайн-консультации" },
            ].map((item, idx) => (
              <div key={idx} className="text-center animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name={item.icon as any} size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Каталог товаров</h2>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex gap-2 flex-wrap justify-center">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
              <div className="relative w-full md:w-64">
                <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Поиск товаров..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, idx) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: `${idx * 0.05}s` }}>
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  {!product.inStock && (
                    <Badge className="absolute top-2 right-2 bg-muted text-muted-foreground">
                      Нет в наличии
                    </Badge>
                  )}
                </div>
                <CardHeader className="pb-3">
                  <Badge variant="secondary" className="w-fit mb-2 text-xs">
                    {product.category}
                  </Badge>
                  <CardTitle className="text-base leading-tight">{product.name}</CardTitle>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="text-2xl font-bold text-primary">
                    {product.price.toLocaleString('ru-RU')} ₽
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  {cart[product.id] ? (
                    <div className="flex items-center gap-2 w-full">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={() => removeFromCart(product.id)}
                        className="flex-1"
                      >
                        <Icon name="Minus" size={16} />
                      </Button>
                      <span className="font-semibold min-w-[30px] text-center">
                        {cart[product.id]}
                      </span>
                      <Button 
                        size="sm" 
                        onClick={() => addToCart(product.id)}
                        className="flex-1 bg-primary"
                        disabled={!product.inStock}
                      >
                        <Icon name="Plus" size={16} />
                      </Button>
                    </div>
                  ) : (
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90" 
                      size="sm"
                      onClick={() => addToCart(product.id)}
                      disabled={!product.inStock}
                    >
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      В корзину
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Отзывы покупателей</h2>
            <p className="text-muted-foreground">Что говорят наши клиенты о покупках</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Анна Петрова",
                rating: 5,
                text: "Заказывала набор пряжи «Радуга» — качество превосходное! Цвета яркие, нитки не линяют. Связала внучке плед, получилось очень красиво. Доставка быстрая, всё упаковано аккуратно.",
                date: "15 ноября 2024",
                purchase: "Набор пряжи «Радуга»"
              },
              {
                name: "Мария Соколова",
                rating: 5,
                text: "Отличный магазин! Покупала спицы и крючки — всё как на картинках, качество на высоте. Цены приятные, особенно порадовала скидка на набор. Буду заказывать ещё!",
                date: "8 ноября 2024",
                purchase: "Профессиональные спицы"
              },
              {
                name: "Елена Кузнецова",
                rating: 4,
                text: "Заказала нитки мулине для вышивания. Большой выбор оттенков, качество DMC всегда на высоте. Единственное — доставка чуть задержалась, но менеджер предупредил заранее. В целом довольна!",
                date: "2 ноября 2024",
                purchase: "Нитки мулине DMC"
              }
            ].map((review, idx) => (
              <Card key={idx} className="animate-scale-in hover:shadow-lg transition-all" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{review.name}</h3>
                    <div className="flex gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-accent fill-accent" />
                      ))}
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-fit text-xs">
                    {review.purchase}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{review.text}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {getTotalItems() > 0 && (
        <div className="fixed bottom-6 right-6 z-50 animate-scale-in">
          <Card className="shadow-2xl border-2 border-primary w-80">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between text-lg">
                <span>Корзина</span>
                <Badge className="bg-primary">{getTotalItems()} шт</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="space-y-2 max-h-40 overflow-y-auto mb-3">
                {Object.entries(cart).map(([id, count]) => {
                  const product = products.find(p => p.id === Number(id));
                  return product ? (
                    <div key={id} className="flex justify-between text-sm">
                      <span className="truncate mr-2">{product.name}</span>
                      <span className="font-semibold whitespace-nowrap">
                        {count} × {product.price} ₽
                      </span>
                    </div>
                  ) : null;
                })}
              </div>
              <div className="border-t pt-3 flex justify-between items-center font-bold text-lg">
                <span>Итого:</span>
                <span className="text-primary">{getTotalPrice().toLocaleString('ru-RU')} ₽</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Оформить заказ
                <Icon name="ArrowRight" className="ml-2" size={16} />
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}

      <footer className="py-12 bg-card border-t mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Icon name="Scissors" size={20} className="text-primary" />
                РукоДелие
              </h3>
              <p className="text-sm text-muted-foreground">
                Интернет-магазин товаров для творчества и рукоделия
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Покупателям</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-primary">Возврат товара</a></li>
                <li><a href="#" className="hover:text-primary">Гарантии</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Пряжа</a></li>
                <li><a href="#" className="hover:text-primary">Инструменты</a></li>
                <li><a href="#" className="hover:text-primary">Ткани</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>8 (800) 555-35-35</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@rukodelie.ru</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            © 2024 РукоДелие. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}