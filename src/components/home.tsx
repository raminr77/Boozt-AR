interface Link {
  id: number;
  url: string;
  icon: string;
  title: string;
}

const LINKS: Link[] = [
  {
    id: 1,
    icon: 'linkedin',
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/raminr77/'
  },
  { id: 2, icon: 'github', title: 'GitHub', url: 'https://github.com/raminr77' },
  {
    id: 3,
    icon: 'slides',
    title: 'AR Slides',
    url: 'https://slides.com/raminr77/boozt-ar/fullscreen'
  },
  { id: 4, icon: 'link', title: 'Personal Page', url: 'https://raminrezaei.ir' }
];

const ContactBtn = ({ title, url, icon }: Link) => {
  return (
    <a target='_blank' className='flex items-center gap-2' href={url}>
      <img width={32} src={`/images/${icon}.png`} alt={title} />
      <span>{title}</span>
    </a>
  );
};

export function Home() {
  return (
    <section className='flex flex-col items-center justify-center'>
      <img
        src='/images/slides-thumb.jpg'
        className='rounded-md'
        alt='AR Slides'
        width='150'
      />

      <div className='grid grid-cols-2 gap-x-4 mt-8 gap-y-7'>
        {LINKS.map(({ id, title, url, icon }) => (
          <ContactBtn id={id} key={id} title={title} url={url} icon={icon} />
        ))}
      </div>
    </section>
  );
}
