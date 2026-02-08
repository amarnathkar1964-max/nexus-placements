import { Github, Twitter, Linkedin, Mail } from "lucide-react";
const Footer = () => {
  return <footer className="py-16 border-t border-border bg-card/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">P</span>
              </div>
              <span className="font-display font-bold text-xl">EvolveAI</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              The AI-powered placement platform that transforms how students find careers 
              and companies find talent.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg hover:bg-secondary transition-colors">
                <Twitter className="w-5 h-5 text-muted-foreground hover:text-foreground" />
              </a>
              <a href="#" className="p-2 rounded-lg hover:bg-secondary transition-colors">
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground" />
              </a>
              <a href="#" className="p-2 rounded-lg hover:bg-secondary transition-colors">
                <Github className="w-5 h-5 text-muted-foreground hover:text-foreground" />
              </a>
              <a href="#" className="p-2 rounded-lg hover:bg-secondary transition-colors">
                <Mail className="w-5 h-5 text-muted-foreground hover:text-foreground" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">For Students</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">For Coordinators</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">For Recruiters</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2026 EvolveAI. All rights reserved.</p>
          <p className="text-sm text-muted-foreground">
            Made with ❤️ for the next generation of talent
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;