import React from "react";

import { Rocket, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 size-80 animate-pulse rounded-full bg-purple-600 opacity-20 mix-blend-multiply blur-xl"></div>
        <div className="absolute -bottom-40 -left-40 size-80 animate-pulse rounded-full bg-blue-600 opacity-20 mix-blend-multiply blur-xl"></div>
        <div className="absolute left-1/2 top-1/2 size-80 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-blue-600 opacity-20 mix-blend-multiply blur-xl"></div>
      </div>

      <header className="relative z-50 px-6 py-4">
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-r from-red-600 to-blue-600">
              <Rocket className="size-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Rails ♥ React</span>
          </div>
        </nav>
      </header>

      <section className="relative z-10 px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full border border-purple-600/30 bg-purple-600/20 px-4 py-2 text-sm font-medium text-purple-300">
              <Star className="mr-2 size-4" />
              Rails 8 + React 19 Template
            </span>
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl">
            Build Full-Stack Apps
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-red-400 bg-clip-text text-transparent">
              Lightning Fast
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-300">
            Skip the setup headaches. Start with a production-ready Rails API
            and React frontend that includes authentication, testing, deployment
            configs, and beautiful UI components.
          </p>
        </div>
      </section>

      <footer className="relative z-10 border-t border-slate-700 px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 flex items-center space-x-2 md:mb-0">
              <div className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-r from-red-600 to-blue-600">
                <Rocket className="size-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Rails ♥ React
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
