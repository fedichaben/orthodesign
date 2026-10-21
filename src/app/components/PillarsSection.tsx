import React from 'react';
import Icon from '@/components/ui/AppIcon';
import RevealOnScroll from '@/components/RevealOnScroll';

const pillars = [
  {
    icon: 'HeartIcon',
    number: '01',
    kicker: 'Confort',
    title: 'Ergonomie',
    text: 'Profil de semelle, voûte, déroulé du pas et maintien : chaque paramètre est pensé comme un choix de confort, jamais comme une promesse médicale.',
    tags: ['Semelle', 'Voûte', 'Déroulé du pas', 'Maintien'],
    image: '/assets/images/pillars/ergonomie.jpg',
    span: 'lg:col-span-7 lg:row-span-2',
    large: true,
  },
  {
    icon: 'SparklesIcon',
    number: '02',
    kicker: 'Style',
    title: 'Esthétique',
    text: 'Matières, couleurs et finitions pour une pièce que l’on a envie de porter.',
    image: '/assets/images/pillars/esthetique.jpg',
    span: 'lg:col-span-5',
    large: false,
  },
  {
    icon: 'AdjustmentsHorizontalIcon',
    number: '03',
    kicker: 'Sur mesure',
    title: 'Personnalisation',
    text: 'Initiales, motifs et détails de couleur pour exprimer votre style.',
    image: '/assets/images/pillars/personnalisation.jpg',
    span: 'lg:col-span-5',
    large: false,
  },
];

export default function PillarsSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <RevealOnScroll>
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <span className="h-px w-8 bg-[#A97B2C]" />
                Notre approche
              </p>
              <h2 className="max-w-2xl font-display text-display-lg leading-[1.08] tracking-tight text-balance">
                Trois piliers, un même geste de{' '}
                <span className="italic text-[#8A5F1E]">design.</span>
              </h2>
            </div>

            <p className="max-w-md text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg lg:pb-2">
              Le projet interroge la manière dont le design peut réconcilier ce
              qui est{' '}
              <strong className="font-semibold text-foreground">confortable</strong>{' '}
              et ce qui est{' '}
              <strong className="font-semibold text-foreground">désirable</strong>.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid gap-4 lg:grid-cols-12 lg:grid-rows-2">
          {pillars.map((p, i) => (
            <RevealOnScroll key={p.title} delay={i * 120} className={p.span}>
              <article
                className={`group relative isolate flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-[#6B5742] text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  p.large
                    ? 'min-h-[400px] p-8 sm:p-10 lg:min-h-0 lg:p-12'
                    : 'min-h-[270px] p-7 sm:p-8'
                }`}
              >
                {/* Photo */}
                <div
                  className="absolute inset-0 -z-20 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${p.image}')` }}
                  aria-hidden="true"
                />

                {/* Dégradé renforcé en bas, là où se trouve le texte */}
                <div
                  className="absolute inset-0 -z-10 bg-gradient-to-t from-[#241a11]/95 via-[#241a11]/55 to-[#241a11]/5"
                  aria-hidden="true"
                />

                {/* Haut : icône + numéro */}
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/90 text-[#80623B] shadow-sm backdrop-blur-sm sm:h-14 sm:w-14">
                    <Icon name={p.icon} size={p.large ? 30 : 26} />
                  </div>
                  <span className="font-display text-2xl italic text-white/70 [text-shadow:0_1px_8px_rgba(0,0,0,0.5)] sm:text-3xl">
                    {p.number}
                  </span>
                </div>

                {/* Bas : texte */}
                <div className="mt-12">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E6C98C] [text-shadow:0_1px_6px_rgba(0,0,0,0.5)] sm:text-xs">
                    {p.kicker}
                  </p>

                  <h3
                    className={`font-display leading-[1.05] tracking-tight [text-shadow:0_2px_14px_rgba(0,0,0,0.5)] ${
                      p.large ? 'text-4xl sm:text-5xl lg:text-6xl' : 'text-3xl sm:text-4xl'
                    }`}
                  >
                    {p.title}
                  </h3>

                  <div className="mt-5 h-1 w-14 rounded-full bg-[#D6B477]" />

                  <p
                    className={`mt-5 max-w-md leading-relaxed text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.55)] text-pretty ${
                      p.large ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
                    }`}
                  >
                    {p.text}
                  </p>

                  {p.tags && (
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-white/35 bg-white/15 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}