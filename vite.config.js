import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import uniappImport from '@echoingtech/rollup-plugin-uniapp-import'
import path from 'path'
import fs from 'fs'

const files = fs.readdirSync(
  path.resolve(__dirname, './node_modules/@echoingtech')
)

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
  },
  plugins: [
    uniappImport({
      libraryName: '@echoingtech/dumpling',
      customName(name) {
        let pkgName = name.replace(/\B([A-Z])/g, '-$1').toLowerCase()
        if (!pkgName.startsWith('du')) pkgName = 'du-' + pkgName
        let pkg = ''
        pkg = files.find((file) => file === pkgName)
        if (!pkg) {
          pkg = files.find((file) => pkgName.startsWith(file))
        }

        return `@echoingtech/${pkg}/src/${name.replace('Du', '')}`
      },
    }),
    uni(),
  ],
})
