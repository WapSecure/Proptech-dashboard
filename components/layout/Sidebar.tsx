'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HomeIcon,
  ToolBoxIcon,
  ProfileIcon,
  ArticleIcon,
  ScrollIcon,
  TaskSquareIcon,
} from '@/components/ui/Icons';

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const navItems: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { label: 'Listings', href: '/listings', icon: ToolBoxIcon },
  { label: 'Users', href: '/users', icon: ProfileIcon },
  { label: 'Request', href: '/request', icon: ArticleIcon },
  { label: 'Applications', href: '/applications', icon: ScrollIcon },
  { label: 'Tasks', href: '/tasks', icon: TaskSquareIcon },
];

const Sidebar = () => {
  const pathname = usePathname();

  const handleNonDashboardClick = (e: React.MouseEvent, href: string) => {
    if (href !== '/dashboard') {
      e.preventDefault();
    }
  };

  return (
    <nav className="flex flex-wrap md:flex-nowrap justify-center md:justify-between py-4 gap-2 md:gap-0">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;

        return (
          <Link
            key={item.label}
            href={item.href as any}
            onClick={(e) => handleNonDashboardClick(e, item.href)}
            className={`
              group w-full sm:w-[150px] md:w-[170px] h-[38px] flex items-center justify-center gap-2 rounded-md
              transition-all duration-200 cursor-pointer flex-shrink-0
              ${
                isActive
                  ? 'bg-primary-50 text-primary-500'
                  : 'text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700'
              }
            `}
          >
            <Icon
              className={`w-5 h-5 transition-colors duration-200 ${
                isActive 
                  ? 'text-primary-500' 
                  : 'text-neutral-500 group-hover:text-neutral-700'
              }`}
            />
            <span className="text-sm font-medium leading-none transition-colors duration-200">
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Sidebar;