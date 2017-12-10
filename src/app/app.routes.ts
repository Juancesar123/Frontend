import { HomepageComponent } from './homepage/homepage.component';
import { Routes,RouterModule  } from '@angular/router';

const routes: Routes = [
    // map '/persons' to the people list component
    {
      path: 'home',
      component: HomepageComponent,
    },
    // map '/' to '/persons' as our default route
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
  ];
  export const appRouterModule = RouterModule.forRoot(routes);
  