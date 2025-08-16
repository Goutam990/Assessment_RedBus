// app.js
// Supabase init
const client = supabase.createClient(supabaseUrl, supabaseKey);

// Example: fetch data from table
async function getData() {
  let { data, error } = await supabase
    .from('products')
    .select('*');
  
  console.log(data, error);
}

getData();
