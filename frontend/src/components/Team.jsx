import { useState, useEffect } from 'react'
import axios from 'axios'

const Team = ({ onSelectCandidate }) => {
  const [candidates, setCandidates] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get('https://voteprofile.onrender.com/api/candidates')
        setCandidates(response.data)
      } catch (error) {
        console.error('Error fetching candidates:', error)
      }
      setLoading(false)
    }
    fetchCandidates()
  }, [])

  if (loading) return <div className="text-center py-20 text-4xl text-indigo-600">Loading Future of AEC...</div>

  return (
    <section id="team" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            <div className='text-red-600/70'>We are not just asking for a change - we're creating it!.</div>
          Meet the Candidates Shaping Tomorrow. 
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {candidates.map((candidate) => (
            <div
              key={candidate._id}
              className="bg-gray-50 p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => onSelectCandidate(candidate)}
            >
              <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-slate-100 mb-5">
                <img
                  src={`https://voteprofile.onrender.com${candidate.image}`}
                  alt={candidate.name}
                  className="h-full w-full object-cover object-top transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-900 mb-2">{candidate.name}</h3>
              <p className="text-center text-indigo-600 font-medium mb-3">{candidate.position}</p>
              <p className="text-gray-600 text-center text-sm">{candidate.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
