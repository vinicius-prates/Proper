import { NavBar } from "../components/NavBar"
import axios from 'axios'
import { useEffect, useState } from 'react'
interface SneakerProps {

    name: string, 
    price: number,
    descripion: string,
    image: File | null, 
    size: number,
    brand: String,
    condition: number
}


export const AddNewSneaker = () => {

    const [sneakerSizes, setSneakerSizes] = useState<{id: number, sneaker_size: number}[]>([])
    const [ brands, setBrands] = useState<{id: number, name: string}[]>([])
    const [ conditions, setConditions] = useState<{id: number, condition : number, itsnew: boolean}[]>([])

    const urlSS = "http://localhost:8000/api/sneakers-sizes/"
    const urlBrand = "http://localhost:8000/api/brands/"
    const urlCondition = "http://localhost:8000/api/conditions/"
    
    useEffect(() => {
        axios.get(urlSS).then((res) => setSneakerSizes(res.data))
        axios.get(urlBrand).then((res) => setBrands(res.data))
        axios.get(urlCondition).then((res) => setConditions(res.data))
    }, [])

    return(
        <>
        <NavBar/>

        <form className="flex flex-col text-center mx-auto w-[22rem] ">
            <h1 className="font-bold text-xl">New Sneaker!</h1>
            <input placeholder="Ex: Yeezy" type="text" className="bg-gray-100 border-b-2 rounded-t-lg p-2 focus:outline-none"/>
            <input placeholder="R$" type="number"/>
            <textarea placeholder="Description"/>
            <select>{sneakerSizes.map((size) => {
                return(
                    <option value={size.sneaker_size} key={size.id}>
                        {size.sneaker_size}
                    </option>
                )
            })}</select>
            <select>{brands.map((brand) => {
                return(
                    <option value={brand.name} key={brand.id}>
                        {brand.name}
                    </option>
                )
            })}</select>
            <select>{conditions.map((condition) => {
                return(
                <option value={condition.id} key={condition.id}>
                    {condition.condition}
                </option>)
            })}</select>
            <input type="file" />
            <button>Add New</button>
        </form>
        </>
    )
}