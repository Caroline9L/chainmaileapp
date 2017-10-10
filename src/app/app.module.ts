import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { SuggestComponent } from './suggest/suggest.component';
import { BrowseWeavesComponent } from './browse-weaves/browse-weaves.component';
import { WeaveListComponent } from './browse-weaves/weave-list/weave-list.component';
import { WeaveItemComponent } from './browse-weaves/weave-list/weave-item/weave-item.component';
import { WeaveService } from './shared/weave.service';
import { WeaveDetailComponent } from './browse-weaves/weave-detail/weave-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SuggestComponent,
    BrowseWeavesComponent,
    WeaveListComponent,
    WeaveItemComponent,
    WeaveDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [WeaveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
