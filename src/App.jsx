import './App.css'
import {Route, Routes, Link, useParams, Outlet} from "react-router-dom"
function App(){
const Home = () => <h1>Home</h1>

const SearchPage = () => {
	const tacos = [
		"chochinita",
		"chili",
		"carnita",
		"quesadilla"
	]
	return(
		<div>
			<h1>Search Page</h1>
			<ul>
				{tacos.map(taco =>( //Simple map para devoolver cada taco segun el buscado
					<li key={taco}><Link to={`/tacos/${taco}`}>{taco}</Link></li>
				))}
			</ul>
		</div>
	)
}

const Tacos = () => {
	const {name} = useParams() //extrae el parametro del Route Taco. debe tener el mismo nombre
	return(
		<div>
			<h1>Tacos</h1>
			{name}
			<Link to="details">Details </Link>
			<Outlet />
		</div>
	)
}

const TacoDetails = () =>{
	const {name} = useParams()
	return(
		<h1>Taco Details {name}</h1>
	)	
}

const TacoIndex = ()=>{
	return(
		<h1>Index Route of tacos</h1>
	)
}
 return(
	<div className='App'>
		<header>
		Miduchollo
		<nav>
			<ul>
				<li><Link to='/'>Home</Link></li>
				<li><Link to='/search-page'>Search Page</Link></li>
			</ul>
		</nav>
		</header> 
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/search-page' element={<SearchPage />} />
			<Route path='/tacos/:name' element={<Tacos />}>
				<Route index element={<TacoIndex />} />
				<Route path='details' element={<TacoDetails />} />
			</Route>
			<Route path='*' element={<h1>Not Found</h1>} />  
		</Routes>
	</div>
 )
}

export default App
