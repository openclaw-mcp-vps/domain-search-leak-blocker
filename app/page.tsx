export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Domain Privacy Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Stop Registrars From{' '}
          <span className="text-[#58a6ff]">Stealing Your Searches</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-10">
          Our browser extension intercepts your domain queries, routes them through randomized proxy servers, and alerts you the moment a registrar front-runs your search.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Get Protected — $7/mo
          </a>
          <span className="text-[#8b949e] text-sm">Cancel anytime. Instant access.</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-[#58a6ff] text-2xl mb-2">🛡️</div>
            <h3 className="text-white font-semibold mb-1">Query Masking</h3>
            <p className="text-[#8b949e] text-sm">Intercepts searches before they reach registrar servers, hiding your intent.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-[#58a6ff] text-2xl mb-2">🔀</div>
            <h3 className="text-white font-semibold mb-1">Proxy Routing</h3>
            <p className="text-[#8b949e] text-sm">Routes queries through randomized proxies with variable delays to prevent fingerprinting.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-[#58a6ff] text-2xl mb-2">🚨</div>
            <h3 className="text-white font-semibold mb-1">Front-Run Alerts</h3>
            <p className="text-[#8b949e] text-sm">Monitors domains you searched and notifies you if they get registered suspiciously fast.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$7</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Browser extension for Chrome & Firefox',
              'Unlimited domain search masking',
              'Proxy routing with randomized delays',
              'Front-running alert dashboard',
              'Search history & audit log',
              'Priority email support'
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Start Protecting Now
          </a>
          <p className="text-[#8b949e] text-xs mt-4">Secure checkout via Lemon Squeezy. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Do registrars really front-run domain searches?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Multiple registrars have been caught registering domains that users searched but didn't buy, then reselling them at inflated prices. This practice is well-documented and our tool is designed to stop it.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How does the proxy routing work?</h3>
            <p className="text-[#8b949e] text-sm">The extension intercepts WHOIS and availability queries, strips identifying headers, and routes them through our rotating proxy network with randomized timing — making it impossible to link searches back to you.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Which browsers and registrars are supported?</h3>
            <p className="text-[#8b949e] text-sm">The extension works on Chrome and Firefox. It supports all major registrars including GoDaddy, Namecheap, Google Domains, and Cloudflare Registrar, with more being added regularly.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-sm">
        <p>© {new Date().getFullYear()} Domain Search Leak Blocker. All rights reserved.</p>
      </footer>
    </main>
  )
}
