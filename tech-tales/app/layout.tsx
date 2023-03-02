import './globals.css'
import NavBar from './nav/page'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
       <>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
       <html lang="en"></html>
      <head />
      <body>
        <NavBar />
        {children}
      </body>
    </>
  )
}
