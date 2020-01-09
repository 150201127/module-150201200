import {Component, OnInit} from '@angular/core';
import {FirestoreService} from '../services/moduleFirebaseService/firestore.service';
import * as firebase from 'firebase';
import {PostfilterPipe} from '../pipe/postfilter.pipe';
import {NavController} from '@ionic/angular';
import {SQLService} from '../services/sqlService/sql.service';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.page.html',
    styleUrls: ['./timeline.page.scss'],
})
export class TimelinePage implements OnInit {

    uid: string;
    posts: any[];
    search: PostfilterPipe;
    isLoading = false;

    constructor(private firebaseService: FirestoreService,
                private navCtrl: NavController,
                sqlService: SQLService) {
    }

    ngOnInit() {
        firebase.auth().onAuthStateChanged(user => {
            this.uid = user.uid;
            this.getPosts(user.uid);

        });
    }

    uploadPostClick() {
        this.navCtrl.navigateRoot('posts/post-send').catch((err) => {
            console.log(err);
        });

    }

    getPosts(uid: string) {

        this.isLoading = true;

        this.firebaseService.getPosts(uid, posts => {
            this.posts = posts;
            console.log(posts);
            this.isLoading = false;
        });
    }

    gotoProfile() {
        this.navCtrl.navigateRoot('profile').catch((err) => {
            console.log(err);
        });
    }

}
