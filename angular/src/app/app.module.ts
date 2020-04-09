import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";

import { MembersModule } from "./members/members.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MembersModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
