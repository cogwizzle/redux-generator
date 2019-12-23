const {
  getJsFileExtension,
  getStyleSheetExtension,
  generatePathWithPrefix,
  extractPathAndComponentName,
  getFileInfo,
} = require('../fileStructureUtils.js')

it('getJsFileExtension', () => {
  const results = getJsFileExtension(false)
  expect(results).toBe('js')
})

it('getJsFileExtension typescript', () => {
  const results = getJsFileExtension(true)
  expect(results).toBe('ts')
})

it('getStyleSheetExtension sass', () => {
  const results = [
    getStyleSheetExtension('scss'),
    getStyleSheetExtension('sass'),
  ]
  expect(results.every((result) => result === 'scss')).toBeTruthy()
})

it('getStyleSheetExtension css', () => {
  const results = [
    getStyleSheetExtension('postcss'),
    getStyleSheetExtension('post-css'),
    getStyleSheetExtension('css'),
  ]
  expect(results.every((result) => result === 'css')).toBeTruthy()
})

it('generatePathWithPrefix non safe path', () => {
  const results = generatePathWithPrefix('')
  expect(results).toEqual('src/components/')
})

it('generatePathWithPrefix safe path', () => {
  const results = generatePathWithPrefix('src/components/hello_world')
  expect(results).toEqual('src/components/hello_world')
})

it('extractPathAndComponentName no path', () => {
  const results = extractPathAndComponentName('hello_world')
  expect(results).toEqual([
    'src/components/',
    'hello_world',
  ])
})

it('extractPathAndComponentName with path', () => {
  const results = extractPathAndComponentName('hello_world/another_one')
  expect(results).toEqual([
    'src/components/hello_world',
    'another_one',
  ])
})

it('extractPathAndComponentName with longer path', () => {
  const results = extractPathAndComponentName('hello_world/another_one/test')
  expect(results).toEqual([
    'src/components/hello_world/another_one',
    'test',
  ])
})

it('getFileInfo', () => {
  const results = getFileInfo('hello_world', {
    isTypescript: true,
    isSass: false,
    isJsx: false,
  })
  expect(results).toEqual({
    path: 'src/components/',
    componentName: 'hello_world',
    jsExtension: 'ts',
    styleExtension: 'css',
  })
})

