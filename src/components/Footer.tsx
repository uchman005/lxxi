import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">LXXI</h3>
          <p className="text-gray-400">Crafting wealth with precision.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
            <li><Link href="/what-we-do" className="hover:text-blue-400">What We Do</Link></li>
            <li><Link href="/insights" className="hover:text-blue-400">Insights</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/privacy" className="hover:text-blue-400">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-blue-400">Terms</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Connect</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-400">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-blue-400">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2025 LXXI. All rights reserved.</p>
      </div>
    </footer>
  );
}