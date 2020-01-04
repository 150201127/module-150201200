import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {FirebaseService} from '../../../services/firebaseService/firebase.service';

@Injectable({
    providedIn: 'root'
})
export class FirestoreService {

    constructor(private fireStore: AngularFirestore, private firebaseService: FirebaseService) {
    }

    getPosts(uid: string, callback) {
        this.firebaseService.getCities(uid, (cities) => {
            const plateArray = cities.map(elem => {
                return elem.plate;
            });

            return this.fireStore.collection('posts', ref =>
                ref.where('post.city.plate', 'in', plateArray)
            ).get().subscribe(snaps => {

                callback(snaps.docs.map(snap => {
                    return {
                        ...snap.data()
                    };

                }));
            });
        });
    }

    uploadPost(uid: string, post): Promise<any> {
        return new Promise((resolve, reject) => {
            this.fireStore.collection('posts').add({
                post
            }).then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            });
        });
    }

    deletePost(uid: string) {
        this.fireStore.doc(`posts/${uid}`).delete();
    }
}
