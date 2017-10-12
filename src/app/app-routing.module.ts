import { WeaveItemComponent } from './browse-weaves/weave-list/weave-item/weave-item.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SuggestComponent } from './suggest/suggest.component';
import { BrowseWeavesComponent } from './browse-weaves/browse-weaves.component';
import { SearchComponent } from './search/search.component';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent, pathMatch: 'full' },
	{ path: 'suggest', component: SuggestComponent },
	{ path: 'browse-weaves', component: BrowseWeavesComponent, children: [
		{ path: ':id', component: WeaveItemComponent }
	] },
	{ path: 'search', component: SearchComponent }

];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [RouterModule]
})

export class AppRoutingModule {

}

