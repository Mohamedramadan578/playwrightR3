import{test,expect, request}from '@playwright/test';

const baseUrl='https://api.restful-api.dev/';
const objectPathParam='objects';
const fullUrl=`${baseUrl}${objectPathParam}`
let id =''
let queryParam=``;
 const name="Apple MacBook m7"
    const year=2025
    const price=300
    const cpuModel="Intel Core i9"
    const hardDiskSize="1 TB"

const payload={
                    "name": name,
                        "data": {
                        "year": year,
                        "price": price,
                        "CPU model": cpuModel,
                        "Hard disk size": hardDiskSize
                        }
                }
test('Post Api',async({request})=>{
//     const name="Apple MacBook m8"
//     const year=2025
//     const price=300
//     const cpuModel="Intel Core i9"
//     const hardDiskSize="1 TB"

// const payload={
//                     "name": name,
//                         "data": {
//                         "year": year,
//                         "price": price,
//                         "CPU model": cpuModel,
//                         "Hard disk size": hardDiskSize
//                         }
//                 }
    const startTime=Date.now();
    const response=await request.post(`${fullUrl}`,{
    data:payload,
    headers:{
        'Content-Type':'application/json'


    }
        
    })
    const endTime=Date.now();
const responseBody=await response.json();
let responseHeader= response.headers();
let responseStatus= response.status()

console.log(responseBody)
console.log(responseHeader);
console.log(responseStatus);
expect (responseStatus).toBeCloseTo(200)

expect(responseBody.name).toBe(name)
expect(responseBody.data.year).toBe(year)
expect(responseBody.data.price).toBe(price)
expect(responseBody.data["CPU model"]).toBe(cpuModel)
expect(responseBody.data["Hard disk size"]).toBe(hardDiskSize)

id=responseBody.id;
 queryParam =`?id=${id}`

let responseTime=endTime-startTime;
console.log(responseTime)
expect(responseTime).toBeLessThan(3000)

})
test('Get Api',async({request})=>{
const startTime=Date.now();
const response=await request.get(`${fullUrl}${queryParam}`);
const endTime=Date.now();
const responseBody=await response.json();
let responseHeader= response.headers();
let responseStatus= response.status()

console.log(responseBody)
console.log(responseHeader);
console.log(responseStatus);

expect (responseStatus).toBe(200)
expect(responseBody[0].id).toBe(id)
expect(responseBody[0].name).toBe(name)
expect(responseBody[0].data.year).toBe(year)

expect(responseHeader['content-type']).toBe('application/json;charset=UTF-8')
expect(responseHeader.connection).toBe('keep-alive')
let responseTime=endTime-startTime;
console.log(responseTime)
expect(responseTime).toBeLessThan(3000)

});
test('Get Api single object',async({request})=>{
const startTime=Date.now();
const response=await request.get(`${fullUrl}/${id}`);
const endTime=Date.now();
const responseBody=await response.json();
let responseHeader= response.headers();
let responseStatus= response.status()

console.log(responseBody)
console.log(responseHeader);
console.log(responseStatus);

expect (responseStatus).toBe(200)
expect(responseBody.id).toBe(id)
expect(responseBody.name).toBe(name)
expect(responseBody.data.year).toBe(year)

expect(responseHeader['content-type']).toBe('application/json;charset=UTF-8')
expect(responseHeader.connection).toBe('keep-alive')
let responseTime=endTime-startTime;
console.log(responseTime)
expect(responseTime).toBeLessThan(3000)
id=responseBody.id;

});


test('Put Api',async({request})=>{
    const name="Apple MacBook m6 put after serilization"
    const year=2025
    const price=300
    const cpuModel="Intel Core i9"
    const hardDiskSize="1 TB"
    const color="grey"

const payload={
                    "name": name,
                        "data": {
                        "year": year,
                        "price": price,
                        "CPU model": cpuModel,
                        "Hard disk size": hardDiskSize,
                        "color":color
                        }
                }
    const startTime=Date.now();
    const response=await request.put(`${fullUrl}/${id}`,{
    data:payload,
    headers:{
        'Content-Type':'application/json'


    }
        
    })
    const endTime=Date.now();
const responseBody=await response.json();
let responseHeader= response.headers();
let responseStatus= response.status()

console.log(responseBody)
console.log(responseHeader);
console.log(responseStatus);
expect (responseStatus).toBeCloseTo(200)

expect(responseBody.name).toBe(name)
expect(responseBody.data.year).toBe(year)
expect(responseBody.data.price).toBe(price)
expect(responseBody.data["CPU model"]).toBe(cpuModel)
expect(responseBody.data["Hard disk size"]).toBe(hardDiskSize)
expect(responseBody.data.color).toBe(color)

id=responseBody.id;

let responseTime=endTime-startTime;
console.log(responseTime)
expect(responseTime).toBeLessThan(3000)
//'ff8081819f7e10ae019f9770c9cd23cb'
});
test('Patch Api',async({request})=>{
    const name="Lenovo x2 patch after serilization"
  

const payload={
                    "name": name,
                       
                }
    const startTime=Date.now();
    const response=await request.patch(`${fullUrl}/${id}`,{
    data:payload,
    headers:{
        'Content-Type':'application/json'


    }
        
    })
    const endTime=Date.now();
const responseBody=await response.json();
let responseHeader= response.headers();
let responseStatus= response.status()

console.log(responseBody)
console.log(responseHeader);
console.log(responseStatus);
expect (responseStatus).toBeCloseTo(200)

expect(responseBody.name).toBe(name)


id=responseBody.id;

let responseTime=endTime-startTime;
console.log(responseTime)
expect(responseTime).toBeLessThan(3000)
//'ff8081819f7e10ae019f9770c9cd23cb'
});
test('Delete Api',async({request})=>{
    
   // id="ff8081819f7e10ae019f9770c9cd23cb"
  
    const startTime=Date.now();
    const response=await request.delete(`${fullUrl}/${id}`)
    const endTime=Date.now();
const responseBody=await response.json();
let responseHeader= response.headers();
let responseStatus= response.status()

console.log(responseBody)
console.log(responseHeader);
console.log(responseStatus);
expect (responseStatus).toBeCloseTo(200)

expect(responseBody.message).toBe(`Object with id = ${id} has been deleted.`)
id=responseBody.id;

let responseTime=endTime-startTime;
console.log(responseTime)
expect(responseTime).toBeLessThan(3000)

});