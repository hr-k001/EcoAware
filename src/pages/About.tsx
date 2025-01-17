import React from 'react';
import { Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <Globe className="w-16 h-16 mx-auto text-green-600 mb-4" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About EcoAware</h1>
        <p className="text-xl text-gray-600">Empowering climate action through education</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="prose max-w-none">
          <p className="mb-6">
            EcoAware is dedicated to raising awareness about climate change and its impacts on our planet. 
            Our mission is to educate and empower individuals to take meaningful action against climate change.
          </p>

          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="mb-6">
            We believe that understanding climate change is the first step toward making a difference. 
            Through our educational resources, interactive tools, and engaging content, we aim to make 
            climate science accessible to everyone.
          </p>

          <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Educational blog posts about climate change and environmental issues</li>
            <li>Interactive quizzes to test your knowledge</li>
            <li>Carbon footprint calculator to measure your impact</li>
            <li>Resources for taking action against climate change</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
          <p>
            Climate change affects us all, and we all have a role to play in addressing it. 
            Start by exploring our resources, taking our quiz, and calculating your carbon footprint. 
            Every small action counts towards a more sustainable future.
          </p>
        </div>
      </div>
    </div>
  );
}