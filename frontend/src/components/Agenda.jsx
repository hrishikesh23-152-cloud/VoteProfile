import { useState } from 'react'
import { ChevronLeft } from 'lucide-react'

const Agenda = ({ agenda }) => {
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <section id="agenda" className="relative overflow-hidden bg-gradient-to-br from-sky-100 via-indigo-50 to-rose-100 py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-indigo-200 bg-white/70 px-4 py-2 text-xs font-bold uppercase text-indigo-600 shadow-sm">
            Priority Plan
          </span>
          <h2 className="mt-5 text-3xl font-bold text-slate-950 md:text-5xl">
            My Agenda
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Clear goals, practical promises, and the work that matters most.
          </p>
        </div>

        <div className="flex justify-center">
          <div className={`grid w-full gap-6 ${
            agenda.length === 1 ? 'max-w-md grid-cols-1' :
            agenda.length === 2 ? 'max-w-3xl grid-cols-1 sm:grid-cols-2' :
            'max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          }`}>
            {agenda.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedItem(item)}
                className="group relative flex min-h-[320px] w-full flex-col overflow-hidden rounded-2xl border border-white/70 bg-white/75 p-7 text-left shadow-lg shadow-indigo-100/70 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-2xl hover:shadow-indigo-200/70 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <div className="absolute right-5 top-5 rounded-full bg-slate-950 px-3 py-1 text-xs font-bold text-white">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-400 text-5xl shadow-lg shadow-indigo-200 transition-transform duration-300 group-hover:scale-105">
                  {item.icon}
                </div>

                <h3 className="mb-4 pr-10 text-2xl font-bold leading-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="line-clamp-4 text-sm font-medium leading-6 text-slate-600">
                  {item.description}
                </p>

                <span className="mt-auto pt-6 text-sm font-bold text-indigo-600">
                  Read full agenda
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-md">
          <div className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-indigo-100 bg-gradient-to-r from-indigo-50 to-sky-50 p-6">
              <button
                onClick={() => setSelectedItem(null)}
                className="flex items-center gap-2 font-bold text-slate-500 transition-colors hover:text-indigo-600"
              >
                <ChevronLeft size={20} />
                <span>Back</span>
              </button>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
                {selectedItem.icon}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
              <h3 className="mb-6 text-3xl font-bold text-slate-950">
                {selectedItem.title}
              </h3>

              <p className="whitespace-pre-line text-lg leading-relaxed text-slate-700">
                {selectedItem.description}
              </p>

              <div className="mt-8 flex items-center gap-4 border-t border-indigo-100 pt-8 text-indigo-600">
                <div className="h-1 w-12 rounded-full bg-indigo-600" />
                <span className="text-xs font-bold uppercase">Goal Focused</span>
              </div>
            </div>

            <div className="flex justify-end border-t border-slate-100 bg-slate-50 p-6">
              <button
                onClick={() => setSelectedItem(null)}
                className="rounded-xl bg-indigo-600 px-8 py-3 font-bold text-white shadow-lg shadow-indigo-100 transition-all hover:bg-indigo-700 active:scale-95"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Agenda
