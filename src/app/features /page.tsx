export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#fdf6e3] text-black">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Features</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Intelligent Sound Analytics</h3>
              <p className="text-gray-600">Advanced algorithms for real-time audio processing and analysis.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Noise-Aware Technology</h3>
              <p className="text-gray-600">Adaptive technology that responds to environmental sound conditions.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Future-Ready Design</h3>
              <p className="text-gray-600">Built for the next generation of hearing and audio technology.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Easy Integration</h3>
              <p className="text-gray-600">Simple APIs and SDKs for seamless integration into your applications.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}