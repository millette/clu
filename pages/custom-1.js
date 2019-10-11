// npm
// import { createElement } from "react"
import Link from "next/link"
import MDXRuntime from "@mdx-js/runtime"
import { MDXProvider } from "@mdx-js/react"
import "isomorphic-unfetch"

// import Boo from "../docs/comp-1.mdx"

// console.log("MDXRuntime:", MDXRuntime)
// console.log("MDXRuntime:", MDXRuntime.toString())
// console.log("MDXRuntime:", Object.keys(MDXRuntime))

const CustomPage = ({ MDXContent, xx }) => {
  // console.log("Boo", typeof Boo)
  // console.log(Boo)
  // console.log(Boo.toString())

  // console.log("COMP", typeof Comp)
  // console.log(Comp)
  // const components = { Comp: () => <MDXRuntime>{xx}</MXDRuntime> }
  const components = { Comp: () => <MDXRuntime>{xx}</MDXRuntime> }

  return (
    <MDXProvider components={components}>
      <div>
        <p>
          <Link href="/">
            <a>Site frontpage</a>
          </Link>
        </p>
        <MDXRuntime>{MDXContent}</MDXRuntime>
      </div>
    </MDXProvider>
  )
}

CustomPage.getInitialProps = async (o) => {
  const { req } = o
  const urlBase = req ? `http://${req.headers.host}` : ""
  const res2 = await fetch(`${urlBase}/api/custom-1`)
  if (res2.ok) {
    const MDXContent = await res2.text()
    const res3 = await fetch(`${urlBase}/api/comp-1`)
    if (res3.ok) {
      const comp2 = await res3.text()
      // const Comp = createElement(MDXProvider, {}, createElement(MDXRuntime, { children: createElement((Comp2, {})) }))
      // const x = () => <MDXRuntime>{comp2}</MDXRuntime>

      // console.log("X", typeof x, typeof x.type)
      // console.log("X", x.type)

      // const y = x.type({scope: {}})
      // console.log('Y', typeof y, typeof y.type)

      // const z = y.type({scope: {}})
      // console.log('Z', typeof z, z)

      return { MDXContent, xx: comp2 }
    }
  }

  return { MDXContent: "NADA" }
}

export default CustomPage
