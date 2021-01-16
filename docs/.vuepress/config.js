// .vuepress/config.js
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
    ['link', { rel: 'icon', href: `https://cdn.jsdelivr.net/gh/njzjz/chemicaltools-web@ca014bee027fc6f3bff8e64444bf4223f9438348/public/chemicaltools.svg` }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['link', { rel: 'apple-touch-icon', href: `https://cdn.jsdelivr.net/gh/njzjz/chemicaltools-web@ca014bee027fc6f3bff8e64444bf4223f9438348/public/img/icons/apple-touch-icon.png` }],
    ['meta', { name: 'msapplication-TileImage', content: 'https://cdn.jsdelivr.net/gh/njzjz/chemicaltools-web@ca014bee027fc6f3bff8e64444bf4223f9438348/public/img/icons/apple-touch-icon.png' }]
  ],
	themeConfig: {
		editLinks: true,
		logo: `https://cdn.jsdelivr.net/gh/njzjz/chemicaltools-web@ca014bee027fc6f3bff8e64444bf4223f9438348/public/chemicaltools.svg`,
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
	],
	bundlerConfig:{
	  configureWebpack: (webpackConfig, isServer, isBuild) => {
	    return {
		  output: {
		    publicPath: process.env.CDN_COMMIT ? `https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@${process.env.CDN_COMMIT}/`: "/",
	    }}
	  }
	}
}
