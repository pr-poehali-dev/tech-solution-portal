import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { href: '#home', label: 'Главная' },
    { href: '#services', label: 'Услуги' },
    { href: '#projects', label: 'Проекты' },
    { href: '#tech', label: 'Технологии' },
    { href: '#team', label: 'Команда' },
    { href: '#testimonials', label: 'Отзывы' },
    { href: '#faq', label: 'FAQ' },
    { href: '#calculator', label: 'Калькулятор' },
  ];

  const handleClick = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      document.getElementById(href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Icon name="Menu" size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] bg-background border-border">
        <nav className="flex flex-col gap-4 mt-8">
          {menuItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className="text-left py-3 px-4 rounded-lg hover:bg-primary/10 transition-colors text-foreground hover:text-primary"
            >
              {item.label}
            </button>
          ))}
          <Button
            onClick={() => handleClick('#contact')}
            className="mt-4 w-full"
          >
            Связаться
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
