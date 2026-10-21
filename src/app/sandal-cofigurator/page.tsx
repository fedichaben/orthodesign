import React, { Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Configurator from './components/Configurator';

export default function SandalConfiguratorPage() {
  return (
    <>
      <Header />
      <main className="bg-background pt-16">
        <Suspense fallback={<div className="p-12 text-center text-muted-foreground">Chargement du configurateur…</div>}>
          <Configurator />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}