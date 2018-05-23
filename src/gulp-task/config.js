const devBaseDir = 'dev'
const proBaseDir = 'dist'
const config = {
  dev: {
    baseDir: '.',
    sass: 'src/css/**/*.scss',
    allCss: `${devBaseDir}/css/**/*.css`,
    outputBaseDir: devBaseDir,
    cssOutput: `${devBaseDir}/css`
  },
  pro: {
    baseDir: '.',
    sass: 'src/css/**/*.scss',
    allCss: `${proBaseDir}/css/**/*.css`,
    outputBaseDir: proBaseDir,
    cssOutput: `${proBaseDir}/css`
  }
}

module.exports = config
