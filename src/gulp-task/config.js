const devBaseDir = 'dev'
const config = {
  dev: {
    baseDir: '.',
    sass: 'src/css/**/*.scss',
    allCss: `${devBaseDir}/css/**/*.css`,
    outputBaseDir: devBaseDir,
    cssOutput: `${devBaseDir}/css`
  }
}

module.exports = config
