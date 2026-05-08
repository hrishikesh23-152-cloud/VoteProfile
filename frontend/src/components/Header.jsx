import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import voteIcon from '../assets/vote.png'

const Header = ({ onAdminClick, onTeamClick, isViewingCandidate }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleAdminClick = () => {
    onAdminClick()
    setIsOpen(false)
  }

  const handleTeamClick = () => {
    if (onTeamClick) {
      onTeamClick()
    } else {
      scrollToSection('team')
    }
    setIsOpen(false)
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src={voteIcon} alt="VoteProfile Logo" className="h-10 w-10 mr-3 object-contain" />
            <h1 className="text-2xl font-bold text-indigo-600">VoteProfile</h1>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {isViewingCandidate ? (
              <>
                <button onClick={() => scrollToSection('agenda')} className="px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors text-sm font-medium">My Agenda</button>
                <button onClick={() => scrollToSection('feedback')} className="px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors text-sm font-medium">Suggestion</button>
              </>
            ) : (
              <button onClick={handleTeamClick} className="px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors text-sm font-medium">Team</button>
            )}
            <button onClick={handleAdminClick} className="ml-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
              Admin
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-100"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden border-t border-slate-100 py-3">
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={handleTeamClick}
                className="w-full rounded-lg px-3 py-3 text-left text-sm font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
              >
                Team
              </button>

              {isViewingCandidate && (
                <>
                  <button
                    type="button"
                    onClick={() => scrollToSection('agenda')}
                    className="w-full rounded-lg px-3 py-3 text-left text-sm font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    My Agenda
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToSection('feedback')}
                    className="w-full rounded-lg px-3 py-3 text-left text-sm font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    Suggestion
                  </button>
                </>
              )}

              <button
                type="button"
                onClick={handleAdminClick}
                className="w-full rounded-lg bg-indigo-600 px-3 py-3 text-left text-sm font-semibold text-white hover:bg-indigo-700"
              >
                Admin
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
