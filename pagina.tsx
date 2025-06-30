import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => (
  <section id={id} className="py-16 px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{title}</h2>
      <div className="bg-white rounded-lg shadow-lg p-8">
        {children}
      </div>
    </div>
  </section>
);

const PresentationSection = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Section id="resumen" title="Resumen">
        <p className="text-gray-700 text-lg leading-relaxed">
          Aquí puedes incluir el resumen de tu proyecto. Describe brevemente los objetivos principales, 
          la metodología empleada y los resultados más importantes obtenidos en tu investigación o trabajo.
        </p>
      </Section>

      <Section id="presentacion" title="Presentación">
        <div className="space-y-6">
          <p className="text-gray-700 text-lg leading-relaxed">
            Esta sección contiene los detalles completos de tu presentación. Puedes incluir:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Introducción al tema</li>
            <li>Objetivos del proyecto</li>
            <li>Metodología utilizada</li>
            <li>Resultados obtenidos</li>
            <li>Conclusiones y recomendaciones</li>
          </ul>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Documento de Presentación</h3>
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <div className="flex flex-col items-center space-y-3">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-gray-600 font-medium">Documento Word de la Presentación</p>
                <p className="text-sm text-gray-500">Puedes subir tu archivo .docx aquí o incluir un enlace de descarga</p>
                <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Subir Documento
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="poster" title="Poster">
        <div className="text-center">
          <p className="text-gray-700 text-lg mb-6">
            Aquí puedes mostrar tu poster académico o presentación visual.
          </p>
          <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-12">
            <p className="text-gray-500">Espacio para tu poster</p>
            <p className="text-sm text-gray-400 mt-2">Puedes subir una imagen de tu poster aquí</p>
          </div>
        </div>
      </Section>

      <Section id="video" title="Video">
        <div className="text-center">
          <p className="text-gray-700 text-lg mb-6">
            Presenta tu proyecto a través de un video explicativo.
          </p>
          <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-12">
            <p className="text-gray-500">Espacio para tu video</p>
            <p className="text-sm text-gray-400 mt-2">Puedes embeber un video de YouTube, Vimeo o subir tu propio archivo</p>
          </div>
        </div>
      </Section>

      <Section id="powerpoint" title="PowerPoint">
        <div className="text-center">
          <p className="text-gray-700 text-lg mb-6">
            Descarga o visualiza la presentación de PowerPoint del proyecto.
          </p>
          <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-12">
            <p className="text-gray-500">Espacio para tu presentación PowerPoint</p>
            <p className="text-sm text-gray-400 mt-2">Puedes incluir un enlace de descarga o embeber las diapositivas</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default PresentationSection;