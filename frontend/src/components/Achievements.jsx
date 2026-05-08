const Achievements = ({ achievements }) => {
  return (
    <section id="achievements" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h3>
              <p className="text-gray-600 mb-3">{achievement.description}</p>
              <div className="text-sm text-indigo-600 font-medium">{achievement.year}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements