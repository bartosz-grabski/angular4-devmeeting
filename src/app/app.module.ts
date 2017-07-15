import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductComponent} from './product.component';
import {ProductsComponent} from './products.component';
import {TagsComponent} from './tags.component';
import {ReactiveFormsModule} from '@angular/forms';
import {InMemoryTodoRepository, ProductsRepositoryToken} from './repositories/Product.repository';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [{provide: ProductsRepositoryToken, useClass: InMemoryTodoRepository}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
