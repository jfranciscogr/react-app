import { lazy, LazyExoticComponent } from 'react';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
type JSXComponent = () => JSX.Element;

interface Route {
	to: string;
	path: string;
	// Component: () => JSX.Element;
	Component: LazyExoticComponent<JSXComponent> | JSXComponent;
	name: string;
}

const Lazy1 = lazy(
	() =>
		import(/* webpackChunkName: "LazyPage1"*/ '../01-lazyload/pages/LazyPage1')
);
const Lazy2 = lazy(
	() =>
		import(/* webpackChunkName: "LazyPage2"*/ '../01-lazyload/pages/LazyPage2')
);
const Lazy3 = lazy(
	() =>
		import(/* webpackChunkName: "LazyPage3"*/ '../01-lazyload/pages/LazyPage3')
);

export const routes: Route[] = [
	{
		to: '/lazy1',
		path: 'laZY1',
		// Component: LazyPage1,
		Component: Lazy1,
		name: 'Lazy-1',
	},
	{
		to: '/lazy2',
		path: 'laZY2',
		//Component: LazyPage2,
		Component: Lazy2,
		name: 'Lazy-2',
	},
	{
		to: '/lazy3',
		path: 'laZY3',
		// Component: LazyPage3,
		Component: Lazy3,
		name: 'Lazy-3',
	},
];
