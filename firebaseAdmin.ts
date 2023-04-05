import {  getApps} from "firebase/app";
import admin from "firebase-admin";

const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICEACCOUNT_KEY as string
);
if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}
const adminDb = admin.firestore();
export { adminDb };
