import clsx from 'clsx';
import * as React from 'react';

interface TextProps {
  title?: string;
  subTitle?: string;
  className?: string;
}

export default function SectionText({ title, subTitle, className }: TextProps) {
  return (
    <div
      className={clsx(
        'flex items-center justify-between mt-2 mb-4 text-white',
        className
      )}
    >
      <h3>{title}</h3>
      <p className=''>{subTitle ?? subTitle}</p>
    </div>
  );
}
