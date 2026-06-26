export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-500 mb-8 text-4xl">
          🚧
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Site Under Maintenance
        </h1>

        <p className="text-gray-300 text-lg leading-8">
          We are currently upgrading our website to provide you with a
          better experience.
        </p>

        <p className="text-gray-400 mt-4">
          Please check back again shortly.
        </p>

        <div className="mt-10 inline-flex rounded-full bg-orange-500 px-6 py-3 text-white font-semibold">
          We'll be back soon!
        </div>
      </div>
    </main>
  );
}