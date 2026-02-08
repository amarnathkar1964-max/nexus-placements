import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">P</span>
            </div>
            <span className="font-display font-bold text-xl">EvolveAI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#ai-features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                For You <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass-strong">
                <DropdownMenuItem asChild>
                  <Link to="/student/dashboard">For Students</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/coordinator/dashboard">For Coordinators</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/recruiter/dashboard">For Recruiters</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/student/dashboard">Sign In</Link>
            </Button>
            <Button variant="default" size="sm" asChild>
              <Link to="/student/dashboard">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#ai-features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <Link to="/student/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                For Students
              </Link>
              <Link to="/coordinator/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                For Coordinators
              </Link>
              <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                How It Works
              </a>
              <div className="flex gap-4 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="flex-1" asChild>
                  <Link to="/student/dashboard">Sign In</Link>
                </Button>
                <Button variant="default" size="sm" className="flex-1" asChild>
                  <Link to="/student/dashboard">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;