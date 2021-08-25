import React from 'react';
import Link from 'next/link';

interface Props {
  text: string;
  href: string;
  Icon: any;
}

const MainMenuLink = ({ text, href, Icon }: Props) => {
  return (
    <Link href={href} passHref>
      <a className="flex flex-col justify-center items-center text-[color:var(--primary)]">
        <Icon className="h-6" />
        <span className="text-xs">{text}</span>
      </a>
    </Link>
  );
};

export default MainMenuLink;
