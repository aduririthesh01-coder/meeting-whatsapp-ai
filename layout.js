export const metadata = {
  title: 'Meeting WhatsApp AI',
  description: 'Convert meeting transcriptions into WhatsApp follow-up messages',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{margin: 0, fontFamily: 'system-ui, sans-serif'}}>{children}</body>
    </html>
  )
}
