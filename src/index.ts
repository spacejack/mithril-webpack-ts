// App entry point
import './index.pcss'
import * as m from 'mithril'
import home from './components/home'
import about from './components/about'

m.route(document.body, '/', {
	'/': home,
	'/about': about
})

///////////////////////////////////////////////////////////////////////////////
// For webpack HMR
// NOTE: this won't work for more complex apps. However you can always
// hit refresh in your browser after making code changes.
// What this does is allow live CSS updates as well as simple code updates.
declare const module: any
if (module.hot) module.hot.accept()
