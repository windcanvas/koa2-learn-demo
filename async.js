// function getSomething() {
//     return 'something';
// }
//
// async function testAsync() {
//     return 'Hello async';
// }
//
// async function test() {
//     const v1 = await getSomething();
//     const v2 = await testAsync();
//     console.log(v1, v2);
// }
//
// test();

// 模拟异步请求
function takeLongTime() {
    return new Promise(resolve => {
        setTimeout(() => resolve("long_time_value"), 3000);
    })
}

async function test() {
    const v = await takeLongTime();
    console.log(v);
}

test();

