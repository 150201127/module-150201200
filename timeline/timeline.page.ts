import {Component, OnInit} from '@angular/core';
import {FirestoreService} from '../services/moduleFirebaseService/firestore.service';
import * as firebase from 'firebase';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.page.html',
    styleUrls: ['./timeline.page.scss'],
})
export class TimelinePage implements OnInit {

    uid: string;
    posts: any[];

    constructor(private firebaseService: FirestoreService) {
    }

    ngOnInit() {
        firebase.auth().onAuthStateChanged(user => {
            this.uid = user.uid;
            this.getPosts(user.uid);

        });
    }

    uploadPost() {
        const post = {
            body: 'denemedenemedenemedeneme',
            city: {
                name: 'AMASYA',
                plate: 5
            },
            ownerID: this.uid,
            ownerUsername: '@emilmammadov',
            invitations: [],
        };

        this.firebaseService.uploadPost(this.uid, post);
    }

    getPosts(uid: string) {
        this.firebaseService.getPosts(uid, posts => {
            this.posts = posts;
            console.log(posts);
        });
    }

}
