import React, { useState, useEffect } from 'react'
import Menu from '../components/Menu'

const Breweries = (props) => {
	const [ styleNumber, setStyleNumber ] = useState(0)
	const [ localStyleNumber, setLocalStyleNumber ] = useState(0)
	const [ beerNumber, setBeerNumber ] = useState(0)

	const [ nullStyle ] = useState([
		{
			name: 'Nothing',
			brewery: 'None',
			breweryUrl:
				'https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/71958569_385281422146308_8459166843725152256_o.jpg?_nc_cat=107&_nc_ohc=BisfoHK3XwwAQk2TmC-1mm9vpgTFGa5y_Mh__6HiIkQTavPTRAHbaMjvw&_nc_ht=scontent.ftpa1-1.fna&oh=44f6ec1a54a6aa1759eba4dabe112e05&oe=5E7CCB7C',
			style: 'None',
			description: 'Nothing',
			beerUrl:
				'https://2fdltvvn8wp2rn64ywgk8o17-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/imperial-stout-glass.jpg',
			abv: 'None'
		}
	])

	const [ localStyles, setLocalStyles ] = useState([
		{
			name: 'Nothing',
			brewery: 'None',
			breweryUrl:
				'https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/71958569_385281422146308_8459166843725152256_o.jpg?_nc_cat=107&_nc_ohc=BisfoHK3XwwAQk2TmC-1mm9vpgTFGa5y_Mh__6HiIkQTavPTRAHbaMjvw&_nc_ht=scontent.ftpa1-1.fna&oh=44f6ec1a54a6aa1759eba4dabe112e05&oe=5E7CCB7C',
			style: 'None',
			description: 'Nothing',
			beerUrl:
				'https://2fdltvvn8wp2rn64ywgk8o17-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/imperial-stout-glass.jpg',
			abv: 'None'
		}
	])

	// // API CALL WORKAROUND Brewery API
	const [ breweries ] = useState([
		{
			name: 'Dunedin Brewery',
			url: 'https://brewstravelers365.files.wordpress.com/2014/02/dsc01975.jpg'
		},
		{
			name: 'Anti-Brewery',
			url:
				'https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-1/c131.0.320.320a/p320x320/54204829_10161314001845580_1302028874904764416_n.jpg?_nc_cat=101&_nc_ohc=SIgWCfx-j88AQmvqiiyQYdPIOJ9MuQL0N8XYIVAfSKHyT-oSFfZXZMTHA&_nc_ht=scontent.ftpa1-1.fna&oh=d703836db91f70d1510404c449f91ce5&oe=5E76991E'
		},
		{
			name: '7th Sun Brewery',
			url:
				'https://7venthsun-images.imgix.net/2017/08/Dunedin-front-page-photo-5.jpg?auto=compress%2Cformat&fit=scale&h=1440&ixlib=php-1.2.1&w=1920&wpsize=full_width_photo'
		},
		{
			name: 'Caledonia',
			url:
				'https://www.caledoniabrewing.com/wp-content/uploads/2017/06/2FFD72C9-FF89-4483-B986-A8BF4C95974B1-1024x768.jpg'
		},
		{
			name: 'The Woodright',
			url:
				'https://scontent.ftpa1-1.fna.fbcdn.net/v/t31.0-8/17311309_1847276225484375_3513508119432973705_o.jpg?_nc_cat=105&_nc_ohc=c6hUlGlq6MwAQlXtfWhx07DupIF24RAxryZeRI2LndEYmJn02fwRXhcpA&_nc_ht=scontent.ftpa1-1.fna&oh=237eaacce7510a102062bc387aef3f1f&oe=5E8808B9'
		},
		{
			name: 'Cueni Brewing Company',
			url:
				'https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/50485343_2545074485508584_6694617291516018688_n.jpg?_nc_cat=109&_nc_ohc=I4qO61UMc7YAQn8p_yrmndp-FiZ-NOZT1JxwTsws9QzYcZ3kPDlkdfW6g&_nc_ht=scontent.ftpa1-1.fna&oh=3421761e202276fb6987b705741e88c4&oe=5E82361B'
		},
		{
			name: 'Soggy Bottom Brewery',
			url:
				'https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/p720x720/67372574_1343163815834854_6554602719171051520_o.jpg?_nc_cat=109&_nc_ohc=YpO6Gk91q-oAQmBXqZZ1SuvIqv4PAny61Q1xHd8IgkoKsaF0n8vBzRRtw&_nc_ht=scontent.ftpa1-1.fna&oh=32826d18d91dd5fa9e1cc424bb3cf6d5&oe=5E73099D'
		},
		{
			name: 'House of Beer',
			url:
				'https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/69605590_10156656960561647_5825472634162249728_n.jpg?_nc_cat=109&_nc_ohc=y-zKgAiFq4MAQkz-naKzoR-bKYluMaqh6mBwgEIDK29RPpV2f3CXx6F8A&_nc_ht=scontent.ftpa1-1.fna&oh=cc1733dd31c764d1e4702d1024bd4071&oe=5E887D2C'
		},
		{
			name: 'HOB Brewing Company',
			url:
				'https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/71958569_385281422146308_8459166843725152256_o.jpg?_nc_cat=107&_nc_ohc=BisfoHK3XwwAQk2TmC-1mm9vpgTFGa5y_Mh__6HiIkQTavPTRAHbaMjvw&_nc_ht=scontent.ftpa1-1.fna&oh=44f6ec1a54a6aa1759eba4dabe112e05&oe=5E7CCB7C'
		}
	])

	//API CALL WORKAROUND STYLE API
	const [ style ] = useState([
		{
			style: 'Imperial Stout',
			description: 'A stout with high bitterness, roastiness and higher alcohol levels usually 10% ABV or more.',
			url:
				'https://2fdltvvn8wp2rn64ywgk8o17-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/imperial-stout-glass.jpg'
		},
		{
			style: 'IPA',
			description: 'something.',
			url:
				'https://images.squarespace-cdn.com/content/v1/585aa63e9de4bb73f2059087/1489715213640-F2EQ28WSC6ANFPR6ODYC/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/white-ipa.jpg?format=500w'
		},
		{
			style: 'Red Ale',
			description: 'Red Ale desc.',
			url:
				'https://cdn.homebrewersassociation.org/wp-content/uploads/20180803091127/imperial-red-ale-recipe_645x645.jpg'
		},
		{
			style: 'Lager',
			description: 'Lager desc.',
			url:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Bitburger_Glass.JPG/1920px-Bitburger_Glass.JPG'
		}
	])

	//API CALL WORKAROUND BEER API
	const [ beer, setBeer ] = useState([
		{
			name: 'WTF Stout',
			brewery: 'HOB Brewing Company',
			breweryUrl:
				'https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/71958569_385281422146308_8459166843725152256_o.jpg?_nc_cat=107&_nc_ohc=BisfoHK3XwwAQk2TmC-1mm9vpgTFGa5y_Mh__6HiIkQTavPTRAHbaMjvw&_nc_ht=scontent.ftpa1-1.fna&oh=44f6ec1a54a6aa1759eba4dabe112e05&oe=5E7CCB7C',
			style: 'Imperial Stout',
			description: 'Good dark beer',
			beerUrl:
				'https://2fdltvvn8wp2rn64ywgk8o17-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/imperial-stout-glass.jpg',
			abv: '6%'
		},
		{
			name: 'The IPA',
			brewery: 'Dunedin Brewery',
			breweryUrl: 'https://brewstravelers365.files.wordpress.com/2014/02/dsc01975.jpg',
			style: 'IPA',
			description: 'something.',
			beerUrl:
				'https://images.squarespace-cdn.com/content/v1/585aa63e9de4bb73f2059087/1489715213640-F2EQ28WSC6ANFPR6ODYC/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/white-ipa.jpg?format=500w',
			abv: '5.5%'
		},
		{
			name: 'Magic Stout',
			brewery: 'The Anti-Brewery',
			breweryUrl:
				'https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/71958569_385281422146308_8459166843725152256_o.jpg?_nc_cat=107&_nc_ohc=BisfoHK3XwwAQk2TmC-1mm9vpgTFGa5y_Mh__6HiIkQTavPTRAHbaMjvw&_nc_ht=scontent.ftpa1-1.fna&oh=44f6ec1a54a6aa1759eba4dabe112e05&oe=5E7CCB7C',
			style: 'Imperial Stout',
			description: 'Good dark beer',
			beerUrl: 'http://draftmag.com/wp-content/uploads/2016/01/Instagram_20160120_3860.jpg',
			abv: '6%'
		},
		{
			name: 'The IPA',
			brewery: 'Dunedin Brewery',
			breweryUrl: 'https://brewstravelers365.files.wordpress.com/2014/02/dsc01975.jpg',
			style: 'IPA',
			description: 'something.',
			beerUrl:
				'https://images.squarespace-cdn.com/content/v1/585aa63e9de4bb73f2059087/1489715213640-F2EQ28WSC6ANFPR6ODYC/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/white-ipa.jpg?format=500w',
			abv: '5.5%'
		},
		{
			name: 'WTF Stout',
			brewery: 'HOB Brewing Company',
			breweryUrl:
				'https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/71958569_385281422146308_8459166843725152256_o.jpg?_nc_cat=107&_nc_ohc=BisfoHK3XwwAQk2TmC-1mm9vpgTFGa5y_Mh__6HiIkQTavPTRAHbaMjvw&_nc_ht=scontent.ftpa1-1.fna&oh=44f6ec1a54a6aa1759eba4dabe112e05&oe=5E7CCB7C',
			style: 'Imperial Stout',
			description: 'Good dark beer',
			beerUrl:
				'https://2fdltvvn8wp2rn64ywgk8o17-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/imperial-stout-glass.jpg',
			abv: '6%'
		},
		{
			name: 'The IPA',
			brewery: 'Dunedin Brewery',
			breweryUrl: 'https://brewstravelers365.files.wordpress.com/2014/02/dsc01975.jpg',
			style: 'IPA',
			description: 'something.',
			beerUrl:
				'https://images.squarespace-cdn.com/content/v1/585aa63e9de4bb73f2059087/1489715213640-F2EQ28WSC6ANFPR6ODYC/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/white-ipa.jpg?format=500w',
			abv: '5.5%'
		},
		{
			name: 'WTF Stout',
			brewery: 'HOB Brewing Company',
			breweryUrl:
				'https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/71958569_385281422146308_8459166843725152256_o.jpg?_nc_cat=107&_nc_ohc=BisfoHK3XwwAQk2TmC-1mm9vpgTFGa5y_Mh__6HiIkQTavPTRAHbaMjvw&_nc_ht=scontent.ftpa1-1.fna&oh=44f6ec1a54a6aa1759eba4dabe112e05&oe=5E7CCB7C',
			style: 'Imperial Stout',
			description: 'Good dark beer',
			beerUrl:
				'https://2fdltvvn8wp2rn64ywgk8o17-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/imperial-stout-glass.jpg',
			abv: '6%'
		},
		{
			name: 'The IPA',
			brewery: 'Dunedin Brewery',
			breweryUrl: 'https://brewstravelers365.files.wordpress.com/2014/02/dsc01975.jpg',
			style: 'IPA',
			description: 'something.',
			beerUrl:
				'https://images.squarespace-cdn.com/content/v1/585aa63e9de4bb73f2059087/1489715213640-F2EQ28WSC6ANFPR6ODYC/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/white-ipa.jpg?format=500w',
			abv: '5.5%'
		},
		{
			name: 'WTF Stout',
			brewery: 'HOB Brewing Company',
			breweryUrl:
				'https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/71958569_385281422146308_8459166843725152256_o.jpg?_nc_cat=107&_nc_ohc=BisfoHK3XwwAQk2TmC-1mm9vpgTFGa5y_Mh__6HiIkQTavPTRAHbaMjvw&_nc_ht=scontent.ftpa1-1.fna&oh=44f6ec1a54a6aa1759eba4dabe112e05&oe=5E7CCB7C',
			style: 'Imperial Stout',
			description: 'Good dark beer',
			beerUrl:
				'https://2fdltvvn8wp2rn64ywgk8o17-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/imperial-stout-glass.jpg',
			abv: '6%'
		},
		{
			name: 'The IPA',
			brewery: 'Dunedin Brewery',
			breweryUrl: 'https://brewstravelers365.files.wordpress.com/2014/02/dsc01975.jpg',
			style: 'IPA',
			description: 'something.',
			beerUrl:
				'https://images.squarespace-cdn.com/content/v1/585aa63e9de4bb73f2059087/1489715213640-F2EQ28WSC6ANFPR6ODYC/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/white-ipa.jpg?format=500w',
			abv: '5.5%'
		},
		{
			name: 'WTF Stout',
			brewery: 'HOB Brewing Company',
			breweryUrl:
				'https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/71958569_385281422146308_8459166843725152256_o.jpg?_nc_cat=107&_nc_ohc=BisfoHK3XwwAQk2TmC-1mm9vpgTFGa5y_Mh__6HiIkQTavPTRAHbaMjvw&_nc_ht=scontent.ftpa1-1.fna&oh=44f6ec1a54a6aa1759eba4dabe112e05&oe=5E7CCB7C',
			style: 'Imperial Stout',
			description: 'Good dark beer',
			beerUrl:
				'https://2fdltvvn8wp2rn64ywgk8o17-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/imperial-stout-glass.jpg',
			abv: '6%'
		},
		{
			name: 'The IPA',
			brewery: 'Dunedin Brewery',
			breweryUrl: 'https://brewstravelers365.files.wordpress.com/2014/02/dsc01975.jpg',
			style: 'IPA',
			description: 'something.',
			beerUrl:
				'https://images.squarespace-cdn.com/content/v1/585aa63e9de4bb73f2059087/1489715213640-F2EQ28WSC6ANFPR6ODYC/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/white-ipa.jpg?format=500w',
			abv: '5.5%'
		},
		{
			name: 'WTF Stout',
			brewery: 'HOB Brewing Company',
			breweryUrl:
				'https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/71958569_385281422146308_8459166843725152256_o.jpg?_nc_cat=107&_nc_ohc=BisfoHK3XwwAQk2TmC-1mm9vpgTFGa5y_Mh__6HiIkQTavPTRAHbaMjvw&_nc_ht=scontent.ftpa1-1.fna&oh=44f6ec1a54a6aa1759eba4dabe112e05&oe=5E7CCB7C',
			style: 'Imperial Stout',
			description: 'Good dark beer',
			beerUrl:
				'https://2fdltvvn8wp2rn64ywgk8o17-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/imperial-stout-glass.jpg',
			abv: '6%'
		},
		{
			name: 'The IPA',
			brewery: 'Dunedin Brewery',
			breweryUrl: 'https://brewstravelers365.files.wordpress.com/2014/02/dsc01975.jpg',
			style: 'IPA',
			description: 'something.',
			beerUrl:
				'https://images.squarespace-cdn.com/content/v1/585aa63e9de4bb73f2059087/1489715213640-F2EQ28WSC6ANFPR6ODYC/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/white-ipa.jpg?format=500w',
			abv: '5.5%'
		},
		{
			name: 'WTF Stout',
			brewery: 'HOB Brewing Company',
			breweryUrl:
				'https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/71958569_385281422146308_8459166843725152256_o.jpg?_nc_cat=107&_nc_ohc=BisfoHK3XwwAQk2TmC-1mm9vpgTFGa5y_Mh__6HiIkQTavPTRAHbaMjvw&_nc_ht=scontent.ftpa1-1.fna&oh=44f6ec1a54a6aa1759eba4dabe112e05&oe=5E7CCB7C',
			style: 'Imperial Stout',
			description: 'Good dark beer',
			beerUrl:
				'https://2fdltvvn8wp2rn64ywgk8o17-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/imperial-stout-glass.jpg',
			abv: '6%'
		},
		{
			name: 'The IPA',
			brewery: 'Dunedin Brewery',
			breweryUrl: 'https://brewstravelers365.files.wordpress.com/2014/02/dsc01975.jpg',
			style: 'IPA',
			description: 'something.',
			beerUrl:
				'https://images.squarespace-cdn.com/content/v1/585aa63e9de4bb73f2059087/1489715213640-F2EQ28WSC6ANFPR6ODYC/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/white-ipa.jpg?format=500w',
			abv: '5.5%'
		}
	])

	// TIMER FOR RANDOM FEATURED BEER
	useEffect(
		() => {
			const interval2 = setInterval(() => {
				if (beerNumber >= beer.length - 1) {
					setBeerNumber(0)
				} else {
					setBeerNumber((prev) => prev + 1)
				}
			}, 5000)
			return () => {
				clearInterval(interval2)
			}
		},
		[ beerNumber, beer.length ]
	)

	//LOCAL BEERS BASED ON FEATURED STYLE FILTER
	useEffect(
		() => {
			const localBeerStyle = beer.filter((beern) => {
				return beern.brewery === style[styleNumber].brewery
			})
			setLocalStyleNumber(0)
			if (localBeerStyle[0] !== undefined) {
				setLocalStyles(localBeerStyle)
			} else {
				setLocalStyles(nullStyle)
			}
		},
		[ styleNumber, beer, style, nullStyle ]
	)

	// TIMER FOR LOCAL BEERS BASED ON FEATURED STYLE
	useEffect(
		() => {
			const interval3 = setInterval(() => {
				if (localStyleNumber >= localStyles.length - 1) {
					setLocalStyleNumber(0)
				} else {
					setLocalStyleNumber((prev) => prev + 1)
				}
			}, 1000)
			return () => {
				clearInterval(interval3)
			}
		},
		[ localStyleNumber, localStyles.length, localStyles ]
	)
	return (
		<section>
			<Menu />
			<h1 id="breweryPageTitle">Welcome to {props.match.params.name}</h1>

			{/* Featured Beer Section */}
			<section className="homePageFeaturedBeer">
				<h1 id="featuredBeerTitle">Random Featured Beer</h1>
				<section className="randomBeerPictureSection">
					<img id="randomBeerPicture" src={beer[beerNumber].beerUrl} alt="Random Beer" />
					{/* <img id="randomBeerBreweryPicture" src={beer[beerNumber].breweryUrl} alt="Random Beer Brewery" /> */}
				</section>
				<h1>footer</h1>
			</section>
		</section>
	)
}

export default Breweries
