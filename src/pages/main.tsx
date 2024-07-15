import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-6">Selamat Datang di Portofolio Saya</h1>
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Tentang Saya</h2>
          <p className="text-gray-700 mb-4">
            Saya adalah seorang pengembang web yang bersemangat dalam menciptakan pengalaman digital yang menarik dan fungsional.
          </p>
          <button className="btn btn-primary">Lihat Proyek</button>
        </section>
      </main>
    </div>
  );
};

export default Home;