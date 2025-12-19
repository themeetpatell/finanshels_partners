import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockAPI } from '../../lib/mockData';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { ArrowLeft, CheckCircle, Clock } from 'lucide-react';

const ServiceCatalog = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      const response = await mockAPI.getServices();
      setServices(response.data);
    } catch (error) {
      console.error('Error loading services:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = ['all', ...new Set(services.map((s) => s.category))];
  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter((s) => s.category === selectedCategory);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <button
          onClick={() => navigate('/portal/services')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Service Requests
        </button>
        <h1 className="text-3xl font-bold text-gray-900">Service Catalog</h1>
        <p className="text-gray-600 mt-1">Browse available services for your customers</p>
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <Card key={service.id} className="p-6 flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                  {service.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mt-1">{service.name}</h3>
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-4 flex-1">{service.description}</p>

            <div className="space-y-3 mb-4">
              <div className="flex items-center text-sm">
                <DollarSign className="w-4 h-4 text-gray-400 mr-2" />
                <span className="text-gray-600">From</span>
                <span className="font-semibold text-gray-900 ml-1">
                  AED {service.basePrice?.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center text-sm">
                <Clock className="w-4 h-4 text-gray-400 mr-2" />
                <span className="text-gray-600">{service.duration}</span>
              </div>
            </div>

            {service.requirements && service.requirements.length > 0 && (
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-700 mb-2 uppercase">Requirements</h4>
                <ul className="space-y-1">
                  {service.requirements.map((req, index) => (
                    <li key={index} className="flex items-start text-xs text-gray-600">
                      <CheckCircle className="w-3 h-3 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Button
              onClick={() => navigate('/portal/services/new')}
              className="w-full mt-auto"
            >
              Request This Service
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

const DollarSign = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default ServiceCatalog;
