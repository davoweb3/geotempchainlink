import Image from 'next/image'

export function SiteFooter() {
  return (
    <footer className="container px-6 py-10 md:px-10">
      <h2 className="text-2xl font-medium">How It Works</h2>
      <Image
        src="/how-it-works.png"
        width={1926}
        height={1318}
        alt="how-it-works"
        className="mt-6 rounded-lg border border-border"
      />
    </footer>
  )
}
