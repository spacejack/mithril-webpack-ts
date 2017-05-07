import * as m from 'mithril'
import nav from '../nav'
import './index.scss'

export default {
	view (vnode) {
		return m('.page.about', [
			m(nav),
			m('h1', 'About'),
			m('p', 'This is the about page. Stuff about the app.')
		])
	}
} as m.Component<{}, {}>
