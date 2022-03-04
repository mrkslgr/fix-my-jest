import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AComponent } from './manual-change-detection/a/a.component';
import { BComponent } from './manual-change-detection/b/b.component';
import { ConstructorCommentedOutComponent } from './example-02/constructor-commented-out/constructor-commented-out.component';
import { ArrowFunctionComponent } from './example-01/arrow-function/arrow-function.component';
import { WithIputComponent } from './example-03/with-iput/with-iput.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    ConstructorCommentedOutComponent,
    ArrowFunctionComponent,
    WithIputComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
