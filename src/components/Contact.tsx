import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'E-mail',
      info: 'lais.dias@uft.edu.br',
    }
  ];

  return (
    <section id="contato" className="py-20 bg-rosa-marfil-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Informações de Contato
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Para dúvidas sobre este trabalho de conclusão de curso ou questões relacionadas 
            ao tema de anemia falciforme e planejamento reprodutivo.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-text mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl border border-rosa-marfil-2 hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-start space-x-4">
                      <div className="text-accent bg-accent/10 p-3 rounded-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-text mb-1">{item.title}</h4>
                        <p className="text-accent font-medium mb-1">{item.info}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-white p-6 rounded-xl border border-rosa-marfil-2">
              <h4 className="font-semibold text-text mb-3">Sobre este Projeto</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Este trabalho de conclusão de curso foi elaborado pela aluna Laís Pereira Dias 
                e desenvolvido como parte da graduação Bacharelado em Enfermagem da UFT.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                O objetivo é contribuir para a melhoria dos cuidados de enfermagem direcionados 
                a pessoas com anemia falciforme, especialmente no âmbito reprodutivo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
