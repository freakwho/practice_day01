// Write a code to find area of rectangle atau cari luas persegi panjang
const panjang: number = 5;
const lebar: number = 3;
const luas = panjang * lebar;

console.log(luas);


// Write a code to find perimeter of rectangle atau cari keliling persegi panjang
const keliling = 2*(panjang + lebar);

console.log(keliling);


// Write a code to find diameter, circumference and area of a circle
const radius: number = 5;
const pi: number = 3.14;

const diameter = 2 * radius ;
const circumference = 2*pi*radius;
const area = pi*radius*radius;

console.log("Diameter = "+diameter);
console.log("Circumference = " + circumference);
console.log("Area = "+area);


//Write a code to find angles of triangle if two angles are given.
const b: number = 65;
const c: number = 80;
// Full angle of triangle is 180
const angle = 180 - (b+c);

console.log(angle);


// Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).

// From google
// function getFormatedStringFromDays(numberOfDays) {
//     var years = Math.floor(numberOfDays / 365);
//     var months = Math.floor(numberOfDays % 365 / 30);
//     var days = Math.floor(numberOfDays % 365 % 30);

//     var yearsDisplay = years > 0 ? years + (years == 1 ? " year, " : " years, ") : "";
//     var monthsDisplay = months > 0 ? months + (months == 1 ? " month, " : " months, ") : "";
//     var daysDisplay = days > 0 ? days + (days == 1 ? " day" : " days") : "";
//     return yearsDisplay + monthsDisplay + daysDisplay; 
//     console.log(yearsDisplay + monthsDisplay + daysDisplay);
// }

// console.log(getFormatedStringFromDays(400));
// console.log(getFormatedStringFromDays(366));

// From student
let _jumlahHari: number = 366;
let _year: number  = 360;
let _month: number  = 30;
let _days: number  = 30;
const _tahun = Math.floor(_jumlahHari / _year);
const _bulan = Math.floor(_jumlahHari % _year / _month);
const _hari = Math.floor(_jumlahHari % _year % _month );

console.log(_tahun+ "tahun" , _bulan+ "bulan" , _hari+ "hari");


// Write a code to get difference between dates in days.
const date1 = new Date("2022-01-20").getDate();
const date2 = new Date("2022-01-22").getDate();
const q = date2 - date1;

console.log(date1);
console.log(date2);
console.log(q);

