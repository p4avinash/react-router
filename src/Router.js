import React, { useEffect, useState } from "react"

export const RouterProvider = ({ router }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    window.addEventListener("navigate", () => {
      console.log("navigate event triggered")
      console.log(window.history.state)
      setCurrentPath(window.location.pathname)
    })

    return () =>
      window.removeEventListener("navigate", () => {
        setCurrentPath(window.location.pathname)
      })
  }, [])

  return (
    <>
      {router.map((route) =>
        currentPath === route.path ? (
          <div key={route.path}>{route.element}</div>
        ) : null
      )}
    </>
  )
}

export const Link = ({ to, children }) => {
  return (
    <a
      href={to}
      onClick={(e) => {
        e.preventDefault()
        window.history.pushState({ page_id: to }, ``, to)
        window.dispatchEvent(new PopStateEvent("navigate"))
      }}
    >
      {children}
    </a>
  )
}
