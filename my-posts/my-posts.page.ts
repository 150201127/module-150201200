import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {SQLService} from '../services/sqlService/sql.service';

@Component({
    selector: 'app-my-posts',
    templateUrl: './my-posts.page.html',
    styleUrls: ['./my-posts.page.scss'],
})
export class MyPostsPage implements OnInit {

    posts: any[];

    constructor(private sqlService: SQLService, private navCtrl: NavController) {
    }

    ngOnInit() {
        this.sqlService.getDbState().subscribe(ready => {
            if (ready) {
                this.getPosts();
            }
        });
    }

    getPosts() {
        console.log('tamam');
        this.sqlService.db.executeSql('SELECT * FROM post').then((rs: any) => {
            console.log(rs);
            this.sqlService.asArray(rs).then((list) => {
                this.posts = list;
                console.log(this.posts);
            });
        }).catch(err => {
            console.log(err);
        });
    }

    gotoProfile() {
        this.navCtrl.navigateRoot('profile').catch((err) => {
            console.log(err);
        });
    }

}
