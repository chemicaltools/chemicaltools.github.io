// .vuepress/config.js
const { gh_url, npm_url } = require("jsdelivr_url");
const cdn_url = process.env.CDN_COMMIT ? gh_url('chemicaltools', 'chemicaltools.github.io', process.env.CDN_COMMIT): "/";
const svg_icon = npm_url('chemicaltools-web', '3.1.176', 'public/chemicaltools.svg');
const png_icon = npm_url('chemicaltools-web', '3.1.176', 'public/img/icons/apple-touch-icon.png');

module.exports = {
	locales: {
		'/': {
			lang: 'en-US',
			title: 'Chemical Tools',
			description: 'Essential tools for chemistry students'
		},
		'/zh/': {
			lang: 'zh-CN',
			title: '化学e+',
			description: '化学专业学生的必备工具'
		}
	},
	head: [
    ['link', { rel: 'icon', href: svg_icon }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['link', { rel: 'apple-touch-icon', href: png_icon }],
    ['meta', { name: 'msapplication-TileImage', content: png_icon }]
  ],
	themeConfig: {
		editLinks: true,
		logo: svg_icon,
		locales: {
			'/': {
				selectText: 'Languages',
				label: 'English',
				editLinkText: 'Edit this page on GitHub',
				navbar: [
					{ text: 'Home', link: '/' },
					{ text: 'Download', link: '/#download' },
					{ text: 'Guide', link: '/help.html' },
				]
			},
			'/zh/': {
				selectLanguageText: '语言',
				selectLanguageAriaLabel: '语言',
				selectLanguageName: '中文',
				editLinkText: '在 GitHub 上编辑此页',
				navbar: [
					{ text: '主页', link: '/zh/' },
					{ text: '下载', link: '/zh/#download' },
					{ text: '用户手册', link: '/help.html' },
				]
			},
		}
	},
	plugins: [
      ['@vuepress/pwa', {
	  }],
	  ['vuepress-plugin-jsdelivr-cdn',{
        cdn: cdn_url,
	  }]
	],
	bundlerConfig:{
	  configureWebpack: (webpackConfig, isServer, isBuild) => {
	    return {
		  output: {
		    publicPath: cdn_url,
	    }}
	  }
	}
}
