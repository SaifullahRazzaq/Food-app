import firebase from '../Config/firebase';
const db = firebase.firestore();

const update_user = (user) => {
    return {
        type: "SET_USER",
        data: user
    }
}

const remove_user = () => {
    return {
        type: "REMOVE_USER"
    }
}


export {
    update_user,
    remove_user,
}