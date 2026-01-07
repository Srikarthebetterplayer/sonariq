import Image from "next/image";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#fdf6e3] flex flex-col items-center px-4 pt-16">
      <h1 className="text-black text-4xl font-bold mb-12 text-center">
        Our Team
      </h1>

      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
        {/* Founder Label */}
        <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">
          Founder
        </p>

        {/* Founder Image */}
        <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6">
          <Image 
            src="/busy.jpg" 
            alt="Founder Photo"
            width={160}
            height={160}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Name */}
        <h2 className="text-black text-2xl font-semibold mb-2">
          Srikar Marthi
        </h2>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          Founder and developer of SonarIQ—building accessible, AI-powered
          hearing technology designed to empower users through intelligent
          sound analytics.
        </p>
      </div>
    </div>
  );
}
