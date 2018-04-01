import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { NxModule } from "@nrwl/nx";
import { SharedModule } from "@my-company-frontend/shared";

@NgModule({
  imports: [BrowserModule, NxModule.forRoot(), SharedModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
