import Image from 'next/image'
import { MainComponent } from './components/MainComponent'

export default function Home() {
  return (
    <main className="h-screen	bg-[url('/background.jpg')] bg-cover">
      <MainComponent />
    </main>
  )
}
