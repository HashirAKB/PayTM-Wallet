import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const Home = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container space-y-10 xl:space-y-16">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Seamless Digital Payments
                </h1>
                <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                  Paytm Wallet - India's most trusted digital payment app. Secure, convenient, and always at your
                  fingertips.
                </p>
              </div>
              <Link
                to="/send"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary-foreground px-4 py-2 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Get Started
              </Link>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between bg-white shadow-md p-8 lg:p-16 rounded-md gap-8 lg:gap-16">
                <div className="max-w-2xl">
                    <div className="flex items-center space-x-6 mb-6">
                    <img
                        className="h-16 w-16 lg:h-20 lg:w-20"
                        src="https://assetscdn1.paytm.com/images/catalog/view/307186/1615957674521.png"
                        alt=""
                    />
                    <div className="font-bold text-2xl lg:text-4xl">Hassle Free Money Transfer</div>
                    </div>
                    <div className="mt-6">
                    <div className="font-semibold text-xl lg:text-2xl text-gray-800 mb-4">
                        Pay anyone directly from your bank account.
                    </div>
                    <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
                        Pay anyone, everywhere. Make contactless & secure payments in-stores or
                        online using Paytm Wallet or Directly from your Bank Account. Plus, send &
                        receive money from anyone.
                    </p>
                    </div>
                </div>
                <img
                    className="h-64 w-auto lg:h-80"
                    src="https://assetscdn1.paytm.com/images/catalog/view_item/728702/1626342071104.png"
                    alt=""
                />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid gap-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Unlock the Power of Paytm Wallet</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Paytm Wallet offers a seamless and secure digital payment experience, empowering you to manage your
                  finances with ease.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl divide-y divide-border rounded-lg border md:grid-cols-3 md:divide-x md:divide-y-0">
              <div className="grid gap-1 p-8 md:p-10">
                <h3 className="text-xl font-bold">Instant Payments</h3>
                <p className="text-muted-foreground">
                  Make payments in seconds with Paytm Wallet\'s lightning-fast transaction processing.
                </p>
              </div>
              <div className="grid gap-1 p-8 md:p-10">
                <h3 className="text-xl font-bold">Secure Transactions</h3>
                <p className="text-muted-foreground">
                  Enjoy the peace of mind of advanced security features, protecting your financial data.
                </p>
              </div>
              <div className="grid gap-1 p-8 md:p-10">
                <h3 className="text-xl font-bold">Rewards & Cashbacks</h3>
                <p className="text-muted-foreground">
                  Earn exciting rewards and cashbacks on every transaction, making your payments even more rewarding.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Join the Paytm Wallet Revolution
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Experience the convenience and security of India\'s most trusted digital payment app.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                <Button type="submit">Get Notified</Button>
              </form>
              <p className="text-xs text-muted-foreground">
                Sign up to get notified for exclusive sales and discounts.</p>
                <Link href="#" className="text-xs text-muted-foreground underline underline-offset-2" prefetch={false}>
                  Terms &amp; Conditions
                </Link>
              
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link href="#" prefetch={false}>
              About Us
            </Link>
            <Link href="#" prefetch={false}>
              Our Team
            </Link>
            <Link href="#" prefetch={false}>
              Careers
            </Link>
            <Link href="#" prefetch={false}>
              News
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Products</h3>
            <Link href="#" prefetch={false}>
              Paytm Wallet
            </Link>
            <Link href="#" prefetch={false}>
              Paytm UPI
            </Link>
            <Link href="#" prefetch={false}>
              Paytm Postpaid
            </Link>
            <Link href="#" prefetch={false}>
              Paytm Payments Bank
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#" prefetch={false}>
              Blog
            </Link>
            <Link href="#" prefetch={false}>
              Support
            </Link>
            <Link href="#" prefetch={false}>
              FAQs
            </Link>
            <Link href="#" prefetch={false}>
              Developer Portal
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" prefetch={false}>
              Cookie Policy
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link href="#" prefetch={false}>
              Customer Support
            </Link>
            <Link href="#" prefetch={false}>
              Sales
            </Link>
            <Link href="#" prefetch={false}>
              Partnerships
            </Link>
            <Link href="#" prefetch={false}>
              Press
            </Link>
          </div>
        </div>
        <div className="container max-w-7xl mt-8 flex items-center justify-between">
    <div className="flex items-center text-gray-500 text-sm">
      
      <a  href="https://github.com/hashirakb"
        className="hover:text-gray-700 transition-colors duration-300 flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-5 h-5 mr-2"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.481 0-.237-.008-.868-.013-1.703-2.782.602-3.369-1.34-3.369-1.34-.454-1.152-1.11-1.459-1.11-1.459-.908-.618.069-.606.069-.606 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.831.092-.645.35-1.088.636-1.337-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.389-1.979 1.032-2.675-.103-.252-.448-1.266.098-2.638 0 0 .84-.268 2.75 1.026A9.596 9.596 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.372.202 2.386.1 2.638.64.696 1.03 1.587 1.03 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.917.678 1.852 0 1.337-.012 2.415-.012 2.74 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
          />
        </svg>
        Crafted By HashirAKB
      </a>
    </div>
    <div className="flex items-center space-x-2 text-gray-500 text-sm">
      <span>&copy; 2024 HashDev Solutions</span>
    </div>
  </div>
        
      </footer>
    </div>
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