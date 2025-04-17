export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <main>
        <h1 className="text-4xl font-bold mb-8">About Our Web3 Wallet</h1>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg mb-4">
              We're building a next-generation cryptocurrency wallet that
              seamlessly bridges the gap between traditional web applications
              and the decentralized web. Our platform empowers users to interact
              with multiple blockchain networks through a single, intuitive
              interface.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Multi-chain support with seamless network switching</li>
              <li>Secure wallet connection and management</li>
              <li>Real-time transaction monitoring and history</li>
              <li>Cross-platform compatibility</li>
              <li>
                User-friendly interface for both beginners and advanced users
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
            <p className="mb-4">Built with cutting-edge web3 technologies:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Next.js for server-side rendering and optimal performance</li>
              <li>Dynamic SDK for flexible wallet integration</li>
              <li>wagmi hooks for Ethereum interaction</li>
              <li>viem for robust TypeScript Ethereum interface</li>
              <li>Starknet integration for Layer 2 scalability</li>
              <li>Modern React patterns and best practices</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Security & Privacy</h2>
            <p className="text-lg">
              We prioritize security and privacy in every aspect of our
              application. All wallet interactions are handled client-side,
              ensuring your private keys never leave your device. Our code is
              open-source and regularly audited to maintain the highest security
              standards.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
