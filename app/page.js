import { Inter } from 'next/font/google'
import Link from 'next/link';
import NavBar from './components/Navbar';
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
    
      <NavBar/>

      <div class="gap-4 place-items-center grid grid-cols-3 items-center justify-center mt-8">

      <div className="max-w-xs shadow-xl bg-white rounded-xl p-6 flex-1">
          <div className="text-2xl font-semibold">My Cards</div>
          <div className="flex items-center mt-4">
            <div className="flex-1 pr-8">Example cards my crazy...</div>
            <button className="bg-blue-500 p-2 text-white font-semibold w-28 rounded-full">
              <Link href="/cards">View 😎</Link>
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}
