import { Link } from 'react-router-dom';
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export const NavBar = () => {
  return (
    <header className="flex items-center justify-between h-20 px-6 py-4 bg-[#0f172a]">
      <div className="flex items-center">
        <Link
            href="#"
            className="flex items-center gap-3 text-xl font-bold text-white hover:text-gray-200 transition-colors duration-300"
            prefetch={false}
        >
            <WalletIcon className="w-12 h-12 text-white" />
            <span className="font-semibold tracking-wide">Paytm Wallet</span>
        </Link>
        </div>
      <nav className="hidden md:flex items-center gap-4">
        <Link
          to="/"
          className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:text-primary-foreground text-[#e0e3e7]"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          to="/dashboard"
          className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:text-primary-foreground text-[#e0e3e7]"
          prefetch={false}
        >
          Payments
        </Link>
        <Link
          href="#"
          className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:text-primary-foreground text-[#e0e3e7]"
          prefetch={false}
        >
          Profile
        </Link>
        <Link
            to="/signup"
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:text-primary-foreground text-[#e0e3e7]"
            prefetch={false}
            >
            Signup
            </Link>
        <Link
          to="/signin"
          className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:text-primary-foreground text-[#e0e3e7]"
          prefetch={false}
        >
          Signin
        </Link>
        <Link
          to="/"
          className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:text-primary-foreground text-[#e0e3e7]"
          prefetch={false}
        >
          Logout
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <MenuIcon className="w-6 h-6 text-[#e0e3e7]" />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="md:hidden bg-primary">
          <div className="grid gap-4 p-4 bg-[#0f172a]">
            <Link
              to="/"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:text-primary-foreground text-[#e0e3e7]"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:text-primary-foreground text-[#e0e3e7]"
              prefetch={false}
            >
              Payments
            </Link>
            <Link
              href="#"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:text-primary-foreground text-[#e0e3e7]"
              prefetch={false}
            >
              Profile
            </Link>
            <Link
            to="/signup"
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:text-primary-foreground text-[#e0e3e7]"
            prefetch={false}
            >
            Signup
            </Link>
            <Link
            to="/signin"
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:text-primary-foreground text-[#e0e3e7]"
            prefetch={false}
            >
            Signin
            </Link>
            <Link
            to="/"
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:text-primary-foreground text-[#e0e3e7]"
            prefetch={false}
            >
            Logout
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function WalletIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  )
}