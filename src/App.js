import Header from "./components/Header";
import Footer from "./components/Footer/index";
const books =[
  {
      name:'Romeo and juliet',
      author:"William Shakespeare"
  },
  {
      name:'Harry potter',
      author:"J.K Rowling"
  },
  {
      name:'Purple Hibiscus',
      author:"Chimamanda Adichie"
  }
]

function App() {
  const mappedBooks =  books.map(book => <Header name={book.name} author={book.author} /> )
  return (
   <Footer />
   
 
  );
}



export default App;
