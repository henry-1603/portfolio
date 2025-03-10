import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart } from "react-icons/fa"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start">
            <a href="/" className="text-xl font-bold mb-2">
              John Doe
            </a>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Building digital experiences with passion and precision.
            </p>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-ghost-icon">
              <FaGithub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn-ghost-icon">
              <FaLinkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn-ghost-icon">
              <FaTwitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn-ghost-icon">
              <FaInstagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © {currentYear} John Doe. All rights reserved. Made with <FaHeart className="h-3 w-3 text-red-500" /> using
            React
          </p>

          <div className="mt-4 flex justify-center gap-4 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

