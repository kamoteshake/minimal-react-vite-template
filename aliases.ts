// aliases.ts
import * as path from 'path'
import * as fs from 'fs'

const srcPath = path.resolve(process.cwd(), 'src')
const directories = fs
  .readdirSync(srcPath, { withFileTypes: true })
  .filter((dirent: fs.Dirent) => dirent.isDirectory())
  .map((dirent: fs.Dirent) => dirent.name)

export const viteAliases = directories.reduce<Record<string, string>>((acc, dir) => {
  acc[dir] = path.resolve(srcPath, dir)
  return acc
}, {})
