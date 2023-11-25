// API: https://northwind.vercel.app/api

// /products
// Ən bahalı məhsul
// Ortalama stok miqdarı
// “C” ilə başlayan məhsullar
// enbahali()
// function enbahali() {
//     axios.get("https://northwind.vercel.app/api/products")
//         .then(data => {
//             let db = data.data;
//             let bahali = db.sort((a, b) => (b.unitPrice - a.unitPrice));
//             console.log("en bahali mehsul :");
//             console.log(bahali[0]);

//         })
// }
// Ortalama stok miqdarı
// ortalama()
// function ortalama(){
//        axios.get("https://northwind.vercel.app/api/products")
//         .then(data => {
//             let db = data.data;
//             let result =0;
//             db.forEach(element => {
//                 result += element.unitsInStock
//             });
//             let totalresult=result/db.length;
//             console.log("ortalama :" + Math.floor(totalresult));
//         })

// }
// “C” ilə başlayan məhsullar
// Cbaslangic()
//  function Cbaslangic(){
//            axios.get("https://northwind.vercel.app/api/products")
//         .then(data => {
//                   let db = data.data;
//                   let c = db.filter(item => item.name.charAt(0)=='C');
//                   console.log(c);
//          } )
//  }
// /customers
// “London” şəhərindəki müştəriləri console a yaz
// Region NULL olan nə qədər customer var?
// https://northwind.vercel.app/api/customers
// london()
// function london() {
//     axios.get("https://northwind.vercel.app/api/customers")
//         .then(data => {
//             let db = data.data;
//             let city = db.filter(item => item.address && item.address.city === "London");
//             console.log("Londondaki müşteriler:");
//             console.log(city);
//         })
//     }
// Region NULL olan nə qədər customer var?
// resultt()
// function resultt() {
//     axios.get("https://northwind.vercel.app/api/customers")
//         .then(data => {
//             let db = data.data;
//             let result=db.filter((item) => item.region == null);
//             console.log("null olanlari sayi:");
//             console.log(result.length);
//         }
//         )
// }
// API 2: https://jsonplaceholder.typicode.com


// /posts
// Id-si 1 olan userin nə qədər postu var?

// /albums
// 1 nömrəli albümdə nə qədər fotoqraf var?
// posts()
// function posts(){
// axios.get("https://jsonplaceholder.typicode.com/posts")
// .then(data => {
//       let db = data.data;
//       let result = db.filter((item) => item.userId ==1);
//       console.log(result);
// })
// }
// 1 nömrəli albümdə nə qədər fotoqraf var?

// function sayi(){
//     fetch("https://jsonplaceholder.typicode.com/albums")
//     .then((res) => res.json())
//     .then((data) => {
//             let total = data.filter((item) => item.userId === 1);
//         console.log(`1 nömrəli albümdə olan fotoqraf sayı : ${total.length}`)
//     })
// }
// sayi()