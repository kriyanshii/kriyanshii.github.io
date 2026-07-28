import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { to: '/', label: 'Home', match: (path: string) => path === '/' },
  { to: '/blog', label: 'Blog', match: (path: string) => path === '/blog' || path.startsWith('/blog/') },
  { to: '/projects', label: 'Projects', match: (path: string) => path === '/projects' },
  { to: '/resume', label: 'Resume', match: (path: string) => path === '/resume' },
  { to: '/talks', label: 'Talks', match: (path: string) => path === '/talks' },
  { to: '/opensource', label: 'OSS', match: (path: string) => path === '/opensource' },
] as const;

export function Navigation() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="py-10 dark:bg-[#1a1a1a]">
      <div className="max-w-2xl mx-auto px-6">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="font-serif text-xl text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            kriyanshi
          </Link>
          <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2">
            {navLinks.map(({ to, label, match }) => (
              <Link
                key={to}
                to={to}
                className={`text-[13px] transition-colors ${
                  match(location.pathname)
                    ? 'text-gray-900 dark:text-gray-100'
                    : 'text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200'
                }`}
              >
                {label}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-1 text-gray-500 transition-colors hover:text-gray-900 dark:hover:text-gray-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
