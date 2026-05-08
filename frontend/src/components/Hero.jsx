const Hero = ({ candidate, onBack }) => {
  if (!candidate) return null

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="bg-gradient-to-r from-red-400 to-purple-500 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={onBack} className="mb-8 bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
          Back to Team
        </button>
        <div className="grid items-center gap-10 md:grid-cols-[minmax(240px,360px)_1fr]">
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl bg-indigo-500/40 shadow-2xl ring-4 ring-white/20">
            <img
              src={`https://voteprofile.onrender.com${candidate.image}`}
              alt={candidate.name}
              className="aspect-[4/5] h-full w-full object-cover object-top"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {candidate.name}
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-indigo-200">
              {candidate.position}
            </p>
            <p className="text-lg mb-8 max-w-2xl">
              {candidate.bio}
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <button onClick={() => scrollToSection('agenda')} className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Learn More
              </button>
              <button onClick={() => scrollToSection('feedback')} className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                Your valuable suggestion
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
