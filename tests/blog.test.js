const app = require("../app");
const supertest = require("supertest");
const request = supertest(app);

describe("blog tests", () => {
    test("check create blog", async () => {
        const payload = {
            blog:{
                title: 'Test',
                content: 'lorem impsum',
                date: (new Date()).getTime()
            }
        }
        const response = await request.post(
          `/actions`
        ).send(payload);
        console.log('payload', payload);
        expect(parseInt(response.status) === 200).toBe(true);
    }, 20000);

    test("check get blogs", async () => {
        const response = await request.get(
          `/actions`
        );
        const { body } = response;
        expect(parseInt(response.status) === 200).toBe(true);
        expect(Array.isArray(body)).toBe(true);
        expect(body.length > 0).toBe(true);
    }, 20000);

    test("check get blogs with search", async () => {
        const search = 'lor';
        const response = await request.get(
          `/actions?search=${search}`
        );
        const { body } = response;
        expect(parseInt(response.status) === 200).toBe(true);
        expect(Array.isArray(body)).toBe(true);
        expect(body.length > 0).toBe(true);
    }, 20000);

    test("check get blog", async () => {
        const id = 2;
        const response = await request.get(
          `/actions/${id}`
        );
        const { body } = response;
        expect(parseInt(response.status) === 200).toBe(true);
        expect(body.title === 'Test').toBe(true);
    }, 20000);
    
})