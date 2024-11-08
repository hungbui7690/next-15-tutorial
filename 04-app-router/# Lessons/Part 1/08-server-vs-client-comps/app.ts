/*
  Server vs Client Components
  - slides
  - check by log to console -> then check log in vscode or browser


-------------------------

  - @components/nav-link.js
    -> /main-header.js

  - const path = usePathname() 
    return (
      <Link href={href} className={path.startsWith(href) ? 'active' : undefined}>
        {children}
      </Link>
    )
    => set active class


*/
