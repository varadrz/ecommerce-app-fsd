export default function MainLayout({ children }) {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand">Ecommerce</span>
        </div>
      </nav>

      <div className="container mt-4">
        {children}
      </div>
    </>
  )
}
