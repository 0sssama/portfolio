import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import { cn } from '@/base/utils/cn';

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Code({ className, ...props }: any) {
  const hasLang = /lang-(\w+)/.exec(className || '');

  return hasLang ? (
    <SyntaxHighlighter
      style={tomorrow}
      language={hasLang[1]}
      PreTag="div"
      className="scrollbar-thin scrollbar-track-base-content/5 scrollbar-thumb-base-content/40 scrollbar-track-rounded-xl scrollbar-thumb-rounded !m-0 w-full rounded-xl !bg-gradient-to-b !from-zinc-900 !to-zinc-950 font-mono text-xs"
      //   useInlineStyles
    >
      {String(props.children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code className={cn('rounded-xl', className)} {...props} />
  );
}
