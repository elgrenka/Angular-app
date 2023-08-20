import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {PostsComponent} from "./posts/posts.component";
import {PostDetailsComponent} from "./post-details/post-details.component";
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
    {path: 'login', component: AuthComponent},
    {
        path: 'posts',
        canActivateChild: [AuthGuard],
        children: [
            {path: '', component: PostsComponent},
            {path: ':id', component: PostDetailsComponent},
        ],
    },
    {path: '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
