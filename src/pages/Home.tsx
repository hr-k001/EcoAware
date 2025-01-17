import React from 'react';
import { useNavigate } from 'react-router-dom';
import { blogs } from '../data/blogs';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Climate Change Awareness</h1>
        <p className="text-xl text-gray-600">Understanding and acting on the climate crisis</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src={blog.image} 
                alt={blog.title}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.date}</p>
              <p className="text-gray-700">{blog.content.substring(0, 200)}...</p>
              <button 
                onClick={() => navigate(`/blog/${blog.id}`)}
                className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}