const mix = require('laravel-mix')
require('laravel-mix-purgecss')
require('laravel-mix-workbox')
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/site.js', 'public/js')
	.postCss('resources/css/tailwind.css', 'public/css', [
		require('postcss-import'),
		require('tailwindcss'),
		require('postcss-nested'),
		require('postcss-preset-env')({ stage: 0 }),
	])
	.webpackConfig({
		output: { publicPath: '' },
	})
	.generateSW({ clientsClaim: true, skipWaiting: true })

if (mix.inProduction()) {
	mix.version()
	mix.purgeCss({
		enabled: true,
		whitelistPatternsChildren: [/^content$/],
	})
}
