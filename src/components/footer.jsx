import { Github } from "lucide-react"
function footer(props) {
  return (
  <>
      <footer className="app-footer">
        <p className="footer-credit">Designed & Built by Raju</p>

        <div className="footer-social">
          <Github size={16} />
          <span className="social-link">github.com/raju18</span>
        </div>
      </footer>
  </>
  );
}

export default footer;