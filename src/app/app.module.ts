import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/** service add */
import { SearchService } from './shared';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { LoopComponent } from './loop/loop.component';
import { EditsearchComponent } from './editsearch/editsearch.component';



const appRoutes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'loop', component: LoopComponent},
  {path: 'edit/:id', component: EditsearchComponent},
  {path: '', redirectTo: '/loop', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LoopComponent,
    EditsearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
