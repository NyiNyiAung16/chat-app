import { db } from "@/firebase/config";



// let getDocs=(collection)=>{
//     db.collection(collection).onSnapshot((snap)=>{
//         let results=ref([]);
//         snap.docs.forEach((doc)=>{
//                 let document={id:doc.id,...doc.data()};
//                 doc.data().time && results.value.push(document);
//             })
        
//        })
    
// }


export default getDocs;