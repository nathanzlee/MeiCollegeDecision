import Header from '../components/header'

export default function Home() {
  const deadline = new Date(2023, 3, 7, 19, 0, 0, 0)
  const now = new Date()
  return (now >= deadline) ? (
    <div className="overflow-hidden">
      <Header />
      <div className="p-10 h-[100vh] w-[100vw] bg-gray-300">
        <h1 className="text-3xl mb-8">Status Update</h1>
        <p className="mb-8">New updates to Kari’s college decision were posted April 7, 2023.</p>
        <a href="/decision" className="text-red-600 cursor-pointer">{"View her decision here >>"}</a>
      </div>
    </div>
    
  ) : (
    <div>
      <Header />
      <div className="p-10 h-[100vh] w-[100vw] bg-gray-300">
        <h1 className="text-3xl mb-8">Status Update</h1>
        <p className="mb-8">Please check for updates at 7pm PST April 7, 2023.</p>
      </div>
    </div>
  )
}

