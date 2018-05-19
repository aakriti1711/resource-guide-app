import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { Html5Component } from './html5/html5.component';

const appRoutes: Routes = [
  { path: 'javascript', component: JavascriptComponent },
  { path: 'html5', component: Html5Component },

  
  { path: '**', component: Html5Component}
];
@NgModule({
  declarations: [
    AppComponent,
    JavascriptComponent,
    Html5Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
