import React from 'react';
import Layout from './components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Tech Innovations</h1>
        <p className="text-lg text-gray-600 mb-6">
          Stay updated with the latest advancements in technology and innovation.
        </p>
        <img
          src="/images/ai.jpg"
          alt="Tech Innovations"
          className="rounded-lg mx-auto w-full sm:w-1/2"
        />
      </div>
    </Layout>
  );
}
