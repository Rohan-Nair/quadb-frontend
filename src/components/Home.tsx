import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import axios from "axios"
import { useEffect, useState } from "react"
const Home = () => {
    const [stocks, setStocks] = useState<any>([])
    useEffect(() => {
        const fetchApi = async () => {
            const response = await axios.get("/fetchAllStocks")
            setStocks(response.data)
            console.log(response.data);
        }
        fetchApi()
    }, [])
    return (
        <>
            <div className="h-screen flex justify-center bg-main">
                <div className="max-w-[1920px] w-full">
                    <header className='w-full max-w-[1920px] h-fit fixed backdrop-blur-3xl flex flex-col sm:flex-row gap-3 justify-between items-center p-3 bg-main text-white'>
                        <div className="text-4xl text-cyan-300 font-mono">
                            HODLINFO
                        </div>
                        <div className="flex gap-4">
                            <Select>
                                <SelectTrigger className="w-[80px] bg-cyan-300 font-bold outline-white border-white">
                                    <SelectValue placeholder="BTC" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Fruits</SelectLabel>
                                        <SelectItem value="apple">Apple</SelectItem>
                                        <SelectItem value="banana">Banana</SelectItem>
                                        <SelectItem value="blueberry">Blueberry</SelectItem>
                                        <SelectItem value="grapes">Grapes</SelectItem>
                                        <SelectItem value="pineapple">Pineapple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="w-[80px] bg-cyan-300 font-bold outline-white border-white">
                                    <SelectValue placeholder="BTC" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Fruits</SelectLabel>
                                        <SelectItem value="apple">Apple</SelectItem>
                                        <SelectItem value="banana">Banana</SelectItem>
                                        <SelectItem value="blueberry">Blueberry</SelectItem>
                                        <SelectItem value="grapes">Grapes</SelectItem>
                                        <SelectItem value="pineapple">Pineapple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="w-[80px] bg-cyan-300 font-bold outline-white border-white">
                                    <SelectValue placeholder="BTC" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Fruits</SelectLabel>
                                        <SelectItem value="apple">Apple</SelectItem>
                                        <SelectItem value="banana">Banana</SelectItem>
                                        <SelectItem value="blueberry">Blueberry</SelectItem>
                                        <SelectItem value="grapes">Grapes</SelectItem>
                                        <SelectItem value="pineapple">Pineapple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <button className="bg-accentmain p-2 rounded-md">Connect Telegram</button>
                        </div>
                    </header>

                    <section className="mt-[5.5rem] pt-2 px-2 md:w-[50rem] h-fit md:h-[40rem] rounded-md border-2 border-none bg-main md:mx-auto mx-2 overflow-y-auto">
                        <div className="text-4xl text-white w-full text-center">
                            Best Price to Trade
                        </div>
                        <div></div>
                        <div>
                            {
                                stocks.map((stock: any) => {
                                    return (
                                        <div key={stock._id} className="flex justify-between items-center p-2 border-b-2 border-cyan-300">
                                            <div className="flex gap-2">
                                                <div>
                                                    <div className="text-white">{stock.data.base_unit}</div>
                                                    <div className="text-cyan-300">{stock.data.name}</div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-white">₹{stock.data.last}</div>
                                                <div className="text-cyan-300">Low: ₹{stock.data.low}</div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </section>



                </div>
            </div>
        </>
    )
}

export default Home