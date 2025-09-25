import React from 'react';
import { ExternalLink, BookOpen, Video, Users, FileText, Globe } from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'video' | 'support' | 'material';
  url: string;
  icon: React.ReactNode;
  featured?: boolean;
}

const Resources: React.FC = () => {
  const resources: Resource[] = [
    {
      id: 'article1',
      title: 'Ministério da Saúde - Anemia Falciforme',
      description: 'Protocolo oficial do MS sobre diagnóstico e tratamento da anemia falciforme',
      type: 'article',
      url: '#',
      icon: <FileText className="w-6 h-6" />,
      featured: true
    },
    {
      id: 'article2',
      title: 'Sociedade Brasileira de Hematologia',
      description: 'Diretrizes nacionais para o cuidado de pessoas com anemia falciforme',
      type: 'article',
      url: '#',
      icon: <BookOpen className="w-6 h-6" />,
      featured: true
    },
    {
      id: 'video1',
      title: 'Vídeo Educativo - Planejamento Reprodutivo',
      description: 'Orientações visuais sobre planejamento familiar para pessoas com AF',
      type: 'video',
      url: '#',
      icon: <Video className="w-6 h-6" />
    },
    {
      id: 'support1',
      title: 'APAFF - Associação de Pais e Amigos',
      description: 'Grupo de apoio nacional para famílias e pessoas com anemia falciforme',
      type: 'support',
      url: '#',
      icon: <Users className="w-6 h-6" />,
      featured: true
    },
    {
      id: 'material1',
      title: 'Cartilha para Profissionais de Saúde',
      description: 'Material educativo completo para profissionais que atendem pessoas com AF',
      type: 'material',
      url: '#',
      icon: <FileText className="w-6 h-6" />
    },
    {
      id: 'article3',
      title: 'Portal FENAFAL',
      description: 'Federação Nacional das Associações de Pessoas com Anemia Falciforme',
      type: 'article',
      url: '#',
      icon: <Globe className="w-6 h-6" />
    },
    {
      id: 'video2',
      title: 'Webinar - Cuidados na Gestação',
      description: 'Série de vídeos sobre acompanhamento pré-natal especializado',
      type: 'video',
      url: '#',
      icon: <Video className="w-6 h-6" />
    },
    {
      id: 'support2',
      title: 'Rede de Apoio Regional',
      description: 'Conecte-se com outras famílias e grupos de apoio em sua região',
      type: 'support',
      url: '#',
      icon: <Users className="w-6 h-6" />
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'article':
        return 'bg-blue-100 text-blue-700';
      case 'video':
        return 'bg-purple-100 text-purple-700';
      case 'support':
        return 'bg-green-100 text-green-700';
      case 'material':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'article':
        return 'Artigo';
      case 'video':
        return 'Vídeo';
      case 'support':
        return 'Apoio';
      case 'material':
        return 'Material';
      default:
        return 'Recurso';
    }
  };

  const featuredResources = resources.filter(resource => resource.featured);
  const regularResources = resources.filter(resource => !resource.featured);

  return (
    <section id="recursos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Recursos Adicionais
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Links para artigos, vídeos educativos, grupos de apoio e materiais 
            para impressão que complementam este conteúdo.
          </p>
        </div>

        {/* Featured Resources */}
        {featuredResources.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-text mb-8 text-center">Recursos Destacados</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredResources.map((resource) => (
                <div
                  key={resource.id}
                  className="bg-gradient-to-br from-rosa-marfil-1 to-white p-8 rounded-2xl border border-rosa-marfil-2 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-accent">{resource.icon}</div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}>
                      {getTypeLabel(resource.type)}
                    </span>
                  </div>
                  
                  <h4 className="font-bold text-text text-lg mb-3 leading-tight">
                    {resource.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {resource.description}
                  </p>
                  
                  <a
                    href={resource.url}
                    className="inline-flex items-center space-x-2 text-accent font-semibold hover:text-accent/80 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Acessar Recurso</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Resources */}
        <div>
          <h3 className="text-2xl font-bold text-text mb-8 text-center">Outros Recursos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regularResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-accent/50 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-accent group-hover:scale-110 transition-transform duration-200">
                    {resource.icon}
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}>
                    {getTypeLabel(resource.type)}
                  </span>
                </div>
                
                <h4 className="font-semibold text-text mb-2 leading-tight">
                  {resource.title}
                </h4>
                
                <p className="text-gray-600 text-xs mb-4 leading-relaxed">
                  {resource.description}
                </p>
                
                <a
                  href={resource.url}
                  className="inline-flex items-center space-x-1 text-accent text-sm font-medium hover:text-accent/80 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Ver</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 pt-8 border-t border-rosa-marfil-2">
          <p className="text-xs text-gray-500 italic text-center">
            Fontes: Ministério da Saúde, Sociedade Brasileira de Hematologia, FENAFAL - Federação Nacional das Associações de Pessoas com Anemia Falciforme.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resources;
