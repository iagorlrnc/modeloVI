import React from 'react';
import { BookOpen } from 'lucide-react';

const FinalConsiderations: React.FC = () => {
  return (
    <section id="consideracoes-finais" className="py-20 bg-gradient-to-br from-accent/10 to-rosa-marfil-2/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <BookOpen className="w-8 h-8 text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold text-text">
              Considerações Finais
            </h2>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Este projeto foi elaborado pela acadêmica Laís Pereira Dias 
                e desenvolvido como parte do curso de Bacharelado em Enfermagem da UFT.
              </p>
              <p>
                O objetivo é contribuir para a melhoria dos cuidados de enfermagem direcionados 
                a pessoas com anemia falciforme, especialmente no âmbito reprodutivo.
              </p>
              <p>
                O planejamento reprodutivo para pessoas com anemia falciforme requer uma abordagem 
                multidisciplinar e individualizada, considerando a gravidade da doença, o histórico 
                de complicações e as preferências pessoais de cada paciente.
              </p>
              
              <p>
                A educação em saúde contínua, tanto para profissionais quanto para pacientes, 
                é fundamental para melhorar os desfechos reprodutivos e reduzir os riscos 
                materno-fetais associados à anemia falciforme.
              </p>
              
              <p>
                Este trabalho contribui para o desenvolvimento de práticas de cuidado mais 
                efetivas e humanizadas, promovendo a autonomia reprodutiva com segurança 
                para pessoas com anemia falciforme.
              </p>
              
              <p>
                A implementação de protocolos específicos e a capacitação continuada dos 
                profissionais de saúde são essenciais para garantir um cuidado integral 
                e de qualidade a essa população.
              </p>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-rosa-marfil-2">
            <p className="text-xs text-gray-500 italic text-center">
              Fonte: <a href="https://bvsms.saude.gov.br/bvs/publicacoes/doenca_falciforme_atencao_integral_saude_mulher.pdf" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Ministério da Saúde. Doença Falciforme Atenção Integral à Saúde das Mulheres. Brasília: MS, 2015.</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalConsiderations;
