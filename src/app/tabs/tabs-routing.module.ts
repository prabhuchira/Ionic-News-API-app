import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'news-single', loadChildren: './news-single/news-single.module#NewsSinglePageModule' },
  { path: 'dogs', loadChildren: './dogs/dogs.module#DogsPageModule' },
  { path: 'advice', loadChildren: './advice/advice.module#AdvicePageModule' },
  { path: 'advice-page', loadChildren: './advice-page/advice-page.module#AdvicePagePageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}