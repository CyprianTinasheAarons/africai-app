'use client'

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/263777150345?text=Hi%20AfricAi!%20I%27m%20interested%20in%20your%20AI%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all hover:scale-110 hover:shadow-[0_4px_30px_rgba(37,211,102,0.6)]"
      aria-label="Chat on WhatsApp"
      style={{ animation: 'whatsapp-pulse 2s ease-in-out infinite' }}
    >
      <svg
        viewBox="0 0 32 32"
        fill="white"
        className="h-8 w-8"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.924 15.924 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.302 22.602c-.39 1.1-1.932 2.014-3.178 2.282-.852.18-1.964.324-5.71-1.228-4.796-1.986-7.882-6.85-8.122-7.166-.228-.316-1.928-2.568-1.928-4.898 0-2.33 1.22-3.474 1.654-3.948.39-.428 1.024-.632 1.63-.632.196 0 .374.01.532.018.47.02.706.048 1.016.786.39.926 1.338 3.256 1.454 3.494.118.238.236.554.078.87-.148.326-.278.47-.516.742-.238.272-.464.48-.702.774-.218.256-.462.53-.198.96.264.428 1.176 1.94 2.526 3.142 1.736 1.546 3.198 2.026 3.652 2.246.39.19.704.158.964-.098.33-.326.736-.866 1.148-1.398.294-.38.664-.428 1.094-.256.436.166 2.76 1.302 3.23 1.54.47.238.786.354.902.554.118.198.118 1.15-.272 2.252z" />
      </svg>

      {/* Tooltip */}
      <span className="absolute right-full mr-3 whitespace-nowrap rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-gray-900 shadow-lg opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none">
        Chat with us!
      </span>

      <style jsx>{`
        @keyframes whatsapp-pulse {
          0%, 100% { box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4); }
          50% { box-shadow: 0 4px 30px rgba(37, 211, 102, 0.7); }
        }
      `}</style>
    </a>
  )
}
