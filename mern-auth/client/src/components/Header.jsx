import { Link } from "lucide-react"

export default function Header() {
  return (
    <div className='bg-slate-500'>
        <div classname = "flex justify-between items-center maxw-6xl mx-auto p-3 ">
            <Link to= '/'>
            <h1 className="font-bold">Auth App</h1>
            </Link>
            
            <ul className = "flex gap-4">
                <Link to='/'>
                <li>Home</li>
                </Link>
                
                <Link to = '/about'>
                <li>About</li>
                </Link>
                
                <Link to ='/sign-in'>
                <li>Sign In</li>
                </Link>
                
            </ul>
        </div>
    </div>
  )
}
