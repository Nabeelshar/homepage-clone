import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mic, Camera, Grid } from 'lucide-react'

export default function Component() {
  const [search, setSearch] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (search.trim()) {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(search)}`
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-end items-center p-4 space-x-4">
        <a href="#" className="text-sm">Gmail</a>
        <a href="#" className="text-sm">Images</a>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Grid className="h-5 w-5" />
        </Button>
        <Button variant="secondary" className="rounded-full px-6">Sign in</Button>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-[584px] mb-8">
          <img src="/placeholder.svg?height=92&width=272" alt="Google" className="mx-auto mb-8" />
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-12 pl-5 pr-12 rounded-full border border-gray-200 focus:border-gray-300 focus:shadow-md"
              placeholder="Search Google or type a URL"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-3">
              <Button type="button" variant="ghost" size="icon" className="text-blue-500">
                <Mic className="h-5 w-5" />
              </Button>
              <Button type="button" variant="ghost" size="icon" className="text-blue-500">
                <Camera className="h-5 w-5" />
              </Button>
            </div>
          </form>
          <div className="flex justify-center mt-8 space-x-4">
            <Button type="submit" variant="secondary">Google Search</Button>
            <Button type="button" variant="secondary">I'm Feeling Lucky</Button>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 text-sm">
        <div className="px-8 py-3 border-b border-gray-200">
          <span className="text-gray-600">United States</span>
        </div>
        <div className="px-8 py-3 flex flex-col sm:flex-row justify-between">
          <div className="flex space-x-6 mb-4 sm:mb-0">
            <a href="#" className="text-gray-600 hover:underline">About</a>
            <a href="#" className="text-gray-600 hover:underline">Advertising</a>
            <a href="#" className="text-gray-600 hover:underline">Business</a>
            <a href="#" className="text-gray-600 hover:underline">How Search works</a>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:underline">Privacy</a>
            <a href="#" className="text-gray-600 hover:underline">Terms</a>
            <a href="#" className="text-gray-600 hover:underline">Settings</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
