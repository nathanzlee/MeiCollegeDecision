import Header from '../components/header'

export default function Home() {
  return (
    <div>
      <Header />
      <div className="p-10 h-[100vh] bg-gray-300">
        <h1 className="text-3xl mb-8">Status Update</h1>
        <p className="mb-8">New updates to Kari’s college decision were posted April 7, 2023.</p>
        <a href="/decision" className="text-red-600 cursor-pointer">{"View her decision here >>"}</a>
      </div>
    </div>
    
  )
}

