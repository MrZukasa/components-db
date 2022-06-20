import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Modal from "../Modal";
import axios from "axios";
import Transition from "../Transition";
import { motion } from 'framer-motion';
import { Buffer } from "buffer";
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const DetailsID = () => {

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
    const navigate = useHistory();
    const [response,setResponse] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [image,setImage] = useState('');
    const [immagine, setImmagine] = useState('');    
    const {ID} = useParams();
    const clearID = ID.split(':');
    const componente = {codice, codiceCostruttore, descrizione, costruttore, quantita, posizione, rivenditore1, rivenditore2, rivenditore3, note, image};
    
    useEffect(() => {
        async function readData() {
            return await axios.get('http://localhost:3001/Read/'+ clearID[1])
        }
        readData()
        .then((responseData) => {            
            if (responseData.length !== 0) {                
                responseData.data.map((resultant)=>{
                    setCodice(resultant.codice)
                    setCodiceCostruttre(resultant.cod_costruttore)
                    setDescrizione(resultant.descrizione)
                    setCostruttore(resultant.costruttore)
                    setQuantita(resultant.quantita)
                    setPosizione(resultant.posizione)
                    setRivenditore1(resultant.rivenditore1)
                    setRivenditore2(resultant.rivenditore2)
                    setRivenditore3(resultant.rivenditore3)
                    setNote(resultant.note)                    
                    setImmagine(Buffer.from(resultant.immagine).toString('base64'))
                })
            } else {
                navigate.push('/NotFound');
            }
        })
    },[clearID[1]]);

    const Remove = ()=> {
        async function deleteData(){
            return await axios.delete('http://localhost:3001/Delete/'+ clearID[1])            
        }
        deleteData()
            .then(() => setResponse('Deleted Successfully!'))
            .catch(e => setResponse('Error: ' + e.response.data))
        setShowModal(true);
    }

    const Edit = ()=> {
        if ((componente.codice != '')&&(componente.descrizione != '')&&(!isNaN(componente.quantita))&&(componente.quantita != '')){
            async function updateData(componente){
                return await axios.patch("http://localhost:3001/Update/"+clearID[1],{
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
                    immagine : componente.image
                })
            }
            const formData = new FormData();
            formData.append('dropzone-file',image)
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            };
            async function updateIMG(){
                return await axios.patch("http://localhost:3001/Upload/" + codice, formData, config)
            }

        updateData(componente)
            .then(() => {
                setResponse('Updated Successfully!')
                updateIMG()
                .then(() => setResponse('Successfully Updated, also with image!'))
                .catch(e => setResponse('Error: ' + e.response.data))
            })
            .catch(e => setResponse('Error: ' + e.response.data))
            setShowModal(true);
            console.log(componente)
        } else {
            setResponse('Error: Codice, Descrizione e Quantità sono sempre richiesti');
            setShowModal(true);
            console.log(componente)
        }
    }

    const Copy = ()=> {
        navigate.push({
            pathname: '/Details',
            state: componente
        })
    }

    const HtmlTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
      ))(({ }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
          maxWidth: 220,                  
          border: '2px solid #a78bfa',
        },
      }));
    
    return (
        <motion.div className="container" class="content" initial={Transition.initial} animate={Transition.animate} exit={Transition.exit} transition={Transition.transitionEffect}>
            <form autocomplete="off">
                <div class="grid grid-cols-4 gap-6">
                    <div class="relative z-0 w-full mb-6 group col-span-2">
                        <input type="text" name="codice" class="peer" placeholder=" " value={codice} onChange={(e)=>setCodice(e.target.value)} required/>
                        <label for="codice">Codice</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group col-span-2">
                        <input type="text" name="codiceCostruttore" class="peer" placeholder=" " value={codiceCostruttore} onChange={(e)=>setCodiceCostruttre(e.target.value)} />
                        <label for="codiceCostruttore">Codice Costruttore</label>
                    </div>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" name="descrizione" class="peer" placeholder=" " value={descrizione} onChange={(e)=>setDescrizione(e.target.value)} required/>
                    <label for="descrizione">Descrizione</label>
                </div>
                <div class="grid grid-cols-5 gap-6">
                    <div class="relative z-0 w-full mb-6 group col-span-3">
                        <input type="text" name="costruttore" class="peer" placeholder=" " value={costruttore} onChange={(e)=>setCostruttore(e.target.value)} />
                        <label for="costruttore">Costruttore</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="quantita" class="peer" required placeholder=" " value={quantita} onChange={(e)=>{
                            if ((!isNaN(e.target.value) && (e.target.value != " "))){
                                setQuantita(e.target.value)
                            }
                        }} />
                        <label for="quantita">Quantità</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="posizione" class="peer" placeholder=" " value={posizione} onChange={(e)=>setPosizione(e.target.value)} />
                        <label for="posizione">Posizione</label>
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="rivenditore1" class="peer" placeholder=" " value={rivenditore1} onChange={(e)=>setRivenditore1(e.target.value)} />
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
                    <div class="relative z-0 w-full mb-6 group col-span-2 ">
                        <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-52 bg-gray-200 rounded-lg border-2 border-gray-400 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-slate-800 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-violet-400 hover:border-violet-500 dark:hover:bg-slate-700 ml-20">
                            <div class="flex flex-col justify-center items-center pt-5 pb-6 absolute">
                                <svg class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>                                
                            </div>
                            <input id="dropzone-file" type="file" class="flex w-full h-full opacity-0 cursor-pointer" accept="image/*" name="dropzone-file" onChange={(e)=>setImage(e.target.files[0])}/>
                        </label>
                        <div class="flex justify-center mt-44">
                            <HtmlTooltip title={
                                <React.Fragment>
                                    <img src={`data:image/png;base64,${immagine}`}/>
                                </React.Fragment>
                            }>
                                <input type="text" className="border-0 !text-violet-400 text-sm text-center" disabled value={(image!="") ? image.name:'Stored Image Preview'}/>
                            </HtmlTooltip>
                        </div>
                    </div>
                </div> 
                    <button type="button" class="bottone" onClick={Edit}>Applica Modifiche</button>
                    <button type="button" class="bottone ml-2" onClick={Remove}>Elimina</button>
                    <button type="button" class="bottone ml-2" onClick={Copy}>Copia Componente</button>
                    <Modal showModal={showModal} onClose={()=> {
                        setShowModal(false);
                        if (!response.includes("Error")){
                            navigate.push('/Search');
                        }
                        }} response={response} />
            </form>
        </motion.div>
    );
}
 
export default DetailsID;