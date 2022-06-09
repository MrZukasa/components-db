import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { motion } from 'framer-motion';

const Search = () => {
    const [reader, setReader] = useState([]);
    const navigate = useHistory();
    
    useEffect(() =>{
      fetch('http://localhost:3001/Read')
        .then((response) => response.json())
        .then((responseData) => {
            console.log(responseData);
            setReader(responseData);
        })
    }, ['http://localhost:3001/Read'])

    return (
        <motion.div className="content" initial={{opacity: 0, x: -200, y: 0}} animate={{ opacity: 1, x: 0, y: 0 }} exit={{ opacity: 0, x: 0, y: -100 }} transition={{type: 'linear'}}>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg my-10">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" class="px-6 py-3">
                            Codice
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Codice Costruttore 
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Descrizione
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Posizione
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Quantità
                          </th>                          
                        </tr>
                    </thead>
                    <tbody>                        
                        {reader.map((value) =>{
                            return [
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer" onClick={() => navigate.push('/DetailsID/:'+value.ID)}>
                                    <td hidden class="px-6 py-4">{value.ID}</td>
                                    <td class="px-6 py-4">{value.codice}</td>
                                    <td class="px-6 py-4">{value.cod_costruttore}</td>
                                    <td scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                        {value.descrizione}
                                    </td>
                                    <td class="px-6 py-4">{value.posizione}</td>
                                    <td class="px-6 py-4">{value.quantita}</td>
                                </tr>
                                ]
                            })}                          
                    </tbody>
                </table>
            </div>       
        </motion.div>
    );
}
 
export default Search;