import NavConfig from '../FooterTab.config.json';
import index from '../Index';


const registerRoute = (config) => {
  let route = [];
  config.map(nav =>
    nav.list.map(page =>
      route.push({
        path: page.path,
        component: require(`../components${page.path}`),
        meta: {
          title: page.title || page.name,
          description: page.description
        }
      })
    )
  );

  return { route, navs: config };
};

const route = registerRoute(NavConfig);
route.route.push({
  path: '/',
  component:index
});

export const navs = route.navs;
export default route.route;
