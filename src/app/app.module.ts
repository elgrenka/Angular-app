import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthComponent} from './auth/auth.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {PostsComponent} from './posts/posts.component';
import {HttpClientModule} from "@angular/common/http";
import {PostDetailsComponent} from './post-details/post-details.component';

@NgModule({
    declarations: [
        AppComponent,
        AuthComponent,
        PostsComponent,
        PostDetailsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatCardModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
