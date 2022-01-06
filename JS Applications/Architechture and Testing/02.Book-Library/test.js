const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

const mockData = {
    "d953e5fb-a585-4d6b-92d3-ee90697398a0": { "author": "J.K.Rowling", "title": "Harry Potter and the Philosopher's Stone" },
    "d953e5fb-a585-4d6b-92d3-ee90697398a1": { "author": "Svetlin Nakov", "title": "C# Fundamentals" }
}


function json(data) {
    return {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }
}
describe('Test', async function () {
    this.timeout(60000);

    let page, browser;

    before(async () => {
       browser = await chromium.launch();
      // browser = await chromium.launch({headless:false,slowMo: 500});
    });

    after(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        page = await browser.newPage();
    });
    afterEach(async () => {
        await page.close();
    });

    it('loads and display all information', async () => {
        await page.route('**/jsonstore/collections/books', (route, request) => {
            route.fulfill(json(mockData));
        })
        await page.goto('http://localhost:5500/02.Book-Library');
        await page.click('text=Load All Books');

        await page.waitForSelector('text=Harry Potter');
        const rows = await page.$$eval('tr', (row) => row.map(r => r.textContent));
        expect(rows[1]).to.contains('Harry Potter');
        expect(rows[1]).to.contains('J.K.Rowling');
        expect(rows[2]).to.contains('C# Fundamentals');
        expect(rows[2]).to.contains('Svetlin Nakov');
    });

    it('can create book',async()=>{
        await page.goto('http://localhost:5500/02.Book-Library');
        
        await page.fill('form#createForm >> input[name="title"]','Title');
        await page.fill('form#createForm >> input[name="author"]','Author');
        
      const [request] = await Promise.all([
            page.waitForRequest(request => request.method() == 'POST'),
            page.click('form#createForm >> text=Submit'),
        ])

        const data = JSON.parse(request.postData());

        expect(data.title).to.equal('Title');
        expect(data.author).to.equal('Author');

    });

    it('edit book',async()=>{
        await page.goto('http://localhost:5500/02.Book-Library');
        await Promise.all([
            page.click('.editBtn'),
            page.click('text=Load all books')
        ]);
        const visible = await page.isVisible('#editForm');
        expect(visible).to.be.true;

        await page.fill('#editForm >> input[name="title"]', 'Edited');
        await page.fill('#editForm >> input[name="author"]','Veselin');

        const [request] = await Promise.all([
            page.waitForRequest(request => request.method() == 'PUT'),
            page.click('text=Save')
    ]); 
        const data = JSON.parse(request.postData());

        expect(data.title).to.equal('Edited');
        expect(data.author).to.equal('Veselin');
        
    });

    it.only('delete book',async()=>{
        await page.goto('http://localhost:5500/02.Book-Library');
        await Promise.all([
            page.click('.deleteBtn'),
            page.click('text=Load all books'),
            page.on('dialog', dialog => dialog.accept())
        ]);
        
        await page.click('text=Load all books');
        const content = await page.textContent('table tbody');
        expect(content).not.to.contain('J.K.Rowling');
    });
});