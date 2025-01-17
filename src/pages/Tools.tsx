import React, { useState } from 'react';
import type { FootprintFormData } from '../types';

export default function Tools() {
  const [formData, setFormData] = useState<FootprintFormData>({
    electricity: 0,
    gas: 0,
    car: 0,
    flights: 0
  });
  const [footprint, setFootprint] = useState<number | null>(null);

  const calculateFootprint = () => {
    // Simple calculation for demonstration
    const total = 
      (formData.electricity * 0.4) + // kWh to CO2
      (formData.gas * 2.3) +         // therms to CO2
      (formData.car * 0.404) +       // miles to CO2
      (formData.flights * 90);       // flights to CO2
    
    setFootprint(Math.round(total));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Carbon Footprint Calculator</h1>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Monthly Electricity Usage (kWh)
            </label>
            <input
              type="number"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              value={formData.electricity}
              onChange={(e) => setFormData({...formData, electricity: Number(e.target.value)})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Monthly Natural Gas Usage (therms)
            </label>
            <input
              type="number"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              value={formData.gas}
              onChange={(e) => setFormData({...formData, gas: Number(e.target.value)})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Monthly Car Miles
            </label>
            <input
              type="number"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              value={formData.car}
              onChange={(e) => setFormData({...formData, car: Number(e.target.value)})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Flights per Year
            </label>
            <input
              type="number"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              value={formData.flights}
              onChange={(e) => setFormData({...formData, flights: Number(e.target.value)})}
            />
          </div>

          <button
            onClick={calculateFootprint}
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Calculate Footprint
          </button>

          {footprint !== null && (
            <div className="mt-6 text-center">
              <h2 className="text-2xl font-bold">Your Carbon Footprint</h2>
              <p className="text-4xl font-bold text-green-600 mt-2">
                {footprint} kg CO2/year
              </p>
              <p className="mt-4 text-gray-600">
                {footprint < 1000 ? "Great job! Your carbon footprint is below average." :
                 footprint < 2000 ? "Your carbon footprint is about average. There's room for improvement!" :
                 "Your carbon footprint is above average. Consider ways to reduce your impact."}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}