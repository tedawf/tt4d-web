export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour

export const metadata = {
  title: 'Lottery Draws',
  description: 'Search and view historical lottery draw results'
}

export default function DrawsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}