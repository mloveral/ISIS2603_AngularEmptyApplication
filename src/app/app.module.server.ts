import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { BookModule } from './book/book.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    BookModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
