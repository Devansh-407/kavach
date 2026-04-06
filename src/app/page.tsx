"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Shield, Zap, CloudRain, BarChart3, ChevronRight, LogIn, BrainCircuit, Cpu, Activity, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Revolutionary Header */}
      <header className="px-8 lg:px-16 h-20 flex items-center justify-between border-b border-border bg-background backdrop-blur-xl sticky top-0 z-50 shadow-lg">
        <div className="flex items-center gap-8">
          <Link className="flex items-center justify-center gap-3 group" href="/">
            <span className="text-3xl font-bold text-foreground font-inter tracking-tight">Kavach</span>
          </Link>
        </div>
        <nav className="hidden lg:flex gap-8 items-center">
          <Link className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 hover:scale-105" href="/dashboard">Dashboard</Link>
          <Link className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 hover:scale-105" href="/disruptions">Live Triggers</Link>
          <Link className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 hover:scale-105" href="/policy">Policies</Link>
          <Link className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 hover:scale-105" href="#features">How It Works</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="rounded-xl border-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground font-medium transition-all duration-300 hover:scale-105 active:scale-95" asChild>
            <Link href="/login">Sign In</Link>
          </Button>
          <Button size="sm" className="rounded-xl bg-primary text-primary-foreground shadow-lg hover:shadow-xl font-medium transition-all duration-300 hover:scale-105 active:scale-95" asChild>
            <Link href="/onboarding">Get Started</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section - Logo-Inspired Design */}
        <section className="relative w-full min-h-screen flex items-center px-6 lg:px-12 overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-accent/10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 animate-pulse"></div>
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="flex flex-col justify-center space-y-8 order-2 lg:order-1">
                <div className="space-y-6">
                  <h1 className="text-5xl md:text-6xl font-black tracking-tight text-foreground font-headline animate-in fade-in slide-in-from-left-6 duration-1000 delay-150">
                    Income Protection<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Reimagined.</span>
                  </h1>
                  <p className="max-w-[600px] text-foreground md:text-xl leading-relaxed font-semibold animate-in fade-in slide-in-from-left-8 duration-1000 delay-300 readable-text">
                    Revolutionary AI-powered insurance platform for modern gig economy. Instant payouts. Zero paperwork. Complete peace of mind.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-6">
                  <a 
                    href="/dashboard"
                    className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm hover:shadow-primary/20 px-8 h-12 font-semibold transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer no-underline"
                  >
                    View Platform
                  </a>
                  <a 
                    href="/onboarding"
                    className="inline-flex items-center justify-center rounded-xl border-2 border-primary/30 bg-background text-foreground hover:bg-primary/10 hover:border-primary hover:text-primary transition-all duration-300 shadow-lg h-12 px-8 font-semibold hover:scale-105 active:scale-95 cursor-pointer no-underline"
                  >
                    Get Started
                  </a>
                </div>

                <div className="flex items-center gap-6 text-sm font-medium text-foreground pt-8 border-t border-border w-fit animate-in fade-in duration-1000 delay-700">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-12 w-12 rounded-full border-4 border-background bg-muted/50 flex items-center justify-center overflow-hidden shadow-md">
                        <Image src={`https://picsum.photos/seed/partner${i}/48/48`} width={48} height={48} alt="User" />
                      </div>
                    ))}
                    <div className="h-12 w-12 rounded-full border-4 border-background bg-primary text-primary-foreground flex items-center justify-center text-xs font-black">+10k</div>
                  </div>
                  <span className="font-medium">Protecting 10,000+ Partners Daily</span>
                </div>
              </div>

              {/* Logo Section - Right Side */}
              <div className="flex flex-col justify-center space-y-8 order-1 lg:order-2 animate-in fade-in zoom-in duration-1000 delay-200">
                <div className="relative">
                  <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 blur-[200px] -z-10 animate-pulse"></div>
                  <div className="relative group perspective-1000">
                    <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(12,161,150,0.15)] border-[8px] border-[#0CA196]/30 bg-white">
                      <Image 
                        src="/images/kavach-logo.png" 
                        alt="KavachAI Logo" 
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Hub - Core Features */}
        <section id="features" className="py-32 px-8 lg:px-16 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-24 animate-in fade-in">
              <Badge className="bg-[#9FCDCD] text-[#015F64] font-black rounded-lg px-3 py-1 mb-2 hover:bg-[#9FCDCD] border-none">THE CORE ENGINE</Badge>
              <h2 className="text-4xl md:text-6xl font-black font-headline text-[#003E44] leading-tight tracking-tighter">Built for Speed, Powered by Intelligence.</h2>
              <p className="text-[#003E44] text-lg font-medium border-l-4 border-[#0CA196]/10 pl-6 py-2">
                Traditional insurance relies on forms. KavachAI relies on data.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Parametric Automation",
                  desc: "We monitor hyper-local weather sensors in real-time. When triggers met, our system initiates payouts instantly.",
                  icon: CloudRain,
                  color: "from-[#3498db] to-[#2ecc71]"
                },
                {
                  title: "Hyper-Local Risk Map",
                  desc: "Our AI analyzes city geography and persona patterns (Zomato vs Amazon) to calculate fair, micro-premiums down to neighborhood.",
                  icon: BarChart3,
                  color: "from-[#9b59b6] to-[#8e44ad]"
                },
                {
                  title: "Fraud-Proof Claims",
                  desc: "Using advanced GPS anti-spoofing and multi-source weather verification, we ensure every payout is honest and 100% automated.",
                  icon: Shield,
                  color: "from-[#1abc9c] to-[#16a085]"
                }
              ].map((feature, index) => (
                <Card key={index} className="group border-none shadow-2xl bg-white rounded-[2rem] overflow-hidden hover:translate-y-[-8px] transition-all duration-500 h-full flex flex-col">
                  <div className="aspect-video relative overflow-hidden">
                    <Image src="https://picsum.photos/seed/feature/600/400" fill className="object-cover group-hover:scale-110 transition-transform duration-700" alt={feature.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shadow-lg">
                        <CloudRain className="h-5 w-5 text-[#0CA196]" />
                      </div>
                      <h3 className="text-xl font-black text-white font-headline">{feature.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-8 flex-1">
                    <p className="text-[#003E44] leading-relaxed font-medium">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-[#9FCDCD]/20 to-[#6EAC80]/20">
          <div className="container mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
              <Badge className="bg-accent text-accent-foreground font-black rounded-lg px-4 py-2 mb-4 border-none">PROCESS FLOW</Badge>
              <h2 className="text-4xl md:text-5xl font-black font-headline text-foreground leading-tight tracking-tighter">How KavachAI Works</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
                Four simple steps to complete protection for your gig work
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Create Profile",
                  desc: "Sign up and select your work persona (Zomato, Swiggy, Amazon) and operating city. Takes just 2 minutes."
                },
                {
                  step: "02", 
                  title: "Smart Pricing", 
                  desc: "Our AI calculates personalized weekly premiums using 5 factors: zone safety, weather patterns, work history, and risk assessment."
                },
                {
                  step: "03", 
                  title: "Live Monitoring", 
                  desc: "Advanced system tracks weather, AQI, flood alerts, and civil disruptions across 5 real-time APIs 24/7."
                },
                {
                  step: "04", 
                  title: "Instant Payout", 
                  desc: "When conditions trigger, our system validates and processes claims automatically. ₹500 UPI payout in 4.2 minutes - zero paperwork."
                }
              ].map((step, index) => (
                <div key={index} className="relative group h-full">
                  <div className="bg-card rounded-2xl border border-border p-8 hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer h-full flex flex-col">
                    <div className="flex flex-col items-center text-center space-y-4 flex-1">
                      <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-black shadow-lg group-hover:scale-110 transition-transform">
                        {step.step}
                      </div>
                      <div className="space-y-2 flex-1 flex flex-col justify-center">
                        <h3 className="text-xl font-black text-foreground font-headline">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed font-medium text-sm">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                        <ChevronRight className="h-4 w-4 text-primary-foreground" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium CTA */}
        <section className="py-32 px-6 lg:px-12 relative overflow-hidden bg-white dark:bg-white">
          <div className="container mx-auto flex flex-col items-center text-center space-y-10 relative z-10">
            <h2 className="text-5xl md:text-6xl font-black text-[#003E44] leading-tight tracking-tighter max-w-4xl">
              Don&apos;t Let Weather Dictate Your Income.
            </h2>
            <p className="text-xl text-[#003E44] max-w-2xl font-medium leading-relaxed">
              Join the future of parametric insurance. Protect your weekly earnings with advanced cloud technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" variant="secondary" className="h-16 px-12 rounded-2xl text-xl font-black shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform bg-white text-[#0CA196] hover:bg-white/90 border-2 border-[#0CA196]" asChild>
                <Link href="/onboarding">Activate My Protection <ChevronRight className="ml-2 h-6 w-6" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-24 px-6 lg:px-12 bg-gradient-to-b from-[#9FCDCD]/20 to-[#6EAC80]/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 space-y-6">
              <Link className="flex items-center gap-2" href="/">
                <div className="bg-gradient-to-br from-[#0CA196] to-[#6EAC80] p-1.5 rounded-lg shadow-md">
                  <Image src="/images/kavach-logo.png" alt="KavachAI Logo" width={20} height={20} className="rounded-lg" />
                </div>
                <span className="text-xl font-black text-[#003E44] dark:text-white font-headline tracking-tighter">KavachAI</span>
              </Link>
              <p className="text-[#003E44] dark:text-[#9CC9C2] max-w-sm font-semibold leading-relaxed">
                Automated parametric insurance for platform economy professionals. Advanced AI-powered protection.
              </p>
            </div>
            <div className="space-y-4">
              <h5 className="font-black text-[#0CA196] uppercase text-xs tracking-widest mb-6">Platform</h5>
              <ul className="space-y-3 text-sm font-bold text-[#003E44]">
                <li><Link href="/onboarding" className="text-[#003E44] dark:text-white hover:text-[#0CA196] dark:hover:text-[#9CC9C2] transition-colors">Get Insured</Link></li>
                <li><Link href="/dashboard" className="text-[#003E44] dark:text-white hover:text-[#0CA196] dark:hover:text-[#9CC9C2] transition-colors">My Dashboard</Link></li>
                <li><Link href="/disruptions" className="text-[#003E44] dark:text-white hover:text-[#0CA196] dark:hover:text-[#9CC9C2] transition-colors">Live Triggers</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="font-black text-[#0CA196] uppercase text-xs tracking-widest mb-6">Quick Links</h5>
              <ul className="space-y-3 text-sm font-bold text-[#003E44]">
                <li><Link href="/admin/login" className="text-[#003E44] dark:text-white hover:text-[#0CA196] dark:hover:text-[#9CC9C2] transition-colors">Insurer Portal</Link></li>
                <li><Link href="/chat" className="text-[#003E44] dark:text-white hover:text-[#0CA196] dark:hover:text-[#9CC9C2] transition-colors">Support Chat</Link></li>
                <li><Link href="/claims" className="text-[#003E44] dark:text-white hover:text-[#0CA196] dark:hover:text-[#9CC9C2] transition-colors">Claims Tracker</Link></li>
                <li><Link href="#" target="_blank" className="text-[#003E44] dark:text-white hover:text-[#0CA196] dark:hover:text-[#9CC9C2] transition-colors">Technology</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs font-black text-[#003E44] dark:text-white uppercase tracking-widest">© 2026 KavachAI • Advanced Protection</p>
            <div className="flex gap-8 text-xs font-black text-[#003E44] dark:text-[#9CC9C2] uppercase tracking-widest">
              <span className="hover:text-[#0CA196] dark:hover:text-white cursor-pointer transition-colors">Privacy</span>
              <span className="hover:text-[#0CA196] dark:hover:text-white cursor-pointer transition-colors">Terms</span>
              <span className="hover:text-[#0CA196] dark:hover:text-white cursor-pointer transition-colors">Technology</span>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Fixed Theme Toggle at Bottom Right */}
      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggle />
      </div>
    </div>
  );
}
