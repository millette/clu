// npm
import App from "next/app"
import { MDXProvider } from "@mdx-js/react"

// import Comp from "../docs/comp-1.mdx"

const components = {
  Comp: () => 'Foo'
}

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
          <MDXProvider components={components}>
              <Component {...pageProps} />
          </MDXProvider>
    )
  }
}

export default MyApp
