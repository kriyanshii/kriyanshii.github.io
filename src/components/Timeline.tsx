import { Briefcase, FolderGit2, Rss, Github , Dot} from 'lucide-react';
import { ProjectItem } from '../types';
import { Link } from 'react-router-dom';

interface TimelineProps {
  items: ProjectItem[];
  title?: string;
}

export function Timeline({ items, title }: TimelineProps) {
  return (
    <section>
      <h2 className="text-lg font-medium mb-8 dark:text-white">{title}</h2>
      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />
        
        <div className="space-y-8">
          {items.map((item, index) => (
            <div key={index} className="group relative pl-12">
              {/* Timeline Marker */}
              <div className="absolute left-0 top-[14px]">
  {(() => {
    switch (item.type) {
      case 'project':
        return (
          <div className="relative z-10 bg-[#fafafa] dark:bg-[#1a1a1a] flex items-center justify-center w-[18px] h-[18px] -ml-[3px] transition-colors group-hover:text-blue-500 dark:text-gray-400 dark:group-hover:text-blue-400">
            <FolderGit2 size={16} className="transition-colors" />
          </div>
        );
      case 'job':
        return <Briefcase size={16} className="transition-colors" />;
      case 'opnesource-contrib':
        return <Github  size={16} className="transition-colors"/>
      case 'blog':
        return <Rss size={16} className="transition-colors" />
      default:
        return <Dot size={9} className="rounded-full bg-gray-400 dark:bg-gray-500 transition-colors group-hover:bg-blue-500 dark:group-hover:bg-blue-400 -ml-[0px]" />;
    }
  })()}
</div>

              
              {/* Card Content */}
              <Link 
                to={item.link || '#'} 
                className="block -mt-1.5 p-4 rounded-lg transition-all hover:bg-white dark:hover:bg-[#242424] hover:shadow-sm"
              >
                <div className="flex items-center justify-between gap-4 mb-1">
                  <div className="flex items-center gap-2 min-w-0">
                    {item.isNew && (
                      <span className="relative shrink-0 px-2 py-0.5 text-[11px] font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full leading-none overflow-hidden">
                        NEW
                        <div className="absolute inset-0 w-3 h-full bg-white/40 dark:bg-white/10 skew-x-12 animate-shine" />
                      </span>
                    )}
                    <h3 className={`text-[15px] font-medium truncate transition-colors ${
                      'group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-400'
                    }`}>
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 shrink-0">{item.date}</span>
                </div>
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-2 py-0.5 text-[10px] font-medium rounded-full ${
                          tag === 'from scratch' 
                            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200'
                            : tag === 'tools'
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                            : tag === 'games'
                            ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200'
                            : tag === 'opensource'
                            ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
                {item.bulletPoints && item.bulletPoints.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {item.bulletPoints.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed flex items-start">
                        <span className="text-gray-400 dark:text-gray-500 mr-2 mt-1.5 text-[10px]">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}