import './assets/styles/app.scss';
import Header from './components/header/Header'
import { useState, useEffect } from 'react';

import { BsFillArrowRightCircleFill } from 'react-icons/bs';

/**
 * paradise cocktails -- groove commerce technical assessment
 *
 * @author Jonathan White
 * @version 1.0.0
 * @date 11/29/2022
 *
 * Paradise Cocktails shows a list of popular cocktails based on the database given (the cocktail db)
 * User can then select the cocktail they would like to preview and it will show them the details of that cocktail
 *
 */
function App() {

	const [activeComponent, setActiveComponent] = useState('productListing');
	const [data, setData] = useState('');
	const [drinkIndex, setDrinkIndex] = useState(0);
	const [productPage, setProductPage] = useState(false);

	// in production, I would hide the API key and host via env variables
	useEffect(() => {
		const options = {
			method: 'GET',
			url: 'https://the-cocktail-db.p.rapidapi.com/popular.php',
			headers: {
			  'X-RapidAPI-Key': '659523c987mshca6b1e3b282be4ap1a3bf1jsn093e4806c025',
			  'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
			}
		  };

		fetch('https://the-cocktail-db.p.rapidapi.com/popular.php', options)
			.then((response) => {
				if (!response.ok) {
					throw new Error(
						`Status: ${response.status}`
					);
				}
				// console.log(response);
				return response.json()
			})
			.then(popularDrinks => {
				setData(popularDrinks)
				// console.log(popularDrinks);
			})
			.catch(err => console.error(err));
	}, []);

	function handleClick(e) {
		e.preventDefault();
		let parentEl = e.target.parentNode.parentNode;
		let drinkIndex = parentEl.getAttribute('id');
		setDrinkIndex(drinkIndex);
		// console.log(drinkID);
		setActiveComponent('productDetails');
		setProductPage(true);
	}

	return (
		// Need to add logical operator to add class to app to make the background change
		<div className={productPage ? 'app productPage' : 'app'}>
			<div className="app__container">
				<Header />
				{/* Body prop=bodyContent */}
				{activeComponent === 'productListing' ?
					<div className="productListing wrapper">
						<div className="productListing__heading">
							Featured Products
						</div>
						<div className="productListing__list">
								{/* Mapping over all drinks inside of the data that was fetched */}
								{data && data.drinks.map((drink, index) => (
									<div className="productListing__item" key={drink.idDrink}>
										<img src={drink.strDrinkThumb} alt={drink.strDrink} className="productListing__item--img"/>
										<div className="productListing__item--details">
											<div className="firstRow">
												<h4>{drink.strDrink}</h4>
												<button onClick={ e => handleClick(e)} id={`${index}`} className="drinkBtn"><BsFillArrowRightCircleFill /></button>
											</div>
											<div className="secondRow">
												<h6>{drink.strCategory}</h6>
											</div>
										</div>
									</div>
								))}

						</div>
					</div>
					:
					<div className="productDetails" id={drinkIndex}>
						<div className="productDetails__images">
							<img src={data.drinks[drinkIndex].strDrinkThumb} alt={data.drinks[drinkIndex].strDrink} className="productDetails__images--main"/>
						</div>
						<div className="productDetails__info">
							<div className="productDetails__info--title">
								<h2>{data.drinks[drinkIndex].strDrink}</h2>
							</div>
							<div className="productDetails__info--ingredients">
								<h5>Ingredients</h5>
								<ul>
									{data.drinks[drinkIndex].strIngredient1 &&
										<li>{data.drinks[drinkIndex].strIngredient1}</li>
									}
									{data.drinks[drinkIndex].strIngredient2 &&
										<li>{data.drinks[drinkIndex].strIngredient2}</li>
									}
									{data.drinks[drinkIndex].strIngredient3 &&
										<li>{data.drinks[drinkIndex].strIngredient3}</li>
									}
									{data.drinks[drinkIndex].strIngredient1 &&
										<li>{data.drinks[drinkIndex].strIngredient4}</li>
									}
									{data.drinks[drinkIndex].strIngredient5 &&
										<li>{data.drinks[drinkIndex].strIngredient5}</li>
									}
									{data.drinks[drinkIndex].strIngredient6 &&
										<li>{data.drinks[drinkIndex].strIngredient6}</li>
									}
									{data.drinks[drinkIndex].strIngredient7 &&
										<li>{data.drinks[drinkIndex].strIngredient7}</li>
									}
									{data.drinks[drinkIndex].strIngredient8 &&
										<li>{data.drinks[drinkIndex].strIngredient8}</li>
									}
									{data.drinks[drinkIndex].strIngredient9 &&
										<li>{data.drinks[drinkIndex].strIngredient9}</li>
									}
									{data.drinks[drinkIndex].strIngredient10 &&
										<li>{data.drinks[drinkIndex].strIngredient10}</li>
									}
									{data.drinks[drinkIndex].strIngredient11 &&
										<li>{data.drinks[drinkIndex].strIngredient11}</li>
									}
									{data.drinks[drinkIndex].strIngredient12 &&
										<li>{data.drinks[drinkIndex].strIngredient12}</li>
									}
									{data.drinks[drinkIndex].strIngredient13 &&
										<li>{data.drinks[drinkIndex].strIngredient13}</li>
									}
									{data.drinks[drinkIndex].strIngredient14 &&
										<li>{data.drinks[drinkIndex].strIngredient14}</li>
									}
									{data.drinks[drinkIndex].strIngredient15 &&
										<li>{data.drinks[drinkIndex].strIngredient15}</li>
									}

								</ul>
							</div>
							<div className="productDetails__info--instructions">
								<h5>Instructions</h5>
								<p>{data.drinks[drinkIndex].strInstructions}</p>
							</div>
						</div>
						{/* {data.drinks[drinkIndex].strDrink} */}
					</div>
				}

				{/* <ProductDetails drink={e => response.drinks[e.target]} /> */}
				{/* PDP */}
			</div>
		</div>
	);
}

export default App;
