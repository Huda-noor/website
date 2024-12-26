'use client'
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';

interface Article {
  title: string;
  description: string;
  urlToImage: string;
  url: string;
}

export default function News() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(null);

        const apiKey = '38a350b44f84448a96239288cc222794'; // API key
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${apiKey}`
        );

        if (!res.ok) {
          throw new Error(`Failed to fetch news: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        setArticles(data.articles || []);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Layout>
      <header className="bg-blue-800 text-white text-center py-4">
        <h1 className="text-2xl font-bold">Tech News</h1>
      </header>

      <div className="container mx-auto py-6 px-4">
        {loading && <p className="text-center text-blue-600">Loading...</p>}
        {error && <p className="text-center text-red-600">Error: {error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-lg font-semibold">{article.title}</h2>
                <p className="text-gray-600 text-sm mt-2">{article.description}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-500 hover:underline"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div></Layout>
    </div>
  );
}
