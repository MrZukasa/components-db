import { useState, useEffect} from "react";
import { useHistory, useLocation } from "react-router-dom";
import Modal from "../Modal";
import axios from "axios";
import Transition from "../Transition";
import { motion } from 'framer-motion';

const Details = () => {

    const [codice, setCodice] = useState('');
    const [codiceCostruttore, setCodiceCostruttre] = useState('');
    const [descrizione, setDescrizione] = useState('');
    const [costruttore, setCostruttore] = useState('');
    const [quantita,setQuantita] = useState('');
    const [posizione, setPosizione] = useState('');
    const [rivenditore1, setRivenditore1] = useState('');
    const [rivenditore2, setRivenditore2] = useState('');
    const [rivenditore3, setRivenditore3] = useState('');
    const [note,setNote] = useState('');
    const [image,setImage] = useState('');
    const [response,setResponse] = useState('');
    const [showModal, setShowModal] = useState(false);
    const navigate = useHistory();
    const cloning = useLocation();

    const componente = {codice, codiceCostruttore, descrizione, costruttore, quantita, posizione, rivenditore1, rivenditore2, rivenditore3, note, image};
    
    useEffect(() => {
        if (cloning.state != undefined) {            
            setCodiceCostruttre(cloning.state.codiceCostruttore);
            setDescrizione(cloning.state.descrizione);
            setCostruttore(cloning.state.costruttore);
            setQuantita(cloning.state.quantita);
            setPosizione(cloning.state.posizione);
            setRivenditore1(cloning.state.rivenditore1);
            setRivenditore2(cloning.state.rivenditore2);
            setRivenditore3(cloning.state.rivenditore3);
            setNote(cloning.state.note);
        }
    },[cloning])
        
    const insert = (e) => {
        e.preventDefault();
        async function insertData(componente){
            return await axios.post("http://localhost:3001/Insert",{
                    codice : componente.codice,
                    codiceCostruttore : componente.codiceCostruttore,
                    descrizione : componente.descrizione,
                    costruttore : componente.costruttore,
                    quantita : componente.quantita,
                    posizione : componente.posizione,
                    rivenditore1 : componente.rivenditore1,
                    rivenditore2 : componente.rivenditore2,
                    rivenditore3 : componente.rivenditore3,
                    note : componente.note,
                    image : componente.image
            })
        }

        const formData = new FormData();
        formData.append('dropzone-file',image)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        async function insertIMG(){
            return await axios.post("http://localhost:3001/Upload",formData,config)            
        }

        insertIMG()
        .then(() => setResponse('Successfully Inserted!'))
        .catch(e => setResponse('Error Image: ' + e.response.data))
        setShowModal(true);

        // insertData(componente)
        // .then(() => setResponse('Successfully Inserted!'))
        // .catch(e => setResponse('Error: ' + e.response.data))
        // setShowModal(true);
    }

    return (
        <motion.div className="container" class="content" initial={Transition.initial} animate={Transition.animate} exit={Transition.exit} transition={Transition.transitionEffect}>            
            <form onSubmit={insert} autocomplete="off">
                <div class="grid grid-cols-4 gap-6">
                    <div class="relative z-0 w-full mb-6 group col-span-2">
                        <input type="text" name="codice" class="peer" placeholder=" " value={codice} onChange={(e)=>setCodice(e.target.value)} required/>
                        <label for="codice">Codice</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group col-span-2">
                        <input type="text" name="codiceCostruttore" class="peer" placeholder=" " value={codiceCostruttore} onChange={(e)=>setCodiceCostruttre(e.target.value)}/>
                        <label for="codiceCostruttore">Codice Costruttore</label>
                    </div>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" name="descrizione" class="peer" placeholder=" " value={descrizione} onChange={(e)=>setDescrizione(e.target.value)} required/>
                    <label for="descrizione">Descrizione</label>
                </div>
                <div class="grid grid-cols-5 gap-6">
                    <div class="relative z-0 w-full mb-6 group col-span-3">
                        <input type="text" name="costruttore" class="peer" placeholder=" " value={costruttore} onChange={(e)=>setCostruttore(e.target.value)}/>
                        <label for="costruttore">Costruttore</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="quantita" class="peer" required placeholder=" " value={quantita} onChange={(e)=>{
                            if ((!isNaN(e.target.value) && (e.target.value != " "))){
                                setQuantita(e.target.value)
                            }}}/>
                        <label for="quantita">Quantità</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="posizione" class="peer" placeholder=" " value={posizione} onChange={(e)=>setPosizione(e.target.value)}/>
                        <label for="posizione">Posizione</label>
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="rivenditore1" class="peer" placeholder=" " value={rivenditore1} onChange={(e)=>setRivenditore1(e.target.value)}/>
                        <label for="rivenditore1">Primo rivenditore</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="rivenditore2" class="peer" placeholder=" " value={rivenditore2} onChange={(e)=>setRivenditore2(e.target.value)}/>
                        <label for="rivenditore2">Secondo rivenditore</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="rivenditore3" class="peer" placeholder=" " value={rivenditore3} onChange={(e)=>setRivenditore3(e.target.value)}/>
                        <label for="rivenditore3">Terzo rivenditore</label>
                    </div>
                </div>
                <div class="grid grid-cols-5 gap-6">
                    <div class="relative z-0 w-full mb-6 group col-span-3">
                        <textarea rows="7" type="text" name="note" class="peer" placeholder=" " value={note} onChange={(e)=>setNote(e.target.value)}/>
                        <label for="note">Note</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group col-span-2">
                        <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-52 bg-gray-200 rounded-lg border-2 border-gray-400 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-slate-800 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-violet-400 hover:border-violet-500 dark:hover:bg-slate-700 ml-20">
                            <div class="flex flex-col justify-center items-center pt-5 pb-6 absolute">
                                <svg class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" class="flex w-full h-full opacity-0 cursor-pointer" accept="image/*" name="dropzone-file" onChange={(e)=>setImage(e.target.files[0])}/>
                        </label>
                        <div class="flex justify-center mt-44">
                            <input type="text" class="w-80 border-0 !text-violet-400 text-sm text-center" disabled value={(image!=undefined) ? image.name :''}/>
                        </div>
                    </div>
                </div>                
                <div class="grid grid-cols-1 gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <button type="submit" class="bottone">Aggiungi</button>
                    </div>                    
                </div>                
                <Modal showModal={showModal} onClose={()=> {
                    setShowModal(false);
                    if (response.includes('Succ')==true) {
                        navigate.push('/Search');
                    }
                    }} response={response} />
            </form>            
        </motion.div>
    );
}

export default Details;