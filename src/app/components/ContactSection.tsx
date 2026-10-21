'use client';

import React, { useEffect, useState } from 'react';

interface Recap {
  id: string;
  summary: string;
}

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [recap, setRecap] = useState<Recap | null>(null);
  const [configId, setConfigId] = useState('');

  useEffect(() => {
    try {
      const raw = window.sessionStorage.getItem('od-last-result');
      if (raw) {
        const data = JSON.parse(raw) as Recap;
        setRecap(data);
        setConfigId(data.id);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="bg-muted py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="font-display text-display-lg">Écrivez-nous</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Une question sur le projet ? Laissez un message. Le nom est facultatif et vos données restent dans ce
            prototype.
          </p>
          {recap && (
            <div className="mt-6 rounded-2xl border border-border bg-card p-5">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">Votre configuration</p>
              <p className="mt-2 font-display text-xl">{recap.id}</p>
              <p className="mt-1 text-[15px] leading-relaxed text-muted-foreground">{recap.summary}</p>
            </div>
          )}
        </div>

        <form onSubmit={onSubmit} className="space-y-4 rounded-3xl border border-border bg-card p-6 sm:p-8 lg:col-span-7">
          {sent ? (
            <p className="rounded-2xl bg-muted p-5 text-base">
              Merci. Ce prototype n’envoie pas encore de message ; votre texte n’a pas quitté cet appareil.
            </p>
          ) : (
            <>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium">
                  Nom (facultatif)
                  <input className="mt-1 min-h-[48px] w-full rounded-xl border border-input bg-background px-4 text-base" name="name" />
                </label>
                <label className="block text-sm font-medium">
                  E-mail ou téléphone
                  <input className="mt-1 min-h-[48px] w-full rounded-xl border border-input bg-background px-4 text-base" name="contact" required />
                </label>
              </div>
              <label className="block text-sm font-medium">
                Identifiant de configuration (facultatif)
                <input
                  className="mt-1 min-h-[48px] w-full rounded-xl border border-input bg-background px-4 text-base"
                  value={configId}
                  onChange={(e) => setConfigId(e.target.value)}
                  name="configId"
                />
              </label>
              <label className="block text-sm font-medium">
                Message
                <textarea className="mt-1 min-h-[140px] w-full rounded-xl border border-input bg-background px-4 py-3 text-base" name="message" required />
              </label>
              <button type="submit" className="inline-flex min-h-[52px] items-center rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground">
                Envoyer
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}