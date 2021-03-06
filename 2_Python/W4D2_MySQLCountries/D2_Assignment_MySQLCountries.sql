-- 1. All Countries that Speak Slovene
-- SELECT countries.name, languages.language, languages.percentage
-- FROM countries
-- JOIN languages ON languages.country_id = countries.id
-- WHERE language = "Slovene"
-- ORDER BY languages.percentage DESC;




-- 2. Total Number of Cities for Each Country
-- SELECT countries.name, COUNT(*)
-- FROM cities
-- JOIN countries ON countries.id = cities.country_id
-- GROUP BY countries.name;




-- 3. All Cities in Mexico with Population > 500,000
-- SELECT cities.name, cities.population, countries.name
-- FROM cities
-- JOIN countries ON countries.id = cities.country_id
-- WHERE countries.name = "Mexico" AND cities.population > 500000
-- ORDER BY cities.population DESC;




-- 4. All Languages in Each Country with % > 89%-- 
-- SELECT countries.name, languages.language, languages.percentage
-- FROM countries
-- JOIN languages ON languages.country_id = countries.id
-- WHERE languages.percentage > 89
-- ORDER BY countries.name ASC;




-- 5. All Countries with Surface Area < 501 & Population > 100,000
-- SELECT countries.name, countries.surface_area, countries.population
-- FROM countries
-- WHERE countries.surface_area < 501 AND countries.population > 100000;




-- 6. Countries with only Constitutional Monarchy, Capital > 200, & Life Expectancy > 75
-- SELECT countries.name, countries.government_form, countries.capital, countries.life_expectancy
-- FROM countries
-- WHERE countries.government_form = "Constitutional Monarchy"
-- AND countries.capital > 200
-- AND countries.life_expectancy > 75;




-- 7. All Cities in Argentina inside the Buenos Aires District with Population > 500,000
-- SELECT countries.name, cities.name, cities.district, cities.population
-- FROM cities
-- JOIN countries ON countries.id = cities.country_id
-- WHERE countries.name = "Argentina" 
-- AND cities.district = "Buenos Aires"
-- AND cities.population > 500000



-- 8. Summarize the Number of Countries in Each Region
SELECT countries.region, COUNT(countries.name)
FROM countries
GROUP BY countries.region
ORDER BY COUNT(countries.name) DESC




