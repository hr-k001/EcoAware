import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogs } from '../data/blogs';
import { ArrowLeft } from 'lucide-react';

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find(b => b.id === Number(id));

  if (!blog) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Blog not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button 
        onClick={() => navigate('/')}
        className="flex items-center text-green-600 hover:text-green-700 mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Blogs
      </button>
      
      <img 
        src={blog.image}
        alt={blog.title}
        className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
      />
      
      <div className="prose max-w-none">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{blog.title}</h1>
        <p className="text-gray-600 mb-8">{blog.date}</p>
        <div className="text-gray-700 leading-relaxed space-y-6">
          {blog.content.split('...').map((paragraph, index) => (
            <p key={index}>{paragraph.trim()}</p>
          ))}
        </div>
      </div>
    </div>
  );
}