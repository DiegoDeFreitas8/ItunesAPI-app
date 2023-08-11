//created a test for an async function that uses fetch
//used an api to get the first objects artistName 
//and used expect().toBe()
test('should return AR', async () => {
    let response = await fetch(`http://localhost:8000/search?term=jack+johnson&media=musicVideo`);
    let data = await response.json();
    let outcome = data.results[0].artistName;
    expect(outcome).toBe('Jack Johnson');
})