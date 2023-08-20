import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {PostsComponent} from "./posts/posts.component";

const routes: Routes = [
    {path: 'login', component: AuthComponent},
    {path: 'posts', component: PostsComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
