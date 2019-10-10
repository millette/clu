// core
import { open, createReadStream } from "fs"
import { pipeline } from "stream"

const ApiCustomPage = (req, res) => {
  const {
    method,
  } = req

  if (method !== "GET")
    return res.status(405).json({ error: "Method Not Allowed", method })

  open("docs/custom-1.mdx", (error, fd) => {
    if (error)
      return res
        .status(error.code === "ENOENT" ? 404 : 500)
        .json({ ...error, message: error.message })
    res.setHeader("Content-Type", "text/plain; charset=utf-8") // text/mdx is the official mime type
    pipeline(
      createReadStream("", { encoding: "utf8", fd }),
      res,
      (error) =>
        error && res.status(500).json({ ...error, message: error.message })
    )
  })
}

export default ApiCustomPage
