import {Component, OnInit} from '@angular/core';
import {FirestoreService} from '../services/moduleFirebaseService/firestore.service';
import * as firebase from 'firebase';
import {PostfilterPipe} from '../pipe/postfilter.pipe';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.page.html',
    styleUrls: ['./timeline.page.scss'],
})
export class TimelinePage implements OnInit {

    uid: string;
    posts: any[];
    search: PostfilterPipe;

    constructor(private firebaseService: FirestoreService, private navCtrl: NavController) {
    }

    ngOnInit() {
        firebase.auth().onAuthStateChanged(user => {
            this.uid = user.uid;
            this.getPosts(user.uid);

        });
    }

    uploadPost() {
        this.navCtrl.navigateRoot('posts/post-send').catch((err) => {
            console.log(err);
        });
    }

    getPosts(uid: string) {
        this.firebaseService.getPosts(uid, posts => {
            this.posts = posts;
            console.log(posts);
        });
    }

}
