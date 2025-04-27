import React from 'react';
import Navbar from '@/components/Navbar';
import { Layout } from "../layout/Layout";

export default function Home() {
  return (
    <Layout>
      <div>
       
        <section id="home" className="h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        </section>
        {/* Tambahkan konten lain di sini */}
      </div>
      </Layout>
  );
}
