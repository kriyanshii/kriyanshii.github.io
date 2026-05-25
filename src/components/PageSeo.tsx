import { useEffect } from 'react';
import { applyPageSeo, type PageSeoProps } from '../utils/seo';

export function PageSeo(props: PageSeoProps) {
  useEffect(() => applyPageSeo(props), [
    props.title,
    props.description,
    props.canonical,
    props.ogType,
    props.ogImage,
    props.publishedTime,
    props.author,
    props.tag,
  ]);

  return null;
}
