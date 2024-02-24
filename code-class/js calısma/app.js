//!kullanıcı bilgilerine Destructuring oluşturarak erişelim.

const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
];
// console.log(users);
// const [user1, user2] = users;
// console.log(user1);
// console.log(user2);
// const { name: name1, email: email1, id: id } = user1;
// console.log(name1);
// console.log(email1);
// console.log(id);

  


//! Verileri kullanarak her kullanıcının adını, şehrini ve yaşını içeren bir dizi oluşturun

// const data = {
//     results: [
//      {
//         gender: 'female',
//         name: { title: 'Miss', first: 'Alice', last: 'Johnson' },
//         location: {
//           street: { number: 123, name: 'Main Street' },
//           city: 'New York',
//           state: 'NY',
//           country: 'USA',
//           postcode: '10001'
//         },
//         email: 'alice@example.com',
//         login: { username: 'alice123' },
//         dob: { date: '1990-01-01', age: 32 },
//         phone: '123-456-7890',
//         cell: '987-654-3210'
//       },
//       {
//         gender: 'male',
//         name: { title: 'Mr', first: 'Bob', last: 'Smith' },
//         location: {
//           street: { number: 456, name: 'Elm Street' },
//           city: 'Los Angeles',
//           state: 'CA',
//           country: 'USA',
//           postcode: '90001'
//         },
//         email: 'bob@example.com',
//         login: { username: 'bob456' },
//         dob: { date: '1985-05-15', age: 37 },
//         phone: '987-654-3210',
//         cell: '123-456-7890'
//       }
//     ]
//   };

//   const { results } = data;
//   console.log(results);
//   const [user1, user2] = results;
//   console.log(user1);
  
//   console.log(user2);
//   console.log(user1);
//   console.log(user2);
//   const { name: name1, email: email1,} = user1;
//   console.log(name1);
//   console.log(email1);
 
//   console.log(user1.language);

// const usersInfo = data.results.map(user => ({
//     name: `${user.name.first} ${user.name.last}`,
//     city: user.location.city,
//     age: user.dob.age
//   }));
  
//   console.log(usersInfo);

//   const userStreetNames = data.results.map(user => ({
//     name: `${user.name.first} ${user.name.last}`,
//     streetName: user.location.street.name
//   }));
  
//   console.log(userStreetNames);
 
  


//   //! Destructuring kullanarak en sık tekrar eden özelliği(rengi) bulan bir fonksiyon yazın sonuc red olmalı

const data = [
    { id: 1, color: 'red' },
    { id: 2, color: 'blue' },
    { id: 3, color: 'green' },
    { id: 4, color: 'red' },
    { id: 5, color: 'red' },
    { id: 6, color: 'blue' }
  ];
const colorCounts = data.reduce((acc, { color }) => {
    acc[color] = (acc[color] || 0) + 1;
    return acc;
  }, {});

console.log(colorCounts);;

//   //! Destructuring kullanarak nesnelerin içindeki dizi özelliğini birleştiren bir fonksiyon yazın sonuc [1, 2, 3, 4, 5, 6, 7, 8, 9] olmalı
// const data = [
//     { id: 1, values: [1, 2, 3] },
//     { id: 2, values: [4, 5] },
//     { id: 3, values: [6, 7, 8, 9] }
//   ];



//   //! Spread operatörünü kullanarak iki nesnenin belirli özelliklerini birleştiren ve çakışan özelliklerin değerlerini toplayan bir fonksiyon yazın  {a: 10, b: 35, c: 55, d: 35} olmalı

// const object1 = {
//     a: 10,
//     b: 20,
//     c: 30
//   };
  
//   const object2 = {
//     b: 15,
//     c: 25,
//     d: 35
//   };



//   //! Rest operatörünü kullanarak n tane dizi içindeki elemanların toplamını bulan bir fonksiyon yazın. rneğin fonksiyona [1, 2, 3], [4, 5, 6], [7, 8, 9] yazıldığında sonuç 45 olmalı