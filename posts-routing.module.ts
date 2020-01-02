import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'timeline',
        pathMatch: 'full'
    },
    {
        path: 'timeline',
        loadChildren: './timeline/timeline.module#TimelinePageModule'
    },
    {
        path: 'invitations',
        loadChildren: './invitations/invitations.module#InvitationsPageModule'
    },
    {
        path: 'post-send',
        loadChildren: './post-send/post-send.module#PostSendPageModule'
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostsRoutingModule {
}
