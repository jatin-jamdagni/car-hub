import { manufacturers, fuels } from './../constants/index';
import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters : FilterProps){

    const {manufacturer, year ,model, limit , fuel} = filters;

    const header ={
            'X-RapidAPI-Key': '3f704e6e01msha42ccf4acd7d15cp1bdc88jsnbae86a2fcce1',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,{ headers : header});

    const result = await response.json();
    return result

}


export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };

export const generateCarImageUrl = (car : CarProps , angle?:string) =>{
    // afglobex-corporation
    const url = new URL('https://cdn.imagin.studio/getimage')

    const {make , year, model} = car;

    url.searchParams.append('customer','afglobex-corporation')

    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`
}